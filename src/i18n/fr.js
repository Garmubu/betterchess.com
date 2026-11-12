/* Français */
I18N.fr = {
  name: "Français",
  pieces: "RDTFC", // letters for King, Queen, Rook, Bishop, Knight in move notation
  decimal: ",",

  ui: {
    "nav.play": "Jouer",
    "nav.openings": "Ouvertures",
    "nav.profile": "Profil",
    "nav.tactics": "Tactiques",

    "language": "Langue",

    "sound.on": "Son : oui",
    "sound.off": "Son : non",

    "engine.builtin": "Moteur intégré",
    "engine.short": "Moteur",
    "engine.noteSf": "Adversaire et analyse : {name}, dans ton navigateur.",
    "engine.noteMini": "Stockfish n'est pas chargé pour l'instant. Le moteur intégré, plus faible (environ 1500 au maximum), prend le relais.",

    "board.promotion": "Promotion",
    "board.cancel": "Annuler",

    "piece.n": "Cavalier",
    "piece.b": "Fou",
    "piece.r": "Tour",
    "piece.q": "Dame",
    "piece.k": "Roi",
    "piece.p": "Pion",

    "class.brilliant": "Brillant",
    "class.great": "Très bon coup",
    "class.best": "Meilleur coup",
    "class.excellent": "Excellent",
    "class.good": "Bon coup",
    "class.book": "Théorique",
    "class.inaccuracy": "Imprécision",
    "class.mistake": "Erreur",
    "class.miss": "Occasion manquée",
    "class.blunder": "Gaffe",
    "class.forced": "Coup forcé",

    "comment.brilliant": "Un sacrifice qui tient la route. Le moteur ne trouve pas mieux.",
    "comment.great": "C'était le seul coup qui tenait vraiment la position.",
    "comment.best": "Exactement le coup du moteur.",
    "comment.excellent": "Très proche du meilleur coup.",
    "comment.good": "Jouable, sans plus.",
    "comment.book": "Coup connu de la théorie des ouvertures.",
    "comment.forced": "Tu n'avais qu'un seul coup légal.",
    "comment.inaccuracy": "Il y avait plus précis dans cette position.",
    "comment.mistake": "Ce coup te coûte du terrain.",
    "comment.miss": "Tu avais un coup gagnant et tu l'as laissé passer.",
    "comment.blunder": "Ce coup perd gros.",

    "reason.mate": "échec et mat",
    "reason.stalemate": "pat",
    "reason.material": "matériel insuffisant",
    "reason.fifty": "règle des 50 coups",
    "reason.repetition": "répétition",
    "reason.resign": "abandon",
    "reason.time": "temps écoulé",

    "game.thinking": "réfléchit",
    "game.you": "Toi",
    "game.ranked": "classé",
    "game.casual": "amical",
    "game.movesAria": "Coups joués",
    "game.movesEmpty": "Les coups s'affichent ici.",
    "game.live": "Revenir à la position actuelle",
    "game.undo": "Reprendre le coup",
    "game.resign": "Abandonner",
    "game.resignConfirm": "Confirmer l'abandon",

    "coach.ranked": "Partie classée",
    "coach.noCoach": "Sans entraîneur",
    "coach.noFeedback": "Pas de retour pendant la partie. Le bilan de tes coups s'affiche à la fin.",
    "coach.coach": "Entraîneur",
    "coach.analysing": "Analyse de ton coup…",
    "coach.over": "Partie terminée.",
    "coach.yourTurn": "À toi de jouer. Chaque coup est noté dès que tu le joues.",
    "coach.engineThinks": "Le moteur réfléchit.",

    "result.win": "Victoire",
    "result.loss": "Défaite",
    "result.draw": "Partie nulle",
    "result.newElo": "Nouvel Elo : <b>{elo}</b>. Le prochain adversaire jouera à ce niveau.",
    "result.accuracy": "Précision de tes coups : <b>{n} %</b>",
    "result.review": "Touche un coup dans la liste pour revoir la position.",
    "result.again": "Rejouer",
    "result.back": "Retour",

    "lobby.rankedLabel": "Classé · rapide 10 min",
    "lobby.record": "record {n}",
    "lobby.wdl": "{w} V · {d} N · {l} D",
    "lobby.rankedText": "Sans entraîneur. Le moteur joue à ton Elo : une victoire rapporte {k} points, une défaite en coûte {k}.",
    "lobby.placement": "Les 10 premières parties comptent davantage pour trouver ton niveau plus vite ({n} restantes).",
    "lobby.rankedBtn": "Jouer une partie classée",
    "lobby.coachLabel": "Avec l'entraîneur · amical",
    "lobby.coachTitle": "Chaque coup noté",
    "lobby.coachText": "Dès que tu joues, tu sais si c'était brillant, le meilleur coup, une imprécision ou une gaffe. Le bon coup n'est jamais montré.",
    "lobby.coachSub": "Moteur à ton niveau ({elo}), sans Elo en jeu. Tu peux reprendre tes coups.",
    "lobby.coachBtn": "Jouer avec l'entraîneur",
    "lobby.customLabel": "Partie personnalisée · sans Elo",
    "lobby.level": "Niveau du moteur",
    "lobby.color": "Couleur",
    "lobby.white": "Blancs",
    "lobby.random": "Hasard",
    "lobby.black": "Noirs",
    "lobby.coachSwitch": "Entraîneur en direct",
    "lobby.customBtn": "Lancer la partie",

    "openings.daily": "Ouverture du jour",
    "openings.youPlay": "Tu joues les {side}. {n} coups à retrouver.",
    "openings.train": "S'entraîner sur cette ouverture",
    "openings.all": "Toutes les ouvertures",
    "openings.doneCount": "{a} / {b} réussies",
    "openings.withWhite": "Avec les Blancs",
    "openings.withBlack": "Avec les Noirs",
    "openings.moves": "{n} coups",
    "openings.ok": "réussie ×{n}",
    "openings.retry": "à revoir",
    "openings.new": "nouvelle",

    "drill.good": "Bien joué : {san}",
    "drill.wrong": "{san} n'est pas le coup de cette ligne. Réessaie.",
    "drill.finished": "ligne terminée",
    "drill.clean": "Sans faute. Ouverture validée.",
    "drill.errors": ["{n} erreur", "{n} erreurs"],
    "drill.withHelp": ", avec aide",
    "drill.replay": ". Rejoue-la pour la valider.",
    "drill.youPlay": "tu joues les {side}",
    "drill.prompt": "Joue le coup de la ligne.",
    "drill.again": "Rejouer la ligne",
    "drill.continue": "Continuer contre le moteur",
    "drill.others": "Autres ouvertures",
    "drill.hint": "Indice",
    "drill.show": "Montrer le coup",
    "drill.hideLine": "Cacher la ligne",
    "drill.showLine": "Voir toute la ligne",
    "drill.restart": "Recommencer",
    "drill.quit": "Quitter",

    "tactics.daily": "Tactique du jour",
    "tactics.intro": "Chaque exercice part d'une position de milieu de partie. Trouve la suite gagnante, puis lis pourquoi elle marche.",
    "tactics.solve": "Résoudre",
    "tactics.themes": "Thèmes",
    "tactics.count": "{a} / {b} résolues",
    "tactics.ok": "résolue ×{n}",
    "tactics.retry": "à revoir",
    "tactics.new": "nouvelle",
    "tactics.puzzle": "Exercice {n}",
    "tactics.mateW": "Les Blancs jouent et font mat en {n}.",
    "tactics.mateB": "Les Noirs jouent et font mat en {n}.",
    "tactics.winW": "Les Blancs jouent et gagnent du matériel.",
    "tactics.winB": "Les Noirs jouent et gagnent du matériel.",
    "tactics.good": "Bien vu : {san}",
    "tactics.wrong": "{san} ne marche pas ici. Réessaie.",
    "tactics.solved": "Tactique résolue",
    "tactics.clean": "Trouvée sans erreur.",
    "tactics.errors": ["Résolue avec {n} erreur.", "Résolue avec {n} erreurs."],
    "tactics.helped": "Résolue avec de l'aide.",
    "tactics.hidden": "Thème caché",
    "tactics.reveal": "Voir le thème",
    "tactics.theme": "Thème : {th}",
    "tactics.next": "Exercice suivant",
    "tactics.list": "Tous les exercices",

    "theme.fork": "Fourchette",
    "theme.pin": "Clouage",
    "theme.skewer": "Enfilade",
    "theme.discovered": "Attaque à la découverte",
    "theme.double": "Échec double",
    "theme.backrank": "Mat du couloir",
    "theme.smothered": "Mat à l'étouffée",
    "theme.decoy": "Attraction",
    "theme.promotion": "Promotion",
    "theme.removal": "Élimination du défenseur",
    "theme.kiss": "Mat du baiser",

    "tag.attack": "Agressif",
    "tag.sharp": "Tranchant",
    "tag.gambit": "Gambit",
    "tag.solid": "Solide",
    "tag.positional": "Jeu lent",
    "tag.counter": "Contre-attaque",
    "tag.system": "Schéma facile",
    "tag.open": "Jeu ouvert",
    "tag.closed": "Jeu fermé",

    "learn.title": "Comprendre l'ouverture",
    "learn.titleTheme": "Comprendre la tactique",
    "learn.plan": "Le plan",
    "learn.strengths": "Forces",
    "learn.weaknesses": "Faiblesses",
    "learn.pieces": "Pièces clés",
    "learn.what": "Le principe",
    "learn.why": "À quoi ça sert",
    "learn.when": "Quand la chercher",

    "profile.elo": "Elo classé",
    "profile.graphEmpty": "Le graphique apparaît après ta première partie classée.",
    "profile.graphAria": "Évolution de l'Elo, de {a} à {b}",
    "profile.games": "Parties",
    "profile.best": "Record",
    "profile.openings": "Ouvertures",
    "profile.wdl": "{w} victoires · {d} nulles · {l} défaites",
    "profile.last": "Dernières parties",
    "profile.none": "Aucune partie pour l'instant.",
    "profile.row": "{color} contre {opp} · {n} coups · {reason}",
    "profile.synced": "Progression enregistrée sur ton compte : tu la retrouves sur tes autres appareils.",
    "profile.local": "Progression enregistrée dans ce navigateur.",
    "profile.reset": "Remettre le profil à zéro",
    "profile.resetConfirm": "Confirmer la remise à zéro",
    "profile.resetDone": "Profil remis à zéro",
    "profile.tactics": "Tactiques"
  },

  /* opening id: [name, one-line idea] */
  openings: {
    italian: ["Partie italienne", "Développement rapide, fou braqué sur f7, puis c3 et d3 pour préparer une poussée d4 au bon moment."],
    "ruy-lopez": ["Partie espagnole", "Pression durable sur le cavalier c6, qui défend e5. On roque vite et on garde le fou sur la diagonale a2-g8."],
    scotch: ["Partie écossaise", "On ouvre le centre tout de suite avec d4 pour gagner de l'espace et des lignes ouvertes."],
    "four-knights": ["Partie des quatre cavaliers", "Développement symétrique et solide, puis d4 pour ouvrir le jeu sans prendre de risque."],
    "evans-gambit": ["Gambit Evans", "On offre le pion b4 pour gagner des temps sur le fou et construire un grand centre avec c3 et d4."],
    "fried-liver": ["Attaque Fegatello", "Sacrifice du cavalier en f7 pour sortir le roi noir au centre. À connaître pour punir Cxd5."],
    "vienna-gambit": ["Gambit viennois", "Comme un gambit du roi retardé : Cc3 d'abord, puis f4 pour attaquer le centre noir."],
    "kings-gambit": ["Gambit du roi", "On donne le pion f pour dévier e5, ouvrir la colonne f et attaquer vite. Très tranchant."],
    "sicilian-alapin": ["Sicilienne Alapin", "Contre la Sicilienne : c3 prépare d4 pour garder un centre de pions, sans la théorie des lignes ouvertes."],
    "smith-morra": ["Gambit Smith-Morra", "Un pion contre une avance de développement et les colonnes c et d ouvertes pour les tours."],
    "french-advance": ["Française, variante d'avance", "e5 gagne de l'espace et enferme le fou c8. Il faut ensuite tenir d4, que les Noirs attaquent de partout."],
    "caro-kann-advance": ["Caro-Kann, variante d'avance", "Espace au centre et développement calme : Cf3, Fe2, roque, puis on réagit à la poussée c5."],
    "queens-gambit-declined": ["Gambit dame refusé", "c4 attaque le centre noir. On développe naturellement et on cloue le cavalier f6 avec Fg5."],
    "queens-gambit-accepted": ["Gambit dame accepté", "Les Noirs prennent c4 ; on récupère le pion tranquillement avec e3 et Fxc4, avec un bon centre."],
    london: ["Système de Londres", "Un schéma à jouer contre presque tout : Ff4, e3, c3, Cd2, Cgf3. Solide et facile à retenir."],
    catalan: ["Ouverture catalane", "Gambit dame avec le fou en fianchetto : pression à long terme sur la grande diagonale."],
    english: ["Ouverture anglaise", "Une Sicilienne avec un temps de plus : contrôle de d5 depuis l'aile et fianchetto du fou roi."],
    "kings-indian-attack": ["Attaque est-indienne", "Même mise en place quel que soit le jeu noir : fianchetto, roque, d3, Cbd2 puis e4."],
    "sicilian-najdorf": ["Sicilienne Najdorf", "a6 contrôle b5 et prépare e5 ou b5. La défense la plus ambitieuse contre 1.e4."],
    "sicilian-dragon": ["Sicilienne Dragon", "Le fou g7 tire sur toute la grande diagonale. Jeu très tactique avec roques opposés."],
    "sicilian-sveshnikov": ["Sicilienne Sveshnikov", "e5 chasse le cavalier au prix d'un trou en d5, en échange d'un jeu de pièces très actif."],
    french: ["Défense française", "Structure solide : on laisse l'espace aux Blancs puis on attaque leur chaîne de pions avec c5."],
    "caro-kann": ["Défense Caro-Kann", "Comme la Française, mais le fou c8 sort avant e6. Très solide, peu de faiblesses."],
    scandinavian: ["Défense scandinave", "On casse le centre dès le premier coup. La dame sort tôt mais trouve un bon poste en a5."],
    petrov: ["Défense Petrov", "Contre-attaque sur e4 plutôt que défense de e5. Attention : d6 avant de reprendre en e4."],
    "two-knights": ["Défense des deux cavaliers", "Contre Cg5 : d5 puis Ca5, on donne un pion pour l'initiative au lieu de tomber dans le Fegatello."],
    philidor: ["Défense Philidor", "e5 défendu par d6 : position un peu passive mais très solide, avec peu de théorie."],
    pirc: ["Défense Pirc", "On laisse le centre aux Blancs pour l'attaquer plus tard, avec le fou en fianchetto."],
    alekhine: ["Défense Alekhine", "Le cavalier provoque l'avance des pions blancs pour en faire des cibles ensuite."],
    "kings-indian": ["Défense est-indienne", "Les Blancs prennent le centre, les Noirs frappent avec e5 puis attaquent à l'aile roi avec f5."],
    "nimzo-indian": ["Défense nimzo-indienne", "Fb4 cloue le cavalier et empêche e4. On est prêt à donner la paire de fous pour abîmer les pions."],
    "queens-indian": ["Défense ouest-indienne", "Contrôle de e4 à distance avec le fou dame. Fa6 gêne le développement blanc en visant c4."],
    grunfeld: ["Défense Grünfeld", "On laisse les Blancs bâtir un gros centre, puis on le bombarde avec Fg7 et c5."],
    slav: ["Défense slave", "c6 soutient d5 sans enfermer le fou c8, qui sort en f5 avant e6."],
    dutch: ["Défense hollandaise", "f5 contrôle e4 et annonce une attaque à l'aile roi. Variante de Leningrad avec fianchetto."],
    benko: ["Gambit Benko", "Un pion contre une pression durable sur les colonnes a et b, même en finale."]
  },

  learn: {
    /* opening id: [plan, strengths, weaknesses, key pieces] */
    openings: {
      italian: [
        "Développer vite, roquer, puis préparer d4 avec c3 pour prendre le centre. Le fou c4 vise f7, le point le plus fragile du camp noir.",
        "Des coups naturels, faciles à comprendre, et une pression immédiate sur f7.",
        "Si les Noirs jouent juste, la partie devient calme et équilibrée. Le fou c4 peut être échangé par Ca5 ou Fe6.",
        "Le fou c4, braqué sur f7, et le cavalier f3 qui soutient d4 et peut sauter en g5."
      ],
      "ruy-lopez": [
        "Attaquer le défenseur de e5 (le cavalier c6), roquer, jouer Te1 puis c3 et d4 pour bâtir un centre solide. Une pression lente qui dure toute la partie.",
        "Un avantage durable, sans risque, et des plans très riches au milieu de partie.",
        "Beaucoup de théorie. Le fou se fait chasser par a6 et b5, et l'avantage met du temps à se concrétiser.",
        "Le fou b5, qui finit en b3 sur la diagonale de f7, et la tour e1 qui soutient le pion e4."
      ],
      scotch: [
        "Ouvrir le centre tout de suite avec d4 pour échanger le pion e5 et jouer avec des pièces actives et de l'espace.",
        "Un jeu clair, avec peu de pions bloqués et une initiative rapide.",
        "Le centre ouvert active aussi les pièces noires. Après Cxc6 bxc6, les Noirs récupèrent un bon centre de pions.",
        "Le cavalier d4 au centre, puis la dame et les fous sur les lignes ouvertes."
      ],
      "four-knights": [
        "Tout développer de façon symétrique, roquer, puis ouvrir le jeu avec d4 une fois le roi en sécurité.",
        "Très sûr, logique simple (cavaliers avant fous) et peu de pièges.",
        "Peu ambitieux : la position reste souvent égale et symétrique.",
        "Les cavaliers, qui contrôlent d5 et e4, et le fou qui arrive en d3."
      ],
      "evans-gambit": [
        "Donner le pion b4 pour gagner deux temps (c3 puis d4), bâtir un gros centre et attaquer le roi noir resté au milieu.",
        "Une initiative énorme, des diagonales ouvertes vers f7 et beaucoup de pièges pour l'adversaire.",
        "Un pion de moins : si l'attaque s'éteint, la finale est mauvaise.",
        "Le fou c4 et la dame (souvent en b3), qui visent f7 ensemble, puis une tour sur la colonne e."
      ],
      "fried-liver": [
        "Punir 5...Cxd5 en sacrifiant le cavalier en f7 pour tirer le roi noir au centre et l'attaquer avec la dame, le fou et les cavaliers.",
        "Une attaque très forte si la défense n'est pas précise. Idéal pour gagner vite à petit niveau.",
        "Une pièce de moins. Contre 5...Ca5 (la bonne réponse), le sacrifice n'existe pas.",
        "La dame en f3 et le fou c4 qui clouent le cavalier d5, plus le cavalier c3 qui ajoute de la pression."
      ],
      "vienna-gambit": [
        "Contrôler d5 avec Cc3, puis jouer f4 pour casser e5 et ouvrir la colonne f vers le roi noir.",
        "Une attaque sur l'aile roi soutenue par la tour f.",
        "Le roi blanc est affaibli sur la diagonale g1-a7, et la riposte d5 frappe le centre.",
        "La tour f1 sur la colonne f, et le cavalier c3."
      ],
      "kings-gambit": [
        "Donner le pion f pour dévier e5, prendre le centre avec d4 et attaquer f7 par la colonne f.",
        "Une initiative immédiate et des positions chaotiques où le joueur le mieux préparé gagne.",
        "Le roi blanc est exposé, il y a un pion de moins, et plusieurs lignes sont réfutées.",
        "La tour f1 sur la colonne ouverte, le fou c4 vers f7, et les cavaliers qui sautent en e5 ou g5."
      ],
      "sicilian-alapin": [
        "Contre la Sicilienne, jouer c3 puis d4 pour garder un centre de pions sans entrer dans les lignes favorites des Noirs.",
        "Évite énormément de théorie, avec un centre solide et un jeu simple.",
        "c3 prend la case du cavalier b1, et les Noirs égalisent facilement avec Cf6 ou d5.",
        "Le pion d4, pivot du centre, et le fou c4 ou d3 qui vise le roque."
      ],
      "smith-morra": [
        "Offrir le pion c pour développer toutes les pièces très vite et utiliser les colonnes c et d ouvertes.",
        "Avance de développement, attaques rapides et pièges nombreux.",
        "Un pion de moins : si les Noirs finissent leur développement sans casse, l'avantage disparaît.",
        "Les tours en c1 et d1, le fou c4 vers f7, et le cavalier qui saute en d5."
      ],
      "french-advance": [
        "Pousser e5 pour gagner de l'espace et enfermer le fou c8, défendre la chaîne d4-e5 puis attaquer à l'aile roi.",
        "De l'espace, un plan clair et une attaque naturelle sur le roque.",
        "d4 est attaqué de partout (c5, Cc6, Db6) : si la chaîne cède, le centre s'écroule.",
        "Le cavalier f3 qui défend d4, et le fou d3 tourné vers h7."
      ],
      "caro-kann-advance": [
        "Prendre l'espace avec e5, se développer tranquillement, puis réagir à la poussée c5 des Noirs.",
        "De l'espace et un jeu sans risque.",
        "Les Noirs ont déjà sorti leur bon fou en f5 et leur structure reste très solide.",
        "Le cavalier f3 et le fou e3, qui tiennent d4."
      ],
      "queens-gambit-declined": [
        "Attaquer le centre noir avec c4, développer naturellement, puis clouer le cavalier f6 avec Fg5 pour gagner la bataille du centre.",
        "Une pression durable sans prendre de risque.",
        "Un jeu lent face à une défense noire très solide.",
        "Le fou g5 qui cloue f6, et les cavaliers c3 et f3 qui visent d5 et e5."
      ],
      "queens-gambit-accepted": [
        "Les Noirs prennent c4 : on récupère le pion calmement avec e3 et Fxc4, puis on profite du centre.",
        "Développement facile et centre fort.",
        "Les Noirs ont un jeu libre et frappent d4 avec c5.",
        "Le fou c4 très actif et le pion d4."
      ],
      london: [
        "Jouer le même schéma contre presque tout (Ff4, e3, c3, Cd2, Cgf3), puis lancer une attaque lente à l'aile roi.",
        "Très peu de théorie et une structure solide : parfait pour débuter.",
        "Peu ambitieux. Un adversaire averti attaque b2 avec Db6 et chasse le fou f4.",
        "Le fou f4, sorti avant e3, et le cavalier qui s'installe en e5."
      ],
      catalan: [
        "Placer le fou en g2 sur la grande diagonale et exercer une pression lente sur le centre et l'aile dame.",
        "Pression à long terme et roi blanc très sûr.",
        "Jeu lent. Le pion c4 peut être pris et long à récupérer.",
        "Le fou g2, braqué vers b7, et la dame en c2."
      ],
      english: [
        "Contrôler d5 depuis l'aile avec c4 et Cc3, mettre le fou roi en fianchetto, et adapter son plan au jeu noir.",
        "Flexible, avec beaucoup moins de théorie que 1.e4 ou 1.d4.",
        "Moins direct : les Noirs peuvent prendre le centre avec e5 et d5.",
        "Le fou g2 et le cavalier c3, tous deux tournés vers d5."
      ],
      "kings-indian-attack": [
        "Même mise en place quoi que fassent les Noirs (fianchetto, roque, d3, Cbd2), puis e4-e5 et attaque à l'aile roi.",
        "Facile à apprendre, avec un plan clair.",
        "Un peu passif si les Noirs prennent l'espace au centre.",
        "Le fou g2, et les cavaliers qui foncent vers le roi noir après e5."
      ],
      "sicilian-najdorf": [
        "a6 contrôle b5. Les Noirs gardent un pion central de plus et contre-attaquent à l'aile dame par la colonne c.",
        "Ambitieux : on joue pour gagner avec les Noirs.",
        "Énormément de théorie, et le roi noir peut être attaqué très vite.",
        "La tour sur la colonne c, le fou en e6 ou e7, et le cavalier qui vise c4."
      ],
      "sicilian-dragon": [
        "Fianchetto en g7, roque, puis attaque à l'aile dame par la colonne c pendant que les Blancs attaquent l'aile roi.",
        "Le fou g7 est redoutable et la contre-attaque arrive vite.",
        "Si les Blancs ouvrent la colonne h (h4-h5), le roi noir est en danger : c'est une course de vitesse.",
        "Le fou g7, à ne jamais échanger sans raison, et la tour en c8."
      ],
      "sicilian-sveshnikov": [
        "Pousser e5 pour chasser le cavalier d4, accepter un trou en d5 en échange de pièces très actives et de la poussée f5.",
        "Dynamique, avec beaucoup d'initiative.",
        "La case d5 est faible et le pion d6 est en retard.",
        "Le fou de cases noires et le pion f5. Il faut empêcher un cavalier blanc de s'installer en d5."
      ],
      french: [
        "Structure solide e6-d5 : on laisse l'espace aux Blancs, puis on attaque la base de leur chaîne de pions avec c5 et f6.",
        "Structure robuste et plan clair : attaquer la chaîne.",
        "Le fou c8 est enfermé derrière e6 et les Noirs manquent d'espace.",
        "Le pion c5 et la dame en b6 contre d4. Le fou c8 doit être libéré (b6 puis Fa6)."
      ],
      "caro-kann": [
        "Jouer c6-d5, sortir le fou c8 avant e6, garder une structure sans faiblesse et jouer calmement.",
        "Très solide, avec des finales souvent favorables.",
        "Un peu passif, avec moins de chances de gagner vite.",
        "Le fou f5 ou g6, sorti avant d'être enfermé, et le cavalier d7-f6."
      ],
      scandinavian: [
        "Casser le centre dès le premier coup : la dame reprend en d5, se replie en a5, puis développement rapide avec c6 et Ff5.",
        "Peu de théorie et une structure simple.",
        "La dame sortie tôt fait gagner des temps aux Blancs.",
        "La dame en a5 et le fou en f5."
      ],
      petrov: [
        "Contre-attaquer e4 au lieu de défendre e5, pour une position symétrique et très solide.",
        "Très difficile à battre.",
        "Peu de chances de gagner. Piège : reprendre en e4 avant d6 fait perdre la dame.",
        "Le cavalier e4 actif, puis les fous."
      ],
      "two-knights": [
        "Cf6 attaque e4. Contre Cg5, rendre un pion avec d5 puis Ca5 pour prendre l'initiative.",
        "Jeu actif et piégeux.",
        "Un pion de moins, dans des positions tactiques qu'il faut connaître.",
        "Le cavalier a5 qui chasse le fou, puis la dame et les fous actifs."
      ],
      philidor: [
        "Soutenir e5 avec d6, développer derrière et garder une position compacte.",
        "Peu de théorie et très solide.",
        "Passif : peu d'espace et le fou f8 est un peu enfermé.",
        "Les cavaliers d7 et f6, et le pion e5 qu'il faut tenir."
      ],
      pirc: [
        "Laisser le centre aux Blancs, puis l'attaquer avec e5 ou c5, avec le fou en g7.",
        "Flexible, avec du contre-jeu.",
        "Si on attend trop, les pions blancs avancent et écrasent la position.",
        "Le fou g7 et les pions c5 et e5 qui frappent le centre."
      ],
      alekhine: [
        "Provoquer l'avance des pions blancs avec le cavalier, pour en faire des cibles ensuite.",
        "Positions déséquilibrées qui surprennent l'adversaire.",
        "Le cavalier perd du temps, et si les Blancs consolident, leur espace pèse.",
        "Le cavalier (d5 puis b6) et le fou g4 qui gêne le cavalier f3."
      ],
      "kings-indian": [
        "Laisser le centre, frapper avec e5, puis attaquer à l'aile roi avec f5-f4 et g5 pendant que les Blancs attaquent l'aile dame.",
        "Une attaque très dangereuse contre le roi blanc.",
        "Course de vitesse : l'aile dame noire est fragile.",
        "Le fou g7, même s'il paraît enfermé, le pion f5 et les cavaliers qui filent vers l'aile roi."
      ],
      "nimzo-indian": [
        "Fb4 cloue le cavalier c3 et empêche e4. On échange souvent ce fou pour doubler les pions blancs, puis on joue contre eux.",
        "Structure blanche abîmée et plan clair.",
        "On cède la paire de fous.",
        "Les cavaliers, très bons dans les positions fermées contre les fous, et le fou b4."
      ],
      "queens-indian": [
        "Contrôler e4 à distance avec le fou en fianchetto. Fa6 gêne la poussée c4.",
        "Très solide.",
        "Un peu passif.",
        "Le fou b7 ou a6."
      ],
      grunfeld: [
        "Laisser les Blancs bâtir un gros centre, puis le bombarder avec Fg7, c5 et Cc6.",
        "Dynamique, avec une forte pression sur d4.",
        "Si le centre blanc tient, il écrase la position noire.",
        "Le fou g7 sur la grande diagonale et le pion c5."
      ],
      slav: [
        "c6 soutient d5 sans enfermer le fou c8, qui sort en f5 avant e6.",
        "Très solide.",
        "Un peu passif, avec de la théorie.",
        "Le fou f5 et le pion c6."
      ],
      dutch: [
        "f5 contrôle e4 et prépare une attaque à l'aile roi, avec le fou en g7 (variante Leningrad).",
        "Positions déséquilibrées et jeu pour gagner.",
        "Le roi noir est affaibli (diagonale e8-h5) et la case e6 aussi.",
        "Le fou g7 et le pion f5."
      ],
      benko: [
        "Donner le pion b pour ouvrir les colonnes a et b et faire pression durablement, même en finale.",
        "Une pression à long terme facile à jouer.",
        "Un pion de moins.",
        "Les tours en a8 et b8, et le fou g7."
      ]
    },
    /* theme id: [the idea, what it is for, when to look for it, key pieces] */
    themes: {
      fork: [
        "Une seule pièce attaque deux cibles à la fois. L'adversaire ne peut en sauver qu'une.",
        "Gagner du matériel, souvent avec un échec pour que l'adversaire n'ait pas le temps de réagir.",
        "Quand deux pièces adverses (ou le roi et une pièce) sont à un saut de cavalier ou sur une même ligne de ta dame.",
        "Le cavalier, qui attaque des cases de couleurs différentes et ne peut pas être bloqué, et le pion."
      ],
      pin: [
        "Une pièce ne peut pas bouger parce qu'elle protège une pièce plus importante derrière elle.",
        "Immobiliser une pièce, puis l'attaquer une deuxième fois pour la gagner.",
        "Quand une pièce adverse est sur la même ligne que son roi ou sa dame.",
        "Le fou et la tour, qui agissent à distance sur les diagonales et les colonnes."
      ],
      skewer: [
        "L'inverse du clouage : on attaque la pièce la plus précieuse, elle doit bouger, et on prend celle qui était derrière.",
        "Gagner la pièce cachée derrière le roi ou la dame.",
        "Quand le roi ou la dame est aligné devant une autre pièce.",
        "Le fou et la tour, qui attaquent à travers les lignes."
      ],
      discovered: [
        "Une pièce s'écarte et démasque l'attaque d'une autre pièce derrière elle. On crée deux menaces en un seul coup.",
        "Gagner du matériel : la pièce qui bouge fait sa propre menace pendant que l'autre attaque.",
        "Quand une de tes pièces cache la ligne d'un fou, d'une tour ou de la dame vers une cible.",
        "La pièce qui bouge (souvent le cavalier) et la pièce à longue portée qui se démasque."
      ],
      double: [
        "Une attaque à la découverte où les deux pièces font échec en même temps. Le seul moyen de s'en sortir est de bouger le roi.",
        "Mater ou gagner beaucoup de matériel : on ne peut ni bloquer ni prendre deux pièces à la fois.",
        "Quand ton cavalier ou ton fou est sur la ligne entre ta tour et le roi adverse.",
        "Le cavalier, qui donne échec en sautant, et la tour qui se démasque."
      ],
      backrank: [
        "La tour ou la dame mate le roi sur sa dernière rangée, coincé derrière ses propres pions.",
        "Mater, ou forcer l'adversaire à céder du matériel pour éviter le mat.",
        "Quand le roi adverse n'a pas de case de fuite et que sa dernière rangée est mal défendue.",
        "Les tours et la dame, qui contrôlent toute une rangée."
      ],
      smothered: [
        "Le cavalier mate un roi entouré de ses propres pièces, qui l'étouffent.",
        "Mater, souvent après avoir sacrifié la dame pour obliger une pièce à boucher la dernière case.",
        "Quand le roi adverse est dans un coin entouré de ses pièces et que ton cavalier peut atteindre la case du mat (f7 ou h6 contre un roi en h8).",
        "Le cavalier, la seule pièce qui saute par-dessus les autres, aidé par la dame."
      ],
      decoy: [
        "On sacrifie une pièce pour attirer une pièce adverse (souvent le roi) sur une mauvaise case.",
        "Mettre la pièce adverse là où une fourchette ou un mat devient possible.",
        "Quand une fourchette ou un mat existe mais que la pièce adverse n'est pas encore sur la bonne case.",
        "La tour ou la dame qui se sacrifient, puis le cavalier qui fourchette."
      ],
      promotion: [
        "Un pion arrive sur la dernière rangée et devient une dame.",
        "Créer une nouvelle dame, souvent en déviant la pièce qui bloquait le pion.",
        "Quand un de tes pions est sur l'avant-dernière rangée.",
        "Le pion, et la tour qui détourne le défenseur."
      ],
      removal: [
        "On prend ou on chasse la pièce qui défend une case ou une autre pièce importante.",
        "Ouvrir la voie au mat ou gagner la pièce qui n'est plus défendue.",
        "Quand une seule pièce adverse empêche ton attaque de réussir.",
        "Le fou qui échange le défenseur, et la dame qui en profite."
      ],
      kiss: [
        "La dame mate le roi au contact, protégée par une autre pièce.",
        "Mater vite un roi roqué mal défendu.",
        "Quand la dame et une autre pièce visent la même case à côté du roi (h7 ou h2 souvent).",
        "La dame, et le fou qui la soutient de loin."
      ]
    }
  }
};
