// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Female Animal Path Pein (S)",
  "description": "One of Nagato's Six Paths of Pain, the Female Animal Path is a relentless and tactical combatant who overwhelms her enemies through the summoning of massive, destructive creatures. Calm and emotionless, she specializes in battlefield control, using her summons to pressure multiple opponents at once while remaining difficult to pin down.",
  "descriptionBR": "Um dos Seis Caminhos da Dor de Nagato, o Caminho Animal Feminino é uma combatente implacável e tática que domina seus inimigos invocando criaturas enormes e destrutivas. Calma e sem emoções, ela é especializada no controle do campo de batalha, usando suas invocações para pressionar vários oponentes ao mesmo tempo enquanto permanece difícil de alcançar.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "female_animal_path_pein_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Animal Path Summoning",
      "file": "female_animal_path_pein_(s)_skill_1_(animal_path_summoning).png",
      "description": "Female Animal Path summons all pre-selected animals to the battlefield. For each animal summoned, Female Animal Path gains 5 destructible defense. Animals, when summoned, cannot be pre-selected for the following 3 turns. This skill will cost 1 additional random chakra for each pre-selected animal. This skill ignores invulnerability and cannot be countered or reflected.",
      "descriptionBR": "Female Animal Path invoca todos os animais pré-selecionados para o campo de batalha. Para cada animal invocado, Female Animal Path ganha 5 de defesa destrutível. Os animais, quando invocados, não podem ser pré-selecionados nos próximos 3 turnos. Essa habilidade irá custar 1 chakra aleatório adicional para cada animal pré-selecionado. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida.",
      "descriptionRaw": "Female Animal Path summons all pre-selected animals to the battlefield. For each animal summoned, Female Animal Path <Defense>gains 5 destructible defense<Defense>. Animals, when summoned, <Effects>cannot be pre-selected<Effects> for the following 3 turns. This skill will <Effects>cost 1 additional random chakra<Effects> for each pre-selected animal. This skill <Classes>ignores invulnerability<Classes> and cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
      "descriptionBRRaw": "Female Animal Path invoca todos os animais pré-selecionados para o campo de batalha. Para cada animal invocado, Female Animal Path <Defense>ganha 5 de defesa destrutível<Defense>. Os animais, quando invocados, <Effects>não podem ser pré-selecionados<Effects> nos próximos 3 turnos. Essa habilidade irá <Effects>custar 1 chakra aleatório adicional<Effects> para cada animal pré-selecionado. Esta habilidade <Classes>ignora invulnerabilidade<Classes> e não pode ser <Classes>counterada<Classes> ou <Classes>refletida<Classes>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "$_",
        "$_2"
      ],
      "cooldown": 0,
      "ruleDescription": "Female Animal Path summons all pre-selected animals to the battlefield. For each animal summoned, Female Animal Path gains 5 destructible defense. Animals, when summoned, cannot be pre-selected for the following 3 turns. This skill will cost 1 additional random chakra for each pre-selected animal. This skill ignores invulnerability and cannot be countered or reflected. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, $_, $_2. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Female Animal Path invoca todos os animais pré-selecionados para o campo de batalha. Para cada animal invocado, Female Animal Path ganha 5 de defesa destrutível. Os animais, quando invocados, não podem ser pré-selecionados nos próximos 3 turnos. Essa habilidade irá custar 1 chakra aleatório adicional para cada animal pré-selecionado. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, $_, $_2. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Rampaging Buffalo",
      "file": "female_animal_path_pein_(s)_skill_2_(rampaging_buffalo).png",
      "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, deals 10 damage to all enemies for 3 turns. During this time, any enemy that does not use a new skill will take another 10 damage. This skill will be replaced by 'Stampeding Rhino'.",
      "descriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Quando ativa, causa 10 de dano a todos os inimigos por 3 turnos. Durante esse tempo, qualquer inimigo que não usar uma nova habilidade irá receber mais 10 de dano. Essa habilidade será substituída por 'Stampeding Rhino'.",
      "descriptionRaw": "Pre-selects this animal for the next use of <SkillName>'Animal Path Summoning'<SkillName>. When active, <Damage>deals 10 damage<Damage> to all enemies for 3 turns. During this time, any enemy that does not use a new skill will <Damage>take another 10 damage<Damage>. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Stampeding Rhino'<SkillName>.",
      "descriptionBRRaw": "Pré-seleciona esse animal para o próximo uso de <SkillName>'Animal Path Summoning'<SkillName>. Quando ativa, <Damage>causa 10 de dano<Damage> a todos os inimigos por 3 turnos. Durante esse tempo, qualquer inimigo que não usar uma nova habilidade irá <Damage>receber mais 10 de dano<Damage>. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Stampeding Rhino'<SkillName>.",
      "energy": [],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, deals 10 damage to all enemies for 3 turns. During this time, any enemy that does not use a new skill will take another 10 damage. This skill will be replaced by 'Stampeding Rhino'. Chakra cost: no chakra cost listed. Catalog classes: Physical, Action, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Quando ativa, causa 10 de dano a todos os inimigos por 3 turnos. Durante esse tempo, qualquer inimigo que não usar uma nova habilidade irá receber mais 10 de dano. Essa habilidade será substituída por 'Stampeding Rhino'. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Venomous Centipede",
      "file": "female_animal_path_pein_(s)_skill_3_(venomous_centipede).png",
      "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, Female Animal Path grants her team 15 points of destructible defense and any enemy that destroys it will take 5 affliction damage* for 3 turns.",
      "descriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Quando ativa, Female Animal Path concede 15 pontos de defesa destrutível à sua equipe, e qualquer inimigo que destruir essa defesa irá receber 5 de dano affliction* por 3 turnos.",
      "descriptionRaw": "Pre-selects this animal for the next use of <SkillName>'Animal Path Summoning'<SkillName>. When active, Female Animal Path <Defense>grants her team 15 points of destructible defense<Defense> and any enemy that destroys it will <Damage>take 5 affliction damage*<Damage> for 3 turns.",
      "descriptionBRRaw": "Pré-seleciona esse animal para o próximo uso de <SkillName>'Animal Path Summoning'<SkillName>. Quando ativa, Female Animal Path <Defense>concede 15 pontos de defesa destrutível à sua equipe<Defense>, e qualquer inimigo que destruir essa defesa irá <Damage>receber 5 de dano affliction*<Damage> por 3 turnos.",
      "energy": [],
      "classes": [
        "Physical",
        "Affliction*",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, Female Animal Path grants her team 15 points of destructible defense and any enemy that destroys it will take 5 affliction damage* for 3 turns. Chakra cost: no chakra cost listed. Catalog classes: Physical, Affliction*, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Quando ativa, Female Animal Path concede 15 pontos de defesa destrutível à sua equipe, e qualquer inimigo que destruir essa defesa irá receber 5 de dano affliction* por 3 turnos. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Affliction*, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Giant Crab",
      "file": "female_animal_path_pein_(s)_skill_4_(giant_crab).png",
      "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, Female Animal Path and her allies become invulnerable to non-affliction skills for 1 turn.",
      "descriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Quando ativa, Female Animal Path e seus aliados se tornam invulneráveis a habilidades não affliction por 1 turno.",
      "descriptionRaw": "Pre-selects this animal for the next use of <SkillName>'Animal Path Summoning'<SkillName>. When active, Female Animal Path and her allies become <Defense>invulnerable<Defense> to <Classes>non-affliction skills<Classes> for 1 turn.",
      "descriptionBRRaw": "Pré-seleciona esse animal para o próximo uso de <SkillName>'Animal Path Summoning'<SkillName>. Quando ativa, Female Animal Path e seus aliados se tornam <Defense>invulneráveis<Defense> a <Classes>habilidades não affliction<Classes> por 1 turno.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Pre-selects this animal for the next use of 'Animal Path Summoning'. When active, Female Animal Path and her allies become invulnerable to non-affliction skills for 1 turn. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Quando ativa, Female Animal Path e seus aliados se tornam invulneráveis a habilidades não affliction por 1 turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Stampeding Rhino",
      "file": "female_animal_path_pein_(s)_skill_5_(stampeding_rhino).png",
      "description": "Pre-selects this animal for the next use of 'Animal Path Summoning'. For 3 turns, each turn a random enemy will take 20 damage and will have their non-mental skills stunned for 1 turn. This skill will be replaced by 'Rampaging Buffalo' after use.",
      "descriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Por 3 turnos, a cada turno um inimigo aleatório irá receber 20 de dano e terá suas habilidades não mentais atordoadas por 1 turno. Essa habilidade será substituída por 'Rampaging Buffalo' após ser usada.",
      "descriptionRaw": "Pre-selects this animal for the next use of <SkillName>'Animal Path Summoning'<SkillName>. For 3 turns, each turn a random enemy will <Damage>take 20 damage<Damage> and will have their <Classes>non-mental skills<Classes> <Effects>stunned<Effects> for 1 turn. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Rampaging Buffalo'<SkillName> after use.",
      "descriptionBRRaw": "Pré-seleciona esse animal para o próximo uso de <SkillName>'Animal Path Summoning'<SkillName>. Por 3 turnos, a cada turno um inimigo aleatório irá <Damage>receber 20 de dano<Damage> e terá suas <Classes>habilidades não mentais<Classes> <Effects>atordoadas<Effects> por 1 turno. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Rampaging Buffalo'<SkillName> após ser usada.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Pre-selects this animal for the next use of 'Animal Path Summoning'. For 3 turns, each turn a random enemy will take 20 damage and will have their non-mental skills stunned for 1 turn. This skill will be replaced by 'Rampaging Buffalo' after use. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pré-seleciona esse animal para o próximo uso de 'Animal Path Summoning'. Por 3 turnos, a cada turno um inimigo aleatório irá receber 20 de dano e terá suas habilidades não mentais atordoadas por 1 turno. Essa habilidade será substituída por 'Rampaging Buffalo' após ser usada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
