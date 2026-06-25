/* ============================================================================
 * CROP VISION — central configuration
 *
 *  ┌────────────────────────────────────────────────────────────────────┐
 *  │  ON-SITE TUNING LIVES IN THE `TUNE` BLOCK DIRECTLY BELOW.           │
 *  │  Edit those numbers, save, refresh the browser. No build step.      │
 *  └────────────────────────────────────────────────────────────────────┘
 *
 *  Quick reference (also in README.md):
 *    • Round length .............. TUNE.round.durationSec
 *    • Difficulty ramp ........... TUNE.difficulty.*  (speed + spacing)
 *    • Timing-window generosity .. TUNE.zone.halfDepth (bigger = easier)
 *    • How forgiving misses are .. TUNE.scoring.missPenalty (0 = none)
 *    • Crop / weed mix ........... TUNE.spawn.weedChance
 * ========================================================================== */

export const TUNE = {
  round: {
    durationSec: 60,        // length of one play (seconds)
    idleReturnSec: 20,      // inactivity before the kiosk resets to the title
    countdownSec: 3,        // "3-2-1-GO" before a round starts
  },

  difficulty: {
    // Item forward speed (world units / second). Ramps over the round.
    speedStart: 11,
    speedEnd:   21,
    // Spacing between consecutive items (world units). Smaller = denser.
    gapStart:   24,
    gapEnd:     13,
    // Easing of the ramp across the round: 0 = linear, 1 = slow-then-fast.
    rampCurve:  0.6,
  },

  zone: {
    // The "action band" the player reacts in, measured along the row (Z).
    // halfDepth is THE generosity knob: bigger band = longer timing window.
    centerZ:    -7,         // distance in front of the camera
    halfDepth:  5.2,        // half-thickness of the band (forgiving)
  },

  scoring: {
    basePoints:     100,    // baseline points for a correct action
    missPenalty:    0,      // points lost on a miss (kept at 0 for kids)

    // ---- Timing precision (creates the score spread / skill ceiling) -------
    // Points scale with HOW CENTRED the item is in the action band when you act.
    //   dNorm = |item.z - zone.centerZ| / zone.halfDepth   (0 = dead centre, 1 = edge)
    // Acting any time still scores ("Good"), but nailing the centre scores far
    // more — so good players pull clearly ahead instead of everyone maxing out.
    // points = round(basePoints * mult). Tiers are tried in order (first match).
    precision: [
      { maxD: 0.30, mult: 1.6, label: "PERFECT!", cls: "perfect" },
      { maxD: 0.62, mult: 1.1, label: "Great" },
      { maxD: 1.01, mult: 0.6, label: "Good" },
    ],

    // ---- Streak bonuses (small, capped; reward sustained accuracy) ----------
    streakBonusEvery: 5,    // award a bonus every N in a row
    streakBonusStep:  20,   // bonus = step * milestone#  (1st=20, 2nd=40, ...)
    streakBonusMax:   120,  // ...capped here
  },

  streak: {
    // The streak also nudges the field a little faster for rising intensity.
    speedPerStreak: 0.010,  // +1.0% speed per point of streak
    speedMaxMul:    1.30,   // capped extra speed from the streak
    intensityFull:  18,     // streak at which "intensity" visuals max out
  },

  spawn: {
    weedChance: 0.45,       // probability a spawned item is a weed (vs carrot)
    lanesX: [-2.5, 0, 2.5], // the three furrow lanes (X positions)
    startZ: -62,            // where items appear (far down the row)
    despawnZ: 9,            // behind the camera: recycle here
  },

  battle: {
    // Crop Battle: same spawns for both players; only the cab bob differs so
    // each player feels they're in their own vehicle.
    bobPhaseOffset: Math.PI,     // P2's bob is in anti-phase with P1's
    bobAmpScale:    [1.0, 0.82], // and a slightly different amplitude
    bobHzScale:     [1.0, 1.12], // ...and rate
    // Distinct key sets (two USB keyboards: each player presses only their own).
    keysP1: { harvest: ["a", "A"], remove: ["d", "D"] },
    keysP2: { harvest: ["ArrowLeft"], remove: ["ArrowRight"] },
  },
};

