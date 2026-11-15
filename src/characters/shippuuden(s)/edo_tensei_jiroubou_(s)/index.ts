// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Jiroubou (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War along with his Sound Four teammates, Jiroubou is back on the battlefield, and is out for blood. With immense brute force through his mastery of the Cursed Seal, as well as his Earth Release and chakra absorption techniques, Jiroubou is a threat to anyone.",
  "descriptionBR": "Reanimado por Kabuto durante a Quarta Guerra Mundial Shinobi ao lado de seus companheiros do Quarteto do Som, Jiroubou está de volta ao campo de batalha sedento por sangue. Com uma força bruta imensa proporcionada por seu domínio da Marca da Maldição, além de suas técnicas de Liberação de Terra e absorção de chakra, Jiroubou é uma ameaça para qualquer um.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_jiroubou_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Flying Strike",
      "file": "edo_tensei_jiroubou_(s)_skill_1_(flying_strike).png",
      "description": "Jiroubou strikes an enemy, dealing 25 damage to them and giving them 1 stack of 'Dark Chakra Unseal'.",
      "descriptionBR": "Jiroubou golpeia um inimigo, causando 25 de dano a ele e concedendo 1 stack de 'Dark Chakra Unseal'.",
      "descriptionRaw": "Jiroubou strikes an enemy, <Damage>dealing 25 damage<Damage> to them and <Effects>giving them 1 stack<Effects> of <SkillName>'Dark Chakra Unseal'<SkillName>.",
      "descriptionBRRaw": "Jiroubou golpeia um inimigo, <Damage>causando 25 de dano<Damage> a ele e <Effects>concedendo 1 stack<Effects> de <SkillName>'Dark Chakra Unseal'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Jiroubou strikes an enemy, dealing 25 damage to them and giving them 1 stack of 'Dark Chakra Unseal'. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiroubou golpeia um inimigo, causando 25 de dano a ele e concedendo 1 stack de 'Dark Chakra Unseal'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Boulder Throw",
      "file": "edo_tensei_jiroubou_(s)_skill_2_(boulder_throw).png",
      "description": "Jiroubou throws a giant rock at the enemy team, dealing 10 damage to them and giving them 1 stack of 'Dark Chakra Unseal'. Afterwards, Jiroubou gains 10 points of permanent destructible defense.",
      "descriptionBR": "Jiroubou arremessa uma rocha gigante na equipe inimiga, causando 10 de dano a ela e concedendo 1 stack de 'Dark Chakra Unseal'. Depois disso, Jiroubou ganha 10 pontos de defesa destrutível permanente.",
      "descriptionRaw": "Jiroubou throws a giant rock at the enemy team, <Damage>dealing 10 damage<Damage> to them and <Effects>giving them 1 stack<Effects> of <SkillName>'Dark Chakra Unseal'<SkillName>. Afterwards, Jiroubou <Defense>gains 10 points of permanent destructible defense<Defense>.",
      "descriptionBRRaw": "Jiroubou arremessa uma rocha gigante na equipe inimiga, <Damage>causando 10 de dano<Damage> a ela e <Effects>concedendo 1 stack<Effects> de <SkillName>'Dark Chakra Unseal'<SkillName>. Depois disso, Jiroubou <Defense>ganha 10 pontos de defesa destrutível permanente<Defense>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Jiroubou throws a giant rock at the enemy team, dealing 10 damage to them and giving them 1 stack of 'Dark Chakra Unseal'. Afterwards, Jiroubou gains 10 points of permanent destructible defense. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiroubou arremessa uma rocha gigante na equipe inimiga, causando 10 de dano a ela e concedendo 1 stack de 'Dark Chakra Unseal'. Depois disso, Jiroubou ganha 10 pontos de defesa destrutível permanente. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Hostage Kidnapping",
      "file": "edo_tensei_jiroubou_(s)_skill_3_(hostage_kidnapping).png",
      "description": "For 2 turns, Jiroubou kidnaps an enemy, making them ignore all helpful effects, and this skill will be replaced by 'Hostage Drain'. This skill will consume all stacks of 'Dark Chakra Unseal' from that enemy to last 1 additional turn per stack consumed.",
      "descriptionBR": "Por 2 turnos, Jiroubou sequestra um inimigo, fazendo com que ele ignore todos os efeitos defensivos, e essa habilidade será substituída por 'Hostage Drain'. Essa habilidade irá consumir todos os stacks de 'Dark Chakra Unseal' desse inimigo para durar 1 turno adicional por stack consumido.",
      "descriptionRaw": "For 2 turns, Jiroubou kidnaps an enemy, making them <Effects>ignore all helpful effects<Effects>, and this skill will be <Improvements>replaced<Improvements> by <SkillName>'Hostage Drain'<SkillName>. This skill will <Effects>consume all stacks<Effects> of <SkillName>'Dark Chakra Unseal'<SkillName> from that enemy to <Improvements>last 1 additional turn per stack consumed<Improvements>.",
      "descriptionBRRaw": "Por 2 turnos, Jiroubou sequestra um inimigo, fazendo com que ele <Effects>ignore todos os efeitos defensivos<Effects>, e essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Hostage Drain'<SkillName>. Essa habilidade irá <Effects>consumir todos os stacks<Effects> de <SkillName>'Dark Chakra Unseal'<SkillName> desse inimigo para <Improvements>durar 1 turno adicional por stack consumido<Improvements>.",
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
      "ruleDescription": "For 2 turns, Jiroubou kidnaps an enemy, making them ignore all helpful effects, and this skill will be replaced by 'Hostage Drain'. This skill will consume all stacks of 'Dark Chakra Unseal' from that enemy to last 1 additional turn per stack consumed. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 2 turnos, Jiroubou sequestra um inimigo, fazendo com que ele ignore todos os efeitos defensivos, e essa habilidade será substituída por 'Hostage Drain'. Essa habilidade irá consumir todos os stacks de 'Dark Chakra Unseal' desse inimigo para durar 1 turno adicional por stack consumido. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Jiroubou Bare Hands Block",
      "file": "edo_tensei_jiroubou_(s)_skill_4_(jiroubou_bare_hands_block).png",
      "description": "This skill makes Jiroubou invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Jiroubou invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Jiroubou <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Jiroubou <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Jiroubou invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Jiroubou invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Hostage Drain",
      "file": "edo_tensei_jiroubou_(s)_skill_5_(hostage_drain).png",
      "description": "Jiroubou targets an enemy affected by 'Hostage Kidnapping', stealing 10 health and 1 bloodline or genjutsu chakra from them, and granting them 1 stack of 'Dark Chakra Unseal'.",
      "descriptionBR": "Jiroubou alveja um inimigo afetado por 'Hostage Kidnapping', roubando 10 de vida e 1 chakra bloodline ou genjutsu dele, e concedendo a ele 1 stack de 'Dark Chakra Unseal'.",
      "descriptionRaw": "Jiroubou targets an enemy affected by <SkillName>'Hostage Kidnapping'<SkillName>, <Damage>stealing 10 health<Damage> and <Effects>1 bloodline or genjutsu chakra<Effects> from them, and <Effects>granting them 1 stack<Effects> of <SkillName>'Dark Chakra Unseal'<SkillName>.",
      "descriptionBRRaw": "Jiroubou alveja um inimigo afetado por <SkillName>'Hostage Kidnapping'<SkillName>, <Damage>roubando 10 de vida<Damage> e <Effects>1 chakra bloodline ou genjutsu<Effects> dele, e <Effects>concedendo a ele 1 stack<Effects> de <SkillName>'Dark Chakra Unseal'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Jiroubou targets an enemy affected by 'Hostage Kidnapping', stealing 10 health and 1 bloodline or genjutsu chakra from them, and granting them 1 stack of 'Dark Chakra Unseal'. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiroubou alveja um inimigo afetado por 'Hostage Kidnapping', roubando 10 de vida e 1 chakra bloodline ou genjutsu dele, e concedendo a ele 1 stack de 'Dark Chakra Unseal'. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Dark Chakra Unseal",
      "file": "edo_tensei_jiroubou_(s)_skill_6_(dark_chakra_unseal).png",
      "description": "Enemies affected by 'Dark Chakra Unseal' will receive 5 additional damage from Jiroubou's skills.",
      "descriptionBR": "Inimigos afetados por 'Dark Chakra Unseal' irão receber 5 de dano adicional das habilidades de Jiroubou.",
      "descriptionRaw": "Enemies affected by <SkillName>'Dark Chakra Unseal'<SkillName> will <Improvements>receive 5 additional damage<Improvements> from <SkillText>Jiroubou's skills<SkillText>.",
      "descriptionBRRaw": "Inimigos afetados por <SkillName>'Dark Chakra Unseal'<SkillName> irão <Improvements>receber 5 de dano adicional<Improvements> das <SkillText>habilidades de Jiroubou<SkillText>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Enemies affected by 'Dark Chakra Unseal' will receive 5 additional damage from Jiroubou's skills. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Inimigos afetados por 'Dark Chakra Unseal' irão receber 5 de dano adicional das habilidades de Jiroubou. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
