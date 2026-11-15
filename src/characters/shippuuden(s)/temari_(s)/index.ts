// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Temari (S)",
  "description": "Temari (S) has grown over the years. She is now a Jounin as well as the sister of Kankuro and Gaara. Temari is also the Hidden Sand Village's ambassador to the Hidden Leaf Village.",
  "descriptionBR": "Temari (S) cresceu ao longo dos anos. Agora é uma Jounin, além de irmã de Kankuro e Gaara. Temari também é a embaixadora da Vila Oculta da Areia para a Vila Oculta da Folha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "temari_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Fan Increase Moon",
      "file": "temari_(s)_skill_1_(fan_increase_moon).jpg",
      "description": "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times.",
      "descriptionBR": "Temari abre seu leque e revela uma lua. Temari ganha 5 pontos de redução de dano e aumenta seu dano em 5 permanentemente. Esta habilidade acumula e só pode ser usada 3 vezes.",
      "descriptionRaw": "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times.",
      "descriptionBRRaw": "Temari abre seu leque e revela uma lua. Temari ganha 5 pontos de redução de dano e aumenta seu dano em 5 permanentemente. Esta habilidade acumula e só pode ser usada 3 vezes.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Temari abre seu leque e revela uma lua. Temari ganha 5 pontos de redução de dano e aumenta seu dano em 5 permanentemente. Esta habilidade acumula e só pode ser usada 3 vezes. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Wind Scythe",
      "file": "temari_(s)_skill_2_(wind_scythe).jpg",
      "description": "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy.",
      "descriptionBR": "Usando Wind Scythe, Temari (S) causa 20 de dano perfurante a um inimigo.",
      "descriptionRaw": "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy.",
      "descriptionBRRaw": "Usando Wind Scythe, Temari (S) causa 20 de dano perfurante a um inimigo.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy. Chakra cost: 1 Nin. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando Wind Scythe, Temari (S) causa 20 de dano perfurante a um inimigo. Custo de chakra: 1 ninjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Immense Cutting Whirlwind",
      "file": "temari_(s)_skill_3_(immense_cutting_whirlwind).jpg",
      "description": "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 10 for 1 turn.",
      "descriptionBR": "Temari cria um enorme turbilhão no campo de batalha, causando 20 de dano a todos os inimigos e reduzindo o dano não affliction deles em 10 por 1 turno.",
      "descriptionRaw": "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 10 for 1 turn.",
      "descriptionBRRaw": "Temari cria um enorme turbilhão no campo de batalha, causando 20 de dano a todos os inimigos e reduzindo o dano não affliction deles em 10 por 1 turno.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 10 for 1 turn. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Temari cria um enorme turbilhão no campo de batalha, causando 20 de dano a todos os inimigos e reduzindo o dano não affliction deles em 10 por 1 turno. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Fan Barrier",
      "file": "temari_(s)_skill_4_(fan_barrier).jpg",
      "description": "This skill makes Temari (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Temari (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Temari (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Temari (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Temari (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Temari (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
