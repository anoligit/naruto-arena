// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Haku (S)",
  "description": "Edo Tensei Haku (S) is not sure why he is among the living again but his dream of protecting Zabuza pushes him to go all out.",
  "descriptionBR": "Edo Tensei Haku (S) não entende por que está entre os vivos novamente, mas seu sonho de proteger Zabuza o motiva a lutar com tudo.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_haku_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Silent Piercing Murder",
      "file": "edo_tensei_haku_(s)_skill_1_(silent_piercing_murder).jpeg",
      "description": "Haku deals 20 piercing damage to one enemy. The following turn, that enemy will take 10 piercing damage. For 1 turn, they will lose 1 bloodline or ninjutsu chakra.",
      "descriptionBR": "Haku causa 20 de dano perfurante a um inimigo. No próximo turno, esse inimigo irá receber 10 de dano perfurante. Por 1 turno, ele irá perder 1 chakra Bloodline ou Ninjutsu.",
      "descriptionRaw": "Haku <Damage>deals 20 piercing damage<Damage> to one enemy. The following turn, that enemy will <Damage>take 10 piercing damage<Damage>. For 1 turn, they will <Effects>lose 1 bloodline or ninjutsu chakra<Effects>.",
      "descriptionBRRaw": "Haku <Damage>causa 20 de dano perfurante<Damage> a um inimigo. No próximo turno, esse inimigo irá <Damage>receber 10 de dano perfurante<Damage>. Por 1 turno, ele irá <Effects>perder 1 chakra Bloodline ou Ninjutsu<Effects>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Haku deals 20 piercing damage to one enemy. The following turn, that enemy will take 10 piercing damage. For 1 turn, they will lose 1 bloodline or ninjutsu chakra. Chakra cost: 1 Blood. Catalog classes: Physical, Action, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Haku causa 20 de dano perfurante a um inimigo. No próximo turno, esse inimigo irá receber 10 de dano perfurante. Por 1 turno, ele irá perder 1 chakra Bloodline ou Ninjutsu. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Cristal Ice Mirrors Execution",
      "file": "edo_tensei_haku_(s)_skill_2_(cristal_ice_mirrors_execution).jpeg",
      "description": "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy.",
      "descriptionBR": "Haku causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva que não seja do tipo Mental, ela será refletida em outro inimigo aleatório. Se nenhuma habilidade for refletida, Haku roubará 1 chakra do tipo Bloodline desse inimigo.",
      "descriptionRaw": "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy.",
      "descriptionBRRaw": "Haku causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva que não seja do tipo Mental, ela será refletida em outro inimigo aleatório. Se nenhuma habilidade for refletida, Haku roubará 1 chakra do tipo Bloodline desse inimigo.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Haku causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva que não seja do tipo Mental, ela será refletida em outro inimigo aleatório. Se nenhuma habilidade for refletida, Haku roubará 1 chakra do tipo Bloodline desse inimigo. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Low Temperature Enhancement",
      "file": "edo_tensei_haku_(s)_skill_3_(low_temperature_enhancement).jpeg",
      "description": "Haku grants himself 15 destructible defense for 2 turns. The following 2 turns, he will deal 5 additional damage and gain 1 random chakra each turn.",
      "descriptionBR": "Haku concede a si mesmo 15 de defesa destrutível por 2 turnos. Nos próximos 2 turnos, ele irá causar 5 de dano adicional e ganhar 1 chakra aleatório a cada turno.",
      "descriptionRaw": "Haku <Defense>grants himself 15 destructible defense<Defense> for 2 turns. The following 2 turns, he will <Improvements>deal 5 additional damage<Improvements> and <Effects>gain 1 random chakra<Effects> each turn.",
      "descriptionBRRaw": "Haku <Defense>concede a si mesmo 15 de defesa destrutível<Defense> por 2 turnos. Nos próximos 2 turnos, ele irá <Improvements>causar 5 de dano adicional<Improvements> e <Effects>ganhar 1 chakra aleatório<Effects> a cada turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Haku grants himself 15 destructible defense for 2 turns. The following 2 turns, he will deal 5 additional damage and gain 1 random chakra each turn. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Haku concede a si mesmo 15 de defesa destrutível por 2 turnos. Nos próximos 2 turnos, ele irá causar 5 de dano adicional e ganhar 1 chakra aleatório a cada turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "ET Haku Block",
      "file": "edo_tensei_haku_(s)_skill_4_(et_haku_block).jpeg",
      "description": "This skill makes Edo Tensei Haku (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Haku (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Haku (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Haku (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Haku (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Haku (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
