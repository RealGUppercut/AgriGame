/* ============================================================================
 * CROP VISION — bootstrap.
 *   1. Show the loading screen.
 *   2. Generate ALL assets + build the scene (no network needed at runtime).
 *   3. Try to load the display font (falls back to a system font on timeout).
 *   4. Wire input / sound / visibility, then run the loop at a steady cadence.
 * ========================================================================== */

import { Assets } from "./assets.js";
import { SceneManager } from "./scene.js";
import { World } from "./world.js";
import { Items } from "./items.js";
import { Particles } from "./particles.js";
import { Floaters } from "./floaters.js";
import { HUD } from "./hud.js";
import { Game } from "./game.js";
import { initInput } from "./input.js";
import { audio } from "./audio.js";
import * as storage from "./storage.js";
import { clamp, now } from "./utils.js";

const nextFrame = () =>
  new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

async function loadFont() {
  try {
    if (document.fonts && document.fonts.load) {
      await Promise.race([
        Promise.all([
          document.fonts.load("700 40px Fredoka"),
          document.fonts.load("500 20px Fredoka"),
        ]),
        new Promise((r) => setTimeout(r, 2500)),
      ]);
    }
  } catch (_) { /* fall back to system font */ }
}

async function boot() {
  const hud = new HUD();
  hud.showScreen("loading");
  hud.setLoading(0.05, "Warming up the harvester…");
  await nextFrame();

  const canvas = document.getElementById("scene-canvas");
  const assets = new Assets();
  assets.build();
  hud.setLoading(0.3, "Carving carrots…");
  await nextFrame();

  const sceneMgr = new SceneManager(canvas);
  hud.setLoading(0.5, "Raising the sun…");
  await nextFrame();

  const world = new World(sceneMgr, assets);
  world.attachCab(sceneMgr.camera);
  sceneMgr.onResize((w, h, aspect) => world.layoutCab(aspect));
  hud.setLoading(0.72, "Planting the field…");
  await nextFrame();

  const items = new Items(sceneMgr, assets);
  const particles = new Particles(sceneMgr, assets);
  const floaters = new Floaters(
    document.getElementById("floaters-layer"),
    () => sceneMgr.camera
  );
  hud.setLoading(0.88, "Calibrating the crop camera…");

  await loadFont();
  sceneMgr.resize(); // apply cab layout / sizing once everything exists

  const game = new Game({ sceneMgr, world, items, particles, floaters, hud, audio, storage });

  // ---- Input ----
  initInput({
    onHarvest: () => game.action("harvest"),
    onRemove: () => game.action("remove"),
    onStart: () => game.start(),
    onAnyInput: () => game.noteInput(),
  });

  // ---- Sound toggle (muted by default) ----
  hud.setSoundLabel(audio.muted);
  const soundBtn = document.getElementById("sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      game.noteInput();
      const muted = audio.toggle();
      hud.setSoundLabel(muted);
    });
  }

  // ---- Resize / orientation ----
  window.addEventListener("resize", () => sceneMgr.resize());
  window.addEventListener("orientationchange", () => setTimeout(() => sceneMgr.resize(), 200));

  // ---- Pause on tab hidden, resume cleanly ----
  let paused = false;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      paused = true;
    } else {
      paused = false;
      last = now();          // avoid a giant dt jump
      game.noteInput();      // don't instantly idle-reset on return
      audio.resume();
    }
  });

  hud.setLoading(1, "Ready!");
  await nextFrame();
  game.enterAttract();

  // ---- Main loop ----
  let last = now();
  function frame() {
    requestAnimationFrame(frame);
    const t = now();
    let dt = (t - last) / 1000;
    last = t;
    dt = clamp(dt, 0, 0.05); // clamp after alt-tab / stalls
    if (!paused) {
      try { game.update(dt); } catch (err) { console.error(err); }
    }
    sceneMgr.update(dt);
    sceneMgr.render();
  }
  requestAnimationFrame(frame);
}

boot().catch((err) => {
  console.error("[CropVision] Fatal during boot:", err);
  try {
    const hud = new HUD();
    hud.showError(String((err && err.message) || err));
  } catch (_) {
    document.body.innerHTML =
      '<div style="color:#fff;font-family:sans-serif;padding:40px">Failed to start. Please reload.</div>';
  }
});
