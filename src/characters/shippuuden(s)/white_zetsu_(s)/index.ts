// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "White Zetsu (S)",
  "description": "A countless army born from Hashirama's cells—harmless in appearance, deadly in numbers. Character submited by: Akats.",
  "descriptionBR": "Um exército incontável nascido das células de Hashirama — inofensivo na aparência, mortal em grande número. Personagem enviado por: Akats.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "white_zetsu_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "White Zetsu Host",
      "file": "white_zetsu_(s)_skill_1_(white_zetsu_host).png",
      "description": "White Zetsu cannot become invulnerable permanently. Each turn he gains 3 clone stacks, and if stunned will gain 15 points of unpierceable damage reduction the following turn. At 3 clone stacks, he gains 15 points of damage reduction. At 6, he gains 15 destructible defense. At 9, he ignores affliction damage. Each skill he uses consumes 6 clone stacks.",
      "descriptionBR": "White Zetsu não pode se tornar invulnerável permanentemente. A cada turno, ele ganha 3 stacks de clone e, se for atordoado, irá ganhar 15 pontos de redução de dano impenetrável no próximo turno. Com 3 stacks de clone, ele ganha 15 pontos de redução de dano. Com 6, ele ganha 15 de defesa destrutível. Com 9, ele ignora dano affliction. Cada habilidade que ele usa consome 6 stacks de clone.",
      "descriptionRaw": "White Zetsu <Defense>cannot become invulnerable<Defense> permanently. Each turn he <Effects>gains 3 clone stacks<Effects>, and if stunned will <Defense>gain 15 points of unpierceable damage reduction<Defense> the following turn. At 3 clone stacks, he <Defense>gains 15 points of damage reduction<Defense>. At 6, he <Defense>gains 15 destructible defense<Defense>. At 9, he <Defense>ignores affliction damage<Defense>. Each skill he uses <Effects>consumes 6 clone stacks<Effects>.",
      "descriptionBRRaw": "White Zetsu <Defense>não pode se tornar invulnerável<Defense> permanentemente. A cada turno, ele <Effects>ganha 3 stacks de clone<Effects> e, se for atordoado, irá <Defense>ganhar 15 pontos de redução de dano impenetrável<Defense> no próximo turno. Com 3 stacks de clone, ele <Defense>ganha 15 pontos de redução de dano<Defense>. Com 6, ele <Defense>ganha 15 de defesa destrutível<Defense>. Com 9, ele <Defense>ignora dano affliction<Defense>. Cada habilidade que ele usa <Effects>consome 6 stacks de clone<Effects>.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "White Zetsu cannot become invulnerable permanently. Each turn he gains 3 clone stacks, and if stunned will gain 15 points of unpierceable damage reduction the following turn. At 3 clone stacks, he gains 15 points of damage reduction. At 6, he gains 15 destructible defense. At 9, he ignores affliction damage. Each skill he uses consumes 6 clone stacks. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "White Zetsu não pode se tornar invulnerável permanentemente. A cada turno, ele ganha 3 stacks de clone e, se for atordoado, irá ganhar 15 pontos de redução de dano impenetrável no próximo turno. Com 3 stacks de clone, ele ganha 15 pontos de redução de dano. Com 6, ele ganha 15 de defesa destrutível. Com 9, ele ignora dano affliction. Cada habilidade que ele usa consome 6 stacks de clone. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Clones Assault",
      "file": "white_zetsu_(s)_skill_2_(clones_assault).png",
      "description": "At 3/6/9 clones, this skill costs 1 additional random chakra and deals 25/45/65 piercing damage to one enemy. This skill cannot be countered.",
      "descriptionBR": "Com 3/6/9 clones, essa habilidade custa 1 chakra aleatório adicional e causa 25/45/65 de dano perfurante a um inimigo. Essa habilidade não pode ser counterada.",
      "descriptionRaw": "At 3/6/9 clones, this skill <Effects>costs 1 additional random chakra<Effects> and <Damage>deals 25/45/65 piercing damage<Damage> to one enemy. This skill <Defense>cannot be countered<Defense>.",
      "descriptionBRRaw": "Com 3/6/9 clones, essa habilidade <Effects>custa 1 chakra aleatório adicional<Effects> e <Damage>causa 25/45/65 de dano perfurante<Damage> a um inimigo. Essa habilidade <Defense>não pode ser counterada<Defense>.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "At 3/6/9 clones, this skill costs 1 additional random chakra and deals 25/45/65 piercing damage to one enemy. This skill cannot be countered. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Com 3/6/9 clones, essa habilidade custa 1 chakra aleatório adicional e causa 25/45/65 de dano perfurante a um inimigo. Essa habilidade não pode ser counterada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mass Reproduction",
      "file": "white_zetsu_(s)_skill_3_(mass_reproduction).png",
      "description": "White Zetsu Clones will mass produce all over the battlefield for 4 turns, dealing 10 damage to one random enemy while one random ally will gain 10 points of damage reduction. During this time, this skill becomes 'Parasitic Grab'.",
      "descriptionBR": "Os clones de White Zetsu irão se reproduzir em massa por todo o campo de batalha por 4 turnos, causando 10 de dano a um inimigo aleatório enquanto um aliado aleatório irá ganhar 10 pontos de redução de dano. Durante esse tempo, essa habilidade se torna 'Parasitic Grab'.",
      "descriptionRaw": "White Zetsu Clones will mass produce all over the battlefield for 4 turns, <Damage>dealing 10 damage<Damage> to one random enemy while one random ally will <Defense>gain 10 points of damage reduction<Defense>. During this time, this skill becomes <SkillName>'Parasitic Grab'<SkillName>.",
      "descriptionBRRaw": "Os clones de White Zetsu irão se reproduzir em massa por todo o campo de batalha por 4 turnos, <Damage>causando 10 de dano<Damage> a um inimigo aleatório enquanto um aliado aleatório irá <Defense>ganhar 10 pontos de redução de dano<Defense>. Durante esse tempo, essa habilidade se torna <SkillName>'Parasitic Grab'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 4,
      "ruleDescription": "White Zetsu Clones will mass produce all over the battlefield for 4 turns, dealing 10 damage to one random enemy while one random ally will gain 10 points of damage reduction. During this time, this skill becomes 'Parasitic Grab'. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Os clones de White Zetsu irão se reproduzir em massa por todo o campo de batalha por 4 turnos, causando 10 de dano a um inimigo aleatório enquanto um aliado aleatório irá ganhar 10 pontos de redução de dano. Durante esse tempo, essa habilidade se torna 'Parasitic Grab'. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "White Assimilation: Poison Mist",
      "file": "white_zetsu_(s)_skill_4_(white_assimilation_poison_mist).png",
      "description": "White Zetsu will target all enemies on the battlefield for 2 turns. All enemies will become invulnerable to friendly skills and take 5 additional damage from White Zetsu's skills.",
      "descriptionBR": "White Zetsu irá atingir todos os inimigos no campo de batalha por 2 turnos. Todos os inimigos se tornarão invulneráveis a habilidades defensivas e irão receber 5 de dano adicional das habilidades de White Zetsu.",
      "descriptionRaw": "White Zetsu will target all enemies on the battlefield for 2 turns. All enemies will become <Defense>invulnerable<Defense> to <Classes>friendly skills<Classes> and <Improvements>take 5 additional damage<Improvements> from <SkillText>White Zetsu's skills<SkillText>.",
      "descriptionBRRaw": "White Zetsu irá atingir todos os inimigos no campo de batalha por 2 turnos. Todos os inimigos se tornarão <Defense>invulneráveis<Defense> a <Classes>habilidades defensivas<Classes> e irão <Improvements>receber 5 de dano adicional<Improvements> das <SkillText>habilidades de White Zetsu<SkillText>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 3,
      "ruleDescription": "White Zetsu will target all enemies on the battlefield for 2 turns. All enemies will become invulnerable to friendly skills and take 5 additional damage from White Zetsu's skills. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "White Zetsu irá atingir todos os inimigos no campo de batalha por 2 turnos. Todos os inimigos se tornarão invulneráveis a habilidades defensivas e irão receber 5 de dano adicional das habilidades de White Zetsu. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Parasitic Grab",
      "file": "white_zetsu_(s)_skill_5_(parasitic_grab).png",
      "description": "White Zetsu will make one enemy unable to target anyone else but White Zetsu for 1 turn. They will take 50% more damage from White Zetsu's skills for 2 turns.",
      "descriptionBR": "White Zetsu fará com que um inimigo fique incapaz de alvejar qualquer outro personagem além de White Zetsu por 1 turno. Ele irá receber 50% a mais de dano das habilidades de White Zetsu por 2 turnos.",
      "descriptionRaw": "White Zetsu will make one enemy <Effects>unable to target anyone else<Effects> but White Zetsu for 1 turn. They will <Improvements>take 50% more damage<Improvements> from <SkillText>White Zetsu's skills<SkillText> for 2 turns.",
      "descriptionBRRaw": "White Zetsu fará com que um inimigo fique <Effects>incapaz de alvejar qualquer outro personagem<Effects> além de White Zetsu por 1 turno. Ele irá <Improvements>receber 50% a mais de dano<Improvements> das <SkillText>habilidades de White Zetsu<SkillText> por 2 turnos.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "White Zetsu will make one enemy unable to target anyone else but White Zetsu for 1 turn. They will take 50% more damage from White Zetsu's skills for 2 turns. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "White Zetsu fará com que um inimigo fique incapaz de alvejar qualquer outro personagem além de White Zetsu por 1 turno. Ele irá receber 50% a mais de dano das habilidades de White Zetsu por 2 turnos. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
