/* ============================================================================
 * Input — keyboard + touch/pointer, mapped to two actions.
 *   Harvest : ArrowLeft  / A   or the green on-screen button
 *   Remove  : ArrowRight / L   or the red on-screen button
 *   Start / advance menus : Space / Enter / tap.
 * The game decides what each action means for the current screen.
 * ========================================================================== */

export function initInput(handlers) {
  const h = handlers;
  const any = () => h.onAnyInput && h.onAnyInput();

  // ---- Keyboard ----
  window.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    const k = e.key;
    if (k === "ArrowLeft" || k === "a" || k === "A") {
      e.preventDefault(); any(); h.onHarvest && h.onHarvest();
    } else if (k === "ArrowRight" || k === "l" || k === "L") {
      e.preventDefault(); any(); h.onRemove && h.onRemove();
    } else if (k === " " || k === "Enter" || k === "Spacebar") {
      e.preventDefault(); any(); h.onStart && h.onStart();
    } else {
      any(); // any other key still counts as activity / advances menus
      h.onStart && h.onStart();
    }
  }, { passive: false });

  // ---- Pointer buttons ----
  const bind = (id, fn) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      any();
      fn();
    });
  };
  bind("btn-harvest", () => h.onHarvest && h.onHarvest());
  bind("btn-remove", () => h.onRemove && h.onRemove());
  bind("btn-start", () => h.onStart && h.onStart());
  bind("btn-again", () => h.onStart && h.onStart());

  // Tap anywhere on the attract / results panels to start (guarded in game)
  const tapStart = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("pointerdown", () => { any(); h.onStart && h.onStart(); });
  };
  tapStart("attract-screen");
  tapStart("results-screen");

  // Kiosk hardening: no context menu, no drag, no double-tap zoom artefacts
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("dragstart", (e) => e.preventDefault());
}
