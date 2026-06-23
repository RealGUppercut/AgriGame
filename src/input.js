/* ============================================================================
 * Input — keyboard + touch/pointer for Solo and Crop Battle.
 *
 *   Solo  : Harvest = ArrowLeft / A,  Remove = ArrowRight / L
 *   Battle: Player 1 = A (harvest) / D (remove)
 *           Player 2 = ArrowLeft (harvest) / ArrowRight (remove)
 *           (two USB keyboards both type everything, so each player just uses
 *            their own distinct keys)
 *   Esc   : quit the current game back to the welcome screen.
 *
 * Returns { setMode } so the game can swap the active key map per mode.
 * ========================================================================== */

import { TUNE } from "./config.js";

function buildMap(mode) {
  const m = {};
  const add = (keys, p, k) => keys.forEach((key) => { m[key] = [p, k]; });
  if (mode === "battle") {
    add(TUNE.battle.keysP1.harvest, 0, "harvest");
    add(TUNE.battle.keysP1.remove, 0, "remove");
    add(TUNE.battle.keysP2.harvest, 1, "harvest");
    add(TUNE.battle.keysP2.remove, 1, "remove");
  } else {
    add(["a", "A", "ArrowLeft"], 0, "harvest");
    add(["l", "L", "ArrowRight"], 0, "remove");
  }
  return m;
}

export function initInput(handlers) {
  const h = handlers;
  const any = () => h.onAnyInput && h.onAnyInput();
  let keymap = buildMap("solo");

  window.addEventListener("keydown", (e) => {
    if (e.repeat) return;

    // Let text fields (results name entry) keep their keystrokes.
    const ae = document.activeElement;
    if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA")) {
      any();
      if (e.key === "Enter") { e.preventDefault(); ae.blur(); }
      return;
    }

    if (e.key === "Escape") { e.preventDefault(); any(); h.onEscape && h.onEscape(); return; }

    const m = keymap[e.key];
    if (m) { e.preventDefault(); any(); h.onAction && h.onAction(m[0], m[1]); return; }

    if (e.key === "1") { any(); h.onSelectMode && h.onSelectMode("solo"); return; }
    if (e.key === "2") { any(); h.onSelectMode && h.onSelectMode("battle"); return; }

    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
      e.preventDefault(); any(); h.onStart && h.onStart(); return;
    }
    // Any other key counts as activity only; it should not skip post-game forms.
    any();
  }, { passive: false });

  // ---- Pointer buttons ----
  const bind = (id, fn) => {
    const el = document.getElementById(id);
    if (!el) return;
    const run = (e) => { e.preventDefault(); any(); fn(); };
    el.addEventListener("pointerdown", run);
  };
  bind("p1-harvest", () => h.onAction && h.onAction(0, "harvest"));
  bind("p1-remove", () => h.onAction && h.onAction(0, "remove"));
  bind("p2-harvest", () => h.onAction && h.onAction(1, "harvest"));
  bind("p2-remove", () => h.onAction && h.onAction(1, "remove"));

  bind("btn-start", () => h.onStart && h.onStart());
  bind("btn-again", () => h.onStart && h.onStart());
  bind("btn-rematch", () => h.onStart && h.onStart());
  bind("btn-solo", () => h.onSelectMode && h.onSelectMode("solo"));
  bind("btn-battle", () => h.onSelectMode && h.onSelectMode("battle"));
  bind("btn-mode-back", () => h.onHome && h.onHome());
  bind("btn-results-menu", () => h.onHome && h.onHome());
  bind("btn-battle-menu", () => h.onHome && h.onHome());
  bind("btn-submit-score", () => h.onSubmitScore ? h.onSubmitScore() : (h.onHome && h.onHome()));

  const modeCards = document.querySelector(".mode-cards");
  if (modeCards) {
    modeCards.addEventListener("pointerdown", (e) => {
      const card = e.target.closest && e.target.closest(".mode-card");
      if (!card) return;
      e.preventDefault();
      any();
      h.onSelectMode && h.onSelectMode(card.id === "btn-battle" ? "battle" : "solo");
    });
  }

  // Tap the welcome screen to advance (guarded in game). Results/battle screens
  // use their explicit buttons (they contain form fields / multiple choices).
  const attract = document.getElementById("attract-screen");
  if (attract) attract.addEventListener("pointerdown", () => { any(); h.onStart && h.onStart(); });

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("dragstart", (e) => e.preventDefault());

  return {
    setMode(mode) { keymap = buildMap(mode); },
  };
}
