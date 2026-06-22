/* ============================================================================
 * Safe "Today's Top Scores" via localStorage.
 *
 *  - Scores are kept per calendar day, so the board resets itself each show day.
 *  - If localStorage is unavailable / throws (private mode, quota, disabled),
 *    we silently fall back to an in-memory list so the kiosk never crashes.
 * ========================================================================== */

const KEY = "cropvision.scores.v1";
const MAX = 5;

let memoryFallback = null; // used only if localStorage is unusable

function todayStamp() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function readRaw() {
  try {
    const txt = window.localStorage.getItem(KEY);
    if (!txt) return null;
    return JSON.parse(txt);
  } catch (_) {
    return null;
  }
}

function writeRaw(obj) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(obj));
    return true;
  } catch (_) {
    return false;
  }
}

/** Returns today's scores, descending. Always returns an array. */
export function getTopScores() {
  const stamp = todayStamp();

  if (memoryFallback && memoryFallback.day === stamp) {
    return memoryFallback.scores.slice();
  }

  const data = readRaw();
  if (data && data.day === stamp && Array.isArray(data.scores)) {
    return data.scores.slice();
  }
  return [];
}

/**
 * Add a score. Returns { rank, isBest, scores } where rank is 1-based
 * (or 0 if it didn't make the board) and isBest is true if it's #1.
 */
export function addScore(score, combo) {
  const stamp = todayStamp();
  const entry = { score: Math.round(score), combo: Math.round(combo), ts: Date.now() };

  let scores = getTopScores();
  scores.push(entry);
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, MAX);

  const payload = { day: stamp, scores };
  if (!writeRaw(payload)) {
    memoryFallback = payload; // localStorage failed → keep it in memory
  } else {
    memoryFallback = null;
  }

  let rank = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === entry) { rank = i + 1; break; }
  }
  return { rank, isBest: rank === 1, scores };
}
