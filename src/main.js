/* ============================================================================
 * CROP VISION — bootstrap.
 *   1. Show the loading screen.
 *   2. Generate ALL assets + build the scene (no network needed at runtime).
 *   3. Build two player rigs (player 2 is only shown in Crop Battle).
 *   4. Try to load the display font (falls back to a system font on timeout).
 *   5. Wire input / sound / visibility, then run the loop at a steady cadence.
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
  sceneMgr.onResize(() => world.layoutRigs());
  hud.setLoading(0.72, "Planting the field…");
  await nextFrame();

  // Two player rigs. Player 1 = render layer 1, Player 2 = layer 2.
  const mkPlayer = (index, layer, floatersId, getCam) => ({
    index,
    items: new Items(sceneMgr, assets, layer),
    particles: new Particles(sceneMgr, assets, layer),
    floaters: new Floaters(document.getElementById(floatersId), getCam),
    score: 0, streak: 0, bestStreak: 0,
  });
  const player0 = mkPlayer(0, 1, "p1-floaters", () => sceneMgr.camera);
  const player1 = mkPlayer(1, 2, "p2-floaters", () => sceneMgr.camera2);
  hud.setLoading(0.9, "Calibrating the crop camera…");

  await loadFont();

  let game;
  const inputCtl = initInput({
    onAction: (p, k) => game.action(p, k),
    onStart: () => game.advance(),
    onEscape: () => game.goHome(),
    onSelectMode: (m) => game.selectMode(m),
    onHome: () => game.goHome(),
    onSubmitScore: () => game.submitScore(
      document.getElementById("name-input") ? document.getElementById("name-input").value : "",
      document.getElementById("org-input") ? document.getElementById("org-input").value : "",
    ),
    onAnyInput: () => game.noteInput(),
  });

  game = new Game({
    sceneMgr, world, hud, audio, storage,
    input: inputCtl, players: [player0, player1],
  });

  // ---- Sound toggle (muted by default) ----
  hud.setSoundLabel(audio.muted);
  const soundBtn = document.getElementById("sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      game.noteInput();
      hud.setSoundLabel(audio.toggle());
    });
  }

  // ---- Solo results name / organisation entry (saves live as they type) ----
  const nameInput = document.getElementById("name-input");
  const orgInput = document.getElementById("org-input");
  const onNameInput = () => {
    game.noteInput();
    game.updatePending(nameInput ? nameInput.value : "", orgInput ? orgInput.value : "");
  };
  if (nameInput) nameInput.addEventListener("input", onNameInput);
  if (orgInput) orgInput.addEventListener("input", onNameInput);

  // ---- Resize / orientation ----
  window.addEventListener("resize", () => sceneMgr.resize());
  window.addEventListener("orientationchange", () => setTimeout(() => sceneMgr.resize(), 200));

  // ---- Pause on tab hidden, resume cleanly ----
  let paused = false;
  let last = now();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      paused = true;
    } else {
      paused = false;
      last = now();
      game.noteInput();
      audio.resume();
    }
  });

  hud.setLoading(1, "Ready!");
  await nextFrame();
  game.enterAttract();

  // ---- Main loop ----
  function frame() {
    requestAnimationFrame(frame);
    const t = now();
    let dt = (t - last) / 1000;
    last = t;
    dt = clamp(dt, 0, 0.05);
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
