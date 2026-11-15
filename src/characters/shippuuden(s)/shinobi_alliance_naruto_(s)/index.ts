// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Naruto (S)",
  "description": "Having gained complete control of all of the kyuubi's chakra, Naruto will be sure to rampage over every battlefield he comes across.",
  "descriptionBR": "Tendo conquistado controle total sobre todo o chakra da kyuubi, Naruto certamente devastará qualquer campo de batalha que cruzar.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_naruto_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Rasengan Riot",
      "file": "shinobi_alliance_naruto_(s)_skill_1_(rasengan_riot).png",
      "description": "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 20 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'.",
      "descriptionBR": "Formando múltiplos Rasengan sobre sua cabeça, Naruto causa 30 de dano a um inimigo. Um aliado aleatório desse inimigo também receberá 20 de dano. No turno seguinte, essa habilidade será substituída por 'Planetary Rasengan'.",
      "descriptionRaw": "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 20 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'.",
      "descriptionBRRaw": "Formando múltiplos Rasengan sobre sua cabeça, Naruto causa 30 de dano a um inimigo. Um aliado aleatório desse inimigo também receberá 20 de dano. No turno seguinte, essa habilidade será substituída por 'Planetary Rasengan'.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 20 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'. Chakra cost: 2 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Formando múltiplos Rasengan sobre sua cabeça, Naruto causa 30 de dano a um inimigo. Um aliado aleatório desse inimigo também receberá 20 de dano. No turno seguinte, essa habilidade será substituída por 'Planetary Rasengan'. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Rasenkyugan",
      "file": "shinobi_alliance_naruto_(s)_skill_2_(rasenkyugan).png",
      "description": "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 piercing damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'.",
      "descriptionBR": "Naruto agarra múltiplos inimigos e os arremessa contra um Rasengan gigante, causando 15 de dano perfurante a todos os inimigos por 1 turno. Essa habilidade causará 5 de dano adicional ao ser usada. No turno seguinte, essa habilidade será substituída por 'Mini-Bijuudama'.",
      "descriptionRaw": "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 piercing damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'.",
      "descriptionBRRaw": "Naruto agarra múltiplos inimigos e os arremessa contra um Rasengan gigante, causando 15 de dano perfurante a todos os inimigos por 1 turno. Essa habilidade causará 5 de dano adicional ao ser usada. No turno seguinte, essa habilidade será substituída por 'Mini-Bijuudama'.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 piercing damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto agarra múltiplos inimigos e os arremessa contra um Rasengan gigante, causando 15 de dano perfurante a todos os inimigos por 1 turno. Essa habilidade causará 5 de dano adicional ao ser usada. No turno seguinte, essa habilidade será substituída por 'Mini-Bijuudama'. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Mayhem",
      "file": "shinobi_alliance_naruto_(s)_skill_3_(summoning_mayhem).jpeg",
      "description": "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Shinobi Alliance Naruto (S)'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible.",
      "descriptionBR": "Naruto invoca o Caos no campo de batalha. Por 1 turno, a primeira habilidade ofensiva usada em Naruto será counterada. O inimigo counterado receberá 15 de dano adicional de 'Shinobi Alliance Naruto (S)'. No turno seguinte, essa habilidade será substituída por 'Mini-Rasenshuriken'. Essa habilidade é invisível.",
      "descriptionRaw": "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Shinobi Alliance Naruto (S)'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible.",
      "descriptionBRRaw": "Naruto invoca o Caos no campo de batalha. Por 1 turno, a primeira habilidade ofensiva usada em Naruto será counterada. O inimigo counterado receberá 15 de dano adicional de 'Shinobi Alliance Naruto (S)'. No turno seguinte, essa habilidade será substituída por 'Mini-Rasenshuriken'. Essa habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Shinobi Alliance Naruto (S)'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto invoca o Caos no campo de batalha. Por 1 turno, a primeira habilidade ofensiva usada em Naruto será counterada. O inimigo counterado receberá 15 de dano adicional de 'Shinobi Alliance Naruto (S)'. No turno seguinte, essa habilidade será substituída por 'Mini-Rasenshuriken'. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Supersonic Speed",
      "file": "shinobi_alliance_naruto_(s)_skill_4_(supersonic_speed).jpeg",
      "description": "This skill makes Shinobi Alliance Naruto (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Naruto (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Naruto (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Naruto (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Planetary Rasengan",
      "file": "shinobi_alliance_naruto_(s)_skill_5_(planetary_rasengan).png",
      "description": "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time.",
      "descriptionBR": "Naruto forma um grande Rasengan cercado por outros Rasengans, mirando em um inimigo e causando 35 de dano. Se essa habilidade eliminar o inimigo, Naruto causará 10 de dano adicional por 2 turnos e não poderá ser morto durante esse tempo.",
      "descriptionRaw": "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time.",
      "descriptionBRRaw": "Naruto forma um grande Rasengan cercado por outros Rasengans, mirando em um inimigo e causando 35 de dano. Se essa habilidade eliminar o inimigo, Naruto causará 10 de dano adicional por 2 turnos e não poderá ser morto durante esse tempo.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto forma um grande Rasengan cercado por outros Rasengans, mirando em um inimigo e causando 35 de dano. Se essa habilidade eliminar o inimigo, Naruto causará 10 de dano adicional por 2 turnos e não poderá ser morto durante esse tempo. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Mini-Bijuudama",
      "file": "shinobi_alliance_naruto_(s)_skill_6_(mini-bijuudama).jpeg",
      "description": "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra.",
      "descriptionBR": "Ao comprimir chakra, Naruto cria uma miniatura da Bijuudama e causa 35 de dano affliction a um inimigo. Por 1 turno, as habilidades desse inimigo causarão 10 a menos de dano não affliction e o custo de suas habilidades será aumentado em 1 chakra aleatório.",
      "descriptionRaw": "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra.",
      "descriptionBRRaw": "Ao comprimir chakra, Naruto cria uma miniatura da Bijuudama e causa 35 de dano affliction a um inimigo. Por 1 turno, as habilidades desse inimigo causarão 10 a menos de dano não affliction e o custo de suas habilidades será aumentado em 1 chakra aleatório.",
      "energy": [
        "Nin",
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra. Chakra cost: 1 Nin, 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao comprimir chakra, Naruto cria uma miniatura da Bijuudama e causa 35 de dano affliction a um inimigo. Por 1 turno, as habilidades desse inimigo causarão 10 a menos de dano não affliction e o custo de suas habilidades será aumentado em 1 chakra aleatório. Custo de chakra: 1 ninjutsu, 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Mini-Rasenshuriken",
      "file": "shinobi_alliance_naruto_(s)_skill_7_(mini-rasenshuriken).jpeg",
      "description": "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected.",
      "descriptionBR": "Naruto mira em um inimigo, destruindo sua defesa destrutível e causando 15 de dano perfurante. Essa habilidade não pode ser counterada nem refletida.",
      "descriptionRaw": "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected.",
      "descriptionBRRaw": "Naruto mira em um inimigo, destruindo sua defesa destrutível e causando 15 de dano perfurante. Essa habilidade não pode ser counterada nem refletida.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto mira em um inimigo, destruindo sua defesa destrutível e causando 15 de dano perfurante. Essa habilidade não pode ser counterada nem refletida. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
