// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Tenten (S)",
  "description": "During the Fourth Shinobi World War, Tenten joins the Shinobi Alliance and takes possession of the Bashousen, one of the treasured tools of the Sage of the Six Paths. By channeling large amounts of chakra through the fan, she can unleash elemental devastation or adapt its power to protect her allies.",
  "descriptionBR": "Durante a Quarta Guerra Mundial Ninja, Tenten se junta à Aliança Shinobi e toma posse do Bashousen, uma das ferramentas preciosas do Sábio dos Seis Caminhos. Canalizando grandes quantidades de chakra através do leque, ela pode liberar ataques elementais devastadores ou adaptar seu poder para proteger seus aliados.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_tenten_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Bashousen: Coil of Fire",
      "file": "shinobi_alliance_tenten_(s)_skill_1_(bashousen_coil_of_fire).png",
      "description": "Using the Sage of the Six Paths' legendary leaf fan, Tenten blasts her enemies with a sea of raging fire, dealing 15 damage and 15 affliction damage* to them. The following 3 turns, they will take 5 affliction damage.",
      "descriptionBR": "Usando o lendário leque do Sábio dos Seis Caminhos, Tenten atinge seus inimigos com um mar de chamas furiosas, causando 15 de dano e 15 de dano affliction* a eles. Nos próximos 3 turnos, eles irão receber 5 de dano affliction.",
      "descriptionRaw": "Using the Sage of the Six Paths' legendary leaf fan, Tenten blasts her enemies with a sea of raging fire, <Damage>dealing 15 damage and 15 affliction damage*<Damage> to them. The following 3 turns, they will <Damage>take 5 affliction damage<Damage>.",
      "descriptionBRRaw": "Usando o lendário leque do Sábio dos Seis Caminhos, Tenten atinge seus inimigos com um mar de chamas furiosas, <Damage>causando 15 de dano e 15 de dano affliction*<Damage> a eles. Nos próximos 3 turnos, eles irão <Damage>receber 5 de dano affliction<Damage>.",
      "energy": [
        "Tai",
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "*Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Using the Sage of the Six Paths' legendary leaf fan, Tenten blasts her enemies with a sea of raging fire, dealing 15 damage and 15 affliction damage* to them. The following 3 turns, they will take 5 affliction damage. Chakra cost: 1 Tai, 1 Nin, 1 Random. Catalog classes: Physical, *Affliction, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando o lendário leque do Sábio dos Seis Caminhos, Tenten atinge seus inimigos com um mar de chamas furiosas, causando 15 de dano e 15 de dano affliction* a eles. Nos próximos 3 turnos, eles irão receber 5 de dano affliction. Custo de chakra: 1 taijutsu, 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, *Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Bashousen: Coil of Wind",
      "file": "shinobi_alliance_tenten_(s)_skill_2_(bashousen_coil_of_wind).png",
      "description": "Using the Bashousen to throw a gust of wind, the following turn all non-mental skills used on Tenten or her team will be reflected back to the enemy. This skill is invisible.",
      "descriptionBR": "Usando o Bashousen para lançar uma rajada de vento, no turno seguinte todas as habilidades não mentais usadas em Tenten ou em sua equipe serão refletidas de volta ao inimigo. Esta habilidade é invisível.",
      "descriptionRaw": "Using the Bashousen to throw a gust of wind, the following turn all <Classes>non-mental skills<Classes> used on Tenten or her team will be <Defense>reflected<Defense> back to the enemy. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Usando o Bashousen para lançar uma rajada de vento, no turno seguinte todas as <Classes>habilidades não mentais<Classes> usadas em Tenten ou em sua equipe serão <Defense>refletidas<Defense> de volta ao inimigo. Esta habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Tai",
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Using the Bashousen to throw a gust of wind, the following turn all non-mental skills used on Tenten or her team will be reflected back to the enemy. This skill is invisible. Chakra cost: 1 Tai, 1 Nin, 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando o Bashousen para lançar uma rajada de vento, no turno seguinte todas as habilidades não mentais usadas em Tenten ou em sua equipe serão refletidas de volta ao inimigo. Esta habilidade é invisível. Custo de chakra: 1 taijutsu, 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Bashousen: Strike",
      "file": "shinobi_alliance_tenten_(s)_skill_3_(bashousen_strike).png",
      "description": "If used on an enemy, deals 15 affliction damage. If used on herself, or an ally, grants 15 points of destructible defense. If used after 'Bashousen: Coil of Fire', this will also deal 5 affliction damage permanently. If used after 'Bashousen: Coil of Wind', this will also reflect non-mental skills for 1 turn; Invisible.",
      "descriptionBR": "Se usada em um inimigo, ele irá receber 15 de dano affliction por 1 turno. Se usada nela mesma ou em um aliado, o alvo irá ganhar 15 pontos de defesa destrutível permanente. Se usada um turno após 'Bashousen: Coil of Fire', esta habilidade também irá causar 5 de dano affliction permanentemente. Se usada um turno após 'Bashousen: Coil of Wind', esta habilidade irá refletir habilidades não mentais por 1 turno; Invisível.",
      "descriptionRaw": "If used on an enemy, <Damage>deals 15 affliction damage<Damage>. If used on <Invisible>herself<Invisible>, or <Invisible>an ally<Invisible>, <Defense>grants 15 points of destructible defense<Defense>. If used after <SkillName>'Bashousen: Coil of Fire'<SkillName>, this will also <Damage>deal 5 affliction damage permanently<Damage>. If used after <SkillName>'Bashousen: Coil of Wind'<SkillName>, this will also <Defense>reflect non-mental skills<Defense> for 1 turn; Invisible.",
      "descriptionBRRaw": "Se usada em um inimigo, ele irá <Damage>receber 15 de dano affliction<Damage> por 1 turno. Se usada <Invisible>nela mesma ou em um aliado<Invisible>, o alvo irá <Defense>ganhar 15 pontos de defesa destrutível permanente<Defense>. Se usada um turno após <SkillName>'Bashousen: Coil of Fire'<SkillName>, esta habilidade também irá <Damage>causar 5 de dano affliction permanentemente<Damage>. Se usada um turno após <SkillName>'Bashousen: Coil of Wind'<SkillName>, esta habilidade irá <Defense>refletir habilidades não mentais<Defense> por 1 turno; Invisível.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "If used on an enemy, deals 15 affliction damage. If used on herself, or an ally, grants 15 points of destructible defense. If used after 'Bashousen: Coil of Fire', this will also deal 5 affliction damage permanently. If used after 'Bashousen: Coil of Wind', this will also reflect non-mental skills for 1 turn; Invisible. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Se usada em um inimigo, ele irá receber 15 de dano affliction por 1 turno. Se usada nela mesma ou em um aliado, o alvo irá ganhar 15 pontos de defesa destrutível permanente. Se usada um turno após 'Bashousen: Coil of Fire', esta habilidade também irá causar 5 de dano affliction permanentemente. Se usada um turno após 'Bashousen: Coil of Wind', esta habilidade irá refletir habilidades não mentais por 1 turno; Invisível. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Reflective Paper Bombs",
      "file": "shinobi_alliance_tenten_(s)_skill_4_(reflective_paper_bombs).png",
      "description": "This skill makes Shinobi Alliance Tenten (S) invulnerable for 1 turn.",
      "descriptionBR": "Esta habilidade deixa Shinobi Alliance Tenten (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Tenten (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Esta habilidade deixa Shinobi Alliance Tenten (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Tenten (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade deixa Shinobi Alliance Tenten (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
