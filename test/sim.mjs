/* Headless logic simulation (no WebGL). Drives the REAL Game + Items + storage
 * with mocked render deps and an injected mock clock.
 *   run:  node test/sim.mjs
 */
import { Game } from "../src/game.js";
import { Items } from "../src/items.js";
import { TUNE, POOL } from "../src/config.js";
import * as storage from "../src/storage.js";

let failures = 0;
const ok = (c, m) => { if (!c) { failures++; console.error("  ✗ " + m); } else console.log("  ✓ " + m); };

/* ---- Fakes ------------------------------------------------------------- */
function fakeMesh() {
  return {
    visible: false, userData: {}, isMesh: true, castShadow: false,
    layers: { set() {} },
    traverse(cb) { cb(this); },
    position: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } },
    rotation: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } },
    scale: { v: 1, setScalar(s) { this.v = s; } },
  };
}
const fakeAssets = { createCarrot: fakeMesh, createWeed: fakeMesh };
const fakeScene = {
  camera: {}, camera2: null, baseQuaternion: {},
  ensureCamera2() { this.camera2 = this.camera2 || {}; return this.camera2; },
  setMode() {}, setIntensity() {}, pulseBloom() {}, update() {}, add() {},
};
const fakeWorld = { setRigs() {}, layoutRigs() {}, update() {}, reset() {}, setIntensity() {}, addShake() {} };
const hudLog = { toasts: 0, battle: null };
const fakeHud = {
  setMode() {}, setScore() {}, setStreak() {}, resetStreak() {},
  streakToast() { hudLog.toasts++; }, setTimer() {}, flashGood() {}, flashBad() {},
  buttonFeedback() {}, showScreen() {}, showAttractScores() {}, showResults() {},
  refreshResultsBoard() {}, showBattleResults(x) { hudLog.battle = x; },
  showCountdown() {}, hideCountdown() {},
};
const fakeAudio = {
  muted: true, unlock() {}, start() {}, harvest() {}, remove() {}, combo() {}, streakBonus() {},
  miss() {}, tick() {}, go() {}, results() {}, resume() {}, toggle() { return true; },
};
const mkMockPlayer = (index, layer) => ({
  index,
  items: new Items(fakeScene, fakeAssets, layer),
  particles: { burst() {}, update() {}, reset() {} },
  floaters: { spawn() {}, reset() {} },
  score: 0, streak: 0, bestStreak: 0,
});

let mockTime = 0;
const mockNow = () => mockTime;
const DT = 1 / 60;

function makeGame() {
  const players = [mkMockPlayer(0, 1), mkMockPlayer(1, 2)];
  const game = new Game({
    sceneMgr: fakeScene, world: fakeWorld, hud: fakeHud, audio: fakeAudio,
    storage, input: { setMode() {} }, players, now: mockNow,
  });
  return { game, players };
}

function frame(game, play, prob = 1) {
  mockTime += DT * 1000;
  game.update(DT);
  if (play && game.state === "playing") {
    for (const p of game.players) {
      const t = p.items.frontmostInZone();
      if (t && Math.random() < prob) {
        game.noteInput();
        game.action(p.index, t.type === "carrot" ? "harvest" : "remove");
      }
    }
  }
}
const run = (game, secs, play, prob) => { const n = Math.round(secs / DT); for (let i = 0; i < n; i++) frame(game, play, prob); };
function startGame(game, mode) {
  game.enterAttract();
  game.selectMode(mode);
  let g = 0;
  while (game.state !== "playing" && g++ < 1000) frame(game, false);
}

/* ---- Tests ------------------------------------------------------------- */
console.log("\n[1] Solo flow: attract → menu → countdown → playing → results");
{
  const { game } = makeGame();
  game.enterAttract();
  ok(game.state === "attract", "starts in attract (welcome)");
  game.advance();
  ok(game.state === "menu", "advance() → mode select");
  game.selectMode("solo");
  ok(game.state === "countdown", "selectMode(solo) → countdown");
  let g = 0; while (game.state !== "playing" && g++ < 1000) frame(game, false);
  ok(game.state === "playing", "countdown → playing");
  ok(game.players.length === 1, "solo has 1 active player");
  run(game, TUNE.round.durationSec + 1, true);
  ok(game.state === "results", "round ends → solo results");
}

console.log("\n[2] Streak-only scoring: score grows, streak climbs, bonuses fire");
{
  hudLog.toasts = 0;
  const { game, players } = makeGame();
  startGame(game, "solo");
  let maxStreak = 0;
  for (let i = 0; i < Math.round(25 / DT); i++) { frame(game, true); maxStreak = Math.max(maxStreak, players[0].streak); }
  ok(players[0].score > 0, "score grew (" + players[0].score + ")");
  ok(maxStreak >= TUNE.scoring.streakBonusEvery, "streak climbed past a milestone (" + maxStreak + ")");
  ok(hudLog.toasts >= 1, "at least one streak-bonus toast fired (" + hudLog.toasts + ")");
  ok(typeof game.multiplier === "undefined", "no multiplier concept remains");
}

console.log("\n[3] A miss resets the streak");
{
  const { game, players } = makeGame();
  startGame(game, "solo");
  let g = 0; while (players[0].streak < 3 && g++ < Math.round(15 / DT)) frame(game, true);
  const before = players[0].streak;
  let did = false; g = 0;
  while (!did && g++ < Math.round(10 / DT)) {
    mockTime += DT * 1000; game.update(DT);
    const t = players[0].items.frontmostInZone();
    if (t) { game.noteInput(); game.action(0, t.type === "carrot" ? "remove" : "harvest"); did = true; }
  }
  ok(before >= 3, "had a streak (" + before + ")");
  ok(did && players[0].streak === 0, "wrong action reset streak to 0");
}

