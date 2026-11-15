// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Sakura (S)",
  "description": "With her extensive training under Tsunade for the last two and a half years, Sakura has gained a greater understanding of healing and the human body. While Sakura's physical strength and healing prowess have both increased, her greatest ability is a powerful chakra storing seal taught to her by Tsunade.",
  "descriptionBR": "Com seu extenso treinamento sob Tsunade nos últimos dois anos e meio, Sakura adquiriu um maior entendimento sobre cura e o corpo humano. Embora sua força física e capacidade de cura tenham aumentado, sua maior habilidade é um poderoso selo de armazenamento de chakra ensinado por Tsunade.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_sakura_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Empowered Devasting Punch",
      "file": "shinobi_alliance_sakura_(s)_skill_1_(empowered_devasting_punch).png",
      "description": "Amplifying her strength, Sakura deals 20 damage to one enemy and 10 damage to all others. While 'Strength of a Hundred Seal' is active, this skill will deal 35 damage to one enemy, and 15 to all others.",
      "descriptionBR": "Amplificando sua força, Sakura causa 20 de dano a um inimigo e 10 de dano a todos os outros. Enquanto 'Strength of a Hundred Seal' estiver ativo, essa habilidade irá causar 35 de dano a um inimigo e 15 de dano a todos os outros.",
      "descriptionRaw": "Amplifying her strength, Sakura <Damage>deals 20 damage to one enemy<Damage> and <Damage>10 damage to all others<Damage>. While <SkillName>'Strength of a Hundred Seal'<SkillName> is active, this skill will deal <Damage>35 damage to one enemy<Damage>, and <Damage>15 to all others<Damage>.",
      "descriptionBRRaw": "Amplificando sua força, Sakura causa <Damage>20 de dano a um inimigo<Damage> e <Damage>10 de dano a todos os outros<Damage>. Enquanto <SkillName>'Strength of a Hundred Seal'<SkillName> estiver ativo, essa habilidade irá causar <Damage>35 de dano a um inimigo<Damage> e <Damage>15 de dano a todos os outros<Damage>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Amplifying her strength, Sakura deals 20 damage to one enemy and 10 damage to all others. While 'Strength of a Hundred Seal' is active, this skill will deal 35 damage to one enemy, and 15 to all others. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Amplificando sua força, Sakura causa 20 de dano a um inimigo e 10 de dano a todos os outros. Enquanto 'Strength of a Hundred Seal' estiver ativo, essa habilidade irá causar 35 de dano a um inimigo e 15 de dano a todos os outros. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Superior Healing",
      "file": "shinobi_alliance_sakura_(s)_skill_2_(superior_healing).png",
      "description": "With her superior healing skills, Sakura heals half of one ally's missing health, rounded down, and removes all enemy affliction effects from them. While 'Strength of a Hundred Seal' is active, this skill will cost 1 random and have no cooldown.",
      "descriptionBR": "Com suas habilidades superiores de cura, Sakura restaura metade da vida perdida de um aliado, arredondando para baixo, e remove todos os efeitos de dano affliction inimigos dele. Enquanto 'Strength of a Hundred Seal' estiver ativa, essa habilidade irá custar 1 chakra aleatório e não terá cooldown.",
      "descriptionRaw": "With her superior healing skills, Sakura <Defense>heals half of one ally's missing health<Defense>, rounded down, and <Defense>removes all enemy affliction<Defense> effects from them. While <SkillName>'Strength of a Hundred Seal'<SkillName> is active, this skill <Improvements>will cost 1 random and have no cooldown<Improvements>.",
      "descriptionBRRaw": "Com suas habilidades superiores de cura, Sakura <Defense>restaura metade da vida perdida de um aliado<Defense>, arredondando para baixo, e <Defense>remove todos os efeitos de dano affliction inimigos<Defense> dele. Enquanto <SkillName>'Strength of a Hundred Seal'<SkillName> estiver ativa, essa habilidade <Improvements>irá custar 1 chakra aleatório e não terá cooldown<Improvements>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "With her superior healing skills, Sakura heals half of one ally's missing health, rounded down, and removes all enemy affliction effects from them. While 'Strength of a Hundred Seal' is active, this skill will cost 1 random and have no cooldown. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Com suas habilidades superiores de cura, Sakura restaura metade da vida perdida de um aliado, arredondando para baixo, e remove todos os efeitos de dano affliction inimigos dele. Enquanto 'Strength of a Hundred Seal' estiver ativa, essa habilidade irá custar 1 chakra aleatório e não terá cooldown. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Strength of a Hundred Seal",
      "file": "shinobi_alliance_sakura_(s)_skill_3_(strength_of_a_hundred_seal).png",
      "description": "Sakura gains 3 Seals. During this time, each time Sakura uses a skill other than her invulnerability, she will use up 1 Seal. While 'Strength of a Hundred Seal' is active, Sakura can use this skill again for no cost to restore 25 health and remove all harmful effects on her.",
      "descriptionBR": "Sakura ganha 3 Selos. Durante esse tempo, sempre que usar uma habilidade que não seja sua invulnerabilidade, ela consumirá 1 Selo. Enquanto 'Strength of a Hundred Seal' estiver ativa, Sakura pode usar essa habilidade novamente sem custo para restaurar 25 de vida e remover todos os efeitos ofensivos sobre si.",
      "descriptionRaw": "Sakura gains <Effects>3 Seals<Effects>. During this time, each time Sakura <SkillText>uses a skill other than her invulnerability<SkillText>, she will <Effects>use up 1 Seal<Effects>. While <SkillName>'Strength of a Hundred Seal'<SkillName> is active, Sakura can use this skill again for no cost to <Defense>restore 25 health and remove all harmful effects<Defense> on her.",
      "descriptionBRRaw": "Sakura ganha <Effects><SkillText>3 Selos<SkillText><Effects>. Durante esse tempo, sempre que <SkillText>usar uma habilidade que não seja sua invulnerabilidade<SkillText>, ela <Effects>consumirá 1 Selo<Effects>. Enquanto <SkillName>'Strength of a Hundred Seal'<SkillName> estiver ativa, Sakura pode usar essa habilidade novamente sem custo para <Defense>restaurar 25 de vida e remover todos os efeitos ofensivos<Defense> sobre si.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Sakura gains 3 Seals. During this time, each time Sakura uses a skill other than her invulnerability, she will use up 1 Seal. While 'Strength of a Hundred Seal' is active, Sakura can use this skill again for no cost to restore 25 health and remove all harmful effects on her. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sakura ganha 3 Selos. Durante esse tempo, sempre que usar uma habilidade que não seja sua invulnerabilidade, ela consumirá 1 Selo. Enquanto 'Strength of a Hundred Seal' estiver ativa, Sakura pode usar essa habilidade novamente sem custo para restaurar 25 de vida e remover todos os efeitos ofensivos sobre si. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Summoning: Katsuyu",
      "file": "shinobi_alliance_sakura_(s)_skill_4_(summoning_katsuyu).png",
      "description": "This skill makes Shinobi Alliance Sakura (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Sakura (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Sakura (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Sakura (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Sakura (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Sakura (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
