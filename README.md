# Crop Vision — Precision Harvest Challenge

A polished, low-poly **3D first-person harvester game** for the Royal Norfolk Show
STEM Village kiosk. You drive a combine through a field; carrots and weeds stream
toward you, and you **HARVEST** carrots / **REMOVE** weeds as they pass through a
glowing action band. Built with **Three.js**, everything generated from code.

**Educational hook:** modern harvesters use cameras + AI to tell crops from weeds
in real time and act on each plant individually (precision farming / "see & spray").
The title screen states it in one line; the results screen rotates "Did you know?"
facts. The gameplay *is* the lesson — be the crop-vision system.

---

## 1. Run it (the required path)

The game uses ES modules, so Chrome must load it over `http://` (not `file://`).
Serve the project folder with **one** of these one-liners, then open the URL.

```bash
# Option A — Python (pre-installed on most machines)
python3 -m http.server 8000

# Option B — Node
npx serve -l 8000
```

Then open:

```
http://localhost:8000/
```

That's it. Everything (Three.js, the font, all 3D assets) is **vendored locally in
`/vendor`** and generated at startup — **after the page loads, the game makes no
network calls at all.** Reliable wifi is *not* required for a round; it isn't even
required to launch.

### Launch fullscreen for the kiosk

- **Best — Chrome kiosk mode** (fullscreen, no chrome/UI, no exit affordances):
  ```bash
  google-chrome --kiosk --autoplay-policy=no-user-gesture-required http://localhost:8000/
  # Windows:  chrome.exe --kiosk http://localhost:8000/
  # macOS:    open -a "Google Chrome" --args --kiosk http://localhost:8000/
  ```
- **Quick — any browser:** press **F11** to toggle fullscreen.

> Tip: in kiosk mode the game auto-returns to the attract screen after ~20s of
> inactivity, so it resets itself between visitors with no staff intervention.

### Offline / no-server fallback (`file://`)

