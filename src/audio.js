/* ============================================================================
 * Audio — all SFX are synthesized at runtime with the Web Audio API.
 *   • No audio files, no network.
 *   • Muted by DEFAULT. Sound is pure garnish: gameplay never depends on it.
 *   • AudioContext is created lazily on the first user gesture (autoplay-safe).
 *   • Every call is wrapped so audio problems can never break the game.
 * ========================================================================== */

let ctx = null;
let master = null;
let noiseBuffer = null;
let muted = true;
let available = (typeof window !== "undefined") &&
  !!(window.AudioContext || window.webkitAudioContext);

function ensure() {
  if (!available || muted) return false;
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
      // small white-noise buffer for "pops" and "snaps"
      const len = Math.floor(ctx.sampleRate * 0.4);
      noiseBuffer = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = noiseBuffer.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  } catch (_) {
    available = false;
    return false;
  }
}

function tone(freq, dur, { type = "sine", gain = 0.3, when = 0, glideTo = null } = {}) {
  if (!ctx) return;
  const t0 = ctx.currentTime + when;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (glideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(1, glideTo), t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(master);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

function noise(dur, { gain = 0.3, when = 0, type = "highpass", freq = 1200 } = {}) {
  if (!ctx || !noiseBuffer) return;
  const t0 = ctx.currentTime + when;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer;
  const filt = ctx.createBiquadFilter();
  filt.type = type;
  filt.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(filt).connect(g).connect(master);
  src.start(t0);
  src.stop(t0 + dur + 0.02);
}

/* ---- Public API ---------------------------------------------------------- */

export const audio = {
  get muted() { return muted; },
  get available() { return available; },

  /** Call from a user gesture (start button) to unlock the context. */
  unlock() {
    if (!muted) ensure();
  },

  setMuted(m) {
    muted = !!m;
    if (!muted) ensure();
    else if (ctx && master) {
      try { master.gain.value = 0.5; } catch (_) {}
    }
  },

  toggle() {
    this.setMuted(!muted);
    return muted;
  },

  /** Resume after tab visibility changes. */
  resume() {
    if (!muted && ctx && ctx.state === "suspended") {
      try { ctx.resume(); } catch (_) {}
    }
  },

  harvest() {
    if (!ensure()) return;
    try {
      tone(520, 0.16, { type: "triangle", gain: 0.32, glideTo: 880 });
      noise(0.10, { gain: 0.18, type: "bandpass", freq: 1800 });
    } catch (_) {}
  },

  remove() {
    if (!ensure()) return;
    try {
      noise(0.16, { gain: 0.26, type: "highpass", freq: 900 });
      tone(220, 0.14, { type: "sawtooth", gain: 0.16, glideTo: 130 });
    } catch (_) {}
  },

  /** Pitch rises with the combo level for escalating feedback. */
  combo(level) {
    if (!ensure()) return;
    try {
      const base = 540 + Math.min(level, 24) * 26;
      tone(base, 0.12, { type: "square", gain: 0.18, glideTo: base * 1.5 });
    } catch (_) {}
  },

  miss() {
    if (!ensure()) return;
    try {
      tone(180, 0.22, { type: "sine", gain: 0.22, glideTo: 90 });
    } catch (_) {}
  },

  start() {
    if (!ensure()) return;
    try {
      tone(440, 0.12, { type: "triangle", gain: 0.28 });
      tone(660, 0.16, { type: "triangle", gain: 0.28, when: 0.10 });
    } catch (_) {}
  },

  tick() {
    if (!ensure()) return;
    try { tone(660, 0.07, { type: "square", gain: 0.18 }); } catch (_) {}
  },

  go() {
    if (!ensure()) return;
    try { tone(880, 0.22, { type: "triangle", gain: 0.32, glideTo: 1320 }); } catch (_) {}
  },

  results() {
    if (!ensure()) return;
    try {
      tone(523, 0.18, { type: "triangle", gain: 0.3, when: 0.0 });
      tone(659, 0.18, { type: "triangle", gain: 0.3, when: 0.14 });
      tone(784, 0.28, { type: "triangle", gain: 0.32, when: 0.28 });
    } catch (_) {}
  },
};
