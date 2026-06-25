/* ============================================================================
 * Game — state machine + round logic for Solo and Crop Battle.
 *
 *   States: attract (welcome) → menu (mode select) → countdown → playing →
 *           results (solo) / battleResults  →  back to attract.
 *
 *   Scoring is STREAK-ONLY: every correct action = flat basePoints; every Nth
 *   correct-in-a-row awards a small, capped milestone bonus (sound + toast +
 *   pun). A miss resets the streak. No runaway multiplier, so leads stay
 *   catchable unless accuracy is very high.
 *
 *   Crop Battle: identical spawns for both players (decided once, spawned into
 *   each), shared world speed (so the rows stay mirrored), independent scoring,
 *   and each cab bobs differently. Esc quits to the welcome screen.
 * ========================================================================== */

import { TUNE, STREAK_PUNS } from "./config.js";
import { clamp, lerp, now } from "./utils.js";

export class Game {
  constructor(deps) {
    this.scene = deps.sceneMgr;
    this.world = deps.world;
    this.hud = deps.hud;
    this.audio = deps.audio;
    this.storage = deps.storage;
    this.input = deps.input;          // { setMode }
    this.allPlayers = deps.players;   // [p0, p1] bundles {index, items, particles, floaters}
    this._now = deps.now || now;

    this.mode = "solo";
    this.players = [this.allPlayers[0]];
    this.state = "attract";
    this.roundTime = 0;
    this.spawnTimer = 0;
    this.demoTimer = 0;
    this.countdownT = 0;
    this._goShown = false;
    this.pendingTs = null;
    this.lastInput = this._now();
  }

  noteInput() { this.lastInput = this._now(); }

  /* ---- Mode configuration ------------------------------------------------ */

  _cameras(mode) {
    return mode === "battle"
      ? [this.scene.camera, this.scene.ensureCamera2()]
      : [this.scene.camera];
  }

  _configureMode(mode) {
    this.mode = mode;
    const cams = this._cameras(mode);
    this.scene.setMode(mode);
    this.world.setRigs(cams);
    this.input.setMode(mode);
    this.hud.setMode(mode);
    this.players = mode === "battle"
      ? [this.allPlayers[0], this.allPlayers[1]]
      : [this.allPlayers[0]];
    // Shadows leak across split viewports (shared shadow map) → off in battle.
    this.allPlayers[0].items.setShadow(mode !== "battle");
    if (this.allPlayers[1]) this.allPlayers[1].items.setShadow(false);
    this._clearField();
    this.world.reset();
  }

  _clearField() {
    for (const p of this.allPlayers) {
      p.items.reset();
      p.particles.reset();
      p.floaters.reset();
      p.score = 0; p.streak = 0; p.bestStreak = 0;
    }
  }

  /* ---- Screen entry points ----------------------------------------------- */

  enterAttract() {
    this._configureMode("solo");
    this.state = "attract";
    this.hud.showAttractScores(this.storage.getTopScores());
    this.hud.showScreen("attract");
    this.hud.hideCountdown();
    this.demoTimer = 0.6;
    this.noteInput();
  }

  enterMenu() {
    this.state = "menu";
    this.hud.showScreen("mode");
    this.noteInput();
  }

  /** Generic "advance / confirm" press (any key / tap). */
  advance() {
    if (this.state === "attract") this.enterMenu();
    // results / battleResults: a generic key/tap does NOT advance — the player
    // must press the explicit SUBMIT / CONTINUE button (which calls goHome()).
    // menu: ignore — the player must pick Solo or Crop Battle explicitly.
  }

  selectMode(mode) {
    if (this.state === "menu" || this.state === "attract") this.startRound(mode);
  }

  goHome() { this.enterAttract(); }

