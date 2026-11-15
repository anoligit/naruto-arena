// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kurotsuchi (S)",
  "description": "Kurotsuchi (S) is a shinobi of the Hidden Rock Village and the Partner of Akatsuchi. She is also the granddaughter of the third Tsuchikage.",
  "descriptionBR": "Kurotsuchi (S) é uma kunoichi da Vila Oculta da Pedra e parceira de Akatsuchi. Ela também é neta do terceiro Tsuchikage.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "kurotsuchi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Lava Quicklime",
      "file": "kurotsuchi_(s)_skill_1_(lava_quicklime).jpg",
      "description": "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% unpierceable damage reduction and 'Water Trumpet' will stun non-mental skills for 1 turn.",
      "descriptionBR": "Kurotsuchi usa Liberação de Lava para criar cal viva e atacar um inimigo, causando 25 de dano. Por 1 turno, Kurotsuchi recebe 50% de redução de dano impenetrável e 'Water Trumpet' irá atordoar habilidades não-mentais por 1 turno.",
      "descriptionRaw": "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% unpierceable damage reduction and 'Water Trumpet' will stun non-mental skills for 1 turn.",
      "descriptionBRRaw": "Kurotsuchi usa Liberação de Lava para criar cal viva e atacar um inimigo, causando 25 de dano. Por 1 turno, Kurotsuchi recebe 50% de redução de dano impenetrável e 'Water Trumpet' irá atordoar habilidades não-mentais por 1 turno.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% unpierceable damage reduction and 'Water Trumpet' will stun non-mental skills for 1 turn. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kurotsuchi usa Liberação de Lava para criar cal viva e atacar um inimigo, causando 25 de dano. Por 1 turno, Kurotsuchi recebe 50% de redução de dano impenetrável e 'Water Trumpet' irá atordoar habilidades não-mentais por 1 turno. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Water Trumpet",
      "file": "kurotsuchi_(s)_skill_2_(water_trumpet).jpg",
      "description": "Using Water Release technique, Kurotsuchi deals 20 piercing damage to one enemy. For 1 turn, 'Lava Quicklime' will deal 5 additional damage.",
      "descriptionBR": "Usando a técnica de Liberação de Água, Kurotsuchi causa 20 de dano perfurante a um inimigo. Por 1 turno, 'Lava Quicklime' causará 5 de dano adicional.",
      "descriptionRaw": "Using Water Release technique, Kurotsuchi deals 20 piercing damage to one enemy. For 1 turn, 'Lava Quicklime' will deal 5 additional damage.",
      "descriptionBRRaw": "Usando a técnica de Liberação de Água, Kurotsuchi causa 20 de dano perfurante a um inimigo. Por 1 turno, 'Lava Quicklime' causará 5 de dano adicional.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using Water Release technique, Kurotsuchi deals 20 piercing damage to one enemy. For 1 turn, 'Lava Quicklime' will deal 5 additional damage. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando a técnica de Liberação de Água, Kurotsuchi causa 20 de dano perfurante a um inimigo. Por 1 turno, 'Lava Quicklime' causará 5 de dano adicional. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Earth Spears",
      "file": "kurotsuchi_(s)_skill_3_(earth_spears).jpg",
      "description": "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills and will receive 5 additional damage from Kurotsuchi.",
      "descriptionBR": "Kurotsuchi usa Earth Spears, causando 20 de dano a todos os inimigos. Por 1 turno, todos os inimigos afetados por esta habilidade ficarão invulneráveis a habilidades defensivas e receberão 5 de dano adicional da Kurotsuchi.",
      "descriptionRaw": "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills and will receive 5 additional damage from Kurotsuchi.",
      "descriptionBRRaw": "Kurotsuchi usa Earth Spears, causando 20 de dano a todos os inimigos. Por 1 turno, todos os inimigos afetados por esta habilidade ficarão invulneráveis a habilidades defensivas e receberão 5 de dano adicional da Kurotsuchi.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills and will receive 5 additional damage from Kurotsuchi. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kurotsuchi usa Earth Spears, causando 20 de dano a todos os inimigos. Por 1 turno, todos os inimigos afetados por esta habilidade ficarão invulneráveis a habilidades defensivas e receberão 5 de dano adicional da Kurotsuchi. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Evasiveness",
      "file": "kurotsuchi_(s)_skill_4_(evasiveness).jpg",
      "description": "This skill makes Kurotsuchi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Kurotsuchi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kurotsuchi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Kurotsuchi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kurotsuchi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Kurotsuchi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
