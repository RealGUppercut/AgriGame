/* ============================================================================
 * HUD — the 2D overlay, screen transitions and per-player feedback.
 * Supports Solo (one player) and Crop Battle (two players, split screen).
 * ========================================================================== */

import { RATINGS, FACTS } from "./config.js";
import { fmt } from "./utils.js";

const $ = (id) => document.getElementById(id);
function restart(el) { if (!el) return; el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; }

export class HUD {
  constructor() {
    this.screens = {
      loading: $("loading-screen"),
      attract: $("attract-screen"),
      mode: $("mode-screen"),
      hud: $("hud"),
      results: $("results-screen"),
      battleResults: $("battle-results"),
      error: $("error-screen"),
    };

    // Per-player elements (index 0 = P1, 1 = P2)
    this.score = [$("p1-score"), $("p2-score")];
    this.streakBox = [$("p1-streak"), $("p2-streak")];
    this.streakVal = [$("p1-streak-val"), $("p2-streak-val")];
    this.toast = [$("p1-toast"), $("p2-toast")];
    this.flash = [$("p1-flash"), $("p2-flash")];
    this.btnHarvest = [$("p1-harvest"), $("p2-harvest")];
    this.btnRemove = [$("p1-remove"), $("p2-remove")];
    this._lastStreak = [0, 0];

    this.timerFill = $("timer-fill");
    this.soundLabel = $("sound-label");
    this.soundToggle = $("sound-toggle");
    this.nameEntry = $("name-entry");
    this.nameInput = $("name-input");
    this.orgInput = $("org-input");

    document.body.classList.add("show-sound");

    this.countdownEl = document.createElement("div");
    this.countdownEl.id = "countdown";
    this.countdownEl.className = "hidden";
    $("ui-root").appendChild(this.countdownEl);
  }

  /* ---- Screens ---- */
  showScreen(name) {
    for (const key in this.screens) {
      const el = this.screens[key];
      if (el) el.classList.toggle("hidden", key !== name);
    }
  }

  showCountdown(text) { this.countdownEl.textContent = text; this.countdownEl.classList.remove("hidden"); restart(this.countdownEl); }
  hideCountdown() { this.countdownEl.classList.add("hidden"); }

  /* ---- Mode (solo / battle) ---- */
  setMode(mode) {
    document.body.classList.toggle("mode-battle", mode === "battle");
    document.body.classList.toggle("mode-solo", mode !== "battle");
    const keys = (b, k) => { const s = b && b.querySelector(".btn-key"); if (s) s.innerHTML = k; };
    if (mode === "battle") {
      keys(this.btnHarvest[0], "A"); keys(this.btnRemove[0], "D");
      keys(this.btnHarvest[1], "&#9664;"); keys(this.btnRemove[1], "&#9654;");
    } else {
      keys(this.btnHarvest[0], "&#9664; / A"); keys(this.btnRemove[0], "&#9654; / L");
    }
    for (let i = 0; i < 2; i++) { this.setScore(i, 0); this.resetStreak(i); }
  }

  /* ---- In-game ---- */
  setScore(i, v) {
    const el = this.score[i];
    if (!el) return;
    el.textContent = fmt(v);
    el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
  }

  setStreak(i, streak) {
    const box = this.streakBox[i];
    if (!box) return;
    const show = streak >= 2;
    box.classList.toggle("hidden", !show);
    if (show) {
      this.streakVal[i].textContent = streak;
      if (streak > this._lastStreak[i]) { box.classList.remove("pop"); void box.offsetWidth; box.classList.add("pop"); }
    }
    this._lastStreak[i] = streak;
  }

  resetStreak(i) {
    if (this.streakBox[i]) this.streakBox[i].classList.add("hidden");
    this._lastStreak[i] = 0;
  }

  streakToast(i, pun, bonus) {
    const el = this.toast[i];
    if (!el) return;
    el.innerHTML = `<span class="st-pts">+${bonus}</span> ${pun}`;
    el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
  }

  setTimer(frac) {
    frac = Math.max(0, Math.min(1, frac));
    this.timerFill.style.transform = `scaleX(${frac})`;
    this.timerFill.classList.toggle("low", frac < 0.25);
  }