If you genuinely can't run a server, open **`index-offline.html`** directly
(double-click / `file://`). It loads a pre-built single-file bundle
(`dist/cropvision.bundle.js`) that already contains the game *and* Three.js, so no
server or import map is needed. (The custom title font may fall back to a system
font under `file://` — that's expected and harmless.) The served `index.html` is
still the recommended path.

To rebuild that bundle after changing the source:
```bash
npm install esbuild
node tools/build-offline.mjs
```

---

## 2. Controls

| Action      | Keyboard            | Touch / pointer            |
|-------------|---------------------|----------------------------|
| **Harvest** (carrots) | **← Left Arrow** or **A** | Big green **HARVEST** button (left)  |
| **Remove** (weeds)    | **→ Right Arrow** or **L**| Big red **REMOVE** button (right)    |
| Start / Play Again    | **Space**, **Enter**, or any key | Tap the screen / button      |

On-screen buttons are large and thumb-positioned for landscape, sized for a child's
finger. The action mappings are shown on the title screen and beside each button.

Carrot = **orange, smooth, leafy top** → Harvest.
Weed = **bushy, spiky, dark green with magenta buds** → Remove.

---

## 3. On-site tuning (the important part)

**All gameplay knobs live in one place: [`src/config.js`](src/config.js), in the
`TUNE` block at the top.** Edit a number, save, refresh the browser — no build step.
(If you only use the `file://` build, re-run `node tools/build-offline.mjs` after.)

| You want to change… | Edit this in `TUNE` |
|---|---|
| **Round length** | `round.durationSec` (default **60**) |
| **Idle reset delay** | `round.idleReturnSec` (default **20**) |
| **Difficulty ramp — speed** | `difficulty.speedStart` → `difficulty.speedEnd` |
| **Difficulty ramp — density** | `difficulty.gapStart` → `difficulty.gapEnd` (smaller = more items) |
| **Ramp shape** | `difficulty.rampCurve` (0 = linear, higher = stays easy longer then ramps) |
| **Timing-window generosity** | `zone.halfDepth` — **the main "make it easier" knob** (bigger = longer window) |
| **Points per hit** | `scoring.basePoints` |
| **Miss harshness** | `scoring.missPenalty` (kept at **0** — combo just resets) |
| **Combo → multiplier rate** | `scoring.comboPerMult` (every N in a row = +1×), `scoring.maxMultiplier` |
| **Crop / weed mix** | `spawn.weedChance` (0–1) |

**Quick recipes**
- *"Too hard for little ones"* → raise `zone.halfDepth` (e.g. 5.2 → 7) and/or lower
  `difficulty.speedEnd`.
- *"Rounds taking too long, big queue"* → lower `round.durationSec` to 45.
- *"Make the finale more intense"* → raise `difficulty.speedEnd` and lower
  `difficulty.gapEnd`.

Presentation constants (palette, fog, bloom, camera bob, pool sizes) are lower in
the same file and documented inline. **Performance levers** if a machine struggles:
`RENDER.maxPixelRatio` (lower to 1.0), `RENDER.bloomStrength`, and the shadow map
size in `src/scene.js`.

---

## 4. Art direction & how it's built

- **Committed low-poly, golden-hour palette.** Warm cream→cornflower sky gradient,
  a low warm directional "sun" with soft shadows, cool hemisphere fill, gentle
  distance fog, and a touch of bloom on highlights/sparkles. The polish comes from
  **lighting + atmosphere**, not detail — so flat-shaded primitives read as premium.
- **Everything from primitives, in code.** No model files, no sourced textures, no
  images, no emoji:
  - *Carrot* = orange cone (root, pointing down) + a feathery cluster of green cones.
  - *Weed* = spiky dark-green icosahedron + splayed blade-cones + magenta flower buds.
  - *Cab* = dark-olive boxes (two A-pillars, a header beam, a raked dashboard with
    two dial gauges + a steering-wheel hint), parented to the camera so it frames
    the view and bobs with the drive.
  - *Field* = a plane with a procedurally-generated soil texture (furrows + tilled
    speckle) that scrolls toward you; parallax instanced grass, fences, trees and
    distant hills sell the forward motion.
- **Game feel:** easing on all motion, camera bob/shake that grows with combo,
  particle bursts (soil/leaf debris + glowing sparkles), floating "+points",
  success/miss flashes, and a big high-contrast HUD readable from across the stand.

---

## 5. Robustness (kiosk-grade)

- Pooled & instanced everything (items, particles, scenery, floating numbers) and
  shared geometries/materials → **stable memory and 60fps over a full show day**.
- Survives: button-mashing (can't cheese a combo), window resize, alt-tab (pauses
  on tab-hide, resumes cleanly), **WebGL context loss/restore**, long idling, and
  rapid restarts — no crashes, no state leaking between rounds.
- `localStorage` for "Today's Top Scores" (top 5, auto-resets each day) with an
  in-memory fallback if storage is unavailable. When a run makes the board, the
  results screen invites the player to enter a **name** and optional
  **school / club**, saved live as they type and shown on the leaderboard.
- Sound is **off by default** (synthesized SFX, no files, no autoplay) with a toggle;
  the game never relies on audio for clarity.

---

## 6. Project layout

```
index.html              # primary build (served over http, uses an import map)
index-offline.html      # file:// fallback (loads the pre-built bundle)
styles.css              # HUD / screens / feedback styling + vendored @font-face
src/
  config.js             # ← ALL on-site tuning (TUNE block at top)
  main.js               # bootstrap: loading phase, wiring, render loop
  scene.js              # renderer, camera, lights, fog, bloom, resize, context-loss
  world.js              # field, sky, scenery, cab, drive motion (scroll/bob/shake)
  assets.js             # all geometry/material factories (carrot, weed, cab, …)
  items.js              # pooled carrots/weeds, streaming + zone hit-testing
  particles.js          # pooled instanced debris + sparkle bursts
  floaters.js           # pooled "+points" numbers (3D→2D projected)
  hud.js                # score/combo/timer, screens, ratings, top-scores table
  input.js              # keyboard + touch mapping
  audio.js              # synthesized SFX (muted by default)
  storage.js            # safe localStorage high-scores
  utils.js              # math / easing helpers
vendor/three/           # Three.js r0.184 (min core + bloom addons) — vendored
vendor/fonts/           # Fredoka display font (woff2) — vendored
tools/build-offline.mjs # regenerates dist/cropvision.bundle.js
test/sim.mjs            # headless logic tests (node test/sim.mjs)
```

### Tests

`node test/sim.mjs` drives the real game state machine, scoring, combo, pooling and
zone logic headlessly (no GPU needed) and asserts they behave. The 3D/WebGL visuals
must be eye-checked in a browser.

---

Three.js is MIT-licensed (`vendor/three/LICENSE`); Fredoka is OFL
(`vendor/fonts/Fredoka-LICENSE.txt`).
