// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Shikamaru (S)",
  "description": "Shikamaru, now in the war. He remains a good and talented ninja, using his shadows more effectively, in addition to using the help of his allies very well, and forcing his enemies to help him too.",
  "descriptionBR": "Shikamaru, agora na guerra. Continua sendo um ninja talentoso, usando suas sombras de forma mais eficaz, além de contar bem com a ajuda de seus aliados e até forçar seus inimigos a ajudá-lo.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_shikamaru_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Continuous Shadow Sewing",
      "file": "shinobi_alliance_shikamaru_(s)_skill_1_(continuous_shadow_sewing).png",
      "description": "Shikamaru deals 30 piercing damage to one enemy and stuns their non-chakra skills for 1 turn. If that enemy doesn't use any new skill, they will take 15 additional piercing damage. During 'Tatical Range Increase', this skill will deal 15 additional damage.",
      "descriptionBR": "Shikamaru causa 30 de dano perfurante a um inimigo e atordoa suas habilidades não-chakra por 1 turno. Se esse inimigo não usar nenhuma nova habilidade, ele receberá 15 de dano perfurante adicional. Durante 'Tatical Range Increase', esta habilidade causará 15 de dano adicional.",
      "descriptionRaw": "Shikamaru <Damage>deals 30 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-chakra skills<Classes> for 1 turn. If that enemy doesn't use any new skill, they will <Damage>take 15 additional piercing damage<Damage>. During <SkillName>'Tatical Range Increase'<SkillName>, this skill will <Improvements>deal 15 additional damage<Improvements>.",
      "descriptionBRRaw": "Shikamaru <Damage>causa 30 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> suas habilidades <Classes>não-chakra<Classes> por 1 turno. Se esse inimigo não usar nenhuma nova habilidade, ele <Damage>receberá 15 de dano perfurante adicional<Damage>. Durante <SkillName>'Tatical Range Increase'<SkillName>, esta habilidade <Improvements>causará 15 de dano adicional<Improvements>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shikamaru deals 30 piercing damage to one enemy and stuns their non-chakra skills for 1 turn. If that enemy doesn't use any new skill, they will take 15 additional piercing damage. During 'Tatical Range Increase', this skill will deal 15 additional damage. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikamaru causa 30 de dano perfurante a um inimigo e atordoa suas habilidades não-chakra por 1 turno. Se esse inimigo não usar nenhuma nova habilidade, ele receberá 15 de dano perfurante adicional. Durante 'Tatical Range Increase', esta habilidade causará 15 de dano adicional. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Tatical Range Increase",
      "file": "shinobi_alliance_shikamaru_(s)_skill_2_(tatical_range_increase).png",
      "description": "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible.",
      "descriptionBR": "Por 1 turno, Shikamaru ignorará todos os danos recebidos e poderá atingir todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova habilidade poderão ser alvos de 'Tatical Shadow Bind' por 1 turno. Esta habilidade se torna 'Tatical Shadow Bind' por 1 turno e é invisível.",
      "descriptionRaw": "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible.",
      "descriptionBRRaw": "Por 1 turno, Shikamaru ignorará todos os danos recebidos e poderá atingir todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova habilidade poderão ser alvos de 'Tatical Shadow Bind' por 1 turno. Esta habilidade se torna 'Tatical Shadow Bind' por 1 turno e é invisível.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible. Chakra cost: 1 Tai. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, Shikamaru ignorará todos os danos recebidos e poderá atingir todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova habilidade poderão ser alvos de 'Tatical Shadow Bind' por 1 turno. Esta habilidade se torna 'Tatical Shadow Bind' por 1 turno e é invisível. Custo de chakra: 1 taijutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Ally Shadow Control",
      "file": "shinobi_alliance_shikamaru_(s)_skill_3_(ally_shadow_control).png",
      "description": "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn.",
      "descriptionBR": "Shikamaru seleciona um aliado por 3 turnos, fazendo com que as habilidades dele tenham 1 turno a menos de recarga. Se Shikamaru usar uma nova habilidade, esse aliado se tornará invulnerável a habilidades de dano por 1 turno.",
      "descriptionRaw": "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn.",
      "descriptionBRRaw": "Shikamaru seleciona um aliado por 3 turnos, fazendo com que as habilidades dele tenham 1 turno a menos de recarga. Se Shikamaru usar uma nova habilidade, esse aliado se tornará invulnerável a habilidades de dano por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikamaru seleciona um aliado por 3 turnos, fazendo com que as habilidades dele tenham 1 turno a menos de recarga. Se Shikamaru usar uma nova habilidade, esse aliado se tornará invulnerável a habilidades de dano por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hide and Thinking",
      "file": "shinobi_alliance_shikamaru_(s)_skill_4_(hide_and_thinking).png",
      "description": "This skill makes Shinobi Alliance Shikamaru (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Shikamaru (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Shikamaru (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Shikamaru (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Shikamaru (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Shikamaru (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Tatical Shadow Bind",
      "file": "shinobi_alliance_shikamaru_(s)_skill_5_(tatical_shadow_bind).png",
      "description": "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills.",
      "descriptionBR": "Shikamaru causa 30 de dano a todos os inimigos afetados por 'Tatical Range Increase' e atordoa por 2 turnos suas habilidades physical e chakra.",
      "descriptionRaw": "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills.",
      "descriptionBRRaw": "Shikamaru causa 30 de dano a todos os inimigos afetados por 'Tatical Range Increase' e atordoa por 2 turnos suas habilidades physical e chakra.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Control",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Control, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikamaru causa 30 de dano a todos os inimigos afetados por 'Tatical Range Increase' e atordoa por 2 turnos suas habilidades physical e chakra. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Control, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