  flashGood(i) { const el = this.flash[i]; if (!el) return; el.className = "pflash"; void el.offsetWidth; el.className = "pflash good"; }
  flashBad(i) { const el = this.flash[i]; if (!el) return; el.className = "pflash"; void el.offsetWidth; el.className = "pflash bad"; }

  buttonFeedback(i, kind) {
    const el = (kind === "harvest" ? this.btnHarvest : this.btnRemove)[i];
    if (!el) return;
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }

  /* ---- Loading / sound ---- */
  setLoading(frac, text) {
    const bar = $("loading-bar");
    if (bar) bar.style.width = Math.round(frac * 100) + "%";
    if (text) { const t = $("loading-text"); if (t) t.textContent = text; }
  }
  setSoundLabel(muted) {
    this.soundLabel.innerHTML = muted ? "SOUND&nbsp;OFF" : "SOUND&nbsp;ON";
    this.soundToggle.classList.toggle("on", !muted);
  }

  /* ---- Solo results ---- */
  ratingFor(score) {
    let label = RATINGS[0].label;
    for (const r of RATINGS) if (score >= r.min) label = r.label;
    return label;
  }

  showResults({ score, bestStreak, isBest, scores, highlightTs, madeBoard }) {
    $("results-rating").textContent = this.ratingFor(score);
    $("results-score").textContent = fmt(score);
    $("results-combo").textContent = fmt(bestStreak);
    $("results-newbest").classList.toggle("hidden", !isBest);
    $("dyk-text").innerHTML = FACTS[(Math.random() * FACTS.length) | 0];

    if (this.nameEntry) this.nameEntry.classList.toggle("hidden", !madeBoard);
    if (this.nameInput) this.nameInput.value = "";
    if (this.orgInput) this.orgInput.value = "";
    this.renderTopScores($("results-scores"), scores, highlightTs);
    if (madeBoard && this.nameInput) setTimeout(() => { try { this.nameInput.focus(); } catch (_) {} }, 350);
  }

  refreshResultsBoard(scores, highlightTs) { this.renderTopScores($("results-scores"), scores, highlightTs); }

  /* ---- Battle results ---- */
  showBattleResults({ p1, p2, winner }) {
    $("br-p1-score").textContent = fmt(p1.score);
    $("br-p2-score").textContent = fmt(p2.score);
    $("br-p1-streak").textContent = fmt(p1.bestStreak);
    $("br-p2-streak").textContent = fmt(p2.bestStreak);
    const head = winner === 0 ? "PLAYER 1 WINS!" : winner === 1 ? "PLAYER 2 WINS!" : "IT'S A DRAW!";
    $("br-headline").textContent = head;
    $("br-col1").classList.toggle("winner", winner === 0);
    $("br-col2").classList.toggle("winner", winner === 1);
  }

  /* ---- Attract / boards ---- */
  showAttractScores(scores) { this.renderTopScores($("attract-scores"), scores, null); }

  renderTopScores(container, scores, highlightTs) {
    if (!container) return;
    container.textContent = "";
    const title = document.createElement("div");
    title.className = "ts-title";
    title.textContent = "TODAY'S TOP SCORES";
    container.appendChild(title);

    if (!scores || scores.length === 0) {
      const e = document.createElement("div");
      e.className = "ts-empty";
      e.textContent = "Be the first on the board!";
      container.appendChild(e);
      return;
    }
    for (let i = 0; i < scores.length; i++) {
      const s = scores[i];
      const row = document.createElement("div");
      row.className = "ts-row" + (highlightTs && s.ts === highlightTs ? " you" : "");
      const rank = document.createElement("span");
      rank.className = "ts-rank"; rank.textContent = (i + 1) + ".";
      const name = document.createElement("span");
      name.className = "ts-name"; name.textContent = s.name ? s.name : "—";
      if (s.org) {
        const org = document.createElement("span");
        org.className = "ts-org"; org.textContent = s.org;
        name.appendChild(document.createTextNode(" ")); name.appendChild(org);
      }
      const sc = document.createElement("span");
      sc.className = "ts-score"; sc.textContent = fmt(s.score);
      row.append(rank, name, sc);
      container.appendChild(row);
    }
  }

  showError(msg) {
    const t = $("error-text");
    if (t) t.textContent = msg || "Please reload the page.";
    this.showScreen("error");
  }
}
