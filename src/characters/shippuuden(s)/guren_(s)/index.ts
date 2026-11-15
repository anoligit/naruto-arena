// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Guren (S)",
  "description": "One of Orochimaru's highest-ranking subordinates, Guren is a sadistic, proud, and ambitious woman, and is utterly devoted to Orochimaru, considered one of his most promising potential vessels. Possessing the Crystal Release kekkei genkai, Guren is able to create crystals for a wide range of combat purposes.",
  "descriptionBR": "Uma das subordinadas de mais alto escalão de Orochimaru, Guren é uma mulher sádica, orgulhosa e ambiciosa, além de ser completamente devotada a Orochimaru, sendo considerada um de seus recipientes em potencial mais promissores. Possuindo a kekkei genkai Crystal Release, Guren é capaz de criar cristais para uma ampla variedade de propósitos em combate.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "guren_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Crystal Dragon",
      "file": "guren_(s)_skill_1_(crystal_dragon).png",
      "description": "Guren sends a massive crystal dragon towards one enemy, dealing 35 damage to them and stunning their skills for 1 turn. The following turn, that enemy will receive 10 additional damage from 'Crystal Barrage'. This skill will be replaced by 'Crystal Barrage' permanently.",
      "descriptionBR": "Guren envia um enorme dragão de cristal contra um inimigo, causando 35 de dano a ele e atordoando suas habilidades por 1 turno. No próximo turno, esse inimigo irá receber 10 de dano adicional de 'Crystal Barrage'. Essa habilidade será substituída por 'Crystal Barrage' permanentemente.",
      "descriptionRaw": "Guren sends a massive crystal dragon towards one enemy, dealing 35 damage to them and stunning their skills for 1 turn. The following turn, that enemy will receive 10 additional damage from 'Crystal Barrage'. This skill will be replaced by 'Crystal Barrage' permanently.",
      "descriptionBRRaw": "Guren envia um enorme dragão de cristal contra um inimigo, causando 35 de dano a ele e atordoando suas habilidades por 1 turno. No próximo turno, esse inimigo irá receber 10 de dano adicional de 'Crystal Barrage'. Essa habilidade será substituída por 'Crystal Barrage' permanentemente.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Guren sends a massive crystal dragon towards one enemy, dealing 35 damage to them and stunning their skills for 1 turn. The following turn, that enemy will receive 10 additional damage from 'Crystal Barrage'. This skill will be replaced by 'Crystal Barrage' permanently. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Guren envia um enorme dragão de cristal contra um inimigo, causando 35 de dano a ele e atordoando suas habilidades por 1 turno. No próximo turno, esse inimigo irá receber 10 de dano adicional de 'Crystal Barrage'. Essa habilidade será substituída por 'Crystal Barrage' permanentemente. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Crystal Prison",
      "file": "guren_(s)_skill_2_(crystal_prison).png",
      "description": "Guren encases an enemy in a crystal prison. For 1 turn, that enemy will become invulnerable to helpful skills. The following turn, this skill will be replaced 'Crystal Break'.",
      "descriptionBR": "Guren aprisiona um inimigo em uma prisão de cristal. Por 1 turno, esse inimigo irá se tornar invulnerável a habilidades defensivas. No próximo turno, essa habilidade será substituída por 'Crystal Break'.",
      "descriptionRaw": "Guren encases an enemy in a crystal prison. For 1 turn, that enemy will become invulnerable to helpful skills. The following turn, this skill will be replaced 'Crystal Break'.",
      "descriptionBRRaw": "Guren aprisiona um inimigo em uma prisão de cristal. Por 1 turno, esse inimigo irá se tornar invulnerável a habilidades defensivas. No próximo turno, essa habilidade será substituída por 'Crystal Break'.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Guren encases an enemy in a crystal prison. For 1 turn, that enemy will become invulnerable to helpful skills. The following turn, this skill will be replaced 'Crystal Break'. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Guren aprisiona um inimigo em uma prisão de cristal. Por 1 turno, esse inimigo irá se tornar invulnerável a habilidades defensivas. No próximo turno, essa habilidade será substituída por 'Crystal Break'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Crystal Clone",
      "file": "guren_(s)_skill_3_(crystal_clone).png",
      "description": "Guren forms a crystal clone. For 1 turn, the first harmful skill used against her will be countered, and the countered enemy will take 20 piercing damage*. This skill is invisible and ends when triggered.",
      "descriptionBR": "Guren forma um clone de cristal. Por 1 turno, a primeira habilidade ofensiva usada contra ela será counterada, e o inimigo counterado irá receber 20 de dano perfurante*. Essa habilidade é invisível e termina quando ativada.",
      "descriptionRaw": "Guren forms a crystal clone. For 1 turn, the first harmful skill used against her will be countered, and the countered enemy will take 20 piercing damage*. This skill is invisible and ends when triggered.",
      "descriptionBRRaw": "Guren forma um clone de cristal. Por 1 turno, a primeira habilidade ofensiva usada contra ela será counterada, e o inimigo counterado irá receber 20 de dano perfurante*. Essa habilidade é invisível e termina quando ativada.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee*"
      ],
      "cooldown": 2,
      "ruleDescription": "Guren forms a crystal clone. For 1 turn, the first harmful skill used against her will be countered, and the countered enemy will take 20 piercing damage*. This skill is invisible and ends when triggered. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Melee*. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Guren forma um clone de cristal. Por 1 turno, a primeira habilidade ofensiva usada contra ela será counterada, e o inimigo counterado irá receber 20 de dano perfurante*. Essa habilidade é invisível e termina quando ativada. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Melee*. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Crystal Formation: Arrow of Light",
      "file": "guren_(s)_skill_4_(crystal_formation_arrow_of_light).png",
      "description": "This skill makes Guren (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Guren (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Guren (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Guren (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Guren (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Guren (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Crystal Barrage",
      "file": "guren_(s)_skill_5_(crystal_barrage).png",
      "description": "Guren unleashes a barrage of crystal spikes, dealing 25 damage to all enemis. After this skill is used, it will be replaced by 'Crystal Dragon'.",
      "descriptionBR": "Guren libera uma barragem de espinhos de cristal, causando 25 de dano a todos os inimigos. Depois que essa habilidade for usada, ela será substituída por 'Crystal Dragon'.",
      "descriptionRaw": "Guren unleashes a barrage of crystal spikes, dealing 25 damage to all enemis. After this skill is used, it will be replaced by 'Crystal Dragon'.",
      "descriptionBRRaw": "Guren libera uma barragem de espinhos de cristal, causando 25 de dano a todos os inimigos. Depois que essa habilidade for usada, ela será substituída por 'Crystal Dragon'.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Guren unleashes a barrage of crystal spikes, dealing 25 damage to all enemis. After this skill is used, it will be replaced by 'Crystal Dragon'. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Guren libera uma barragem de espinhos de cristal, causando 25 de dano a todos os inimigos. Depois que essa habilidade for usada, ela será substituída por 'Crystal Dragon'. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Crystal Break",
      "file": "guren_(s)_skill_6_(crystal_break).png",
      "description": "Guren crushes the enemy affected by 'Crystal Prison', dealing 30 piercing damage to them.",
      "descriptionBR": "Guren destrói o inimigo afetado por 'Crystal Prison', causando 30 de dano perfurante a ele.",
      "descriptionRaw": "Guren crushes the enemy affected by 'Crystal Prison', dealing 30 piercing damage to them.",
      "descriptionBRRaw": "Guren destrói o inimigo afetado por 'Crystal Prison', causando 30 de dano perfurante a ele.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Guren crushes the enemy affected by 'Crystal Prison', dealing 30 piercing damage to them. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Guren destrói o inimigo afetado por 'Crystal Prison', causando 30 de dano perfurante a ele. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
