/* Tactics themes, in the order they are listed, with the pieces that usually make them work
   (k q r b n p). Names and explanations are translated in src/i18n/<lang>.js. */
const THEMES = {
  fork: { keyPieces: 'np' },
  pin: { keyPieces: 'br' },
  skewer: { keyPieces: 'br' },
  discovered: { keyPieces: 'nb' },
  double: { keyPieces: 'nr' },
  backrank: { keyPieces: 'rq' },
  smothered: { keyPieces: 'nq' },
  decoy: { keyPieces: 'rn' },
  promotion: { keyPieces: 'pr' },
  removal: { keyPieces: 'bq' },
  kiss: { keyPieces: 'qb' },
};

if (typeof module !== 'undefined') module.exports = THEMES;
