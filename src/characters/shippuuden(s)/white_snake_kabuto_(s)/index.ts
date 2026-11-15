// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "White Snake Kabuto (S)",
  "description": "Following Orochimaru's death at the hands of Sasuke, Kabuto got access to his master's DNA, implanting it in his body and eventually gaining many freakish, snake-like features. In his new form, Kabuto allies himself with Tobi to wage war on the shinobi world, controlling the Edo Tensei forces from the shadows.",
  "descriptionBR": "Após a morte de Orochimaru pelas mãos de Sasuke, Kabuto teve acesso ao DNA de seu mestre, implantando-o em seu próprio corpo e eventualmente adquirindo várias características bizarras semelhantes às de uma cobra. Em sua nova forma, Kabuto se alia a Tobi para travar guerra contra o mundo shinobi, controlando as forças do Edo Tensei nas sombras.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "white_snake_kabuto_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Snake Coil",
      "file": "white_snake_kabuto_(s)_skill_1_(snake_coil).png",
      "description": "Kabuto uses his snake to coil around an enemy's body, dealing 10 affliction damage to them permanently. During this time, if that enemy uses a new harmful skill, Kabuto will heal 10 health. This skill stacks but will end if used on a different enemy or if Kabuto is killed.",
      "descriptionBR": "Kabuto usa sua cobra para se enrolar ao redor de um inimigo, causando 10 de dano affliction a ele permanentemente. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, Kabuto irá curar 10 de vida. Essa habilidade acumula, mas termina se for usada em um inimigo diferente ou Kabuto morrer.",
      "descriptionRaw": "Kabuto uses his snake to coil around an enemy's body, <Damage>dealing 10 affliction damage<Damage> to them permanently. During this time, if that enemy <Classes>uses a new harmful skill<Classes>, Kabuto will <Defense>heal 10 health<Defense>. This skill stacks but will <Effects>end<Effects> if <Effects>used on a different enemy<Effects> or <Effects>if Kabuto is killed<Effects>.",
      "descriptionBRRaw": "Kabuto usa sua cobra para se enrolar ao redor de um inimigo, <Damage>causando 10 de dano affliction<Damage> a ele permanentemente. Durante esse tempo, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, Kabuto irá <Defense>curar 10 de vida<Defense>. Essa habilidade acumula, mas <Effects>termina<Effects> se for <Effects>usada em um inimigo diferente<Effects> ou <Effects>Kabuto morrer<Effects>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee",
        "$_"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto uses his snake to coil around an enemy's body, dealing 10 affliction damage to them permanently. During this time, if that enemy uses a new harmful skill, Kabuto will heal 10 health. This skill stacks but will end if used on a different enemy or if Kabuto is killed. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Melee, $_. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto usa sua cobra para se enrolar ao redor de um inimigo, causando 10 de dano affliction a ele permanentemente. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, Kabuto irá curar 10 de vida. Essa habilidade acumula, mas termina se for usada em um inimigo diferente ou Kabuto morrer. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee, $_. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Edo Tensei Technique",
      "file": "white_snake_kabuto_(s)_skill_2_(edo_tensei_technique).png",
      "description": "Kabuto deals 25 affliction damage to one enemy and stuns their harmful skills for 1 turn. If that enemy is killed in this turn, they will become an Edo Tensei and will replace one of Kabuto's allies if they die or if they are currently dead, returning them to 35 health. This effect triggers once per game.",
      "descriptionBR": "Kabuto causa 25 de dano affliction a um inimigo e atordoa as habilidades ofensivas dele por 1 turno. Se esse inimigo for morto nesse turno, ele se tornará um Edo Tensei e irá substituir um dos aliados de Kabuto se eles morrerem ou se já estiverem mortos, retornando com 35 de vida. Esse efeito é ativado uma vez por partida.",
      "descriptionRaw": "Kabuto <Damage>deals 25 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>harmful skills<Classes> for 1 turn. If <Classes>that enemy is killed<Classes> in this turn, they will become an <Invisible>Edo Tensei<Invisible> and will <Effects>replace<Effects> one of Kabuto's allies <Classes>if they die<Classes> or <Classes>if they are currently dead<Classes>, returning them to <Defense>35 health<Defense>. This effect triggers once per game.",
      "descriptionBRRaw": "Kabuto <Damage>causa 25 de dano affliction<Damage> a um inimigo e <Effects>atordoa<Effects> as <Classes>habilidades ofensivas<Classes> dele por 1 turno. Se <Classes>esse inimigo for morto<Classes> nesse turno, ele se tornará um <Invisible>Edo Tensei<Invisible> e irá <Effects>substituir<Effects> um dos aliados de Kabuto <Classes>se eles morrerem<Classes> ou <Classes>se já estiverem mortos<Classes>, retornando com <Defense>35 de vida<Defense>. Esse efeito é ativado uma vez por partida.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto deals 25 affliction damage to one enemy and stuns their harmful skills for 1 turn. If that enemy is killed in this turn, they will become an Edo Tensei and will replace one of Kabuto's allies if they die or if they are currently dead, returning them to 35 health. This effect triggers once per game. Chakra cost: 1 Blood, 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto causa 25 de dano affliction a um inimigo e atordoa as habilidades ofensivas dele por 1 turno. Se esse inimigo for morto nesse turno, ele se tornará um Edo Tensei e irá substituir um dos aliados de Kabuto se eles morrerem ou se já estiverem mortos, retornando com 35 de vida. Esse efeito é ativado uma vez por partida. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Edo Tensei Summoning: Akatsuki",
      "file": "white_snake_kabuto_(s)_skill_3_(edo_tensei_summoning_akatsuki).png",
      "description": "Kabuto gains 50 points of destructible defense and replaces his skills with their alternate versions until it is destroyed. Using this skill will end 'Snake Coil'.",
      "descriptionBR": "Kabuto ganha 50 pontos de defesa destrutível e substitui suas habilidades pelas versões alternativas até que a defesa seja destruída. Usar esta habilidade irá encerrar 'Snake Coil'.",
      "descriptionRaw": "Kabuto <Defense>gains 50 points of destructible defense<Defense> and <Effects>replaces<Effects> his skills with their alternate versions <Defense>until it is destroyed<Defense>. Using this skill will <Effects>end<Effects> <SkillName>'Snake Coil'<SkillName>.",
      "descriptionBRRaw": "Kabuto <Defense>ganha 50 pontos de defesa destrutível<Defense> e <Effects>substitui<Effects> suas habilidades pelas versões alternativas <Defense>até que a defesa seja destruída<Defense>. Usar esta habilidade irá <Effects>encerrar<Effects> <SkillName>'Snake Coil'<SkillName>.",
      "energy": [
        "Blood",
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 6,
      "ruleDescription": "Kabuto gains 50 points of destructible defense and replaces his skills with their alternate versions until it is destroyed. Using this skill will end 'Snake Coil'. Chakra cost: 1 Blood, 1 Gen. Catalog classes: Chakra, Instant. Catalog cooldown: 6. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto ganha 50 pontos de defesa destrutível e substitui suas habilidades pelas versões alternativas até que a defesa seja destruída. Usar esta habilidade irá encerrar 'Snake Coil'. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 6. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "White Snake Awakening",
      "file": "white_snake_kabuto_(s)_skill_4_(white_snake_awakening).png",
      "description": "This skill makes White Snake Kabuto (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz White Snake Kabuto (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes White Snake Kabuto (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz White Snake Kabuto (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes White Snake Kabuto (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz White Snake Kabuto (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Edo Tensei: Clay Clone",
      "file": "white_snake_kabuto_(s)_skill_5_(edo_tensei_clay_clone).png",
      "description": "Kabuto targets one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and will be dealt 20 piercing damage. This skill is invisible.",
      "descriptionBR": "Kabuto marca um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ela será counterada e ele irá receber 20 de dano perfurante. Essa habilidade é invisível.",
      "descriptionRaw": "Kabuto targets one enemy for 1 turn. If that enemy <Classes>uses a new harmful skill<Classes>, they will be <Defense>countered<Defense> and will be <Damage>dealt 20 piercing damage<Damage>. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Kabuto marca um inimigo por 1 turno. Se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ela será <Defense>counterada<Defense> e ele irá <Damage>receber 20 de dano perfurante<Damage>. <Invisible>Essa habilidade é invisível<Invisible>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Kabuto targets one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and will be dealt 20 piercing damage. This skill is invisible. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto marca um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ela será counterada e ele irá receber 20 de dano perfurante. Essa habilidade é invisível. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Edo Tensei: Totsuka Blade",
      "file": "white_snake_kabuto_(s)_skill_6_(edo_tensei_totsuka_blade).png",
      "description": "Kabuto deals 20 piercing damage to one enemy and removes 1 bloodline or genjutsu from them.",
      "descriptionBR": "Kabuto causa 20 de dano perfurante a um inimigo e remove 1 bloodline ou genjutsu chakra dele.",
      "descriptionRaw": "Kabuto <Damage>deals 20 piercing damage<Damage> to one enemy and <Effects>removes 1 bloodline or genjutsu<Effects> from them.",
      "descriptionBRRaw": "Kabuto <Damage>causa 20 de dano perfurante<Damage> a um inimigo e <Effects>remove 1 bloodline ou genjutsu chakra<Effects> dele.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto deals 20 piercing damage to one enemy and removes 1 bloodline or genjutsu from them. Chakra cost: 1 Tai. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto causa 20 de dano perfurante a um inimigo e remove 1 bloodline ou genjutsu chakra dele. Custo de chakra: 1 taijutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Edo Tensei: Flame Mask",
      "file": "white_snake_kabuto_(s)_skill_7_(edo_tensei_flame_mask).png",
      "description": "Kabuto deals 20 affliction damage to one enemy and stuns their helpful skills for 1 turn.",
      "descriptionBR": "Kabuto causa 20 de dano affliction a um inimigo e atordoa as habilidades defensivas dele por 1 turno.",
      "descriptionRaw": "Kabuto <Damage>deals 20 affliction damage<Damage> to one enemy and <Effects>stuns their helpful skills<Effects> for 1 turn.",
      "descriptionBRRaw": "Kabuto <Damage>causa 20 de dano affliction<Damage> a um inimigo e <Effects>atordoa as habilidades defensivas<Effects> dele por 1 turno.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto deals 20 affliction damage to one enemy and stuns their helpful skills for 1 turn. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto causa 20 de dano affliction a um inimigo e atordoa as habilidades defensivas dele por 1 turno. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 8,
      "name": "Edo Tensei: Human Path",
      "file": "white_snake_kabuto_(s)_skill_8_(edo_tensei_human_path).png",
      "description": "Kabuto steals 20 health from one enemy and stuns their harmful skills for 1 turn.",
      "descriptionBR": "Kabuto rouba 20 de vida de um inimigo e atordoa as habilidades ofensivas dele por 1 turno.",
      "descriptionRaw": "Kabuto <Damage>steals 20 health<Damage> from one enemy and <Effects>stuns their harmful skills<Effects> for 1 turn.",
      "descriptionBRRaw": "Kabuto <Damage>rouba 20 de vida<Damage> de um inimigo e <Effects>atordoa as habilidades ofensivas<Effects> dele por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto steals 20 health from one enemy and stuns their harmful skills for 1 turn. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto rouba 20 de vida de um inimigo e atordoa as habilidades ofensivas dele por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
