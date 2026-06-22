/* Headless logic simulation for the parts that don't need WebGL.
 * Drives the REAL Game state machine + REAL Items pooling/zone math with
 * mocked render dependencies and an injected mock clock (so the idle timer is
 * deterministic). Catches logic regressions a browser would.
 *
 *   run:  node test/sim.mjs
 */
import { Game } from "../src/game.js";
import { Items } from "../src/items.js";
import { TUNE, POOL } from "../src/config.js";
import * as storage from "../src/storage.js";

let failures = 0;
const ok = (cond, msg) => { if (!cond) { failures++; console.error("  ✗ " + msg); } else console.log("  ✓ " + msg); };

/* ---- Fakes ------------------------------------------------------------- */
function fakeMesh() {
  return {
    visible: false, userData: {},
    position: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } },
    rotation: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } },
    scale: { v: 1, setScalar(s) { this.v = s; } },
  };
}
const fakeAssets = { createCarrot: fakeMesh, createWeed: fakeMesh };
const fakeScene = { camera: {}, baseQuaternion: {}, add() {}, setIntensity() {}, pulseBloom() {}, update() {} };
const fakeWorld = { update() {}, reset() {}, setIntensity() {}, addShake() {}, layoutCab() {} };
const fakeHud = {
  setScore() {}, setCombo() {}, resetCombo() {}, setTimer() {}, flashGood() {}, flashBad() {},
  buttonFeedback() {}, showScreen() {}, showAttractScores() {}, showResults() {},
  refreshResultsBoard() {}, showCountdown() {}, hideCountdown() {},
};
const fakeAudio = { muted: true, unlock() {}, start() {}, harvest() {}, remove() {}, combo() {}, miss() {}, tick() {}, go() {}, results() {}, resume() {}, toggle() { return true; } };
const fakeParticles = { burst() {}, update() {}, reset() {} };
const fakeFloaters = { spawn() {}, reset() {} };

/* ---- Mock clock (advanced by the frame helper) ------------------------- */
let mockTime = 0;
const mockNow = () => mockTime;
const DT = 1 / 60;

function makeGame() {
  const items = new Items(fakeScene, fakeAssets);
  const game = new Game({
    sceneMgr: fakeScene, world: fakeWorld, items, particles: fakeParticles,
    floaters: fakeFloaters, hud: fakeHud, audio: fakeAudio, storage, now: mockNow,
  });
  return { game, items };
}

/** One frame: advance clock, update, optionally act like a present player. */
function frame(game, items, play, prob = 1) {
  mockTime += DT * 1000;
  game.update(DT);
  if (play && items && game.state === "playing") {
    const t = items.frontmostInZone();
    if (t && Math.random() < prob) {
      game.noteInput();
      game.action(t.type === "carrot" ? "harvest" : "remove");
    }
  }
}
const run = (game, items, seconds, play, prob) => {
  const n = Math.round(seconds / DT);
  for (let i = 0; i < n; i++) frame(game, items, play, prob);
};
function reachPlaying(game, items) {
  let g = 0;
  while (game.state !== "playing" && g++ < 1000) frame(game, items, false);
}

/* ---- Tests ------------------------------------------------------------- */
console.log("\n[1] State machine: attract → countdown → playing → results");
{
  const { game, items } = makeGame();
  game.enterAttract();
  ok(game.state === "attract", "starts in attract");
  game.start();
  ok(game.state === "countdown", "start() → countdown");
  reachPlaying(game, items);
  ok(game.state === "playing", "countdown → playing after GO");
  ok(items.active.length > 0, "field prefilled at round start (" + items.active.length + " items)");
  run(game, items, TUNE.round.durationSec + 1, true); // active player
  ok(game.state === "results", "round ends → results");
}

console.log("\n[2] Perfect play increases score, combo and multiplier");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  let maxMult = 1, maxCombo = 0;
  for (let i = 0; i < Math.round(25 / DT); i++) {
    frame(game, items, true);
    maxMult = Math.max(maxMult, game.multiplier);
    maxCombo = Math.max(maxCombo, game.combo);
  }
  ok(game.score > 0, "score grew (" + game.score + ")");
  ok(maxCombo >= 4, "combo climbed (max " + maxCombo + ")");
  ok(maxMult > 1, "multiplier rose above x1 (max x" + maxMult + ")");
  ok(maxMult <= TUNE.scoring.maxMultiplier, "multiplier respects cap");
}

console.log("\n[3] Wrong action breaks the combo");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  let g = 0;
  while (game.combo < 3 && g++ < Math.round(15 / DT)) frame(game, items, true);
  const before = game.combo;
  let did = false; g = 0;
  while (!did && g++ < Math.round(10 / DT)) {
    mockTime += DT * 1000; game.update(DT);
    const t = items.frontmostInZone();
    if (t) { game.noteInput(); game.action(t.type === "carrot" ? "remove" : "harvest"); did = true; }
  }
  ok(before >= 3, "had a combo before (" + before + ")");
  ok(did && game.combo === 0, "wrong action reset combo to 0");
}

