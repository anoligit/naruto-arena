// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kisame Body Double (S)",
  "description": "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Kisame. The body double is controlled by Kisame but only has a third of his chakra.",
  "descriptionBR": "Usando uma das técnicas de Pein, um espião da Areia para a Akatsuki é transformado para se parecer com Kisame. O corpo duplo é controlado por Kisame, mas possui apenas um terço de seu chakra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "kisame_body_double_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Five Man-Eating Sharks",
      "file": "kisame_body_double_(s)_skill_1_(five_man-eating_sharks).jpeg",
      "description": "Kisame summons five sharks of water, dealing 25 damage to one enemy for 2 turns. During this time, that enemy will deal 10 less non-affliction damage. During 'Explosive Water Shock Wave', this skill will cost 1 less random chakra.",
      "descriptionBR": "Kisame invoca cinco tubarões de água, causando 25 de dano a um inimigo por 2 turnos. Durante esse tempo, esse inimigo causará 10 a menos de dano não-affliction. Durante 'Explosive Water Shock Wave', esta habilidade custará 1 chakra aleatório a menos.",
      "descriptionRaw": "Kisame summons five sharks of water, <Damage>dealing 25 damage<Damage> to one enemy for 2 turns. During this time, that enemy will <Effects>deal 10 less non-affliction damage<Effects>. During <SkillName>'Explosive Water Shock Wave'<SkillName>, this skill will <Improvements>cost 1 less random chakra<Improvements>.",
      "descriptionBRRaw": "Kisame invoca cinco tubarões de água, <Damage>causando 25 de dano<Damage> a um inimigo por 2 turnos. Durante esse tempo, esse inimigo <Effects>causará 10 a menos de dano não-affliction<Effects>. Durante <SkillName>'Explosive Water Shock Wave'<SkillName>, esta habilidade <Improvements>custará 1 chakra aleatório a menos<Improvements>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Kisame summons five sharks of water, dealing 25 damage to one enemy for 2 turns. During this time, that enemy will deal 10 less non-affliction damage. During 'Explosive Water Shock Wave', this skill will cost 1 less random chakra. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kisame invoca cinco tubarões de água, causando 25 de dano a um inimigo por 2 turnos. Durante esse tempo, esse inimigo causará 10 a menos de dano não-affliction. Durante 'Explosive Water Shock Wave', esta habilidade custará 1 chakra aleatório a menos. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Water Prison Technique",
      "file": "kisame_body_double_(s)_skill_2_(water_prison_technique).jpeg",
      "description": "Using a bubble of water, Kisame deals 15 affliction damage to one enemy and stuns their non-mental skills for 1 turn. During this time, that enemy will become invulnerable to helpful skills. During 'Explosive Water Shock Wave', this skill will cost 1 random chakra.",
      "descriptionBR": "Usando uma bolha de água, Kisame causa 15 de dano affliction a um inimigo e atordoa suas habilidades não-Mental por 1 turno. Durante esse tempo, esse inimigo ficará invulnerável a habilidades defensivas. Durante 'Explosive Water Shock Wave', esta habilidade custará 1 chakra aleatório.",
      "descriptionRaw": "Using a bubble of water, Kisame <Damage>deals 15 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-mental skills<Classes> for 1 turn. During this time, that enemy will become <Defense>invulnerable<Defense> to <Classes>helpful skills<Classes>. During <SkillName>'Explosive Water Shock Wave'<SkillName>, this skill will <Improvements>cost 1 random chakra<Improvements>.",
      "descriptionBRRaw": "Usando uma bolha de água, Kisame <Damage>causa 15 de dano affliction<Damage> a um inimigo e <Effects>atordoa<Effects> suas <Classes>habilidades não-Mental<Classes> por 1 turno. Durante esse tempo, esse inimigo ficará <Defense>invulnerável<Defense> a <Classes>habilidades defensivas<Classes>. Durante <SkillName>'Explosive Water Shock Wave'<SkillName>, esta habilidade <Improvements>custará 1 chakra aleatório<Improvements>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Using a bubble of water, Kisame deals 15 affliction damage to one enemy and stuns their non-mental skills for 1 turn. During this time, that enemy will become invulnerable to helpful skills. During 'Explosive Water Shock Wave', this skill will cost 1 random chakra. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando uma bolha de água, Kisame causa 15 de dano affliction a um inimigo e atordoa suas habilidades não-Mental por 1 turno. Durante esse tempo, esse inimigo ficará invulnerável a habilidades defensivas. Durante 'Explosive Water Shock Wave', esta habilidade custará 1 chakra aleatório. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Explosive Water Shock Wave",
      "file": "kisame_body_double_(s)_skill_3_(explosive_water_shock_wave).jpeg",
      "description": "Kisame fills the battlefield with water. For 4 turns, Kisame and his allies will lose 1 less chakra from chakra removal or stealing effects used on them and all enemies that use a new skill will have the cooldown of that skill increased by 1 turn.",
      "descriptionBR": "Kisame enche o campo de batalha com água. Por 4 turnos, Kisame e seus aliados perderão 1 chakra a menos devido a efeitos de remoção ou roubo de chakra usados neles e todos os inimigos que usarem uma nova habilidade terão o tempo de recarga dessa habilidade aumentado em 1 turno.",
      "descriptionRaw": "Kisame fills the battlefield with water. For 4 turns, Kisame and his allies will <Effects>lose 1 less chakra<Effects> from <Classes>chakra removal or stealing effects<Classes> used on them and all enemies that <Classes>use a new skill<Classes> will have the <Effects>cooldown of that skill increased by 1 turn<Effects>.",
      "descriptionBRRaw": "Kisame enche o campo de batalha com água. Por 4 turnos, Kisame e seus aliados <Effects>perderão 1 chakra a menos<Effects> devido a efeitos de <Classes>remoção ou roubo de chakra<Classes> usados neles e todos os inimigos que <Classes>usarem uma nova habilidade<Classes> terão o <Effects>tempo de recarga dessa habilidade aumentado em 1 turno<Effects>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Kisame fills the battlefield with water. For 4 turns, Kisame and his allies will lose 1 less chakra from chakra removal or stealing effects used on them and all enemies that use a new skill will have the cooldown of that skill increased by 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kisame enche o campo de batalha com água. Por 4 turnos, Kisame e seus aliados perderão 1 chakra a menos devido a efeitos de remoção ou roubo de chakra usados neles e todos os inimigos que usarem uma nova habilidade terão o tempo de recarga dessa habilidade aumentado em 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kisame Water Clone",
      "file": "kisame_body_double_(s)_skill_4_(kisame_water_clone).jpeg",
      "description": "This skill makes Kisame Body Double (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Kisame Body Double (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kisame Body Double (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Kisame Body Double (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kisame Body Double (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Kisame Body Double (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
