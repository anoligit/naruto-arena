// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Atsui (S)",
  "description": "A skilled shinobi from the Hidden Cloud and a member of the First Division of the Allied Shinobi Forces, Atsui specializes in Fire Release and swordsmanship. With his fiery personality and aggressive fighting style, he combines blazing sword techniques with powerful flames to overwhelm his enemies.",
  "descriptionBR": "Um habilidoso shinobi de Kumogakure e integrante da Primeira Divisão das Forças Aliadas Shinobi, Atsui é especializado em Liberação de Fogo e kenjutsu. Dono de uma personalidade explosiva e um estilo de combate agressivo, combina técnicas de espada com chamas intensas para dominar seus adversários.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "atsui_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Blazing Sword Stance",
      "file": "atsui_(s)_skill_1_(blazing_sword_stance).png",
      "description": "By channeling his Fire Release chakra into his blade, Atsui will deal 10 affliction damage* to any enemy who uses a new non-mental skill on him for 4 turns. During this time, if he is targeted by a new harmful skill, the active cooldowns of 'Blazing Sword Slash' and 'Raging Inferno Sea' will be reset.",
      "descriptionBR": "Colocando seu chakra de fogo em sua espada, Atsui causará 10 de dano aflitivo* a qualquer inimigo que usar uma nova habilidade não-mental nele por 4 turnos. Durante esse tempo, se Atsui for alvejado por uma nova habilidade ofensiva, os tempos de recarga ativos de 'Blazing Sword Slash' e 'Raging Inferno Sea' serão resetados.",
      "descriptionRaw": "By channeling his Fire Release chakra into his blade, Atsui will deal <Damage>10 affliction damage*<Damage> to any enemy who uses a new <Classes>non-mental<Classes> skill on him for 4 turns. During this time, if he is targeted by a new <Classes>harmful skill<Classes>, the active cooldowns of <SkillName>'Blazing Sword Slash'<SkillName> and <SkillName>'Raging Inferno Sea'<SkillName> <Effects>will be reset<Effects>.",
      "descriptionBRRaw": "Colocando seu chakra de fogo em sua espada, Atsui causará <Damage>10 de dano aflitivo*<Damage> a qualquer inimigo que usar uma nova habilidade <Classes>não-mental<Classes> nele por 4 turnos. Durante esse tempo, se Atsui for alvejado por uma nova <Classes>habilidade ofensiva<Classes>, os tempos de recarga ativos de <SkillName>'Blazing Sword Slash'<SkillName> e <SkillName>'Raging Inferno Sea'<SkillName> <Effects>serão resetados<Effects>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee*"
      ],
      "cooldown": 5,
      "ruleDescription": "By channeling his Fire Release chakra into his blade, Atsui will deal 10 affliction damage* to any enemy who uses a new non-mental skill on him for 4 turns. During this time, if he is targeted by a new harmful skill, the active cooldowns of 'Blazing Sword Slash' and 'Raging Inferno Sea' will be reset. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee*. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Colocando seu chakra de fogo em sua espada, Atsui causará 10 de dano aflitivo* a qualquer inimigo que usar uma nova habilidade não-mental nele por 4 turnos. Durante esse tempo, se Atsui for alvejado por uma nova habilidade ofensiva, os tempos de recarga ativos de 'Blazing Sword Slash' e 'Raging Inferno Sea' serão resetados. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee*. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Blazing Sword Slash",
      "file": "atsui_(s)_skill_2_(blazing_sword_slash).png",
      "description": "With his sword engulfed in flames, Atsui delivers a blazing slash, dealing 25 piercing damage to one enemy and making them unable to target anyone else but Atsui for 1 turn. If this enemy's health drops to 60 or below, they will take 5 affliction damage* the following 2 turns.",
      "descriptionBR": "Com sua espada coberta em chamas, Atsui realiza um corte flamejante, causando 25 de dano perfurante a um inimigo e o faz incapaz de alvejar qualquer outro personagem além de Atsui por 1 turno. Se a vida desse inimigo cair para 60 ou menos, ele receberá 5 de dano aflitivo* nos 2 turnos seguintes.",
      "descriptionRaw": "With his sword engulfed in flames, Atsui delivers a blazing slash, dealing <Damage>25 piercing damage<Damage> to one enemy and making them <Effects>unable to target anyone else but Atsui<Effects> for 1 turn. If this enemy's health drops to 60 or below, they will take <Damage>5 affliction damage*<Damage> the following 2 turns.",
      "descriptionBRRaw": "Com sua espada coberta em chamas, Atsui realiza um corte flamejante, causando <Damage>25 de dano perfurante<Damage> a um inimigo e o faz <Effects>incapaz de alvejar qualquer outro personagem além de Atsui<Effects> por 1 turno. Se a vida desse inimigo cair para 60 ou menos, ele receberá <Damage>5 de dano aflitivo*<Damage> nos 2 turnos seguintes.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Affliction*",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "With his sword engulfed in flames, Atsui delivers a blazing slash, dealing 25 piercing damage to one enemy and making them unable to target anyone else but Atsui for 1 turn. If this enemy's health drops to 60 or below, they will take 5 affliction damage* the following 2 turns. Chakra cost: 1 Tai. Catalog classes: Physical, Affliction*, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Com sua espada coberta em chamas, Atsui realiza um corte flamejante, causando 25 de dano perfurante a um inimigo e o faz incapaz de alvejar qualquer outro personagem além de Atsui por 1 turno. Se a vida desse inimigo cair para 60 ou menos, ele receberá 5 de dano aflitivo* nos 2 turnos seguintes. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Affliction*, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Raging Inferno Sea",
      "file": "atsui_(s)_skill_3_(raging_inferno_sea).png",
      "description": "Atsui unleashes a massive wave of flames, dealing 20 affliction damage to all enemies. Any enemy whose health drops to 60 or below will take 5 affliction damage the following 2 turns.",
      "descriptionBR": "Atsui libera uma onda massiva de chamas, causando 20 de dano aflitivo a todos os inimigos. Qualquer inimigo cuja vida cair para 60 ou menos receberá 5 de dano aflitivo nos 2 turnos seguintes.",
      "descriptionRaw": "Atsui unleashes a massive wave of flames, dealing <Damage>20 affliction damage<Damage> to all enemies. Any enemy whose health drops to 60 or below will take <Damage>5 affliction damage<Damage> the following 2 turns.",
      "descriptionBRRaw": "Atsui libera uma onda massiva de chamas, causando <Damage>20 de dano aflitivo<Damage> a todos os inimigos. Qualquer inimigo cuja vida cair para 60 ou menos receberá <Damage>5 de dano aflitivo<Damage> nos 2 turnos seguintes.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Atsui unleashes a massive wave of flames, dealing 20 affliction damage to all enemies. Any enemy whose health drops to 60 or below will take 5 affliction damage the following 2 turns. Chakra cost: 1 Nin, 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Atsui libera uma onda massiva de chamas, causando 20 de dano aflitivo a todos os inimigos. Qualquer inimigo cuja vida cair para 60 ou menos receberá 5 de dano aflitivo nos 2 turnos seguintes. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Protective Swordplay",
      "file": "atsui_(s)_skill_4_(protective_swordplay).png",
      "description": "This skill makes Atsui invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Atsui invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Atsui <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Atsui <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Atsui invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Atsui invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
