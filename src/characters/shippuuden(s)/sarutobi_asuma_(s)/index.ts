// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sarutobi Asuma (S)",
  "description": "Somehow continuing to avoid lung cancer, Asuma has remained the leader of Team 10 through the years. With the secret techniques of the fire temple, Asuma is able to attack and defend while waiting for the opportune moment to slice some heads off.",
  "descriptionBR": "De alguma forma evitando o câncer de pulmão, Asuma continuou sendo o líder do Time 10 ao longo dos anos. Com as técnicas secretas do Templo do Fogo, Asuma é capaz de atacar e se defender enquanto espera o momento certo para decapitar seus inimigos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "sarutobi_asuma_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Thousand-Armed Murder",
      "file": "sarutobi_asuma_(s)_skill_1_(thousand-armed_murder).jpeg",
      "description": "Asuma gains 50 destructible defense and instantly deals 25 damage to one enemy. During this time, he can use this skill again for 1 random chakra to deal 25 damage to one enemy. When this skill ends, Asuma will be unable to use this skill for 1 turn.",
      "descriptionBR": "Asuma ganha 50 de defesa destrutível e causa instantaneamente 25 de dano a um inimigo. Durante esse tempo, ele pode usar essa habilidade novamente por 1 chakra aleatório para causar 25 de dano. Quando esse efeito terminar, Asuma ficará impossibilitado de usar essa habilidade por 1 turno.",
      "descriptionRaw": "Asuma gains 50 <Defense>destructible defense<Defense> and <Damage>instantly deals 25 damage<Damage> to one enemy. During this time, he can use this skill again <Improvements>for 1 random chakra<Improvements> to <Damage>deal 25 damage<Damage> to one enemy. When this skill <Effects>ends<Effects>, Asuma will be <Effects>unable<Effects> to use this skill for 1 turn.",
      "descriptionBRRaw": "Asuma ganha 50 de <Defense>defesa destrutível<Defense> e <Damage>causa instantaneamente 25 de dano<Damage> a um inimigo. Durante esse tempo, ele pode usar essa habilidade novamente <Improvements>por 1 chakra aleatório<Improvements> para <Damage>causar 25 de dano<Damage>. Quando esse efeito <Effects>terminar<Effects>, Asuma ficará <Effects>impossibilitado<Effects> de usar essa habilidade por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Asuma gains 50 destructible defense and instantly deals 25 damage to one enemy. During this time, he can use this skill again for 1 random chakra to deal 25 damage to one enemy. When this skill ends, Asuma will be unable to use this skill for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asuma ganha 50 de defesa destrutível e causa instantaneamente 25 de dano a um inimigo. Durante esse tempo, ele pode usar essa habilidade novamente por 1 chakra aleatório para causar 25 de dano. Quando esse efeito terminar, Asuma ficará impossibilitado de usar essa habilidade por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Ash Pile Burning",
      "file": "sarutobi_asuma_(s)_skill_2_(ash_pile_burning).jpg",
      "description": "Asuma exhales a cloud of combustible ash on all enemies, increasing the cooldown of their skills by 1 turn. During this time, this skill will be replaced by 'Ash Pile Burning - Ignite'.",
      "descriptionBR": "Asuma exala uma nuvem de cinzas combustíveis em todos os inimigos, aumentando o tempo de recarga das habilidades deles em 1 turnosubstituída por 'Ash Pile Burning - Ignite'.",
      "descriptionRaw": "Asuma exhales a cloud of combustible ash on all enemies, <Effects>increasing the cooldown of their skills<Effects> by 1 turn. During this time, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Ash Pile Burning - Ignite'<SkillName>.",
      "descriptionBRRaw": "Asuma exala uma nuvem de cinzas combustíveis em todos os inimigos, <Effects>aumentando o tempo de recarga das habilidades<Effects> deles em 1 turno<. Durante esse tempo, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Ash Pile Burning - Ignite'<SkillName>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Asuma exhales a cloud of combustible ash on all enemies, increasing the cooldown of their skills by 1 turn. During this time, this skill will be replaced by 'Ash Pile Burning - Ignite'. Chakra cost: 1 Gen, 1 Random. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asuma exala uma nuvem de cinzas combustíveis em todos os inimigos, aumentando o tempo de recarga das habilidades deles em 1 turnosubstituída por 'Ash Pile Burning - Ignite'. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Decapitate",
      "file": "sarutobi_asuma_(s)_skill_3_(decapitate).jpg",
      "description": "Showing no mercy, Asuma targets one enemy, and if that enemy's health is 25 or less, he will instantly kill that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
      "descriptionBR": "Sem mostrar piedade, Asuma mira em um inimigo, e se a vida desse inimigo for 25 ou menos, ele o matará instantaneamente. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida.",
      "descriptionRaw": "Showing no mercy, Asuma targets one enemy, and if that enemy's <Defense>health<Defense> is <Invisible>25 or less<Invisible>, he will <Damage>instantly kill that enemy<Damage>. This skill <Classes>ignores invulnerability<Classes> and cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
      "descriptionBRRaw": "Sem mostrar piedade, Asuma mira em um inimigo, e se a <Defense>vida<Defense> desse inimigo for <Invisible>25 ou menos<Invisible>, ele o <Damage>matará instantaneamente<Damage>. Esta habilidade <Classes>ignora invulnerabilidade<Classes> e não pode ser <Classes>counterada<Classes> ou <Classes>refletida<Classes>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Showing no mercy, Asuma targets one enemy, and if that enemy's health is 25 or less, he will instantly kill that enemy. This skill ignores invulnerability and cannot be countered or reflected. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sem mostrar piedade, Asuma mira em um inimigo, e se a vida desse inimigo for 25 ou menos, ele o matará instantaneamente. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Asuma Evasion",
      "file": "sarutobi_asuma_(s)_skill_4_(asuma_evasion).jpg",
      "description": "This skill makes Sarutobi Asuma (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Sarutobi Asuma (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Sarutobi Asuma (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Sarutobi Asuma (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Sarutobi Asuma (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Sarutobi Asuma (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Ash Pile Burning - Ignite",
      "file": "sarutobi_asuma_(s)_skill_5_(ash_pile_burning_-_ignite).jpeg",
      "description": "Asuma lights up the ash on the battlefield, dealing 10 affliction damage to all enemies for each stack of 'Ash Pile Cloud' on them. This skill will end 'Ash Pile Cloud' and it cannot be countered or reflected and ignores invulnerability.",
      "descriptionBR": "Asuma incendeia as cinzas no campo de batalha, causando 10 de dano affliction a todos os inimigos para cada acúmulo de 'Ash Pile Cloud' neles. Essa habilidade encerrará 'Ash Pile Cloud' e não pode ser counterada, refletida e ignora invulnerabilidade.",
      "descriptionRaw": "Asuma lights up the ash on the battlefield, dealing <Damage>10 affliction damage<Damage> to all enemies for each stack of <SkillName>'Ash Pile Cloud'<SkillName> on them. This skill will <Effects>end<Effects> <SkillName>'Ash Pile Cloud'<SkillName> and it cannot be <Classes>countered<Classes> or <Classes>reflected<Classes> and <Classes>ignores invulnerability<Classes>.",
      "descriptionBRRaw": "Asuma incendeia as cinzas no campo de batalha, causando <Damage>10 de dano affliction<Damage> a todos os inimigos para cada acúmulo de <SkillName>'Ash Pile Cloud'<SkillName> neles. Essa habilidade <Effects>encerrará<Effects> <SkillName>'Ash Pile Cloud'<SkillName> e não pode ser <Classes>counterada<Classes>, <Classes>refletida<Classes> e <Classes>ignora invulnerabilidade<Classes>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Asuma lights up the ash on the battlefield, dealing 10 affliction damage to all enemies for each stack of 'Ash Pile Cloud' on them. This skill will end 'Ash Pile Cloud' and it cannot be countered or reflected and ignores invulnerability. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asuma incendeia as cinzas no campo de batalha, causando 10 de dano affliction a todos os inimigos para cada acúmulo de 'Ash Pile Cloud' neles. Essa habilidade encerrará 'Ash Pile Cloud' e não pode ser counterada, refletida e ignora invulnerabilidade. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
