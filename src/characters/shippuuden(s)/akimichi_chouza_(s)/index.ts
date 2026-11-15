// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Akimichi Chouza (S)",
  "description": "Akimichi Chouza (S) is the leader of the Akimichi clan and the father of Chouji. He is a jounin and he is skilled in all of his clan's secret techniques.",
  "descriptionBR": "Akimichi Chouza (S) é o líder do clã Akimichi e pai de Chouji. Ele é um jounin habilidoso em todas as técnicas secretas de seu clã.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "akimichi_chouza_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chain Bind",
      "file": "akimichi_chouza_(s)_skill_1_(chain_bind).jpg",
      "description": "Chouza slows down an enemy, dealing 10 damage to them and lowering all physical and chakra damage they deal by 10 for 1 turn. During this time, Chouza's team will also gain 10 destructible defense.",
      "descriptionBR": "Chouza desacelera um inimigo, causando 10 de dano e reduzindo em 10 todo dano Physical e chakra que ele causar por 1 turno. Durante esse tempo, A equipe de Chouza também receberá 10 de defesa destrutível.",
      "descriptionRaw": "Chouza slows down an enemy, dealing 10 damage to them and lowering all physical and chakra damage they deal by 10 for 1 turn. During this time, Chouza's team will also gain 10 destructible defense.",
      "descriptionBRRaw": "Chouza desacelera um inimigo, causando 10 de dano e reduzindo em 10 todo dano Physical e chakra que ele causar por 1 turno. Durante esse tempo, A equipe de Chouza também receberá 10 de defesa destrutível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Chouza slows down an enemy, dealing 10 damage to them and lowering all physical and chakra damage they deal by 10 for 1 turn. During this time, Chouza's team will also gain 10 destructible defense. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chouza desacelera um inimigo, causando 10 de dano e reduzindo em 10 todo dano Physical e chakra que ele causar por 1 turno. Durante esse tempo, A equipe de Chouza também receberá 10 de defesa destrutível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Jounin Meat Tank",
      "file": "akimichi_chouza_(s)_skill_2_(jounin_meat_tank).jpg",
      "description": "Chouza begins rolling, dealing 15 damage to all enemies for 2 turns. During this time, his team will gain 15 destructible defense each turn.",
      "descriptionBR": "Chouza começa a rolar, causando 15 de dano a todos os inimigos por 2 turnos. Durante esse tempo, seu time irá ganhar 15 de defesa destrutível á cada turno.",
      "descriptionRaw": "Chouza begins rolling, dealing 15 damage to all enemies for 2 turns. During this time, his team will gain 15 destructible defense each turn.",
      "descriptionBRRaw": "Chouza começa a rolar, causando 15 de dano a todos os inimigos por 2 turnos. Durante esse tempo, seu time irá ganhar 15 de defesa destrutível á cada turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 3,
      "ruleDescription": "Chouza begins rolling, dealing 15 damage to all enemies for 2 turns. During this time, his team will gain 15 destructible defense each turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Action, Melee. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chouza começa a rolar, causando 15 de dano a todos os inimigos por 2 turnos. Durante esse tempo, seu time irá ganhar 15 de defesa destrutível á cada turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Expansion Smash",
      "file": "akimichi_chouza_(s)_skill_3_(expansion_smash).jpg",
      "description": "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 20 damage. This skill is invisible.",
      "descriptionBR": "Se usada em um inimigo, por 1 turno, a próxima habilidade ofensiva não mental que ele usar será counterada. Se usada em um aliado, por 1 turno, a próxima habilidade ofensiva não mental usada contra ele será counterada. O inimigo counterado receberá 20 de dano. Esta habilidade é invisível.",
      "descriptionRaw": "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 20 damage. This skill is invisible.",
      "descriptionBRRaw": "Se usada em um inimigo, por 1 turno, a próxima habilidade ofensiva não mental que ele usar será counterada. Se usada em um aliado, por 1 turno, a próxima habilidade ofensiva não mental usada contra ele será counterada. O inimigo counterado receberá 20 de dano. Esta habilidade é invisível.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 20 damage. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Se usada em um inimigo, por 1 turno, a próxima habilidade ofensiva não mental que ele usar será counterada. Se usada em um aliado, por 1 turno, a próxima habilidade ofensiva não mental usada contra ele será counterada. O inimigo counterado receberá 20 de dano. Esta habilidade é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Chouza Block",
      "file": "akimichi_chouza_(s)_skill_4_(chouza_block).jpg",
      "description": "This skill makes Akimichi Chouza (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Akimichi Chouza (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Akimichi Chouza (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Akimichi Chouza (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Akimichi Chouza (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Akimichi Chouza (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
