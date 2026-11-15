// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Maki (S)",
  "description": "Maki is a kunoichi of the Hidden Sand Village and the student of Pakura. Maki is also a member of the Allied Shinobi Forces' Sealing Squad. Original Pics by: Pain_Alagoano",
  "descriptionBR": "Maki é uma kunoichi da Vila Oculta da Areia e aluna de Pakura. Maki também é membro do Esquadrão de Selamento das Forças Aliadas Shinobi. Imagens originais por: Pain_Alagoano",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "maki_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Cloth Binding",
      "file": "maki_(s)_skill_1_(cloth_binding).jpg",
      "description": "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage.",
      "descriptionBR": "Maki causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensivas dele. Durante 'Cloth Sealing', esta habilidade causará 20 de dano adicional. Durante 'Weighted Net Scroll', esta habilidade causará 10 de dano adicional.",
      "descriptionRaw": "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage.",
      "descriptionBRRaw": "Maki causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensivas dele. Durante 'Cloth Sealing', esta habilidade causará 20 de dano adicional. Durante 'Weighted Net Scroll', esta habilidade causará 10 de dano adicional.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Ranged, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Maki causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensivas dele. Durante 'Cloth Sealing', esta habilidade causará 20 de dano adicional. Durante 'Weighted Net Scroll', esta habilidade causará 10 de dano adicional. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Cloth Sealing",
      "file": "maki_(s)_skill_2_(cloth_sealing).jpg",
      "description": "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability.",
      "descriptionBR": "Maki usa um enorme rolo de tecido para selar um inimigo, atordoando suas habilidades Physical e Chakra por 1 turno. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability.",
      "descriptionBRRaw": "Maki usa um enorme rolo de tecido para selar um inimigo, atordoando suas habilidades Physical e Chakra por 1 turno. Esta habilidade ignora invulnerabilidade.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability. Chakra cost: 1 Nin. Catalog classes: Physical, Instant, Ranged, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Maki usa um enorme rolo de tecido para selar um inimigo, atordoando suas habilidades Physical e Chakra por 1 turno. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 ninjutsu. Classes no catálogo: Physical, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Weighted Net Scroll",
      "file": "maki_(s)_skill_3_(weighted_net_scroll).jpg",
      "description": "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible.",
      "descriptionBR": "Maki garante para si mesma 50% de redução de dano por 1 turno. Durante esse tempo, se um inimigo usar uma nova habilidade ofensiva nela, o dano das habilidades dele será reduzido em 50% por 1 turno. Esta habilidade é invisível.",
      "descriptionRaw": "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible.",
      "descriptionBRRaw": "Maki garante para si mesma 50% de redução de dano por 1 turno. Durante esse tempo, se um inimigo usar uma nova habilidade ofensiva nela, o dano das habilidades dele será reduzido em 50% por 1 turno. Esta habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 2,
      "ruleDescription": "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Maki garante para si mesma 50% de redução de dano por 1 turno. Durante esse tempo, se um inimigo usar uma nova habilidade ofensiva nela, o dano das habilidades dele será reduzido em 50% por 1 turno. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Cloth Shelter",
      "file": "maki_(s)_skill_4_(cloth_shelter).jpg",
      "description": "This skill makes Maki (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Maki (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Maki (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Maki (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Maki (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Maki (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
