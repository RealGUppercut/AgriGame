/* ============================================================================
 * Game — the state machine and round logic that ties everything together.
 *   States: attract → countdown → playing → results → (back to attract)
 *   Handles scoring, the combo multiplier, the difficulty ramp, all juicy
 *   feedback, kiosk idle-reset and clean round restarts.
 * ========================================================================== */

import { TUNE } from "./config.js";
import { clamp, lerp, now } from "./utils.js";

export class Game {
  constructor(deps) {
    this.scene = deps.sceneMgr;
    this.world = deps.world;
    this.items = deps.items;
    this.particles = deps.particles;
    this.floaters = deps.floaters;
    this.hud = deps.hud;
    this.audio = deps.audio;
    this.storage = deps.storage;
    this._now = deps.now || now; // injectable clock (real wall-clock by default)

    this.state = "attract";
    this.score = 0;
    this.combo = 0;
    this.bestCombo = 0;
    this.multiplier = 1;
    this.roundTime = 0;
    this.spawnTimer = 0;
    this.demoTimer = 0;
    this.countdownT = 0;
    this._goShown = false;
    this.pendingTs = null; // results-screen entry being named
    this.lastInput = this._now();
  }

  noteInput() { this.lastInput = this._now(); }

  /* ---- Screen entry points ----------------------------------------------- */

  enterAttract() {
    this.state = "attract";
    this._clearField();
    this.world.reset();
    this.hud.resetCombo();
    this.hud.hideCountdown();
    this.hud.showAttractScores(this.storage.getTopScores());
    this.hud.showScreen("attract");
    this.demoTimer = 0.6;
    this.noteInput();
  }