console.log("\n[4] Button mashing is safe and can't keep a combo");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  for (let i = 0; i < Math.round(15 / DT); i++) {
    mockTime += DT * 1000; game.update(DT);
    game.noteInput(); game.action("harvest"); game.action("remove");
  }
  ok(game.score >= 0, "score never negative while mashing (" + game.score + ")");
  ok(game.state === "playing", "no crash / state intact while mashing");
  ok(game.combo < 6, "mashing both buttons cannot sustain a big combo (" + game.combo + ")");
}

console.log("\n[5] Item pooling stays bounded (no leak) over many rounds");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  let maxActive = 0;
  for (let r = 0; r < 4; r++) {
    for (let i = 0; i < Math.round(TUNE.round.durationSec / DT); i++) {
      frame(game, items, true, 0.8);
      maxActive = Math.max(maxActive, items.active.length);
    }
    game.start(); reachPlaying(game, items);
  }
  const total = items.active.length + items.freeCarrots.length + items.freeWeeds.length;
  ok(maxActive <= POOL.carrots + POOL.weeds, "active items bounded by pool (" + maxActive + " ≤ " + (POOL.carrots + POOL.weeds) + ")");
  ok(total === POOL.carrots + POOL.weeds, "no meshes lost/leaked across rounds (" + total + ")");
}

console.log("\n[6] Zone hit-testing + single pass-miss reporting");
{
  const { game, items } = makeGame();
  game.state = "playing"; items.reset();
  const rec = items.spawn("carrot", 1, { z: items.zNear - 1, instant: true });
  ok(rec && items.frontmostInZone() === null, "item just before the band is not yet actionable");
  let passes = 0;
  for (let i = 0; i < 400; i++) {
    items.update(DT, 20, () => passes++);
    if (rec.z > items.zFar + 5) break;
  }
  ok(passes === 1, "a passed-through item reports exactly one miss (" + passes + ")");
}

console.log("\n[7] Idle returns to attract; activity prevents it");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  game.noteInput();
  run(game, items, TUNE.round.idleReturnSec + 1, false); // no input
  ok(game.state === "attract", "idle during play returns to attract");

  const g2 = makeGame();
  g2.game.enterAttract(); g2.game.start(); reachPlaying(g2.game, g2.items);
  run(g2.game, g2.items, TUNE.round.idleReturnSec + 5, true); // present player
  ok(g2.game.state === "playing" || g2.game.state === "results", "active player never idle-resets (" + g2.game.state + ")");
}

console.log("\n[8] Difficulty values stay finite & sane");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  let bad = false;
  for (let i = 0; i < Math.round(TUNE.round.durationSec / DT); i++) {
    frame(game, items, true);
    const sp = game._currentSpeed(), gap = game._currentGap();
    if (!isFinite(sp) || !isFinite(gap) || sp <= 0 || gap <= 0) bad = true;
  }
  ok(!bad, "speed & gap remain finite and positive all round");
}

console.log("\n[9] Storage works without a real localStorage (memory fallback)");
{
  const res = storage.addScore(1234, 7, "Ada", "Norwich High");
  ok(res.scores.length >= 1, "addScore returns a board");
  const got = storage.getTopScores().find((s) => s.ts === res.ts);
  ok(got && got.score === 1234, "score is retrievable");
  ok(got && got.name === "Ada" && got.org === "Norwich High", "name + org stored");
  const board = storage.updateScore(res.ts, "Ada L", "Norwich");
  ok(board.find((s) => s.ts === res.ts).name === "Ada L", "updateScore renames live");
  // sanitisation: trims, collapses spaces, length-limits (use a top score so
  // the entry is guaranteed on the board and unambiguous)
  const r2 = storage.addScore(9999999, 1, "   Bobby   Tables   ", "x".repeat(60));
  const e2 = r2.scores.find((s) => s.ts === r2.ts && s.score === 9999999);
  ok(e2 && e2.name === "Bobby Tables" && e2.org.length <= 28, "name/org cleaned & capped");
}

console.log("\n[10] Results name flow via game.updatePending");
{
  const { game, items } = makeGame();
  game.enterAttract(); game.start(); reachPlaying(game, items);
  // score a few points so the run makes the (empty) board
  for (let i = 0; i < Math.round(6 / DT); i++) frame(game, items, true);
  run(game, items, TUNE.round.durationSec + 1, true);
  ok(game.state === "results", "reached results");
  ok(game.pendingTs != null, "pending entry exists for naming");
  game.updatePending("Sam", "STEM Club");
  const mine = storage.getTopScores().find((s) => s.ts === game.pendingTs);
  ok(mine && mine.name === "Sam" && mine.org === "STEM Club", "typed name/org saved to entry");
  // starting again clears the pending entry and doesn't throw (document guarded)
  game.start();
  ok(game.pendingTs === null && game.state === "countdown", "Play Again clears pending & restarts");
}

console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED ✅" : failures + " CHECK(S) FAILED ❌"));
process.exit(failures === 0 ? 0 : 1);
