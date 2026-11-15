// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Ao (S)",
  "description": "Ao (S) is a hunter-nin of the Hidden Mist Village and a skilled sensor. Ao is a veteran shinobi who has been in many battles, one of his spoils of war is the byakugan he possesses.",
  "descriptionBR": "Ao (S) é um hunter-nin da Vila Oculta da Névoa e um sensor habilidoso. Ele é um shinobi veterano que participou de muitas batalhas, um dos seus despojos de guerra é o byakugan que possui.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "ao_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Stolen Byakugan",
      "file": "ao_(s)_skill_1_(stolen_byakugan).jpg",
      "description": "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from Ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected.",
      "descriptionBR": "Ao usa seu Byakugan em um inimigo. Por 3 turnos, qualquer nova habilidade invisível usada por esse inimigo será visível e cada vez que usar uma nova habilidade, receberá 50% a mais de dano de habilidades Ranged por 1 turno. Esta habilidade é invisível e não pode ser counterada ou refletida.",
      "descriptionRaw": "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from Ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected.",
      "descriptionBRRaw": "Ao usa seu Byakugan em um inimigo. Por 3 turnos, qualquer nova habilidade invisível usada por esse inimigo será visível e cada vez que usar uma nova habilidade, receberá 50% a mais de dano de habilidades Ranged por 1 turno. Esta habilidade é invisível e não pode ser counterada ou refletida.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from Ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao usa seu Byakugan em um inimigo. Por 3 turnos, qualquer nova habilidade invisível usada por esse inimigo será visível e cada vez que usar uma nova habilidade, receberá 50% a mais de dano de habilidades Ranged por 1 turno. Esta habilidade é invisível e não pode ser counterada ou refletida. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Sensing Barrier",
      "file": "ao_(s)_skill_2_(sensing_barrier).jpg",
      "description": "Ao uses his sensing barrier on an enemy, making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. The following turn, that enemy will receive an additional 5 damage from 'Sensing Barrier'.",
      "descriptionBR": "Ao usa sua barreira sensorial em um inimigo, fazendo com que ele fique incapaz de reduzir dano ou se tornar invulnerável e causando 20 de dano a ele por 1 turno. No próximo turno, esse inimigo irá receber 5 de dano adicional de 'Sensing Barrier'.",
      "descriptionRaw": "Ao uses his sensing barrier on an enemy, making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. The following turn, that enemy will receive an additional 5 damage from 'Sensing Barrier'.",
      "descriptionBRRaw": "Ao usa sua barreira sensorial em um inimigo, fazendo com que ele fique incapaz de reduzir dano ou se tornar invulnerável e causando 20 de dano a ele por 1 turno. No próximo turno, esse inimigo irá receber 5 de dano adicional de 'Sensing Barrier'.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Ao uses his sensing barrier on an enemy, making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. The following turn, that enemy will receive an additional 5 damage from 'Sensing Barrier'. Chakra cost: 1 Blood. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao usa sua barreira sensorial em um inimigo, fazendo com que ele fique incapaz de reduzir dano ou se tornar invulnerável e causando 20 de dano a ele por 1 turno. No próximo turno, esse inimigo irá receber 5 de dano adicional de 'Sensing Barrier'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Byakugan Seal",
      "file": "ao_(s)_skill_3_(byakugan_seal).jpg",
      "description": "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied.",
      "descriptionBR": "Por 1 turno, a primeira habilidade não mental usada em Ao (S) será counterada. Esta habilidade é invisível na primeira vez que é usada e pode ser usada apenas uma vez. Após os 2 turnos seguintes, esta habilidade será reaplicada. Durante esse tempo, se 'Sensing Barrier' for usada, esta habilidade será reaplicada instantaneamente.",
      "descriptionRaw": "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied.",
      "descriptionBRRaw": "Por 1 turno, a primeira habilidade não mental usada em Ao (S) será counterada. Esta habilidade é invisível na primeira vez que é usada e pode ser usada apenas uma vez. Após os 2 turnos seguintes, esta habilidade será reaplicada. Durante esse tempo, se 'Sensing Barrier' for usada, esta habilidade será reaplicada instantaneamente.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, a primeira habilidade não mental usada em Ao (S) será counterada. Esta habilidade é invisível na primeira vez que é usada e pode ser usada apenas uma vez. Após os 2 turnos seguintes, esta habilidade será reaplicada. Durante esse tempo, se 'Sensing Barrier' for usada, esta habilidade será reaplicada instantaneamente. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Reactionary Defense",
      "file": "ao_(s)_skill_4_(reactionary_defense).jpg",
      "description": "This skill makes Ao (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Ao (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Ao (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Ao (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Ao (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Ao (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
