// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Konan of the Rain (S)",
  "description": "Konan of the Rain (S) has returned to the Hidden Rain village. Now that Uzumaki Nagato is dead she is aligned with Uzumaki Naruto and his quest for peace.",
  "descriptionBR": "Konan da Chuva (S) retornou para a Vila da Chuva Oculta. Agora que Uzumaki Nagato está morto, ela está alinhada com Uzumaki Naruto e sua busca pela paz.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "konan_of_the_rain_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Paper Chakram",
      "file": "konan_of_the_rain_(s)_skill_1_(paper_chakram).jpg",
      "description": "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra.",
      "descriptionBR": "Konan forma e lança um chakram de papel contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades de Konan custarão 1 chakra aleatório a menos.",
      "descriptionRaw": "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra.",
      "descriptionBRRaw": "Konan forma e lança um chakram de papel contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades de Konan custarão 1 chakra aleatório a menos.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan forma e lança um chakram de papel contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades de Konan custarão 1 chakra aleatório a menos. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Paper Ocean: Chasm Trap",
      "file": "konan_of_the_rain_(s)_skill_2_(paper_ocean_chasm_trap).jpg",
      "description": "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, this skill will be replaced and each time it successfully reduces an enemy's non-affliction damage, Konan will gain 1 random charka.",
      "descriptionBR": "Konan prende todos os inimigos em um abismo oceânico feito de um milhão de papéis. Por 3 turnos, todo dano não affliction será reduzido a no máximo 25. Durante esse tempo, essa habilidade será substituída e toda vez que ela reduzir com sucesso o dano não-affliction de um inimigo, Konan irá ganhar 1 chakra aleatório.",
      "descriptionRaw": "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, this skill will be replaced and each time it successfully reduces an enemy's non-affliction damage, Konan will gain 1 random charka.",
      "descriptionBRRaw": "Konan prende todos os inimigos em um abismo oceânico feito de um milhão de papéis. Por 3 turnos, todo dano não affliction será reduzido a no máximo 25. Durante esse tempo, essa habilidade será substituída e toda vez que ela reduzir com sucesso o dano não-affliction de um inimigo, Konan irá ganhar 1 chakra aleatório.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 5,
      "ruleDescription": "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, this skill will be replaced and each time it successfully reduces an enemy's non-affliction damage, Konan will gain 1 random charka. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan prende todos os inimigos em um abismo oceânico feito de um milhão de papéis. Por 3 turnos, todo dano não affliction será reduzido a no máximo 25. Durante esse tempo, essa habilidade será substituída e toda vez que ela reduzir com sucesso o dano não-affliction de um inimigo, Konan irá ganhar 1 chakra aleatório. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Explosive Papers Barrage",
      "file": "konan_of_the_rain_(s)_skill_3_(explosive_papers_barrage).png",
      "description": "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their skills for 3 turns and dealing 15 damage to them each turn.",
      "descriptionBR": "Konan investe contra um inimigo e o embosca com vários papéis explosivos, atordoando suas habilidades por 3 turnos e causando 15 de dano a cada turno.",
      "descriptionRaw": "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their skills for 3 turns and dealing 15 damage to them each turn.",
      "descriptionBRRaw": "Konan investe contra um inimigo e o embosca com vários papéis explosivos, atordoando suas habilidades por 3 turnos e causando 15 de dano a cada turno.",
      "energy": [
        "Blood",
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their skills for 3 turns and dealing 15 damage to them each turn. Chakra cost: 1 Blood, 1 Gen, 1 Random. Catalog classes: Chakra, Action, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan investe contra um inimigo e o embosca com vários papéis explosivos, atordoando suas habilidades por 3 turnos e causando 15 de dano a cada turno. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Action, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "The Bridge to the Peace",
      "file": "konan_of_the_rain_(s)_skill_4_(the_bridge_to_the_peace).jpg",
      "description": "This skill makes Konan of the Rain (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Konan of the Rain (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Konan of the Rain (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Konan of the Rain (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Konan of the Rain (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Konan of the Rain (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Paper Ocean: Explosive Papers Detonate",
      "file": "konan_of_the_rain_(s)_skill_5_(paper_ocean_explosive_papers_detonate).png",
      "description": "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their skills for 2 turns.",
      "descriptionBR": "Konan detona todos os milhões de papéis explosivos, esmagando todos os inimigos presos por 'Paper Ocean: Chasm Trap', causando 20 de dano e atordoando suas habilidades por 2 turnos.",
      "descriptionRaw": "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their skills for 2 turns.",
      "descriptionBRRaw": "Konan detona todos os milhões de papéis explosivos, esmagando todos os inimigos presos por 'Paper Ocean: Chasm Trap', causando 20 de dano e atordoando suas habilidades por 2 turnos.",
      "energy": [
        "Blood",
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their skills for 2 turns. Chakra cost: 1 Blood, 1 Gen, 1 Random. Catalog classes: Chakra, Action, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan detona todos os milhões de papéis explosivos, esmagando todos os inimigos presos por 'Paper Ocean: Chasm Trap', causando 20 de dano e atordoando suas habilidades por 2 turnos. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Action, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
