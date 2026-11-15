// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tsuchikage (S)",
  "description": "The Third Tsuchikage of the Hidden Rock Village, Oonoki is an intensely proud and headstrong man, despite his advanced age. An expert in a variety of jutsu, and notably able to fly, Oonoki is renowned for his unique nature transformation, the Dust Release kekkei tota, with which he can outright vaporize his enemies.",
  "descriptionBR": "Oonoki é o Terceiro Tsuchikage da Vila Oculta da Pedra, um homem extremamente orgulhoso e teimoso, apesar de sua idade avançada. Especialista em diversos jutsus e capaz de voar, Oonoki é renomado por sua transformação de natureza única, a Liberação de Poeira (kekkei tota), com a qual pode vaporizar completamente seus inimigos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "tsuchikage_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Detachment of Primitive World",
      "file": "tsuchikage_(s)_skill_1_(detachment_of_primitive_world).png",
      "description": "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'.",
      "descriptionBR": "Ohnoki isola um inimigo com sua liberação de poeira, causando 10 de dano affliction. Por 1 turno, esse inimigo ficará invulnerável a habilidades defensivas e suas habilidades ofensivas serão atordoadas. No turno seguinte, esta habilidade será substituída por 'Dust Implode'.",
      "descriptionRaw": "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'.",
      "descriptionBRRaw": "Ohnoki isola um inimigo com sua liberação de poeira, causando 10 de dano affliction. Por 1 turno, esse inimigo ficará invulnerável a habilidades defensivas e suas habilidades ofensivas serão atordoadas. No turno seguinte, esta habilidade será substituída por 'Dust Implode'.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ohnoki isola um inimigo com sua liberação de poeira, causando 10 de dano affliction. Por 1 turno, esse inimigo ficará invulnerável a habilidades defensivas e suas habilidades ofensivas serão atordoadas. No turno seguinte, esta habilidade será substituída por 'Dust Implode'. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Super-Weighted Boulder Technique",
      "file": "tsuchikage_(s)_skill_2_(super-weighted_boulder_technique).png",
      "description": "Onhoki touches an enemy and makes them much heavier. For 2 turns, the cost of their harmful skills will be increased by 1 random chakra.",
      "descriptionBR": "Ohnoki toca um inimigo e o torna muito mais pesado. Por 2 turnos, o custo das habilidades ofensivas desse inimigo será aumentado em 1 chakra aleatório.",
      "descriptionRaw": "Onhoki touches an enemy and makes them much heavier. For 2 turns, the cost of their harmful skills will be increased by 1 random chakra.",
      "descriptionBRRaw": "Ohnoki toca um inimigo e o torna muito mais pesado. Por 2 turnos, o custo das habilidades ofensivas desse inimigo será aumentado em 1 chakra aleatório.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Onhoki touches an enemy and makes them much heavier. For 2 turns, the cost of their harmful skills will be increased by 1 random chakra. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ohnoki toca um inimigo e o torna muito mais pesado. Por 2 turnos, o custo das habilidades ofensivas desse inimigo será aumentado em 1 chakra aleatório. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Rock Fist",
      "file": "tsuchikage_(s)_skill_3_(rock_fist).png",
      "description": "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense.",
      "descriptionBR": "Aumentando seu poder de ataque com o Punho de Pedra, Ohnoki causa 30 de dano a um inimigo. Em seguida, Ohnoki ganha 15 de defesa destrutível permanente.",
      "descriptionRaw": "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense.",
      "descriptionBRRaw": "Aumentando seu poder de ataque com o Punho de Pedra, Ohnoki causa 30 de dano a um inimigo. Em seguida, Ohnoki ganha 15 de defesa destrutível permanente.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Aumentando seu poder de ataque com o Punho de Pedra, Ohnoki causa 30 de dano a um inimigo. Em seguida, Ohnoki ganha 15 de defesa destrutível permanente. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Effortless Flight",
      "file": "tsuchikage_(s)_skill_4_(effortless_flight).png",
      "description": "This skill makes Tsuchikage (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Tsuchikage (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Tsuchikage (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Tsuchikage (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Tsuchikage (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Tsuchikage (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Dust Implode",
      "file": "tsuchikage_(s)_skill_5_(dust_implode).png",
      "description": "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered.",
      "descriptionBR": "Ohnoki incinera um inimigo preso por 'Detachment of Primitive World' em partículas, removendo todas as habilidades aliadas desse inimigo e causando 40 de dano. Esta habilidade não pode ser ignorada ou counterada.",
      "descriptionRaw": "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered.",
      "descriptionBRRaw": "Ohnoki incinera um inimigo preso por 'Detachment of Primitive World' em partículas, removendo todas as habilidades aliadas desse inimigo e causando 40 de dano. Esta habilidade não pode ser ignorada ou counterada.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ohnoki incinera um inimigo preso por 'Detachment of Primitive World' em partículas, removendo todas as habilidades aliadas desse inimigo e causando 40 de dano. Esta habilidade não pode ser ignorada ou counterada. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
