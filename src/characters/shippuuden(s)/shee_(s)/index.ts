// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shee (S)",
  "description": "Shee (S) is a jounin of the Hidden Cloud Village and a sensor. Shee is one of the Raikage's most reliable shinobi.",
  "descriptionBR": "Shee (S) é um jounin da Vila Oculta da Nuvem e um sensor. Ele é um dos shinobi mais confiáveis do Raikage.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shee_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sensor Awareness",
      "file": "shee_(s)_skill_1_(sensor_awareness).jpg",
      "description": "Shee uses his sensor, dealing 25 damage to one enemy. For 1 turn, if a new harmful skill is used on Shee, he will become invulnerable for 1 turn.",
      "descriptionBR": "Shee usa seu sensor, causando 25 de dano a um inimigo. Por 1 turno, se uma nova habilidade ofensiva for usada em Shee, ele se tornará invulnerável por 1 turno.",
      "descriptionRaw": "Shee uses his sensor, dealing 25 damage to one enemy. For 1 turn, if a new harmful skill is used on Shee, he will become invulnerable for 1 turn.",
      "descriptionBRRaw": "Shee usa seu sensor, causando 25 de dano a um inimigo. Por 1 turno, se uma nova habilidade ofensiva for usada em Shee, ele se tornará invulnerável por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shee uses his sensor, dealing 25 damage to one enemy. For 1 turn, if a new harmful skill is used on Shee, he will become invulnerable for 1 turn. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shee usa seu sensor, causando 25 de dano a um inimigo. Por 1 turno, se uma nova habilidade ofensiva for usada em Shee, ele se tornará invulnerável por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Ally Heal",
      "file": "shee_(s)_skill_2_(ally_heal).jpg",
      "description": "Using Ally Heal, Shee heals himself or an ally for 25 health.",
      "descriptionBR": "Usando Ally Heal, Shee cura a si mesmo ou um aliado em 25 de vida.",
      "descriptionRaw": "Using Ally Heal, Shee heals himself or an ally for 25 health.",
      "descriptionBRRaw": "Usando Ally Heal, Shee cura a si mesmo ou um aliado em 25 de vida.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Using Ally Heal, Shee heals himself or an ally for 25 health. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando Ally Heal, Shee cura a si mesmo ou um aliado em 25 de vida. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Lightning Illusion Flash",
      "file": "shee_(s)_skill_3_(lightning_illusion_flash).jpg",
      "description": "Shee blinds one enemy with a lightning-based illusion, dealing 35 damage to them and making them invulnerable to helpful skills for 1 turn.",
      "descriptionBR": "Shee cega um inimigo usando uma ilusão de relâmpago, causando 35 de dano e tornando-o invulnerável a habilidades defensivas por 1 turno.",
      "descriptionRaw": "Shee blinds one enemy with a lightning-based illusion, <Damage>dealing 35 damage<Damage> to them and making them <Defense>invulnerable to helpful skills<Defense> for 1 turn.",
      "descriptionBRRaw": "Shee cega um inimigo usando uma ilusão de relâmpago, <Damage>causando 35 de dano<Damage> e tornando-o <Defense>invulnerável a habilidades defensivas<Defense> por 1 turno.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shee blinds one enemy with a lightning-based illusion, dealing 35 damage to them and making them invulnerable to helpful skills for 1 turn. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shee cega um inimigo usando uma ilusão de relâmpago, causando 35 de dano e tornando-o invulnerável a habilidades defensivas por 1 turno. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Defensive Reaction",
      "file": "shee_(s)_skill_4_(defensive_reaction).jpg",
      "description": "This skill makes Shee (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shee (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shee (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shee (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shee (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shee (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