  start() {
    if (this.state !== "attract" && this.state !== "results") return;
    // drop focus from any name field so gameplay keys aren't typed into it
    if (typeof document !== "undefined" &&
        document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
    this.pendingTs = null;
    this.audio.unlock();
    this.audio.start();
    this._clearField();
    this.world.reset();
    this.score = 0;
    this.combo = 0;
    this.bestCombo = 0;
    this.multiplier = 1;
    this.roundTime = 0;
    this.spawnTimer = 0;
    this.world.setIntensity(0);
    this.scene.setIntensity(0);
    this.hud.setScore(0);
    this.hud.resetCombo();
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
    this.state = "results";
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    this.world.setIntensity(0);
    this.scene.setIntensity(0);

    const res = this.storage.addScore(this.score, this.bestCombo, "", "");
    this.pendingTs = res.rank > 0 ? res.ts : null;
    this.hud.showResults({
      score: this.score,
      bestCombo: this.bestCombo,
      isBest: res.isBest,
      scores: res.scores,
      highlightTs: res.ts,
      madeBoard: res.rank > 0,
      rank: res.rank,
    });
    this.hud.showScreen("results");
    this.audio.results();
    this.items.reset();
    this.noteInput();
  }

  /** Live-save the player's name/org as they type on the results screen. */
  updatePending(name, org) {
    if (!this.pendingTs) return;
    const scores = this.storage.updateScore(this.pendingTs, name, org);
    this.hud.refreshResultsBoard(scores, this.pendingTs);
  }

  _clearField() {
    this.items.reset();
    this.particles.reset();
    this.floaters.reset();
  }

  /* ---- Difficulty -------------------------------------------------------- */

  _ramp() {
    const p = clamp(this.roundTime / TUNE.round.durationSec, 0, 1);
    return Math.pow(p, 1 + TUNE.difficulty.rampCurve); // ease-in: slow then fast
  }

  _baseSpeed() {
    return lerp(TUNE.difficulty.speedStart, TUNE.difficulty.speedEnd, this._ramp());
  }

  _comboSpeedMul() {
    return clamp(1 + this.combo * TUNE.combo.speedPerCombo, 1, TUNE.combo.speedMaxMul);
  }

  _currentSpeed() {
    return this._baseSpeed() * this._comboSpeedMul();
  }

  _currentGap() {
    return lerp(TUNE.difficulty.gapStart, TUNE.difficulty.gapEnd, this._ramp());
  }

  _spawnOne(z, instant) {
    const isWeed = Math.random() < TUNE.spawn.weedChance;
    const lane = (Math.random() * TUNE.spawn.lanesX.length) | 0;
    return this.items.spawn(isWeed ? "weed" : "carrot", lane, { z, instant });
  }

  /** Pre-fill the row so the field is alive and the first item arrives soon. */
  _prefill() {
    const speed = this._currentSpeed();
    const gap = this._currentGap();
    let z = this.items.zNear - speed * 1.3; // nearest ~1.3s from the zone
    while (z > TUNE.spawn.startZ) {
      this._spawnOne(z, true);
      z -= gap;
    }
    this.spawnTimer = gap / speed; // resume normal cadence
  }

  /* ---- Player actions ---------------------------------------------------- */

  action(kind) { // kind: 'harvest' | 'remove'
    if (this.state === "attract" || this.state === "results") { this.start(); return; }
    if (this.state !== "playing") return;

    this.hud.buttonFeedback(kind);
    const target = this.items.frontmostInZone();
    if (!target) return; // whiff — forgiving, no penalty (and foils button-mashing)

    const correct =
      (kind === "harvest" && target.type === "carrot") ||
      (kind === "remove" && target.type === "weed");

    if (correct) this._success(target, kind);
    else this._wrong(target, kind);
  }

  _success(target, kind) {
    this.combo += 1;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    const prevMult = this.multiplier;
    this.multiplier = clamp(
      1 + Math.floor(this.combo / TUNE.scoring.comboPerMult),
      1, TUNE.scoring.maxMultiplier
    );
    const points = Math.round(TUNE.scoring.basePoints * this.multiplier);
    this.score += points;

    this.items.popSuccess(target);
    const intensity = clamp(this.combo / TUNE.combo.intensityFull, 0, 1);
    this.particles.burst(target.x, 0.4, target.z, target.type, 1 + intensity * 0.5);
    this.floaters.spawn({ x: target.x, y: 1.3, z: target.z }, "+" + points);

    this.hud.setScore(this.score);
    this.hud.setCombo(this.combo, this.multiplier);
    this.hud.flashGood();

    if (kind === "harvest") this.audio.harvest(); else this.audio.remove();

    this.world.setIntensity(intensity);
    this.scene.setIntensity(intensity);
    this.scene.pulseBloom(0.18 + intensity * 0.3);

    if (this.multiplier > prevMult) {
      this.audio.combo(this.combo);
      this.world.addShake(0.4);
      this.scene.pulseBloom(0.5);
    } else if (intensity > 0.4) {
      this.world.addShake(0.12 * intensity);
    }
  }

  _wrong(target, kind) {
    this.items.popFail(target);
    this._breakCombo();
    if (TUNE.scoring.missPenalty > 0) {
      this.score = Math.max(0, this.score - TUNE.scoring.missPenalty);
      this.hud.setScore(this.score);
    }
    this.floaters.spawn({ x: target.x, y: 1.3, z: target.z }, "Miss", true);
    this.hud.flashBad();
    this.audio.miss();
  }

  _onPass(rec) { // an item left the action band unhandled
    this._breakCombo();
    this.hud.flashBad();
    this.audio.miss();
  }

  _breakCombo() {
    this.combo = 0;
    this.multiplier = 1;
    this.hud.resetCombo();
    this.world.setIntensity(0);
    this.scene.setIntensity(0);
  }

  /* ---- Per-frame update -------------------------------------------------- */

  update(dt) {
    // Kiosk idle reset (never on the attract screen — it's already "home")
    if (this.state !== "attract") {
      if ((this._now() - this.lastInput) / 1000 > TUNE.round.idleReturnSec) {
        this.enterAttract();
        return;
      }
    }

    switch (this.state) {
      case "attract":   this._updateAttract(dt); break;
      case "countdown": this._updateCountdown(dt); break;
      case "playing":   this._updatePlaying(dt); break;
      case "results":   this._updateResults(dt); break;
    }
    this.particles.update(dt);
  }

  _updateAttract(dt) {
    const speed = TUNE.difficulty.speedStart * 0.55;
    this.world.update(dt, speed);

    this.demoTimer -= dt;
    if (this.demoTimer <= 0) {
      this._spawnOne(TUNE.spawn.startZ, false);
      this.demoTimer = 1.1 + Math.random() * 1.0;
    }
    this.items.update(dt, speed, null);

    // Auto-harvest demo items as they reach the band, so it looks alive
    const t = this.items.frontmostInZone();
    if (t && t.z >= this.items.zoneCenter) {
      this.items.popSuccess(t);
      this.particles.burst(t.x, 0.4, t.z, t.type, 1);
    }
  }

  _updateCountdown(dt) {
    this.world.update(dt, TUNE.difficulty.speedStart * 0.4);
    this.countdownT -= dt;
    if (this.countdownT > 0) {
      const n = Math.ceil(this.countdownT);
      if (n !== this._lastCount) {
        this._lastCount = n;
        this.hud.showCountdown(String(n));
        this.audio.tick();
      }
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
    const speed = this._currentSpeed();
    const gap = this._currentGap();

    // distance-based spawn pacing keeps items ~gap apart at any speed
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this._spawnOne(TUNE.spawn.startZ, false);
      this.spawnTimer += gap / speed;
      if (this.spawnTimer < 0) this.spawnTimer = gap / speed;
    }

    this.items.update(dt, speed, (rec) => this._onPass(rec));
    this.world.update(dt, speed);

    const remain = clamp(1 - this.roundTime / TUNE.round.durationSec, 0, 1);
    this.hud.setTimer(remain);

    if (this.roundTime >= TUNE.round.durationSec) this.endRound();
  }

  _updateResults(dt) {
    this.world.update(dt, TUNE.difficulty.speedStart * 0.4);
    this.items.update(dt, TUNE.difficulty.speedStart * 0.4, null);
  }
}
