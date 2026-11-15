// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Kuriarare (S)",
  "description": "Edo Tensei Kuriarare (S) was a member of the Seven Swordsmen of the Mist and a member of the Hidden Mist Village's Anbu. During his life he committed countless atrocities and he is happy to be back from death to engage his newfound opponents.",
  "descriptionBR": "Edo Tensei Kuriarare (S) foi um membro dos Sete Espadachins da Névoa e também um membro da Anbu da Vila Oculta da Névoa. Durante sua vida, ele cometeu incontáveis atrocidades e está feliz por ter retornado da morte para enfrentar seus novos oponentes.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_kuriarare_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Spider Sewing",
      "file": "edo_tensei_kuriarare_(s)_skill_1_(spider_sewing).png",
      "description": "Kuriarare applies 1 stack of 'Wire String' on all enemies. For 1 turn, any enemy affected by this skill will deal 5 less non-affliction damage. If used on enemies with 3 or more stacks of 'Wire String', they will deal 10 less non-affliction damage instead for 1 turn.",
      "descriptionBR": "Kuriarare aplica 1 stack de 'Wire String' em todos os inimigos. Por 1 turno, qualquer inimigo afetado por essa habilidade irá causar 5 a menos de dano não-affliction. Se usada em inimigos com 3 ou mais stacks de 'Wire String', eles irão causar 10 a menos de dano não-affliction por 1 turno.",
      "descriptionRaw": "Kuriarare applies 1 stack of 'Wire String' on all enemies. For 1 turn, any enemy affected by this skill will deal 5 less non-affliction damage. If used on enemies with 3 or more stacks of 'Wire String', they will deal 10 less non-affliction damage instead for 1 turn.",
      "descriptionBRRaw": "Kuriarare aplica 1 stack de 'Wire String' em todos os inimigos. Por 1 turno, qualquer inimigo afetado por essa habilidade irá causar 5 a menos de dano não-affliction. Se usada em inimigos com 3 ou mais stacks de 'Wire String', eles irão causar 10 a menos de dano não-affliction por 1 turno.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Kuriarare applies 1 stack of 'Wire String' on all enemies. For 1 turn, any enemy affected by this skill will deal 5 less non-affliction damage. If used on enemies with 3 or more stacks of 'Wire String', they will deal 10 less non-affliction damage instead for 1 turn. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kuriarare aplica 1 stack de 'Wire String' em todos os inimigos. Por 1 turno, qualquer inimigo afetado por essa habilidade irá causar 5 a menos de dano não-affliction. Se usada em inimigos com 3 ou mais stacks de 'Wire String', eles irão causar 10 a menos de dano não-affliction por 1 turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Silent Stiching",
      "file": "edo_tensei_kuriarare_(s)_skill_2_(silent_stiching).png",
      "description": "Kuriarare deals 20 piercing damage to one enemy. Afterwards, all other enemies will have 1 stack of 'Wire String' applied on them. If the main target has 3 or more stacks of 'Wire String', they will be instantly killed if they health drops to 15 or less.",
      "descriptionBR": "Kuriarare causa 20 de dano perfurante a um inimigo. Depois disso, todos os outros inimigos terão 1 stack de 'Wire String' aplicado neles. Se o alvo principal tiver 3 ou mais stacks de 'Wire String', ele será morto instantaneamente se sua vida cair para 15 ou menos.",
      "descriptionRaw": "Kuriarare deals 20 piercing damage to one enemy. Afterwards, all other enemies will have 1 stack of 'Wire String' applied on them. If the main target has 3 or more stacks of 'Wire String', they will be instantly killed if they health drops to 15 or less.",
      "descriptionBRRaw": "Kuriarare causa 20 de dano perfurante a um inimigo. Depois disso, todos os outros inimigos terão 1 stack de 'Wire String' aplicado neles. Se o alvo principal tiver 3 ou mais stacks de 'Wire String', ele será morto instantaneamente se sua vida cair para 15 ou menos.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kuriarare deals 20 piercing damage to one enemy. Afterwards, all other enemies will have 1 stack of 'Wire String' applied on them. If the main target has 3 or more stacks of 'Wire String', they will be instantly killed if they health drops to 15 or less. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kuriarare causa 20 de dano perfurante a um inimigo. Depois disso, todos os outros inimigos terão 1 stack de 'Wire String' aplicado neles. Se o alvo principal tiver 3 ou mais stacks de 'Wire String', ele será morto instantaneamente se sua vida cair para 15 ou menos. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Wire Crucifixion",
      "file": "edo_tensei_kuriarare_(s)_skill_3_(wire_crucifixion).png",
      "description": "Kuriarare cuts through one enemy trapped in his wire strings, dealing 15 affliction damage to them and stunning their non-mental skills. If used on an enemy with 3 or more stacks of 'Wire String', they will be fully stunned instead.",
      "descriptionBR": "Kuriarare corta um inimigo preso em seus fios de arame, causando 15 de dano affliction a ele e atordoando suas habilidades não-mental. Se usada em um inimigo com 3 ou mais stacks de 'Wire String', ele será completamente atordoado.",
      "descriptionRaw": "Kuriarare cuts through one enemy trapped in his wire strings, dealing 15 affliction damage to them and stunning their non-mental skills. If used on an enemy with 3 or more stacks of 'Wire String', they will be fully stunned instead.",
      "descriptionBRRaw": "Kuriarare corta um inimigo preso em seus fios de arame, causando 15 de dano affliction a ele e atordoando suas habilidades não-mental. Se usada em um inimigo com 3 ou mais stacks de 'Wire String', ele será completamente atordoado.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kuriarare cuts through one enemy trapped in his wire strings, dealing 15 affliction damage to them and stunning their non-mental skills. If used on an enemy with 3 or more stacks of 'Wire String', they will be fully stunned instead. Chakra cost: 2 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kuriarare corta um inimigo preso em seus fios de arame, causando 15 de dano affliction a ele e atordoando suas habilidades não-mental. Se usada em um inimigo com 3 ou mais stacks de 'Wire String', ele será completamente atordoado. Custo de chakra: 2 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Senbon Block",
      "file": "edo_tensei_kuriarare_(s)_skill_4_(senbon_block).png",
      "description": "This skill makes Edo Tensei Kuriarare (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Kuriarare (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Kuriarare (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Kuriarare (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Kuriarare (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Kuriarare (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Wire String",
      "file": "edo_tensei_kuriarare_(s)_skill_5_(wire_string).png",
      "description": "Enemies marked by 'Wire String' will permanently receive 5 additional damage from Kuriarare's skills.",
      "descriptionBR": "Inimigos marcados por 'Wire String' irão receber permanentemente 5 de dano adicional das habilidades de Kuriarare.",
      "descriptionRaw": "Enemies marked by 'Wire String' will permanently receive 5 additional damage from Kuriarare's skills.",
      "descriptionBRRaw": "Inimigos marcados por 'Wire String' irão receber permanentemente 5 de dano adicional das habilidades de Kuriarare.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Enemies marked by 'Wire String' will permanently receive 5 additional damage from Kuriarare's skills. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Inimigos marcados por 'Wire String' irão receber permanentemente 5 de dano adicional das habilidades de Kuriarare. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
