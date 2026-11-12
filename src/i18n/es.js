/* Español */
I18N.es = {
  name: "Español",
  pieces: "RDTAC", // letters for King, Queen, Rook, Bishop, Knight in move notation
  decimal: ",",

  ui: {
    "nav.play": "Jugar",
    "nav.openings": "Aperturas",
    "nav.profile": "Perfil",
    "nav.tactics": "Táctica",

    "language": "Idioma",

    "sound.on": "Sonido: sí",
    "sound.off": "Sonido: no",

    "engine.builtin": "Motor integrado",
    "engine.short": "Motor",
    "engine.noteSf": "Rival y análisis: {name}, en tu navegador.",
    "engine.noteMini": "Stockfish no está cargado por ahora. El motor integrado, más débil (unos 1500 como máximo), toma el relevo.",

    "board.promotion": "Promoción",
    "board.cancel": "Cancelar",

    "piece.n": "Caballo",
    "piece.b": "Alfil",
    "piece.r": "Torre",
    "piece.q": "Dama",
    "piece.k": "Rey",
    "piece.p": "Peón",

    "class.brilliant": "Brillante",
    "class.great": "Muy buena",
    "class.best": "Mejor jugada",
    "class.excellent": "Excelente",
    "class.good": "Buena",
    "class.book": "De libro",
    "class.inaccuracy": "Imprecisión",
    "class.mistake": "Error",
    "class.miss": "Ocasión perdida",
    "class.blunder": "Error grave",
    "class.forced": "Forzada",

    "comment.brilliant": "Un sacrificio que funciona. El motor no encuentra nada mejor.",
    "comment.great": "Era la única jugada que sostenía de verdad la posición.",
    "comment.best": "Exactamente la jugada del motor.",
    "comment.excellent": "Muy cerca de la mejor jugada.",
    "comment.good": "Jugable, sin más.",
    "comment.book": "Jugada conocida de la teoría de aperturas.",
    "comment.forced": "Solo tenías una jugada legal.",
    "comment.inaccuracy": "Había algo más preciso en esta posición.",
    "comment.mistake": "Esta jugada te hace perder terreno.",
    "comment.miss": "Tenías una jugada ganadora y la dejaste pasar.",
    "comment.blunder": "Esta jugada pierde mucho.",

    "reason.mate": "jaque mate",
    "reason.stalemate": "ahogado",
    "reason.material": "material insuficiente",
    "reason.fifty": "regla de las 50 jugadas",
    "reason.repetition": "repetición",
    "reason.resign": "abandono",
    "reason.time": "tiempo agotado",

    "game.thinking": "pensando",
    "game.you": "Tú",
    "game.ranked": "clasificatoria",
    "game.casual": "amistosa",
    "game.movesAria": "Jugadas realizadas",
    "game.movesEmpty": "Las jugadas aparecerán aquí.",
    "game.live": "Volver a la posición actual",
    "game.undo": "Deshacer jugada",
    "game.resign": "Abandonar",
    "game.resignConfirm": "Confirmar el abandono",

    "coach.ranked": "Partida clasificatoria",
    "coach.noCoach": "Sin entrenador",
    "coach.noFeedback": "Sin comentarios durante la partida. El balance de tus jugadas aparece al final.",
    "coach.coach": "Entrenador",
    "coach.analysing": "Analizando tu jugada…",
    "coach.over": "Partida terminada.",
    "coach.yourTurn": "Te toca. Cada jugada se valora en cuanto la haces.",
    "coach.engineThinks": "El motor está pensando.",

    "result.win": "Victoria",
    "result.loss": "Derrota",
    "result.draw": "Tablas",
    "result.newElo": "Nuevo Elo: <b>{elo}</b>. El próximo rival jugará a este nivel.",
    "result.accuracy": "Precisión de tus jugadas: <b>{n} %</b>",
    "result.review": "Toca una jugada de la lista para revisar la posición.",
    "result.again": "Jugar otra vez",
    "result.back": "Volver",

    "lobby.rankedLabel": "Clasificatoria · rápida 10 min",
    "lobby.record": "récord {n}",
    "lobby.wdl": "{w} V · {d} T · {l} D",
    "lobby.rankedText": "Sin entrenador. El motor juega a tu Elo: una victoria da {k} puntos, una derrota quita {k}.",
    "lobby.placement": "Las 10 primeras partidas cuentan más para encontrar tu nivel antes (quedan {n}).",
    "lobby.rankedBtn": "Jugar una clasificatoria",
    "lobby.coachLabel": "Con el entrenador · amistosa",
    "lobby.coachTitle": "Cada jugada valorada",
    "lobby.coachText": "En cuanto juegas, sabes si fue brillante, la mejor jugada, una imprecisión o un error grave. Nunca se muestra la jugada correcta.",
    "lobby.coachSub": "Motor a tu nivel ({elo}), sin Elo en juego. Puedes deshacer jugadas.",
    "lobby.coachBtn": "Jugar con el entrenador",
    "lobby.customLabel": "Partida personalizada · sin Elo",
    "lobby.level": "Nivel del motor",
    "lobby.color": "Color",
    "lobby.white": "Blancas",
    "lobby.random": "Al azar",
    "lobby.black": "Negras",
    "lobby.coachSwitch": "Entrenador en directo",
    "lobby.customBtn": "Empezar la partida",

    "openings.daily": "Apertura del día",
    "openings.youPlay": "Juegas con {side}. {n} jugadas por encontrar.",
    "openings.train": "Entrenar esta apertura",
    "openings.all": "Todas las aperturas",
    "openings.doneCount": "{a} / {b} superadas",
    "openings.withWhite": "Con blancas",
    "openings.withBlack": "Con negras",
    "openings.moves": "{n} jugadas",
    "openings.ok": "superada ×{n}",
    "openings.retry": "por repasar",
    "openings.new": "nueva",

    "drill.good": "Bien jugado: {san}",
    "drill.wrong": "{san} no es la jugada de esta línea. Inténtalo otra vez.",
    "drill.finished": "línea terminada",
    "drill.clean": "Sin fallos. Apertura validada.",
    "drill.errors": ["{n} error", "{n} errores"],
    "drill.withHelp": ", con ayuda",
    "drill.replay": ". Repítela para validarla.",
    "drill.youPlay": "juegas con {side}",
    "drill.prompt": "Juega la jugada de la línea.",
    "drill.again": "Repetir la línea",
    "drill.continue": "Seguir contra el motor",
    "drill.others": "Otras aperturas",
    "drill.hint": "Pista",
    "drill.show": "Mostrar la jugada",
    "drill.hideLine": "Ocultar la línea",
    "drill.showLine": "Ver toda la línea",
    "drill.restart": "Reiniciar",
    "drill.quit": "Salir",

    "tactics.daily": "Táctica del día",
    "tactics.intro": "Cada ejercicio parte de una posición de medio juego. Encuentra la continuación ganadora y lee por qué funciona.",
    "tactics.solve": "Resolver",
    "tactics.themes": "Temas",
    "tactics.count": "{a} / {b} resueltos",
    "tactics.ok": "resuelto ×{n}",
    "tactics.retry": "por repasar",
    "tactics.new": "nuevo",
    "tactics.puzzle": "Ejercicio {n}",
    "tactics.mateW": "Juegan las blancas y dan mate en {n}.",
    "tactics.mateB": "Juegan las negras y dan mate en {n}.",
    "tactics.winW": "Juegan las blancas y ganan material.",
    "tactics.winB": "Juegan las negras y ganan material.",
    "tactics.good": "Bien visto: {san}",
    "tactics.wrong": "{san} no funciona aquí. Inténtalo otra vez.",
    "tactics.solved": "Táctica resuelta",
    "tactics.clean": "Encontrada sin errores.",
    "tactics.errors": ["Resuelta con {n} error.", "Resuelta con {n} errores."],
    "tactics.helped": "Resuelta con ayuda.",
    "tactics.hidden": "Tema oculto",
    "tactics.reveal": "Ver el tema",
    "tactics.theme": "Tema: {th}",
    "tactics.next": "Siguiente ejercicio",
    "tactics.list": "Todos los ejercicios",

    "theme.fork": "Horquilla",
    "theme.pin": "Clavada",
    "theme.skewer": "Enfilada",
    "theme.discovered": "Ataque a la descubierta",
    "theme.double": "Jaque doble",
    "theme.backrank": "Mate del pasillo",
    "theme.smothered": "Mate de la coz",
    "theme.decoy": "Atracción",
    "theme.promotion": "Coronación",
    "theme.removal": "Eliminación del defensor",
    "theme.kiss": "Mate del beso",

    "tag.attack": "Agresiva",
    "tag.sharp": "Aguda",
    "tag.gambit": "Gambito",
    "tag.solid": "Sólida",
    "tag.positional": "Juego lento",
    "tag.counter": "Contraataque",
    "tag.system": "Esquema fácil",
    "tag.open": "Juego abierto",
    "tag.closed": "Juego cerrado",

    "learn.title": "Entender la apertura",
    "learn.titleTheme": "Entender la táctica",
    "learn.plan": "El plan",
    "learn.strengths": "Puntos fuertes",
    "learn.weaknesses": "Puntos débiles",
    "learn.pieces": "Piezas clave",
    "learn.what": "La idea",
    "learn.why": "Para qué sirve",
    "learn.when": "Cuándo buscarla",

    "profile.elo": "Elo clasificatorio",
    "profile.graphEmpty": "El gráfico aparece tras tu primera partida clasificatoria.",
    "profile.graphAria": "Evolución del Elo, de {a} a {b}",
    "profile.games": "Partidas",
    "profile.best": "Récord",
    "profile.openings": "Aperturas",
    "profile.wdl": "{w} victorias · {d} tablas · {l} derrotas",
    "profile.last": "Últimas partidas",
    "profile.none": "Ninguna partida por ahora.",
    "profile.row": "{color} contra {opp} · {n} jugadas · {reason}",
    "profile.synced": "Progreso guardado en tu cuenta: lo encontrarás en tus otros dispositivos.",
    "profile.local": "Progreso guardado en este navegador.",
    "profile.reset": "Reiniciar el perfil",
    "profile.resetConfirm": "Confirmar el reinicio",
    "profile.resetDone": "Perfil reiniciado",
    "profile.tactics": "Táctica"
  },

  /* opening id: [name, one-line idea] */
  openings: {
    italian: ["Apertura italiana", "Desarrollo rápido, alfil apuntando a f7, luego c3 y d3 para preparar d4 en el momento justo."],
    "ruy-lopez": ["Apertura española", "Presión duradera sobre el caballo de c6, que defiende e5. Enroca pronto y mantén el alfil en la diagonal a2-g8."],
    scotch: ["Apertura escocesa", "Abre el centro enseguida con d4 para ganar espacio y líneas abiertas."],
    "four-knights": ["Apertura de los cuatro caballos", "Desarrollo simétrico y sólido, luego d4 para abrir el juego sin riesgo."],
    "evans-gambit": ["Gambito Evans", "Ofrece el peón de b4 para ganar tiempos sobre el alfil y construir un gran centro con c3 y d4."],
    "fried-liver": ["Ataque Fegatello", "Sacrificio del caballo en f7 para sacar al rey negro al centro. Conócelo para castigar Cxd5."],
    "vienna-gambit": ["Gambito vienés", "Un gambito de rey retrasado: primero Cc3, luego f4 para atacar el centro negro."],
    "kings-gambit": ["Gambito de rey", "Entrega el peón f para desviar e5, abrir la columna f y atacar rápido. Muy agudo."],
    "sicilian-alapin": ["Siciliana Alapin", "Contra la Siciliana: c3 prepara d4 para mantener un centro de peones, sin la teoría de las líneas abiertas."],
    "smith-morra": ["Gambito Smith-Morra", "Un peón a cambio de ventaja de desarrollo y columnas c y d abiertas para las torres."],
    "french-advance": ["Francesa, variante del avance", "e5 gana espacio y encierra el alfil de c8. Después hay que sostener d4, que las negras atacan por todas partes."],
    "caro-kann-advance": ["Caro-Kann, variante del avance", "Espacio en el centro y desarrollo tranquilo: Cf3, Ae2, enroque y luego reaccionar a c5."],
    "queens-gambit-declined": ["Gambito de dama rehusado", "c4 ataca el centro negro. Desarrolla con naturalidad y clava el caballo de f6 con Ag5."],
    "queens-gambit-accepted": ["Gambito de dama aceptado", "Las negras toman en c4; recupera el peón con calma con e3 y Axc4, con un buen centro."],
    london: ["Sistema Londres", "Un esquema contra casi todo: Af4, e3, c3, Cd2, Cgf3. Sólido y fácil de recordar."],
    catalan: ["Apertura catalana", "Gambito de dama con el alfil en fianchetto: presión a largo plazo en la gran diagonal."],
    english: ["Apertura inglesa", "Una Siciliana con un tiempo de más: control de d5 desde el flanco y fianchetto del alfil de rey."],
    "kings-indian-attack": ["Ataque indio de rey", "El mismo esquema juegue lo que juegue el negro: fianchetto, enroque, d3, Cbd2 y luego e4."],
    "sicilian-najdorf": ["Siciliana Najdorf", "a6 controla b5 y prepara e5 o b5. La defensa más ambiciosa contra 1.e4."],
    "sicilian-dragon": ["Siciliana Dragón", "El alfil de g7 domina la gran diagonal. Juego muy táctico con enroques opuestos."],
    "sicilian-sveshnikov": ["Siciliana Sveshnikov", "e5 expulsa al caballo a costa de un agujero en d5, a cambio de piezas muy activas."],
    french: ["Defensa francesa", "Estructura sólida: se cede espacio a las blancas y luego se ataca su cadena de peones con c5."],
    "caro-kann": ["Defensa Caro-Kann", "Como la Francesa, pero el alfil de c8 sale antes de e6. Muy sólida, pocas debilidades."],
    scandinavian: ["Defensa escandinava", "Rompe el centro en la primera jugada. La dama sale pronto pero encuentra un buen sitio en a5."],
    petrov: ["Defensa Petrov", "Contraataque sobre e4 en lugar de defender e5. Cuidado: d6 antes de retomar en e4."],
    "two-knights": ["Defensa de los dos caballos", "Contra Cg5: d5 y luego Ca5, se da un peón por la iniciativa en vez de caer en el Fegatello."],
    philidor: ["Defensa Philidor", "e5 defendido por d6: posición algo pasiva pero muy sólida, con poca teoría."],
    pirc: ["Defensa Pirc", "Se deja el centro a las blancas para atacarlo después, con el alfil en fianchetto."],
    alekhine: ["Defensa Alekhine", "El caballo provoca el avance de los peones blancos para convertirlos en objetivos."],
    "kings-indian": ["Defensa india de rey", "Las blancas toman el centro, las negras golpean con e5 y atacan en el flanco de rey con f5."],
    "nimzo-indian": ["Defensa Nimzoindia", "Ab4 clava el caballo e impide e4. Se acepta ceder la pareja de alfiles para dañar los peones."],
    "queens-indian": ["Defensa india de dama", "Control de e4 a distancia con el alfil de dama. Aa6 molesta el desarrollo blanco apuntando a c4."],
    grunfeld: ["Defensa Grünfeld", "Se deja a las blancas construir un gran centro y luego se bombardea con Ag7 y c5."],
    slav: ["Defensa eslava", "c6 apoya d5 sin encerrar el alfil de c8, que sale a f5 antes de e6."],
    dutch: ["Defensa holandesa", "f5 controla e4 y anuncia un ataque en el flanco de rey. Variante Leningrado con fianchetto."],
    benko: ["Gambito Benko", "Un peón a cambio de presión duradera en las columnas a y b, incluso en el final."]
  },

  learn: {
    /* opening id: [plan, strengths, weaknesses, key pieces] */
    openings: {
      italian: [
        "Desarrollar rápido, enrocar y preparar d4 con c3 para tomar el centro. El alfil de c4 apunta a f7, el punto más débil del campo negro.",
        "Jugadas naturales, fáciles de entender, y presión inmediata sobre f7.",
        "Si las negras juegan bien, la partida se vuelve tranquila e igualada. El alfil de c4 puede cambiarse con Ca5 o Ae6.",
        "El alfil de c4, apuntando a f7, y el caballo de f3, que apoya d4 y puede saltar a g5."
      ],
      "ruy-lopez": [
        "Atacar al defensor de e5 (el caballo de c6), enrocar, jugar Te1 y luego c3 y d4 para construir un centro sólido. Una presión lenta que dura toda la partida.",
        "Una ventaja duradera, sin riesgo, y planes muy ricos en el medio juego.",
        "Mucha teoría. El alfil es perseguido con a6 y b5, y la ventaja tarda en concretarse.",
        "El alfil, que termina en b3 apuntando a f7, y la torre de e1, que sostiene e4."
      ],
      scotch: [
        "Abrir el centro enseguida con d4 para cambiar el peón de e5 y jugar con piezas activas y espacio.",
        "Juego claro, pocos peones bloqueados e iniciativa rápida.",
        "El centro abierto también activa las piezas negras. Tras Cxc6 bxc6, las negras recuperan un buen centro de peones.",
        "El caballo de d4 en el centro, luego la dama y los alfiles en las líneas abiertas."
      ],
      "four-knights": [
        "Desarrollar todo de forma simétrica, enrocar y abrir el juego con d4 cuando el rey está a salvo.",
        "Muy segura, lógica simple (caballos antes que alfiles) y pocas trampas.",
        "Poco ambiciosa: la posición suele quedar igualada y simétrica.",
        "Los caballos, que controlan d5 y e4, y el alfil que llega a d3."
      ],
      "evans-gambit": [
        "Entregar el peón de b4 para ganar dos tiempos (c3 y luego d4), construir un gran centro y atacar al rey negro todavía en el centro.",
        "Una iniciativa enorme, diagonales abiertas hacia f7 y muchas trampas.",
        "Un peón menos: si el ataque se apaga, el final es malo.",
        "El alfil de c4 y la dama (a menudo en b3), que apuntan juntos a f7, y luego una torre en la columna e."
      ],
      "fried-liver": [
        "Castigar 5...Cxd5 sacrificando el caballo en f7 para sacar al rey negro al centro y atacarlo con dama, alfil y caballos.",
        "Un ataque muy fuerte si la defensa no es precisa. Ideal para ganar rápido a nivel aficionado.",
        "Una pieza menos. Contra 5...Ca5 (la respuesta correcta), el sacrificio no existe.",
        "La dama en f3 y el alfil de c4, que clavan el caballo de d5, más el caballo de c3, que añade presión."
      ],
      "vienna-gambit": [
        "Controlar d5 con Cc3 y luego jugar f4 para romper e5 y abrir la columna f hacia el rey negro.",
        "Un ataque en el flanco de rey apoyado por la torre de f.",
        "El rey blanco queda debilitado en la diagonal g1-a7, y la respuesta d5 golpea el centro.",
        "La torre de f1 en la columna f, y el caballo de c3."
      ],
      "kings-gambit": [
        "Entregar el peón f para desviar e5, tomar el centro con d4 y atacar f7 por la columna f.",
        "Iniciativa inmediata y posiciones caóticas donde gana el mejor preparado.",
        "El rey blanco queda expuesto, hay un peón menos y varias líneas están refutadas.",
        "La torre de f1 en la columna abierta, el alfil de c4 hacia f7 y los caballos que saltan a e5 o g5."
      ],
      "sicilian-alapin": [
        "Contra la Siciliana, jugar c3 y luego d4 para mantener un centro de peones sin entrar en las líneas favoritas de las negras.",
        "Evita muchísima teoría, con un centro sólido y un juego sencillo.",
        "c3 quita la casilla del caballo de b1, y las negras igualan con facilidad con Cf6 o d5.",
        "El peón de d4, pivote del centro, y el alfil en c4 o d3 apuntando al enroque."
      ],
      "smith-morra": [
        "Ofrecer el peón c para desarrollar todas las piezas muy rápido y usar las columnas c y d abiertas.",
        "Ventaja de desarrollo, ataques rápidos y muchas trampas.",
        "Un peón menos: si las negras completan el desarrollo sin daños, la ventaja desaparece.",
        "Las torres en c1 y d1, el alfil de c4 hacia f7 y el caballo que salta a d5."
      ],
      "french-advance": [
        "Avanzar e5 para ganar espacio y encerrar el alfil de c8, defender la cadena d4-e5 y atacar en el flanco de rey.",
        "Espacio, un plan claro y un ataque natural contra el enroque.",
        "d4 recibe ataques por todas partes (c5, Cc6, Db6): si la cadena cede, el centro se derrumba.",
        "El caballo de f3, que defiende d4, y el alfil de d3, que mira a h7."
      ],
      "caro-kann-advance": [
        "Tomar espacio con e5, desarrollarse con calma y reaccionar al avance c5 de las negras.",
        "Espacio y juego sin riesgo.",
        "Las negras ya sacaron su alfil bueno a f5 y su estructura sigue siendo muy sólida.",
        "El caballo de f3 y el alfil de e3, que sostienen d4."
      ],
      "queens-gambit-declined": [
        "Atacar el centro negro con c4, desarrollarse con naturalidad y clavar el caballo de f6 con Ag5 para ganar la lucha por el centro.",
        "Presión duradera sin asumir riesgos.",
        "Juego lento frente a una defensa negra muy sólida.",
        "El alfil de g5, que clava f6, y los caballos de c3 y f3, que miran a d5 y e5."
      ],
      "queens-gambit-accepted": [
        "Las negras toman en c4: se recupera el peón con calma con e3 y Axc4, y luego se aprovecha el centro.",
        "Desarrollo fácil y centro fuerte.",
        "Las negras tienen juego libre y golpean d4 con c5.",
        "El alfil de c4, muy activo, y el peón de d4."
      ],
      london: [
        "Jugar el mismo esquema contra casi todo (Af4, e3, c3, Cd2, Cgf3) y lanzar un ataque lento en el flanco de rey.",
        "Muy poca teoría y una estructura sólida: perfecto para empezar.",
        "Poco ambicioso. Un rival preparado ataca b2 con Db6 y persigue el alfil de f4.",
        "El alfil de f4, que sale antes de e3, y el caballo que se instala en e5."
      ],
      catalan: [
        "Colocar el alfil en g2, en la gran diagonal, y presionar lentamente el centro y el flanco de dama.",
        "Presión a largo plazo y un rey blanco muy seguro.",
        "Juego lento. El peón de c4 puede perderse y tardar en recuperarse.",
        "El alfil de g2, apuntando a b7, y la dama en c2."
      ],
      english: [
        "Controlar d5 desde el flanco con c4 y Cc3, fianchettar el alfil de rey y adaptar el plan al juego negro.",
        "Flexible, con mucha menos teoría que 1.e4 o 1.d4.",
        "Menos directa: las negras pueden tomar el centro con e5 y d5.",
        "El alfil de g2 y el caballo de c3, ambos apuntando a d5."
      ],
      "kings-indian-attack": [
        "El mismo esquema haga lo que haga el negro (fianchetto, enroque, d3, Cbd2), luego e4-e5 y ataque en el flanco de rey.",
        "Fácil de aprender, con un plan claro.",
        "Algo pasivo si las negras ganan espacio en el centro.",
        "El alfil de g2 y los caballos que se lanzan hacia el rey negro tras e5."
      ],
      "sicilian-najdorf": [
        "a6 controla b5. Las negras conservan un peón central más y contraatacan en el flanco de dama por la columna c.",
        "Ambiciosa: se juega para ganar con negras.",
        "Muchísima teoría, y el rey negro puede ser atacado muy rápido.",
        "La torre en la columna c, el alfil en e6 o e7 y el caballo que apunta a c4."
      ],
      "sicilian-dragon": [
        "Fianchetto en g7, enroque y ataque en el flanco de dama por la columna c mientras las blancas atacan el flanco de rey.",
        "El alfil de g7 es temible y el contraataque llega rápido.",
        "Si las blancas abren la columna h (h4-h5), el rey negro corre peligro: es una carrera.",
        "El alfil de g7, que nunca debe cambiarse sin motivo, y la torre en c8."
      ],
      "sicilian-sveshnikov": [
        "Avanzar e5 para expulsar al caballo de d4, aceptando un agujero en d5 a cambio de piezas muy activas y del avance f5.",
        "Dinámica, con mucha iniciativa.",
        "La casilla d5 es débil y el peón de d6 está retrasado.",
        "El alfil de casillas negras y el peón de f5. Hay que impedir que un caballo blanco se instale en d5."
      ],
      french: [
        "Estructura sólida e6-d5: se cede espacio a las blancas y luego se ataca la base de su cadena de peones con c5 y f6.",
        "Estructura robusta y plan claro: atacar la cadena.",
        "El alfil de c8 queda encerrado detrás de e6 y a las negras les falta espacio.",
        "El peón de c5 y la dama en b6 contra d4. Hay que liberar el alfil de c8 (b6 y luego Aa6)."
      ],
      "caro-kann": [
        "Jugar c6-d5, sacar el alfil de c8 antes de e6, mantener una estructura sin debilidades y jugar con calma.",
        "Muy sólida, con finales a menudo favorables.",
        "Algo pasiva, con menos opciones de ganar rápido.",
        "El alfil en f5 o g6, que sale antes de quedar encerrado, y el caballo d7-f6."
      ],
      scandinavian: [
        "Romper el centro en la primera jugada: la dama recaptura en d5, se retira a a5 y sigue un desarrollo rápido con c6 y Af5.",
        "Poca teoría y una estructura simple.",
        "La dama que sale pronto hace ganar tiempos a las blancas.",
        "La dama en a5 y el alfil en f5."
      ],
      petrov: [
        "Contraatacar e4 en lugar de defender e5, para una posición simétrica y muy sólida.",
        "Muy difícil de vencer.",
        "Pocas opciones de ganar. Trampa: recapturar en e4 antes de d6 pierde la dama.",
        "El caballo activo de e4 y luego los alfiles."
      ],
      "two-knights": [
        "Cf6 ataca e4. Contra Cg5, devolver un peón con d5 y luego Ca5 para tomar la iniciativa.",
        "Juego activo y tramposo.",
        "Un peón menos, en posiciones tácticas que hay que conocer.",
        "El caballo de a5, que expulsa al alfil, y luego la dama y los alfiles activos."
      ],
      philidor: [
        "Sostener e5 con d6, desarrollarse detrás y mantener una posición compacta.",
        "Poca teoría y muy sólida.",
        "Pasiva: poco espacio y el alfil de f8 algo encerrado.",
        "Los caballos de d7 y f6, y el peón de e5, que hay que mantener."
      ],
      pirc: [
        "Dejar el centro a las blancas y atacarlo después con e5 o c5, con el alfil en g7.",
        "Flexible, con contrajuego.",
        "Si se espera demasiado, los peones blancos avanzan y aplastan la posición.",
        "El alfil de g7 y los peones de c5 y e5, que golpean el centro."
      ],
      alekhine: [
        "Provocar el avance de los peones blancos con el caballo para convertirlos después en objetivos.",
        "Posiciones desequilibradas que sorprenden al rival.",
        "El caballo pierde tiempo, y si las blancas consolidan, su espacio pesa.",
        "El caballo (d5 y luego b6) y el alfil de g4, que molesta al caballo de f3."
      ],
      "kings-indian": [
        "Ceder el centro, golpear con e5 y atacar el flanco de rey con f5-f4 y g5 mientras las blancas atacan el flanco de dama.",
        "Un ataque muy peligroso contra el rey blanco.",
        "Una carrera: el flanco de dama negro es frágil.",
        "El alfil de g7, aunque parezca encerrado, el peón de f5 y los caballos que van hacia el flanco de rey."
      ],
      "nimzo-indian": [
        "Ab4 clava el caballo de c3 e impide e4. A menudo se cambia el alfil para doblar los peones blancos, que luego se atacan.",
        "Estructura blanca dañada y plan claro.",
        "Se cede la pareja de alfiles.",
        "Los caballos, muy buenos en posiciones cerradas contra alfiles, y el alfil de b4."
      ],
      "queens-indian": [
        "Controlar e4 a distancia con el alfil en fianchetto. Aa6 dificulta el avance c4.",
        "Muy sólida.",
        "Algo pasiva.",
        "El alfil en b7 o a6."
      ],
      grunfeld: [
        "Dejar que las blancas construyan un gran centro y luego bombardearlo con Ag7, c5 y Cc6.",
        "Dinámica, con fuerte presión sobre d4.",
        "Si el centro blanco aguanta, aplasta la posición negra.",
        "El alfil de g7 en la gran diagonal y el peón de c5."
      ],
      slav: [
        "c6 sostiene d5 sin encerrar el alfil de c8, que sale a f5 antes de e6.",
        "Muy sólida.",
        "Algo pasiva, con teoría.",
        "El alfil de f5 y el peón de c6."
      ],
      dutch: [
        "f5 controla e4 y prepara un ataque en el flanco de rey, con el alfil en g7 (variante Leningrado).",
        "Posiciones desequilibradas y juego para ganar.",
        "El rey negro queda debilitado (diagonal e8-h5), y también la casilla e6.",
        "El alfil de g7 y el peón de f5."
      ],
      benko: [
        "Entregar el peón b para abrir las columnas a y b y mantener la presión, incluso en el final.",
        "Presión a largo plazo fácil de jugar.",
        "Un peón menos.",
        "Las torres en a8 y b8, y el alfil de g7."
      ]
    },
    /* theme id: [the idea, what it is for, when to look for it, key pieces] */
    themes: {
      fork: [
        "Una sola pieza ataca dos objetivos a la vez. El rival solo puede salvar uno.",
        "Ganar material, a menudo con jaque para que el rival no tenga tiempo de reaccionar.",
        "Cuando dos piezas rivales (o el rey y una pieza) están a un salto de caballo o en una misma línea de tu dama.",
        "El caballo, que ataca casillas de ambos colores y no puede ser bloqueado, y el peón."
      ],
      pin: [
        "Una pieza no puede moverse porque protege a otra más valiosa que está detrás.",
        "Inmovilizar una pieza y atacarla una segunda vez para ganarla.",
        "Cuando una pieza rival está en la misma línea que su rey o su dama.",
        "El alfil y la torre, que actúan a distancia en diagonales y columnas."
      ],
      skewer: [
        "Lo contrario de la clavada: se ataca la pieza más valiosa, tiene que moverse y se captura la que estaba detrás.",
        "Ganar la pieza escondida detrás del rey o de la dama.",
        "Cuando el rey o la dama están alineados delante de otra pieza.",
        "El alfil y la torre, que atacan a través de las líneas."
      ],
      discovered: [
        "Una pieza se aparta y descubre el ataque de otra que estaba detrás. Dos amenazas en una sola jugada.",
        "Ganar material: la pieza que se mueve hace su propia amenaza mientras la otra ataca.",
        "Cuando una de tus piezas tapa la línea de tu alfil, torre o dama hacia un objetivo.",
        "La pieza que se mueve (a menudo el caballo) y la pieza de largo alcance que queda descubierta."
      ],
      double: [
        "Un ataque descubierto en el que las dos piezas dan jaque a la vez. La única salida es mover el rey.",
        "Dar mate o ganar mucho: no se puede tapar ni capturar dos piezas a la vez.",
        "Cuando tu caballo o tu alfil está entre tu torre y el rey rival.",
        "El caballo, que da jaque al saltar, y la torre que queda descubierta."
      ],
      backrank: [
        "La torre o la dama dan mate al rey en su última fila, atrapado detrás de sus propios peones.",
        "Dar mate u obligar al rival a entregar material para evitarlo.",
        "Cuando el rey rival no tiene casilla de escape y su última fila está mal defendida.",
        "Las torres y la dama, que controlan toda una fila."
      ],
      smothered: [
        "El caballo da mate a un rey rodeado de sus propias piezas, que lo ahogan.",
        "Dar mate, a menudo tras sacrificar la dama para obligar a una pieza a tapar la última casilla.",
        "Cuando el rey rival está en una esquina rodeado de sus piezas y tu caballo puede llegar a la casilla del mate (f7 o h6 contra un rey en h8).",
        "El caballo, la única pieza que salta sobre las demás, ayudado por la dama."
      ],
      decoy: [
        "Se sacrifica una pieza para atraer a una pieza rival (a menudo el rey) a una mala casilla.",
        "Llevar la pieza rival a donde una horquilla o un mate se vuelven posibles.",
        "Cuando existe una horquilla o un mate pero la pieza rival aún no está en la casilla adecuada.",
        "La torre o la dama que se sacrifican, y luego el caballo que hace la horquilla."
      ],
      promotion: [
        "Un peón llega a la última fila y se convierte en dama.",
        "Crear una nueva dama, a menudo desviando la pieza que bloqueaba el peón.",
        "Cuando uno de tus peones está en la séptima fila.",
        "El peón, y la torre que desvía al defensor."
      ],
      removal: [
        "Se captura o se expulsa la pieza que defiende una casilla u otra pieza importante.",
        "Abrir paso al mate o ganar la pieza que ya no está defendida.",
        "Cuando una sola pieza rival impide que tu ataque funcione.",
        "El alfil que cambia al defensor, y la dama que aprovecha."
      ],
      kiss: [
        "La dama da mate al rey de cerca, protegida por otra pieza.",
        "Dar mate rápido a un rey enrocado mal defendido.",
        "Cuando tu dama y otra pieza apuntan a la misma casilla junto al rey (a menudo h7 o h2).",
        "La dama, y el alfil que la apoya desde lejos."
      ]
    }
  }
};