console.log("\n[4] Mashing is safe and can't keep a streak");
{
  const { game, players } = makeGame();
  startGame(game, "solo");
  for (let i = 0; i < Math.round(15 / DT); i++) {
    mockTime += DT * 1000; game.update(DT);
    game.noteInput(); game.action(0, "harvest"); game.action(0, "remove");
  }
  ok(players[0].score >= 0, "score never negative (" + players[0].score + ")");
  ok(game.state === "playing", "no crash while mashing");
  ok(players[0].streak < 6, "mashing both can't sustain a streak (" + players[0].streak + ")");
}

console.log("\n[5] Pooling stays bounded across solo rounds");
{
  const { game, players } = makeGame();
  startGame(game, "solo");
  let maxActive = 0;
  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < Math.round(TUNE.round.durationSec / DT); i++) { frame(game, true, 0.8); maxActive = Math.max(maxActive, players[0].items.active.length); }
    game.advance(); let g = 0; while (game.state !== "playing" && g++ < 1000) frame(game, false);
  }
  const it = players[0].items;
  const total = it.active.length + it.freeCarrots.length + it.freeWeeds.length;
  ok(maxActive <= POOL.carrots + POOL.weeds, "active bounded by pool (" + maxActive + ")");
  ok(total === POOL.carrots + POOL.weeds, "no meshes leaked (" + total + ")");
}

console.log("\n[6] Zone hit-testing + single pass-miss");
{
  const it = new Items(fakeScene, fakeAssets, 1);
  const rec = it.spawn("carrot", 1, { z: it.zNear - 1, instant: true });
  ok(rec && it.frontmostInZone() === null, "item just before band not yet actionable");
  let passes = 0;
  for (let i = 0; i < 400; i++) { it.update(DT, 20, () => passes++); if (rec.z > it.zFar + 5) break; }
  ok(passes === 1, "passed item reports exactly one miss");
}

console.log("\n[7] Idle returns to attract; Esc quits to welcome");
{
  const { game } = makeGame();
  startGame(game, "solo");
  game.noteInput();
  run(game, TUNE.round.idleReturnSec + 1, false);
  ok(game.state === "attract", "idle returns to attract");

  const g2 = makeGame();
  startGame(g2.game, "solo");
  g2.game.goHome(); // simulates Esc
  ok(g2.game.state === "attract", "Esc during play quits to welcome");
}

console.log("\n[8] Difficulty stays finite & sane");
{
  const { game } = makeGame();
  startGame(game, "solo");
  let bad = false;
  for (let i = 0; i < Math.round(TUNE.round.durationSec / DT); i++) {
    frame(game, true);
    const sp = game._speed(), gap = game._gap();
    if (!isFinite(sp) || !isFinite(gap) || sp <= 0 || gap <= 0) bad = true;
  }
  ok(!bad, "speed & gap finite and positive all round");
}

console.log("\n[9] Storage: names, update, sanitisation");
{
  const res = storage.addScore(1234, 7, "Ada", "Norwich High");
  ok(storage.getTopScores().some((s) => s.ts === res.ts && s.name === "Ada"), "name + org stored");
  const board = storage.updateScore(res.ts, "Ada L", "Norwich");
  ok(board.find((s) => s.ts === res.ts).name === "Ada L", "updateScore renames live");
  const r2 = storage.addScore(9999999, 1, "   Bobby   Tables   ", "x".repeat(60));
  const e2 = r2.scores.find((s) => s.ts === r2.ts && s.score === 9999999);
  ok(e2 && e2.name === "Bobby Tables" && e2.org.length <= 28, "name/org cleaned & capped");
}

console.log("\n[10] Solo results name flow");
{
  const { game } = makeGame();
  startGame(game, "solo");
  for (let i = 0; i < Math.round(6 / DT); i++) frame(game, true);
  run(game, TUNE.round.durationSec + 1, true);
  ok(game.state === "results" && game.pendingTs != null, "results with a pending entry");
  game.updatePending("Sam", "STEM Club");
  const mine = storage.getTopScores().find((s) => s.ts === game.pendingTs);
  ok(mine && mine.name === "Sam" && mine.org === "STEM Club", "typed name/org saved");
}

console.log("\n[11] Crop Battle: 2 players, identical spawns, independent winner");
{
  const { game, players } = makeGame();
  startGame(game, "battle");
  ok(game.state === "playing" && game.players.length === 2, "battle has 2 active players");

  // Identical spawns: let both fields run untouched, compare item streams.
  run(game, 4, false);
  const sig = (it) => it.active.map((r) => r.type + r.lane + Math.round(r.z)).join("|");
  ok(players[0].items.active.length > 0 && sig(players[0].items) === sig(players[1].items),
     "both players have identical carrot/weed spawns");

  // P1 plays well, P2 does nothing → P1 should win.
  for (let i = 0; i < Math.round((TUNE.round.durationSec) / DT); i++) {
    mockTime += DT * 1000; game.update(DT);
    if (game.state === "playing") {
      const t = players[0].items.frontmostInZone();
      if (t) { game.noteInput(); game.action(0, t.type === "carrot" ? "harvest" : "remove"); }
    }
  }
  ok(game.state === "battleResults", "battle ends → battle results");
  ok(players[0].score > players[1].score, "active player outscored idle player");
  ok(hudLog.battle && hudLog.battle.winner === 0, "winner reported as Player 1");
}

console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED ✅" : failures + " CHECK(S) FAILED ❌"));
process.exit(failures === 0 ? 0 : 1);