/* Encouraging crop-pun toasts for each streak-bonus milestone (cycled). */
export const STREAK_PUNS = [
  "Lettuce-go!",
  "On a roll!",
  "Outstanding in your field!",
  "A-maize-ing!",
  "Unbe-leaf-able!",
  "Kale yeah!",
  "Turnip the heat!",
  "You're a-peeling!",
  "Plant-tastic!",
  "Soil good!",
];

/* ----------------------------------------------------------------------------
 * Below: presentation / world constants. Safe to leave alone, but documented.
 * -------------------------------------------------------------------------- */

export const PALETTE = {
  skyTop:     0x3c82c4,
  skyHorizon: 0xf6d9a0,
  sun:        0xfff2cf,
  fog:        0xe9d4a8,   // tinted to the horizon so distance fades nicely

  soilBase:   0x7a5235,
  soilDark:   0x593822,
  soilLight:  0x96663f,

  carrot:     0xf2861e,
  carrotShade:0xd66a12,
  carrotTop:  0x6cb33f,

  weed:       0x46662c,
  weedDark:   0x35501f,
  weedFlower: 0xc2477a,

  cab:        0x2b3226,
  cabDark:    0x1d2319,
  cabAccent:  0xf4c542,
  cabMetal:   0x4a5443,

  grass:      0x6ea63d,
  grassDark:  0x537e2c,
  treeLeaf:   0x4f8a3a,
  treeTrunk:  0x6b4a2f,
  hills:      0x7fae53,
  fence:      0x9c7b4f,

  zoneGlow:   0xffe39a,
  sparkle:    0xfff4c2,
};

export const CAMERA = {
  fov: 55,
  near: 0.1,
  far: 220,
  basePos: { x: 0, y: 2.45, z: 2.2 },
  lookAt:  { x: 0, y: 0.45, z: -22 },
  bobAmpY: 0.05,          // vertical camera bob amplitude
  bobAmpX: 0.025,         // sway
  bobBaseHz: 1.4,         // bob speed at base game speed
};

export const RENDER = {
  maxPixelRatio: 1.5,     // cap DPR for kiosk GPUs
  bloomStrength: 0.62,
  bloomRadius:   0.5,
  bloomThreshold:0.82,    // only bright highlights / sparkles bloom
  exposure:      1.04,
};

export const POOL = {
  carrots: 14,            // pooled carrot meshes
  weeds:   14,            // pooled weed meshes
  chunks:  240,           // debris particle capacity
  sparkles:120,           // glowing sparkle particle capacity
  floaters:14,            // pooled "+points" DOM nodes
};

/* "Did you know?" facts — precision-farming / machine-vision themed. */
export const FACTS = [
  "Modern harvesters use cameras and AI to tell crops from weeds — many times every second.",
  "Smart 'see &amp; spray' sprayers can cut weedkiller use by over 90% by hitting only the weeds they see.",
  "Some farm robots pluck or zap weeds mechanically, so no chemicals are needed at all.",
  "GPS-guided tractors can follow crop rows to within a couple of centimetres.",
  "Sorting cameras can grade thousands of carrots a minute by shape, size and colour.",
  "Machine vision checks each plant on its own — a tiny decision repeated millions of times a day.",
  "Drones with special cameras can spot thirsty or sick crops before a human eye ever could.",
];

/* Encouraging end ratings, low → high score. */
export const RATINGS = [
  { min: 0,     label: "Seedling Scout" },
  { min: 800,   label: "Field Hand" },
  { min: 2000,  label: "Crop Spotter" },
  { min: 4000,  label: "Precision Pro" },
  { min: 7000,  label: "Harvest Hero" },
  { min: 11000, label: "Master Harvester!" },
];
