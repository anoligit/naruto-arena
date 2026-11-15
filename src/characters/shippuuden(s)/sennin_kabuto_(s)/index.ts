// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sennin Kabuto (S)",
  "description": "Having surpassed Orochimaru and perfected Sage Transformation through relentless experimentation, Kabuto Yakushi has become a living nexus of stolen power. His body endlessly adapts, assimilating DNA, techniques, and chakra with surgical precision.",
  "descriptionBR": "Tendo superado Orochimaru e aperfeiçoado a Transformação Sábia por meio de experimentos incessantes, Kabuto Yakushi se tornou um núcleo vivo de poder roubado. Seu corpo se adapta continuamente, assimilando DNA, técnicas e chakra com precisão cirúrgica.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "sennin_kabuto_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "DNA Assimilation",
      "file": "sennin_kabuto_(s)_skill_1_(dna_assimilation).png",
      "description": "For the rest of the game, this skill will be replaced every turn by a random skill from any of Orochimaru's Finest Shinobi (Jiroubou, Sakon, Tayuya, Kidoumaru, Kimimaro). This skill cannot be removed or ignored.",
      "descriptionBR": "Pelo resto do jogo, essa habilidade será substituída a cada turno por uma habilidade aleatória de qualquer um dos Melhores Shinobi de Orochimaru (Jiroubou, Sakon, Tayuya, Kidoumaru, Kimimaro). Essa habilidade não pode ser removida nem ignorada.",
      "descriptionRaw": "For the rest of the game, this skill will be <Effects>replaced every turn<Effects> by a random skill from any of <SkillText>Orochimaru's Finest Shinobi (Jiroubou, Sakon, Tayuya, Kidoumaru, Kimimaro)<SkillText>. This skill <Classes>cannot be removed or ignored<Classes>.",
      "descriptionBRRaw": "Pelo resto do jogo, essa habilidade será <Effects>substituída a cada turno<Effects> por uma habilidade aleatória de qualquer um dos <SkillText>Melhores Shinobi de Orochimaru (Jiroubou, Sakon, Tayuya, Kidoumaru, Kimimaro)<SkillText>. Essa habilidade <Classes>não pode ser removida nem ignorada<Classes>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "For the rest of the game, this skill will be replaced every turn by a random skill from any of Orochimaru's Finest Shinobi (Jiroubou, Sakon, Tayuya, Kidoumaru, Kimimaro). This skill cannot be removed or ignored. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pelo resto do jogo, essa habilidade será substituída a cada turno por uma habilidade aleatória de qualquer um dos Melhores Shinobi de Orochimaru (Jiroubou, Sakon, Tayuya, Kidoumaru, Kimimaro). Essa habilidade não pode ser removida nem ignorada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Inorganic Reanimation",
      "file": "sennin_kabuto_(s)_skill_2_(inorganic_reanimation).png",
      "description": "Kabuto targets all enemies, dealing 15 piercing damage to them, cancelling their delayed skills, and increasing the cost of their skills by 1 random chakra for 1 turn. If this successfully cancels a delayed skill, the enemy who used it will have their non-mental skills stunned for 1 turn.",
      "descriptionBR": "Kabuto tem como alvo todos os inimigos, causando 15 de dano perfurante a eles, cancelando suas habilidades atrasadas e aumentando o custo de suas habilidades em 1 chakra aleatório por 1 turno. Se isso cancelar uma habilidade atrasada com sucesso, o inimigo que a usou terá suas habilidades não-mentais atordoadas por 1 turno.",
      "descriptionRaw": "Kabuto targets all enemies, <Damage>dealing 15 piercing damage<Damage> to them, <Effects>cancelling their delayed skills<Effects>, and <Effects><Improvements>increasing the cost<Improvements> <Effects>of their <Classes>skills<Classes> by <Improvements>1 random chakr<Improvements><Effects><Improvements>a<Improvements><Effects><Improvements> <Improvements>for 1 turn. If this successfully cancels a delayed skill, the enemy who used it will have their <Effects>non-mental skills stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Kabuto tem como alvo todos os inimigos, <Damage>causando 15 de dano perfurante<Damage> a eles, <Effects>cancelando suas habilidades atrasadas<Effects> e <Improvements>aumentando o custo<Improvements> de suas <Classes>habilidades <Classes>em <Improvements>1 chakra aleatório <Improvements>por 1 turno. Se isso cancelar uma habilidade atrasada com sucesso, o inimigo que a usou terá suas <Effects>habilidades não-mentais atordoadas<Effects> por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto targets all enemies, dealing 15 piercing damage to them, cancelling their delayed skills, and increasing the cost of their skills by 1 random chakra for 1 turn. If this successfully cancels a delayed skill, the enemy who used it will have their non-mental skills stunned for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto tem como alvo todos os inimigos, causando 15 de dano perfurante a eles, cancelando suas habilidades atrasadas e aumentando o custo de suas habilidades em 1 chakra aleatório por 1 turno. Se isso cancelar uma habilidade atrasada com sucesso, o inimigo que a usou terá suas habilidades não-mentais atordoadas por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Sage Art: White Rage",
      "file": "sennin_kabuto_(s)_skill_3_(sage_art_white_rage).png",
      "description": "For 1 turn, all enemies will have their cooldowns increased by 1 and be paralyzed. During this time, if they use a new harmful skill, it will be delayed for 1 turn. The following turn, this skill will be replaced by 'Sage Art: Mystical Palm'.",
      "descriptionBR": "Por 1 turno, todos os inimigos terão seus cooldowns aumentados em 1 e ficarão paralisados. Durante esse tempo, se usarem uma nova habilidade ofensiva, ela será atrasada por 1 turno. No próximo turno, essa habilidade será substituída por 'Sage Art: Mystical Palm'.",
      "descriptionRaw": "For 1 turn, all enemies will have their <Effects>cooldowns increased by 1 and be paralyzed<Effects>. During this time, if they use a new harmful skill, it will be <Effects>delayed for 1 turn<Effects>. The following turn, this skill will be <Effects>replaced<Effects> by <SkillName>'Sage Art: Mystical Palm'<SkillName>.",
      "descriptionBRRaw": "Por 1 turno, todos os inimigos terão seus <Effects>cooldowns aumentados em 1 e ficarão paralisados<Effects>. Durante esse tempo, se usarem uma nova habilidade ofensiva, ela será <Effects>atrasada por 1 turno<Effects>. No próximo turno, essa habilidade será <Effects>substituída<Effects> por <SkillName>'Sage Art: Mystical Palm'<SkillName>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, all enemies will have their cooldowns increased by 1 and be paralyzed. During this time, if they use a new harmful skill, it will be delayed for 1 turn. The following turn, this skill will be replaced by 'Sage Art: Mystical Palm'. Chakra cost: 2 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, todos os inimigos terão seus cooldowns aumentados em 1 e ficarão paralisados. Durante esse tempo, se usarem uma nova habilidade ofensiva, ela será atrasada por 1 turno. No próximo turno, essa habilidade será substituída por 'Sage Art: Mystical Palm'. Custo de chakra: 2 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Cursed Seal Life-Giving",
      "file": "sennin_kabuto_(s)_skill_4_(cursed_seal_life-giving).png",
      "description": "Kabuto equalizes the health of himself and one ally. Afterwards, that ally heals 15 health has their active cooldowns reduced by 2. For 3 turns, this skill will be replaced by 'White Snake Bite'.",
      "descriptionBR": "Kabuto iguala a vida dele e a de um aliado. Depois disso, esse aliado cura 15 de vida e tem seus cooldowns ativos reduzidos em 2. Por 3 turnos, essa habilidade será substituída por 'White Snake Bite'.",
      "descriptionRaw": "Kabuto <Effects>equalizes the health<Effects> of himself and one ally. Afterwards, that ally <Defense>heals 15 health<Defense> has their <Effects>active cooldowns reduced by 2<Effects>. For 3 turns, this skill will be <Effects>replaced<Effects> by <SkillName>'White Snake Bite'<SkillName>.",
      "descriptionBRRaw": "Kabuto <Effects>iguala a vida<Effects> dele e a de um aliado. Depois disso, esse aliado <Defense>cura 15 de vida<Defense> e tem seus <Effects>cooldowns ativos reduzidos em 2<Effects>. Por 3 turnos, essa habilidade será <Effects>substituída<Effects> por <SkillName>'White Snake Bite'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Affliction*",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Kabuto equalizes the health of himself and one ally. Afterwards, that ally heals 15 health has their active cooldowns reduced by 2. For 3 turns, this skill will be replaced by 'White Snake Bite'. Chakra cost: 1 Random. Catalog classes: Chakra, Affliction*, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto iguala a vida dele e a de um aliado. Depois disso, esse aliado cura 15 de vida e tem seus cooldowns ativos reduzidos em 2. Por 3 turnos, essa habilidade será substituída por 'White Snake Bite'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Affliction*, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Sage Art: Mystical Palm",
      "file": "sennin_kabuto_(s)_skill_5_(sage_art_mystical_palm).png",
      "description": "This skill deals 30 piercing damage to one enemy and cancels any delayed skill of theirs. If this successfully cancels a delayed skill, the enemy who used it will be stunned for 1 turn.",
      "descriptionBR": "Essa habilidade causa 30 de dano perfurante a um inimigo e cancela qualquer habilidade atrasada dele. Se isso cancelar uma habilidade atrasada com sucesso, o inimigo que a usou será atordoado por 1 turno.",
      "descriptionRaw": "This skill <Damage>deals 30 piercing damage<Damage> to one enemy and <Effects>cancels any delayed skill<Effects> of theirs. If this successfully cancels a delayed skill, the enemy who used it will be <Effects>stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade <Damage>causa 30 de dano perfurante<Damage> a um inimigo e <Effects>cancela qualquer habilidade atrasada<Effects> dele. Se isso cancelar uma habilidade atrasada com sucesso, o inimigo que a usou será <Effects>atordoado<Effects> por 1 turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill deals 30 piercing damage to one enemy and cancels any delayed skill of theirs. If this successfully cancels a delayed skill, the enemy who used it will be stunned for 1 turn. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade causa 30 de dano perfurante a um inimigo e cancela qualquer habilidade atrasada dele. Se isso cancelar uma habilidade atrasada com sucesso, o inimigo que a usou será atordoado por 1 turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "White Snake Bite",
      "file": "sennin_kabuto_(s)_skill_6_(white_snake_bite).png",
      "description": "Kabuto equalizes the health of himself and one enemy, then steals 25 health from them.\n➤ Health Equalized: Add the health of both characters together, then divide by 2 and set their health to the result.",
      "descriptionBR": "Kabuto iguala a vida dele e a de um inimigo e, em seguida, rouba 25 de vida dele.\n➤ Vida igualada: Some a vida dos dois personagens, divida o resultado por 2 e defina a vida de ambos como o resultado.",
      "descriptionRaw": "Kabuto <Effects>equalizes the health<Effects> of himself and one enemy, then <Damage>steals 25 health<Damage> from them.\n➤ Health Equalized: Add the health of both characters together, then divide by 2 and set their health to the result.",
      "descriptionBRRaw": "Kabuto <Effects>iguala a vida<Effects> dele e a de um inimigo e, em seguida, <Damage>rouba 25 de vida<Damage> dele.\n➤ Vida igualada: Some a vida dos dois personagens, divida o resultado por 2 e defina a vida de ambos como o resultado.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kabuto equalizes the health of himself and one enemy, then steals 25 health from them.\n➤ Health Equalized: Add the health of both characters together, then divide by 2 and set their health to the result. Chakra cost: 1 Tai, 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto iguala a vida dele e a de um inimigo e, em seguida, rouba 25 de vida dele.\n➤ Vida igualada: Some a vida dos dois personagens, divida o resultado por 2 e defina a vida de ambos como o resultado. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
