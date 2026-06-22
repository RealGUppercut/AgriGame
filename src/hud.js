/* ============================================================================
 * HUD — the large, high-contrast 2D overlay and all screen transitions.
 * Score / combo / timer, success & miss feedback, results, top-scores table.
 * ========================================================================== */

import { RATINGS, FACTS } from "./config.js";
import { fmt } from "./utils.js";

const $ = (id) => document.getElementById(id);
function restart(el) { el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; }

export class HUD {
  constructor() {
    this.screens = {
      loading: $("loading-screen"),
      attract: $("attract-screen"),
      results: $("results-screen"),
      hud: $("hud"),
      error: $("error-screen"),
    };
    this.scoreEl = $("score-value");
    this.comboBox = $("combo-box");
    this.comboMult = $("combo-mult");
    this.comboCount = $("combo-count");
    this.timerFill = $("timer-fill");
    this.flash = $("flash-overlay");
    this.vignette = $("vignette");
    this.btnHarvest = $("btn-harvest");
    this.btnRemove = $("btn-remove");
    this.soundLabel = $("sound-label");
    this.soundToggle = $("sound-toggle");
    this.nameEntry = $("name-entry");
    this.nameInput = $("name-input");
    this.orgInput = $("org-input");

    this._lastMult = 1;
    document.body.classList.add("show-sound");

    // Countdown overlay (created dynamically to keep index.html tidy)
    this.countdownEl = document.createElement("div");
    this.countdownEl.id = "countdown";
    this.countdownEl.className = "hidden";
    document.getElementById("ui-root").appendChild(this.countdownEl);
  }

  showCountdown(text) {
    this.countdownEl.textContent = text;
    this.countdownEl.classList.remove("hidden");
    restart(this.countdownEl);
  }
  hideCountdown() { this.countdownEl.classList.add("hidden"); }

  showScreen(name) {
    for (const key in this.screens) {
      const el = this.screens[key];
      if (!el) continue;
      el.classList.toggle("hidden", key !== name);
    }
  }

  /* ---- In-game ---- */
  setScore(v) {
    this.scoreEl.textContent = fmt(v);
    restart(this.scoreEl);
    this.scoreEl.classList.add("bump");
  }

  setCombo(combo, mult) {
    const show = combo >= 2;
    this.comboBox.classList.toggle("hidden", !show);
    if (!show) { this._lastMult = 1; return; }
    this.comboMult.textContent = "x" + mult;
    this.comboCount.textContent = combo + " streak";
    if (mult > this._lastMult) {
      restart(this.comboMult);
      this.comboMult.classList.add("pop");
    }
    this._lastMult = mult;
  }

  resetCombo() {
    this.comboBox.classList.add("hidden");
    this._lastMult = 1;
  }

  setTimer(frac) {
    frac = Math.max(0, Math.min(1, frac));
    this.timerFill.style.transform = `scaleX(${frac})`;
    this.timerFill.classList.toggle("low", frac < 0.25);
  }

  flashGood() {
    this.flash.className = "";
    restart(this.flash);
    this.flash.className = "good";
  }

  flashBad() {
    this.flash.className = "";
    restart(this.flash);
    this.flash.className = "bad";
    this.vignette.style.boxShadow = "inset 0 0 200px 50px rgba(150,0,0,0.5)";
    this.vignette.style.opacity = "1";
    clearTimeout(this._vigT);
    this._vigT = setTimeout(() => { this.vignette.style.opacity = "0"; }, 220);
  }

  buttonFeedback(action) {
    const el = action === "harvest" ? this.btnHarvest : this.btnRemove;
    if (!el) return;
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }

  /* ---- Loading ---- */
  setLoading(frac, text) {
    const bar = $("loading-bar");
    if (bar) bar.style.width = Math.round(frac * 100) + "%";
    if (text) { const t = $("loading-text"); if (t) t.textContent = text; }
  }

  /* ---- Sound ---- */
  setSoundLabel(muted) {
    this.soundLabel.innerHTML = muted ? "SOUND&nbsp;OFF" : "SOUND&nbsp;ON";
    this.soundToggle.classList.toggle("on", !muted);
  }

  /* ---- Results ---- */
  ratingFor(score) {
    let label = RATINGS[0].label;
    for (const r of RATINGS) if (score >= r.min) label = r.label;
    return label;
  }

  showResults({ score, bestCombo, isBest, scores, highlightTs, madeBoard }) {
    $("results-rating").textContent = this.ratingFor(score);
    $("results-score").textContent = fmt(score);
    $("results-combo").textContent = fmt(bestCombo);
    $("results-newbest").classList.toggle("hidden", !isBest);
    $("dyk-text").innerHTML = FACTS[(Math.random() * FACTS.length) | 0];

    // Name entry only when the run made the visible board.
    if (this.nameEntry) this.nameEntry.classList.toggle("hidden", !madeBoard);
    if (this.nameInput) this.nameInput.value = "";
    if (this.orgInput) this.orgInput.value = "";

    this.renderTopScores($("results-scores"), scores, highlightTs);

    if (madeBoard && this.nameInput) {
      // gently focus so the on-screen keyboard is ready for name entry
      setTimeout(() => { try { this.nameInput.focus(); } catch (_) {} }, 350);
    }
  }

  refreshResultsBoard(scores, highlightTs) {
    this.renderTopScores($("results-scores"), scores, highlightTs);
  }

  /* ---- Attract ---- */
  showAttractScores(scores) {
    this.renderTopScores($("attract-scores"), scores, null);
  }

  // Builds the board with DOM nodes (textContent) so player names can never
  // break layout or inject markup.
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
      rank.className = "ts-rank";
      rank.textContent = (i + 1) + ".";

      const name = document.createElement("span");
      name.className = "ts-name";
      name.textContent = s.name ? s.name : "—"; // em dash if unnamed
      if (s.org) {
        const org = document.createElement("span");
        org.className = "ts-org";
        org.textContent = s.org;
        name.appendChild(document.createTextNode(" "));
        name.appendChild(org);
      }

      const sc = document.createElement("span");
      sc.className = "ts-score";
      sc.textContent = fmt(s.score);

      row.appendChild(rank);
      row.appendChild(name);
      row.appendChild(sc);
      container.appendChild(row);
    }
  }

  showError(msg) {
    const t = $("error-text");
    if (t) t.textContent = msg || "Please reload the page.";
    this.showScreen("error");
  }
}
