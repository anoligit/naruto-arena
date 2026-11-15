// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Ameyuri (S)",
  "description": "Edo Tensei Ameyuri (S) has been summoned from the dead to participate in the fourth ninja war. She wields the dual sharpest swords ever made.",
  "descriptionBR": "Edo Tensei Ameyuri (S) foi invocada dos mortos para participar da Quarta Guerra Ninja. Ela empunha as espadas duplas mais afiadas já criadas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_ameyuri_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Silent Dual Sword Rampage",
      "file": "edo_tensei_ameyuri_(s)_skill_1_(silent_dual_sword_rampage).jpeg",
      "description": "Imbuing her swords with lightning, Ameyuri deals 20 piercing damage to one enemy. This skill will deal 10 additional damage if that enemy has their cooldowns increased or paralyzed. For 2 turns, that enemy's cooldowns will be paralyzed. This effect doesn't stack.",
      "descriptionBR": "Imbuindo suas espadas com eletricidade, Ameyuri causa 20 de dano perfurante a um inimigo. Esta habilidade irá causar 10 de dano adicional se esse inimigo estiver com seus tempos de recarga aumentados ou paralisados. Por 2 turnos, os tempos de recarga desse inimigo serão paralisados. Este efeito não acumula.",
      "descriptionRaw": "Imbuing her swords with lightning, Ameyuri <Damage>deals 20 piercing damage<Damage> to one enemy. This skill will <Improvements>deal 10 additional damage<Improvements> if that enemy has their cooldowns increased or paralyzed. For 2 turns, that enemy's <Effects>cooldowns will be paralyzed<Effects>. This effect doesn't stack.",
      "descriptionBRRaw": "Imbuindo suas espadas com eletricidade, Ameyuri <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Esta habilidade irá <Improvements>causar 10 de dano adicional<Improvements> se esse inimigo estiver com seus tempos de recarga aumentados ou paralisados. Por 2 turnos, os <Effects>tempos de recarga desse inimigo serão paralisados<Effects>. Este efeito não acumula.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Imbuing her swords with lightning, Ameyuri deals 20 piercing damage to one enemy. This skill will deal 10 additional damage if that enemy has their cooldowns increased or paralyzed. For 2 turns, that enemy's cooldowns will be paralyzed. This effect doesn't stack. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Imbuindo suas espadas com eletricidade, Ameyuri causa 20 de dano perfurante a um inimigo. Esta habilidade irá causar 10 de dano adicional se esse inimigo estiver com seus tempos de recarga aumentados ou paralisados. Por 2 turnos, os tempos de recarga desse inimigo serão paralisados. Este efeito não acumula. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lightning Rain",
      "file": "edo_tensei_ameyuri_(s)_skill_2_(lightning_rain).jpeg",
      "description": "Ameyuri sends bolts of lightning to electrocute her targets, dealing 35 piercing damage to one enemy and 15 to all others. For 1 turn, all enemies will have their skills cooldown increased by 1. This skill deals 10 additional damage to enemies with their cooldowns paralyzed.",
      "descriptionBR": "Ameyuri lança raios para eletrocutar seus alvos, causando 35 de dano perfurante a um inimigo e 15 a todos os outros. Por 1 turno, todos os inimigos terão o tempo de recarga de suas habilidades aumentado em 1. Esta habilidade causa 10 de dano adicional a inimigos com seus tempos de recarga paralisados.",
      "descriptionRaw": "Ameyuri sends bolts of lightning to electrocute her targets, <Damage>dealing 35 piercing damage to one enemy and 15 to all others<Damage>. For 1 turn, all enemies will have their <Effects>skills cooldown increased by 1<Effects>. This skill <Improvements>deals 10 additional damage<Improvements> to enemies with their cooldowns paralyzed.",
      "descriptionBRRaw": "Ameyuri lança raios para eletrocutar seus alvos, <Damage>causando 35 de dano perfurante a um inimigo e 15 a todos os outros<Damage>. Por 1 turno, todos os inimigos terão o <Effects>tempo de recarga de suas habilidades aumentado em 1<Effects>. Esta habilidade <Improvements>causa 10 de dano adicional<Improvements> a inimigos com seus tempos de recarga paralisados.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Ameyuri sends bolts of lightning to electrocute her targets, dealing 35 piercing damage to one enemy and 15 to all others. For 1 turn, all enemies will have their skills cooldown increased by 1. This skill deals 10 additional damage to enemies with their cooldowns paralyzed. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ameyuri lança raios para eletrocutar seus alvos, causando 35 de dano perfurante a um inimigo e 15 a todos os outros. Por 1 turno, todos os inimigos terão o tempo de recarga de suas habilidades aumentado em 1. Esta habilidade causa 10 de dano adicional a inimigos com seus tempos de recarga paralisados. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Lightning Flow Trap",
      "file": "edo_tensei_ameyuri_(s)_skill_3_(lightning_flow_trap).jpeg",
      "description": "Ameyuri surrounds each of her enemies with lightning. For 1 turn, all enemies will have their cooldowns increased by 1, and any enemy that does not use a new skill will receive 10 additional damage from Ameyuri's skills for 1 turn. This skill will permanently last 1 additional turn.",
      "descriptionBR": "Ameyuri envolve todos os seus inimigos com eletricidade. Por 1 turno, todos os inimigos terão seus tempos de recarga aumentados em 1, e qualquer inimigo que não usar uma nova habilidade irá receber 10 de dano adicional das habilidades de Ameyuri por 1 turno. Esta habilidade irá permanentemente durar 1 turno adicional.",
      "descriptionRaw": "Ameyuri surrounds each of her enemies with lightning. For 1 turn, all enemies will have their <Effects>cooldowns increased by 1<Effects>, and any enemy that does not use a new skill will <Improvements>receive 10 additional damage<Improvements> from Ameyuri's skills for 1 turn. This skill will permanently <Improvements>last 1 additional turn<Improvements>.",
      "descriptionBRRaw": "Ameyuri envolve todos os seus inimigos com eletricidade. Por 1 turno, todos os inimigos terão seus <Effects>tempos de recarga aumentados em 1<Effects>, e qualquer inimigo que não usar uma nova habilidade irá <Improvements>receber 10 de dano adicional<Improvements> das habilidades de Ameyuri por 1 turno. Esta habilidade irá permanentemente <Improvements>durar 1 turno adicional<Improvements>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Ameyuri surrounds each of her enemies with lightning. For 1 turn, all enemies will have their cooldowns increased by 1, and any enemy that does not use a new skill will receive 10 additional damage from Ameyuri's skills for 1 turn. This skill will permanently last 1 additional turn. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ameyuri envolve todos os seus inimigos com eletricidade. Por 1 turno, todos os inimigos terão seus tempos de recarga aumentados em 1, e qualquer inimigo que não usar uma nova habilidade irá receber 10 de dano adicional das habilidades de Ameyuri por 1 turno. Esta habilidade irá permanentemente durar 1 turno adicional. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Ameyuri Block",
      "file": "edo_tensei_ameyuri_(s)_skill_4_(ameyuri_block).jpeg",
      "description": "This skill makes Edo Tensei Ameyuri (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Ameyuri (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Ameyuri (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Ameyuri (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Ameyuri (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Ameyuri (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
