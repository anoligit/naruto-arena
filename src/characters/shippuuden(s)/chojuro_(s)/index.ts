// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Chojuro (S)",
  "description": "Chojuro (S) confidence is building as the war rages one. The longer it lasts the stronger Chojuro (S) becomes.",
  "descriptionBR": "A confiança de Chojuro (S) cresce enquanto a guerra continua. Quanto mais durar, mais forte Chojuro (S) fica.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "chojuro_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hiramekarei Strider",
      "file": "chojuro_(s)_skill_1_(hiramekarei_strider).jpg",
      "description": "Using Hiramekarei Strider, Chojuro destroys all enemies' destructible defense and damage reduction and then deals 10 piercing damage to them.The following 2 turns, this skill will deal 10 additional damage and can only be used on a single target.",
      "descriptionBR": "Usando Hiramekarei Strider, Chojuro destrói toda a defesa destrutível e a redução de dano dos inimigos e então causa 10 de dano perfurante a eles. Nos próximos 2 turnos, esta habilidade causará 10 de dano adicional e só poderá ser usada em um único alvo.",
      "descriptionRaw": "Using Hiramekarei Strider, Chojuro <Effects>destroys all enemies' destructible defense and damage reduction<Effects> and then <Damage>deals 10 piercing damage<Damage> to them.The following 2 turns, this skill will <Improvements>deal 10 additional damage<Improvements> and can only be <Invisible>used on a single target<Invisible>.",
      "descriptionBRRaw": "Usando Hiramekarei Strider, Chojuro <Effects>destrói toda a defesa destrutível e a redução de dano dos inimigos<Effects> e então <Damage>causa 10 de dano perfurante<Damage> a eles. Nos próximos 2 turnos, esta habilidade <Improvements>causará 10 de dano adicional<Improvements> e só poderá ser <Invisible>usada em um único alvo<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using Hiramekarei Strider, Chojuro destroys all enemies' destructible defense and damage reduction and then deals 10 piercing damage to them.The following 2 turns, this skill will deal 10 additional damage and can only be used on a single target. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando Hiramekarei Strider, Chojuro destrói toda a defesa destrutível e a redução de dano dos inimigos e então causa 10 de dano perfurante a eles. Nos próximos 2 turnos, esta habilidade causará 10 de dano adicional e só poderá ser usada em um único alvo. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Hiramekarei Hammer",
      "file": "chojuro_(s)_skill_2_(hiramekarei_hammer).jpg",
      "description": "Chojuro (S) creates a hammer of chakra to attack one enemy, dealing 40 piercing damage to them. If that enemy has any destructible defense or damage reduction, this skill will apply 'Hiramekarei Strider' on them before dealing damage.",
      "descriptionBR": "Chojuro (S) cria um martelo de chakra para atacar um inimigo, causando 40 de dano piercing. Se o inimigo tiver defesa destrutível ou redução de dano, esta habilidade aplicará 'Hiramekarei Strider' antes de causar dano.",
      "descriptionRaw": "Chojuro (S) creates a hammer of chakra to attack one enemy, <Damage>dealing 40 piercing damage<Damage> to them. If that enemy has any <Defense>destructible defense or damage reduction<Defense>, this skill will <Effects>apply<Effects> <SkillName>'Hiramekarei Strider'<SkillName> on them before dealing damage.",
      "descriptionBRRaw": "Chojuro (S) cria um martelo de chakra para atacar um inimigo, <Damage>causando 40 de dano piercing<Damage>. Se o inimigo tiver <Defense>defesa destrutível ou redução de dano<Defense>, esta habilidade <Effects>aplicará<Effects> <SkillName>'Hiramekarei Strider'<SkillName> antes de causar dano.",
      "energy": [
        "Tai",
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Chojuro (S) creates a hammer of chakra to attack one enemy, dealing 40 piercing damage to them. If that enemy has any destructible defense or damage reduction, this skill will apply 'Hiramekarei Strider' on them before dealing damage. Chakra cost: 1 Tai, 1 Nin. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chojuro (S) cria um martelo de chakra para atacar um inimigo, causando 40 de dano piercing. Se o inimigo tiver defesa destrutível ou redução de dano, esta habilidade aplicará 'Hiramekarei Strider' antes de causar dano. Custo de chakra: 1 taijutsu, 1 ninjutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Hiramekarei Kenjutsu",
      "file": "chojuro_(s)_skill_3_(hiramekarei_kenjutsu).jpg",
      "description": "For 1 turn, all enemy non-chakra skills used on Chojuro will be countered. Any countered enemy will permanently take 10 additional damage from Chojuro's skills.",
      "descriptionBR": "Por 1 turno, todas as habilidades não chakra inimigas usadas em Chojuro serão counteradas. Qualquer inimigo counterado irá permanentemente receber 10 de dano adicional das habilidades de Chojuro.",
      "descriptionRaw": "For 1 turn, all enemy <Classes>non-chakra skills<Classes> used on Chojuro will be <Effects>countered<Effects>. Any countered enemy will permanently <Improvements>take 10 additional damage<Improvements> from Chojuro's skills.",
      "descriptionBRRaw": "Por 1 turno, todas as <Classes>habilidades não chakra<Classes> inimigas usadas em Chojuro serão <Effects>counteradas<Effects>. Qualquer inimigo counterado irá permanentemente <Improvements>receber 10 de dano adicional<Improvements> das habilidades de Chojuro.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, all enemy non-chakra skills used on Chojuro will be countered. Any countered enemy will permanently take 10 additional damage from Chojuro's skills. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, todas as habilidades não chakra inimigas usadas em Chojuro serão counteradas. Qualquer inimigo counterado irá permanentemente receber 10 de dano adicional das habilidades de Chojuro. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hiramekarei Defense",
      "file": "chojuro_(s)_skill_4_(hiramekarei_defense).jpg",
      "description": "This skill makes Chojuro (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Chojuro (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Chojuro (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Chojuro (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Chojuro (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Chojuro (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
