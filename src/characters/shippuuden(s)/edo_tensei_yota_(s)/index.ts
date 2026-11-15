// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Yota (S)",
  "description": "A young child from a nomadic clan, Yota died at an early age, but was revived through Edo Tensei by Orochimaru and kept alive for years as a test subject. A curious, naïve, and sensitive boy, Yota can manipulate the weather around himself, and is deployed by Kabuto to fight in the Fourth Shinobi World War.",
  "descriptionBR": "Uma jovem criança de um clã nômade, Yota morreu ainda muito novo, mas foi revivido pelo Edo Tensei de Orochimaru e mantido vivo por anos como cobaia. Um garoto curioso, ingênuo e sensível, Yota é capaz de manipular o clima ao seu redor, sendo enviado por Kabuto para lutar na Quarta Guerra Mundial Ninja.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_yota_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Weather Manipulation Rain: Water Wave",
      "file": "edo_tensei_yota_(s)_skill_1_(weather_manipulation_rain_water_wave).png",
      "description": "Yota cries, and a sudden wave crashes down on a random enemy, dealing 15 damage to them, and after targets 0 random enemies, dealing 15 damage to each one of them. This skill will target 1 additional random enemy for each 'Rain Stack' that Yota has. Afterwards, Yota gains 1 'Rain Stack'.",
      "descriptionBR": "Yota chora, e uma onda repentina despenca sobre um inimigo aleatório, causando 15 de dano a ele, e depois atinge 0 inimigos aleatórios, causando 15 de dano a cada um deles. Esta habilidade irá atingir 1 inimigo aleatório adicional para cada 'Rain Stack' que Yota possuir. Em seguida, Yota ganha 1 'Rain Stack'.",
      "descriptionRaw": "Yota cries, and a sudden wave crashes down on a random enemy, <Damage>dealing 15 damage<Damage> to them, and after <Classes>targets 0 random enemies<Classes>, <Damage>dealing 15 damage<Damage> to each one of them. This skill will <Improvements>target 1 additional random enemy<Improvements> for each <SkillName>'Rain Stack'<SkillName> that Yota <Effects>has<Effects>. Afterwards, Yota gains 1 <SkillName>'Rain Stack'<SkillName>.",
      "descriptionBRRaw": "Yota chora, e uma onda repentina despenca sobre um inimigo aleatório, <Damage>causando 15 de dano<Damage> a ele, e depois <Classes>atinge 0 inimigos aleatórios<Classes>, <Damage>causando 15 de dano<Damage> a cada um deles. Esta habilidade irá <Improvements>atingir 1 inimigo aleatório adicional<Improvements> para cada <SkillName>'Rain Stack'<SkillName> que Yota <Effects>possuir<Effects>. Em seguida, Yota ganha 1 <SkillName>'Rain Stack'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Yota cries, and a sudden wave crashes down on a random enemy, dealing 15 damage to them, and after targets 0 random enemies, dealing 15 damage to each one of them. This skill will target 1 additional random enemy for each 'Rain Stack' that Yota has. Afterwards, Yota gains 1 'Rain Stack'. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yota chora, e uma onda repentina despenca sobre um inimigo aleatório, causando 15 de dano a ele, e depois atinge 0 inimigos aleatórios, causando 15 de dano a cada um deles. Esta habilidade irá atingir 1 inimigo aleatório adicional para cada 'Rain Stack' que Yota possuir. Em seguida, Yota ganha 1 'Rain Stack'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Weather Manipulation Rain: Water Spheres",
      "file": "edo_tensei_yota_(s)_skill_2_(weather_manipulation_rain_water_spheres).png",
      "description": "Yota gains 15 points of damage reduction* and deals 10 damage to all enemies for 2 turns. Each turn, Yota cries and gains 1 'Rain Stack'. During this time, If Yota is stunned, he will cry even more, gaining 1 additional 'Rain Stack' and healing 10 health.",
      "descriptionBR": "Yota ganha 15 pontos de redução de dano* e causa 10 de dano a todos os inimigos por 2 turnos. A cada turno, Yota chora e ganha 1 'Rain Stack'. Durante esse tempo, se Yota for atordoado, ele chorará ainda mais, ganhando 1 'Rain Stack' adicional e curando 10 de vida.",
      "descriptionRaw": "Yota <Defense>gains 15 points of damage reduction<Defense>* and <Damage>deals 10 damage<Damage> to all enemies for 2 turns. Each turn, <Effects>Yota cries<Effects> and gains 1 <SkillName>'Rain Stack'<SkillName>. During this time, If <Classes>Yota is stunned<Classes>, he will <Effects>cry<Effects> even more, gaining 1 additional <SkillName>'Rain Stack'<SkillName> and <Defense>healing 10 health<Defense>.",
      "descriptionBRRaw": "Yota <Defense>ganha 15 pontos de redução de dano<Defense>* e <Damage>causa 10 de dan<Damage>o a todos os inimigos por 2 turnos. A cada turno, <Effects>Yota chora<Effects> e ganha 1 <SkillName>'Rain Stack'<SkillName>. Durante esse tempo, se <Classes>Yota for atordoado<Classes>, ele <Effects>chorará<Effects> ainda mais, ganhando 1 <SkillName>'Rain Stack'<SkillName> adicional e <Defense>curando 10 de vida<Defense>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Instant*",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Yota gains 15 points of damage reduction* and deals 10 damage to all enemies for 2 turns. Each turn, Yota cries and gains 1 'Rain Stack'. During this time, If Yota is stunned, he will cry even more, gaining 1 additional 'Rain Stack' and healing 10 health. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Action, Instant*, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yota ganha 15 pontos de redução de dano* e causa 10 de dano a todos os inimigos por 2 turnos. A cada turno, Yota chora e ganha 1 'Rain Stack'. Durante esse tempo, se Yota for atordoado, ele chorará ainda mais, ganhando 1 'Rain Stack' adicional e curando 10 de vida. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Action, Instant*, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Wather Manipulation Lightning",
      "file": "edo_tensei_yota_(s)_skill_3_(wather_manipulation_lightning).png",
      "description": "Yota sends a devastating lightning strike to obliterate all enemies, dealing 10 affliction damage to them for each 'Rain Stack' Yota currently has.",
      "descriptionBR": "Yota envia um devastador raio para aniquilar todos os inimigo, causando 10 de dano affliction a eles para cada 'Rain Stack' que Yota possui atualmente.",
      "descriptionRaw": "Yota sends a devastating lightning strike to obliterate all enemies, <Damage>dealing 10 affliction damage<Damage> to them for each <SkillName>'Rain Stack'<SkillName> Yota currently has.",
      "descriptionBRRaw": "Yota envia um devastador raio para aniquilar todos os inimigo, <Damage>causando 10 de dano affliction<Damage> a eles para cada <SkillName>'Rain Stack'<SkillName> que Yota possui atualmente.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Yota sends a devastating lightning strike to obliterate all enemies, dealing 10 affliction damage to them for each 'Rain Stack' Yota currently has. Chakra cost: 2 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yota envia um devastador raio para aniquilar todos os inimigo, causando 10 de dano affliction a eles para cada 'Rain Stack' que Yota possui atualmente. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Yota is happy don't bother him",
      "file": "edo_tensei_yota_(s)_skill_4_(yota_is_happy_don't_bother_him).png",
      "description": "This skill makes Edo Tensei Yota (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Yota (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Yota (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Yota (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Yota (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Yota (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Rain Stack",
      "file": "edo_tensei_yota_(s)_skill_5_(rain_stack).png",
      "description": "Each time Yota cries, he intensifies the rain on the battlefield, gaining 1 Rain Stack and enhancing her skills.",
      "descriptionBR": "Toda vez que Yota chora, ele intensifica a chuva no campo de batalha, ganhando 1 Rain Stack e fortalecendo suas habilidades.",
      "descriptionRaw": "Each time Yota cries, he intensifies the rain on the battlefield, gaining 1 Rain Stack and enhancing her skills.",
      "descriptionBRRaw": "Toda vez que Yota chora, ele intensifica a chuva no campo de batalha, ganhando 1 Rain Stack e fortalecendo suas habilidades.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Each time Yota cries, he intensifies the rain on the battlefield, gaining 1 Rain Stack and enhancing her skills. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Toda vez que Yota chora, ele intensifica a chuva no campo de batalha, ganhando 1 Rain Stack e fortalecendo suas habilidades. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