  startRound(mode) {
    if (typeof document !== "undefined" && document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
    this.pendingTs = null;
    this._configureMode(mode);
    this.audio.unlock();
    this.audio.start();

    for (const p of this.players) {
      this.hud.setScore(p.index, 0);
      this.hud.resetStreak(p.index);
    }
    this.hud.setTimer(1);
    this.hud.showScreen("hud");

    this.state = "countdown";
    this.countdownT = TUNE.round.countdownSec;
    this._goShown = false;
    this._lastCount = null;
    this.noteInput();
  }

  _beginPlaying() {
    this.state = "playing";
    this.roundTime = 0;
    this.spawnTimer = 0;
    this._prefill();
  }

  endRound() {
    if (this.mode === "battle") return this._endBattle();
    this._endSolo();
  }

  _endSolo() {
    this.state = "results";
    const p = this.players[0];
    p.bestStreak = Math.max(p.bestStreak, p.streak);
    this.world.setIntensity(0, 0);
    this.scene.setIntensity(0);

    const res = this.storage.addScore(p.score, p.bestStreak, "", "");
    this.pendingTs = res.rank > 0 ? res.ts : null;
    this.hud.showResults({
      score: p.score, bestStreak: p.bestStreak, isBest: res.isBest,
      scores: res.scores, highlightTs: res.ts, madeBoard: res.rank > 0,
    });
    this.hud.showScreen("results");
    this.audio.results();
    p.items.reset();
    this.noteInput();
  }

  _endBattle() {
    this.state = "battleResults";
    const [a, b] = this.players;
    a.bestStreak = Math.max(a.bestStreak, a.streak);
    b.bestStreak = Math.max(b.bestStreak, b.streak);
    const winner = a.score === b.score ? -1 : (a.score > b.score ? 0 : 1);
    this.hud.showBattleResults({
      p1: { score: a.score, bestStreak: a.bestStreak },
      p2: { score: b.score, bestStreak: b.bestStreak },
      winner,
    });
    this.hud.showScreen("battleResults");
    this.audio.results();
    a.items.reset(); b.items.reset();
    this.noteInput();
  }

  /** Live-save the solo player's name/org as they type on the results screen. */
  updatePending(name, org) {
    if (!this.pendingTs) return;
    const scores = this.storage.updateScore(this.pendingTs, name, org);
    this.hud.refreshResultsBoard(scores, this.pendingTs);
  }

  /* ---- Difficulty (shared, so battle stays mirrored) --------------------- */

  _ramp() {
    const t = clamp(this.roundTime / TUNE.round.durationSec, 0, 1);
    return Math.pow(t, 1 + TUNE.difficulty.rampCurve);
  }
  _speed() { return lerp(TUNE.difficulty.speedStart, TUNE.difficulty.speedEnd, this._ramp()); }
  _gap() { return lerp(TUNE.difficulty.gapStart, TUNE.difficulty.gapEnd, this._ramp()); }

  _decideSpawn() {
    return {
      type: Math.random() < TUNE.spawn.weedChance ? "weed" : "carrot",
      lane: (Math.random() * TUNE.spawn.lanesX.length) | 0,
    };
  }

  _spawnAll(type, lane, z, instant) {
    for (const p of this.players) p.items.spawn(type, lane, { z, instant });
  }

  _prefill() {
    const speed = this._speed(), gap = this._gap();
    const zNear = this.players[0].items.zNear;
    let z = zNear - speed * 1.3;
    while (z > TUNE.spawn.startZ) {
      const s = this._decideSpawn();
      this._spawnAll(s.type, s.lane, z, true);
      z -= gap;
    }
    this.spawnTimer = gap / speed;
  }

  /* ---- Player actions ---------------------------------------------------- */

  action(playerIndex, kind) {
    if (this.state !== "playing") { this.advance(); return; }
    const p = this.players[playerIndex];
    if (!p) return; // e.g. P2 key pressed in solo
    this.hud.buttonFeedback(p.index, kind);
    const target = p.items.frontmostInZone();
    if (!target) return; // whiff — forgiving, and foils button-mashing
    const correct =
      (kind === "harvest" && target.type === "carrot") ||
      (kind === "remove" && target.type === "weed");
    if (correct) this._success(p, target, kind);
    else this._wrong(p, target, kind);
  }

  /** Precision tier (PERFECT / Great / Good) for an item at row-depth z. */
  _precisionFor(z) {
    const d = Math.abs(z - TUNE.zone.centerZ) / TUNE.zone.halfDepth;
    const tiers = TUNE.scoring.precision;
    for (const t of tiers) if (d <= t.maxD) return t;
    return tiers[tiers.length - 1];
  }

  _success(p, target, kind) {
    p.streak += 1;
    p.bestStreak = Math.max(p.bestStreak, p.streak);

    // Timing precision → variable per-hit points (this is the score spread).
    const tier = this._precisionFor(target.z);
    const hitPoints = Math.round(TUNE.scoring.basePoints * tier.mult);
    let points = hitPoints;

    let bonus = 0;
    if (p.streak % TUNE.scoring.streakBonusEvery === 0) {
      const m = p.streak / TUNE.scoring.streakBonusEvery;
      bonus = Math.min(TUNE.scoring.streakBonusMax, TUNE.scoring.streakBonusStep * m);
      points += bonus;
      const pun = STREAK_PUNS[(m - 1) % STREAK_PUNS.length];
      // Encouraging message floats up FROM the crop (centred on it), not a corner.
      p.floaters.spawn({ x: target.x, y: 2.2, z: target.z }, pun + "  +" + bonus, "bonus");
      this.audio.streakBonus(m);
      this.world.addShake(p.index, 0.35);
      this.scene.pulseBloom(0.4);
    }
    p.score += points;

    p.items.popSuccess(target);
    const intensity = clamp(p.streak / TUNE.streak.intensityFull, 0, 1);
    p.particles.burst(target.x, 0.4, target.z, target.type, 1 + intensity * 0.5);
    // "+points" floats off the crop; PERFECT hits get extra sparkle (tier.cls).
    p.floaters.spawn({ x: target.x, y: 1.2, z: target.z }, "+" + hitPoints, tier.cls);

    this.hud.setScore(p.index, p.score);
    this.hud.setStreak(p.index, p.streak);
    this.hud.flashGood(p.index);
    if (kind === "harvest") this.audio.harvest(); else this.audio.remove();
    if (tier.cls === "perfect") this.audio.perfect();

    this.world.setIntensity(p.index, intensity);
    if (p.index === 0) this.scene.setIntensity(intensity);
    this.scene.pulseBloom(0.18 + intensity * 0.3 + (tier.cls === "perfect" ? 0.3 : 0));
    if (bonus === 0 && intensity > 0.4) this.world.addShake(p.index, 0.1 * intensity);
  }

  _wrong(p, target, kind) {
    p.items.popFail(target);
    this._breakStreak(p);
    if (TUNE.scoring.missPenalty > 0) {
      p.score = Math.max(0, p.score - TUNE.scoring.missPenalty);
      this.hud.setScore(p.index, p.score);
    }
    p.floaters.spawn({ x: target.x, y: 1.3, z: target.z }, "oops!", "bad");
    this.hud.flashBad(p.index);
    this.audio.miss();
  }

  _onPass(p, rec) {
    this._breakStreak(p);
    if (rec) p.floaters.spawn({ x: rec.x, y: 1.3, z: rec.z }, "oops!", "bad");
    this.hud.flashBad(p.index);
    this.audio.miss();
  }

  _breakStreak(p) {
    p.streak = 0;
    this.hud.resetStreak(p.index);
    this.world.setIntensity(p.index, 0);
    if (p.index === 0) this.scene.setIntensity(0);
  }

  /* ---- Per-frame update -------------------------------------------------- */

  update(dt) {
    if (this.state !== "attract") {
      if ((this._now() - this.lastInput) / 1000 > TUNE.round.idleReturnSec) {
        this.enterAttract();
        return;
      }
    }
    switch (this.state) {
      case "attract":
      case "menu": this._updateIdle(dt); break;
      case "countdown": this._updateCountdown(dt); break;
      case "playing": this._updatePlaying(dt); break;
      case "results":
      case "battleResults": this._updateResults(dt); break;
    }
  }

  _updateIdle(dt) {
    const p = this.allPlayers[0];
    const speed = TUNE.difficulty.speedStart * 0.55;
    this.world.update(dt, speed);
    this.demoTimer -= dt;
    if (this.demoTimer <= 0) {
      const s = this._decideSpawn();
      p.items.spawn(s.type, s.lane, { z: TUNE.spawn.startZ });
      this.demoTimer = 1.1 + Math.random() * 1.0;
    }
    p.items.update(dt, speed, null);
    p.particles.update(dt);
    const t = p.items.frontmostInZone();
    if (t && t.z >= p.items.zoneCenter) {
      p.items.popSuccess(t);
      p.particles.burst(t.x, 0.4, t.z, t.type, 1);
    }
  }

  _updateCountdown(dt) {
    this.world.update(dt, TUNE.difficulty.speedStart * 0.4);
    for (const p of this.players) p.particles.update(dt);
    this.countdownT -= dt;
    if (this.countdownT > 0) {
      const n = Math.ceil(this.countdownT);
      if (n !== this._lastCount) { this._lastCount = n; this.hud.showCountdown(String(n)); this.audio.tick(); }
    } else if (!this._goShown) {
      this._goShown = true;
      this.hud.showCountdown("GO!");
      this.audio.go();
      this._beginPlaying();
      clearTimeout(this._goTimer);
      this._goTimer = setTimeout(() => this.hud.hideCountdown(), 600);
    }
  }

  _updatePlaying(dt) {
    this.roundTime += dt;
    const speed = this._speed(), gap = this._gap();

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      const s = this._decideSpawn();
      this._spawnAll(s.type, s.lane, TUNE.spawn.startZ, false);
      this.spawnTimer += gap / speed;
      if (this.spawnTimer < 0) this.spawnTimer = gap / speed;
    }

    for (const p of this.players) {
      p.items.update(dt, speed, (rec) => this._onPass(p, rec));
      p.particles.update(dt);
    }
    this.world.update(dt, speed);

    this.hud.setTimer(clamp(1 - this.roundTime / TUNE.round.durationSec, 0, 1));
    if (this.roundTime >= TUNE.round.durationSec) this.endRound();
  }

  _updateResults(dt) {
    const speed = TUNE.difficulty.speedStart * 0.4;
    this.world.update(dt, speed);
    for (const p of this.players) p.particles.update(dt);
  }
}
