/* Translations. Every language lives in its own file (src/i18n/<code>.js) and registers itself here.
 * To add a language: copy en.js to <code>.js, translate the values (keep the keys), then add
 * a <script> line for it in src/index.html. The language menu picks it up automatically,
 * and `npm test` checks that no key is missing.
 */
const I18N = {};
let LANG = 'en';

/* Browser languages in order of preference; English when none is available. */
function detectLang() {
  const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  for (const p of prefs) {
    const code = String(p).slice(0, 2).toLowerCase();
    if (I18N[code]) return code;
  }
  return 'en';
}

function setLang(code) {
  LANG = I18N[code] ? code : detectLang();
  document.documentElement.lang = LANG;
}

/* t('result.newElo', { elo: 812 }) → "New Elo: 812 …". Falls back to English, then to the key.
   A value given as [singular, plural] is chosen with vars.n. */
function t(key, vars) {
  let s = I18N[LANG].ui[key];
  if (s === undefined) s = I18N.en.ui[key];
  if (s === undefined) return key;
  if (Array.isArray(s)) s = s[vars && vars.n === 1 ? 0 : 1];
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

/* Translated data tables (opening names, explanations), with English as fallback. */
function lookup(path, id) {
  const pick = lang => path.reduce((o, k) => o && o[k], I18N[lang]);
  const table = pick(LANG);
  return (table && table[id]) || pick('en')[id];
}
const openingName = o => lookup(['openings'], o.id)[0];
const openingIdea = o => lookup(['openings'], o.id)[1];
const learnText = (kind, id) => lookup(['learn', kind], id); // kind: 'openings' | 'themes'

/* Piece letters in move notation follow the language, e.g. Nf3 → Cf3 in French. */
function localSan(san) {
  const letters = I18N[LANG].pieces;
  return san.replace(/[KQRBN]/g, c => letters['KQRBN'.indexOf(c)]);
}
const localDecimal = s => s.replace('.', I18N[LANG].decimal);

if (typeof module !== 'undefined') module.exports = I18N;
