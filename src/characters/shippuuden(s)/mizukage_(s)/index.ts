// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Mizukage (S)",
  "description": "Terumi Mei is the Fifth Mizukage, after the dreadful reign of Yagura Karatachi ended, she became Mizukage and worked tirelessly to reform internal policies and recreate diplomatic relations with other villages",
  "descriptionBR": "Terumi Mei é a Quinta Mizukage. Após o fim do terrível reinado de Yagura Karatachi, ela se tornou Mizukage e trabalhou incansavelmente para reformar políticas internas e recriar relações diplomáticas com outras vilas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "mizukage_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Lava Wall",
      "file": "mizukage_(s)_skill_1_(lava_wall).png",
      "description": "Terumi Mei uses a lava wall, dealing 25 affliction damage to one enemy and stunning their physical and chakra skills for 1 turn. This skill cannot be countered or reflected. During 'Prison Lava Wall', this skill will deal 35 affliction damage and cost 1 additional random chakra.",
      "descriptionBR": "Terumi Mei usa um muro de lava, causando 25 de dano affliction a um inimigo e atordoando suas habilidades physical e chakra por 1 turno. Esta habilidade não pode ser counterada ou refletida. Durante 'Prison Lava Wall', esta habilidade irá causar 35 de dano affliction e custar 1 chakra aleatório adicional.",
      "descriptionRaw": "Terumi Mei uses a lava wall, <Damage>dealing 25 affliction damage<Damage> to one enemy and <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn. This skill <Classes>cannot be countered or reflected<Classes>. During <SkillName>'Prison Lava Wall'<SkillName>, this skill will <Improvements>deal 35 affliction damage<Improvements> and <Improvements>cost 1 additional random chakra<Improvements>.",
      "descriptionBRRaw": "Terumi Mei usa um muro de lava, <Damage>causando 25 de dano affliction<Damage> a um inimigo e <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno. Esta habilidade <Classes>não pode ser counterada ou refletida<Classes>. Durante <SkillName>'Prison Lava Wall'<SkillName>, esta habilidade irá <Improvements>causar 35 de dano affliction<Improvements> e <Improvements>custar 1 chakra aleatório adicional<Improvements>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Terumi Mei uses a lava wall, dealing 25 affliction damage to one enemy and stunning their physical and chakra skills for 1 turn. This skill cannot be countered or reflected. During 'Prison Lava Wall', this skill will deal 35 affliction damage and cost 1 additional random chakra. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Terumi Mei usa um muro de lava, causando 25 de dano affliction a um inimigo e atordoando suas habilidades physical e chakra por 1 turno. Esta habilidade não pode ser counterada ou refletida. Durante 'Prison Lava Wall', esta habilidade irá causar 35 de dano affliction e custar 1 chakra aleatório adicional. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Prison Lava Wall",
      "file": "mizukage_(s)_skill_2_(prison_lava_wall).png",
      "description": "Terumi Mei creates a prison of lava, dealing 5 affliction damage to all enemies for 3 turns. During this time, each turn a random enemy will become invulnerable to helpful skills. 'Lava Wall' and 'Skilled Mist' will be improved during this skill*.",
      "descriptionBR": "Terumi Mei cria uma prisão de lava, causando 5 de dano affliction a todos os inimigos por 3 turnos. Durante esse período, a cada turno um inimigo aleatório irá se tornar invulnerável a habilidades defensivas. 'Lava Wall' e 'Skilled Mist' serão aprimoradas durante esta habilidade*.",
      "descriptionRaw": "Terumi Mei creates a prison of lava, <Damage>dealing 5 affliction damage<Damage> to all enemies for 3 turns. During this time, each turn a random enemy will <Defense>become invulnerable to helpful skills<Defense>. <SkillName>'Lava Wall'<SkillName> and <SkillName>'Skilled Mist'<SkillName> will be <Improvements>improved<Improvements> during this skill*.",
      "descriptionBRRaw": "Terumi Mei cria uma prisão de lava, <Damage>causando 5 de dano affliction<Damage> a todos os inimigos por 3 turnos. Durante esse período, a cada turno um inimigo aleatório irá <Defense>se tornar invulnerável a habilidades defensivas<Defense>. <SkillName>'Lava Wall'<SkillName> e <SkillName>'Skilled Mist'<SkillName> serão <Improvements>aprimoradas<Improvements> durante esta habilidade*.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Instant*",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Terumi Mei creates a prison of lava, dealing 5 affliction damage to all enemies for 3 turns. During this time, each turn a random enemy will become invulnerable to helpful skills. 'Lava Wall' and 'Skilled Mist' will be improved during this skill*. Chakra cost: 1 Nin. Catalog classes: Affliction, Action, Instant*, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Terumi Mei cria uma prisão de lava, causando 5 de dano affliction a todos os inimigos por 3 turnos. Durante esse período, a cada turno um inimigo aleatório irá se tornar invulnerável a habilidades defensivas. 'Lava Wall' e 'Skilled Mist' serão aprimoradas durante esta habilidade*. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Action, Instant*, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Skilled Mist",
      "file": "mizukage_(s)_skill_3_(skilled_mist).png",
      "description": "Terumi Mei uses Skilled Mist to destroy all enemies' destructible defense and deal 15 affliction damage to them for 2 turns. This skill cannot be countered, reflected, or removed. During 'Prison Lava Wall', this skill will deal 5 additional affliction damage.",
      "descriptionBR": "Terumi Mei usa Névoa Habilidosa para destruir toda a defesa destrutível dos inimigos e causar 15 de dano affliction a eles por 2 turnos. Esta habilidade não pode ser counterada, refletida ou removida. Durante 'Prison Lava Wall', esta habilidade irá causar 5 de dano affliction adicional.",
      "descriptionRaw": "Terumi Mei uses Skilled Mist to <Defense>destroy all enemies' destructible defense<Defense> and <Damage>deal 15 affliction damage<Damage> to them for 2 turns. This skill <Classes>cannot be countered, reflected, or removed<Classes>. During <SkillName>'Prison Lava Wall'<SkillName>, this skill will <Improvements>deal 5 additional affliction damage<Improvements>.",
      "descriptionBRRaw": "Terumi Mei usa Névoa Habilidosa para <Defense>destruir toda a defesa destrutível dos inimigos<Defense> e <Damage>causar 15 de dano affliction<Damage> a eles por 2 turnos. Esta habilidade <Classes>não pode ser counterada, refletida ou removida<Classes>. Durante <SkillName>'Prison Lava Wall'<SkillName>, esta habilidade irá <Improvements>causar 5 de dano affliction adicional<Improvements>.",
      "energy": [
        "Blood",
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Terumi Mei uses Skilled Mist to destroy all enemies' destructible defense and deal 15 affliction damage to them for 2 turns. This skill cannot be countered, reflected, or removed. During 'Prison Lava Wall', this skill will deal 5 additional affliction damage. Chakra cost: 1 Blood, 1 Nin. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Terumi Mei usa Névoa Habilidosa para destruir toda a defesa destrutível dos inimigos e causar 15 de dano affliction a eles por 2 turnos. Esta habilidade não pode ser counterada, refletida ou removida. Durante 'Prison Lava Wall', esta habilidade irá causar 5 de dano affliction adicional. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Fast Evade",
      "file": "mizukage_(s)_skill_4_(fast_evade).png",
      "description": "This skill makes Mizukage (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Mizukage (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Mizukage (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Mizukage (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Mizukage (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Mizukage (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
