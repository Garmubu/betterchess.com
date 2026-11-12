/* The player's profile, saved in localStorage.
 * Extra scripts (see build.js --extra) can keep it elsewhere too:
 *   Store.onSave(fn)       fn(profileCopy) after every save
 *   Store.replace(raw)     load a profile coming from elsewhere (returns false if it is not valid),
 *                          then App.refreshIfIdle() to redraw without interrupting a game
 *   Store.migrations.push(fn)  fn(raw) → raw, to upgrade old data before it is read
 */
const STORAGE_KEY = 'betterchess';
const PROFILE_VERSION = 1;
const HISTORY_SIZE = 80;
const DEFAULT_PROFILE = {
  v: PROFILE_VERSION,
  elo: 500, best: 500, games: 0,
  record: { w: 0, d: 0, l: 0 },  // ranked games won, drawn, lost
  history: [],                   // last games, see Game.finish
  openings: {},                  // opening id → { ok, tries, at }
  tactics: {},                   // puzzle id → { ok, tries, at }
  sound: true,
  lang: null,                    // null: follow the browser
  savedAt: 0,
};

const Store = {
  profile: clone(DEFAULT_PROFILE),
  synced: false,  // set by a sync script when the profile is also kept in an account
  migrations: [],
  listeners: [],

  normalize(raw) {
    for (const migrate of this.migrations) raw = migrate(raw) || raw;
    if (!raw || raw.v !== PROFILE_VERSION) return null;
    return Object.assign(clone(DEFAULT_PROFILE), raw);
  },

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const p = saved && this.normalize(JSON.parse(saved));
      if (p) this.profile = p;
    } catch (e) { /* storage unavailable or corrupted: keep the default */ }
  },

  writeLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.profile)); } catch (e) { /* private mode, quota… */ }
  },

  save() {
    this.profile.savedAt = Date.now();
    this.writeLocal();
    for (const fn of this.listeners) fn(clone(this.profile));
  },

  onSave(fn) { this.listeners.push(fn); },

  replace(raw) {
    const p = this.normalize(clone(raw));
    if (!p) return false;
    this.profile = p;
    this.writeLocal();
    return true;
  },

  reset() {
    this.profile = clone(DEFAULT_PROFILE);
    this.profile.lang = LANG;
    this.save();
  },

  /* opening drills and puzzles: bucket is 'openings' or 'tactics' */
  exercise(bucket, id) {
    return this.profile[bucket][id] || { ok: 0, tries: 0 };
  },
  recordExercise(bucket, id, clean) {
    const s = this.exercise(bucket, id);
    s.tries++;
    if (clean) s.ok++;
    s.at = Date.now();
    this.profile[bucket][id] = s;
    this.save();
  },
  solvedCount(bucket, list) {
    return list.filter(x => this.exercise(bucket, x.id).ok).length;
  },

  addGame(entry) {
    const h = this.profile.history;
    h.push(entry);
    if (h.length > HISTORY_SIZE) h.splice(0, h.length - HISTORY_SIZE);
    this.save();
  },
};
