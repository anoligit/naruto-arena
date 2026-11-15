// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Haruno Sakura (S)",
  "description": "With her extensive training under Tsunade, the Godaime, for the last two and a half years, Sakura(s)'s healing and combat abilities have both greatly improved.",
  "descriptionBR": "Com seu extenso treinamento sob Tsunade, a Godaime, pelos últimos dois anos e meio, as habilidades de cura e combate de Sakura(s) melhoraram muito.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "haruno_sakura_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chakra Enhanced Punch",
      "file": "haruno_sakura_(s)_skill_1_(chakra_enhanced_punch).jpg",
      "description": "Enhancing her attack with finely controlled chakra, Sakura destroys the destructible defense of one enemy and deals 25 piercing damage to them. This skill will be replaced by 'Blossom's Fury'.",
      "descriptionBR": "Aprimorando seu ataque com chakra finamente controlado, Sakura destrói a defesa destrutível de um inimigo e causa 25 de dano perfurante. Esta habilidade será substituída por 'Blossom's Fury'.",
      "descriptionRaw": "Enhancing her attack with finely controlled chakra, Sakura <Effects>destroys<Effects> the <Defense>destructible defense<Defense> of one enemy and <Damage>deals 25 piercing damage<Damage> to them. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Blossom's Fury'<SkillName>.",
      "descriptionBRRaw": "Aprimorando seu ataque com chakra finamente controlado, Sakura <Effects>destrói<Effects> a <Defense>defesa destrutível<Defense> de um inimigo e <Damage>causa 25 de dano perfurante<Damage>. Esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Blossom's Fury'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Enhancing her attack with finely controlled chakra, Sakura destroys the destructible defense of one enemy and deals 25 piercing damage to them. This skill will be replaced by 'Blossom's Fury'. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Aprimorando seu ataque com chakra finamente controlado, Sakura destrói a defesa destrutível de um inimigo e causa 25 de dano perfurante. Esta habilidade será substituída por 'Blossom's Fury'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Trained Healing",
      "file": "haruno_sakura_(s)_skill_2_(trained_healing).jpg",
      "description": "Using her trained healing skills, Sakura heals an ally for 20 health for 2 turns. Each turn, that ally will have all affliction skills removed from them.",
      "descriptionBR": "Usando suas habilidades de cura treinadas, Sakura cura um aliado em 20 de vida por 2 turnos. A cada turno, esse aliado terá todas as habilidades de aflição removidas.",
      "descriptionRaw": "Using her trained healing skills, Sakura <Defense>heals<Defense> an ally for 20 <Defense>health<Defense> for 2 turns. Each turn, that ally will have <Classes>all affliction skills<Classes> <Effects>removed<Effects> from them.",
      "descriptionBRRaw": "Usando suas habilidades de cura treinadas, Sakura <Defense>cura<Defense> um aliado em 20 de <Defense>vida<Defense> por 2 turnos. A cada turno, esse aliado terá <Classes>todas as habilidades de aflição<Classes> <Effects>removidas<Effects>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Control"
      ],
      "cooldown": 1,
      "ruleDescription": "Using her trained healing skills, Sakura heals an ally for 20 health for 2 turns. Each turn, that ally will have all affliction skills removed from them. Chakra cost: 2 Random. Catalog classes: Chakra, Control. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando suas habilidades de cura treinadas, Sakura cura um aliado em 20 de vida por 2 turnos. A cada turno, esse aliado terá todas as habilidades de aflição removidas. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Control. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Self Heal",
      "file": "haruno_sakura_(s)_skill_3_(self_heal).jpg",
      "description": "Sakura targets herself permanently, healing 20 health instantly the first time she is damaged by a skill. This skill is invisible and ends when triggered.",
      "descriptionBR": "Sakura se mira permanentemente, curando 20 de vida instantaneamente na primeira vez que sofrer dano de uma habilidade. Esta habilidade é invisível e termina quando acionada.",
      "descriptionRaw": "Sakura targets herself permanently, <Defense>healing<Defense> 20 <Defense>health<Defense> instantly the first time she is <Classes>damaged<Classes> by a <Classes>skill<Classes>. <Invisible>This skill is invisible<Invisible> and <Classes>ends<Classes> when <Classes>triggered<Classes>.",
      "descriptionBRRaw": "Sakura se mira permanentemente, <Defense>curando<Defense> 20 de <Defense>vida<Defense> instantaneamente na primeira vez que <Classes>sofrer dano<Classes> de uma <Classes>habilidade<Classes>. <Invisible>Esta habilidade é invisível<Invisible> e <Classes>termina<Classes> quando <Classes>acionada<Classes>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Sakura targets herself permanently, healing 20 health instantly the first time she is damaged by a skill. This skill is invisible and ends when triggered. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sakura se mira permanentemente, curando 20 de vida instantaneamente na primeira vez que sofrer dano de uma habilidade. Esta habilidade é invisível e termina quando acionada. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Insightful Dodge",
      "file": "haruno_sakura_(s)_skill_4_(insightful_dodge).jpg",
      "description": "This skill makes Haruno Sakura (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Haruno Sakura (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Haruno Sakura (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Haruno Sakura (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Haruno Sakura (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Haruno Sakura (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Blossom's Fury",
      "file": "haruno_sakura_(s)_skill_5_(blossom's_fury).jpeg",
      "description": "Sakura releases a ground breaking punch, destroying the destructible defense of all enemies and dealing 35 piercing damage to one enemy and 20 piercing damage to all others. This skill cannot be reflected and returns to 'Chakra Enhanced Punch' once it's used.",
      "descriptionBR": "Sakura libera um soco devastador, destruindo a defesa destrutível de todos os inimigos e causando 35 de dano perfurante a um inimigo e 20 de dano perfurante a todos os outros. Esta habilidade não pode ser refletida e volta a ser 'Chakra Enhanced Punch' após o uso.",
      "descriptionRaw": "Sakura releases a ground breaking punch, <Effects>destroying<Effects> the <Defense>destructible defense<Defense> of all enemies and <Damage>dealing 35 piercing damage<Damage> to one enemy and <Damage>20 piercing damage<Damage> to all others. This skill cannot be <Classes>reflected<Classes> and returns to <SkillName>'Chakra Enhanced Punch'<SkillName> once it's used.",
      "descriptionBRRaw": "Sakura libera um soco devastador, <Effects>destruindo<Effects> a <Defense>defesa destrutível<Defense> de todos os inimigos e <Damage>causando 35 de dano perfurante<Damage> a um inimigo e <Damage>20 de dano perfurante<Damage> a todos os outros. Esta habilidade não pode ser <Classes>refletida<Classes> e volta a ser <SkillName>'Chakra Enhanced Punch'<SkillName> após o uso.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Sakura releases a ground breaking punch, destroying the destructible defense of all enemies and dealing 35 piercing damage to one enemy and 20 piercing damage to all others. This skill cannot be reflected and returns to 'Chakra Enhanced Punch' once it's used. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sakura libera um soco devastador, destruindo a defesa destrutível de todos os inimigos e causando 35 de dano perfurante a um inimigo e 20 de dano perfurante a todos os outros. Esta habilidade não pode ser refletida e volta a ser 'Chakra Enhanced Punch' após o uso. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
