/* ============================================================================
 * Safe "Today's Top Scores" via localStorage — now with player name + org.
 *
 *  - Scores are kept per calendar day, so the board resets itself each show day.
 *  - addScore() saves the run; updateScore() lets the results screen fill in the
 *    name/organisation live as the player types.
 *  - If localStorage is unavailable / throws, we fall back to an in-memory list
 *    so the kiosk never crashes.
 * ========================================================================== */

const KEY = "cropvision.scores.v1";
const MAX = 5; // top scores kept & shown

let mem = null; // in-memory fallback {day, scores}

function todayStamp() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function clean(s, max) {
  return String(s == null ? "" : s).replace(/\s+/g, " ").trim().slice(0, max);
}

/** Load today's data from localStorage (or memory fallback), always valid. */
function load() {
  const day = todayStamp();
  try {
    const txt = window.localStorage.getItem(KEY);
    if (txt) {
      const d = JSON.parse(txt);
      if (d && d.day === day && Array.isArray(d.scores)) return d;
    }
  } catch (_) { /* ignore */ }
  if (mem && mem.day === day) return mem;
  return { day, scores: [] };
}

function save(data) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(data));
    mem = null;
  } catch (_) {
    mem = data; // localStorage unusable → keep it in memory for this session
  }
}

/** Today's scores, descending. Always an array. */
export function getTopScores() {
  return load().scores.slice(0, MAX);
}

/**
 * Add a run. Returns { rank, isBest, ts, scores } — rank is 1-based (0 if it
 * didn't make the board), ts identifies the entry for later updateScore() calls.
 */
export function addScore(score, combo, name = "", org = "") {
  const data = load();
  const entry = {
    score: Math.round(score),
    combo: Math.round(combo),
    name: clean(name, 14),
    org: clean(org, 28),
    ts: Date.now(),
  };
  data.scores.push(entry);
  data.scores.sort((a, b) => b.score - a.score);
  data.scores = data.scores.slice(0, MAX);
  save(data);

  let rank = 0;
  for (let i = 0; i < data.scores.length; i++) {
    if (data.scores[i].ts === entry.ts) { rank = i + 1; break; }
  }
  return { rank, isBest: rank === 1, ts: entry.ts, scores: data.scores.slice() };
}

/** Wipe the whole board (staff "clear leaderboard" action). */
export function clearScores() {
  mem = null;
  try { window.localStorage.removeItem(KEY); } catch (_) { /* ignore */ }
}

/** Update the name/org of a previously-added entry (by ts). Returns the board. */
export function updateScore(ts, name, org) {
  const data = load();
  const e = data.scores.find((s) => s.ts === ts);
  if (e) {
    e.name = clean(name, 14);
    e.org = clean(org, 28);
    save(data);
  }
  return data.scores.slice(0, MAX);
}
