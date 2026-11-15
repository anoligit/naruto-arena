// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Roshi (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War, Roshi has had the Four-Tails, Son Goku, sealed back inside him. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Roshi is under his full control, spewing the Four-Tails' lava at anyone who might get in his way.",
  "descriptionBR": "Reanimado por Kabuto durante a Quarta Grande Guerra Ninja, Roshi teve o Quatro-Caudas, Son Goku, selado novamente dentro dele. Tendo sido transformado em um dos novos Seis Caminhos da Dor de Tobi junto dos outros jinchuurikis caídos, Roshi está sob total controle dele, expelindo a lava do Quatro-Caudas em qualquer um que fique em seu caminho.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_roshi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Multiple Scorching Rocks",
      "file": "edo_tensei_roshi_(s)_skill_1_(multiple_scorching_rocks).png",
      "description": "Roshi deals 30 affliction damage to one enemy and 10 affliction damage to a random different enemy. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBR": "Roshi causa 30 de dano affliction a um inimigo e 10 de dano affliction a um inimigo aleatório diferente. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "descriptionRaw": "Roshi deals 30 affliction damage to one enemy and 10 affliction damage to a random different enemy. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBRRaw": "Roshi causa 30 de dano affliction a um inimigo e 10 de dano affliction a um inimigo aleatório diferente. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Roshi deals 30 affliction damage to one enemy and 10 affliction damage to a random different enemy. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks). Chakra cost: 1 Blood, 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Roshi causa 30 de dano affliction a um inimigo e 10 de dano affliction a um inimigo aleatório diferente. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula). Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lava Armor",
      "file": "edo_tensei_roshi_(s)_skill_2_(lava_armor).png",
      "description": "Roshi gains 15 unpierceable defense and deals 10 affliction damage to any enemy that uses a new non-mental skill on him for 4 turns. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBR": "Roshi ganha 15 de defesa unpierceable e causa 10 de dano affliction a qualquer inimigo que usar uma nova habilidade não-mental nele por 4 turnos. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "descriptionRaw": "Roshi gains 15 unpierceable defense and deals 10 affliction damage to any enemy that uses a new non-mental skill on him for 4 turns. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBRRaw": "Roshi ganha 15 de defesa unpierceable e causa 10 de dano affliction a qualquer inimigo que usar uma nova habilidade não-mental nele por 4 turnos. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 5,
      "ruleDescription": "Roshi gains 15 unpierceable defense and deals 10 affliction damage to any enemy that uses a new non-mental skill on him for 4 turns. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks). Chakra cost: 1 Blood. Catalog classes: Affliction, Instant. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Roshi ganha 15 de defesa unpierceable e causa 10 de dano affliction a qualquer inimigo que usar uma nova habilidade não-mental nele por 4 turnos. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula). Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Magma Field",
      "file": "edo_tensei_roshi_(s)_skill_3_(magma_field).png",
      "description": "For 3 turns, Roshi will automatically trigger 'Passive: Fiery Body' at the end of every turn. The following 3 turns, the enemy team will remove/steal 1 less chakra with their skills. During this time, 'Multiple Scorching Rocks' will cost 1 less random energy. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBR": "Por 3 turnos, Roshi ativará automaticamente 'Passive: Fiery Body' no final de cada turno. Nos próximos 3 turnos, o time inimigo irá remover/roubar 1 chakra a menos com suas habilidades. Durante esse tempo, 'Multiple Scorching Rocks' custará 1 energia aleatória a menos. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "descriptionRaw": "For 3 turns, Roshi will automatically trigger 'Passive: Fiery Body' at the end of every turn. The following 3 turns, the enemy team will remove/steal 1 less chakra with their skills. During this time, 'Multiple Scorching Rocks' will cost 1 less random energy. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBRRaw": "Por 3 turnos, Roshi ativará automaticamente 'Passive: Fiery Body' no final de cada turno. Nos próximos 3 turnos, o time inimigo irá remover/roubar 1 chakra a menos com suas habilidades. Durante esse tempo, 'Multiple Scorching Rocks' custará 1 energia aleatória a menos. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "For 3 turns, Roshi will automatically trigger 'Passive: Fiery Body' at the end of every turn. The following 3 turns, the enemy team will remove/steal 1 less chakra with their skills. During this time, 'Multiple Scorching Rocks' will cost 1 less random energy. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks). Chakra cost: 2 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, Roshi ativará automaticamente 'Passive: Fiery Body' no final de cada turno. Nos próximos 3 turnos, o time inimigo irá remover/roubar 1 chakra a menos com suas habilidades. Durante esse tempo, 'Multiple Scorching Rocks' custará 1 energia aleatória a menos. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula). Custo de chakra: 2 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Roshi Partial-Tailed Beast Defense",
      "file": "edo_tensei_roshi_(s)_skill_4_(roshi_partial-tailed_beast_defense).png",
      "description": "This skill makes Roshi invulnerable for 1 turn. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBR": "Essa habilidade torna Roshi invulnerável por 1 turno. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "descriptionRaw": "This skill makes Roshi invulnerable for 1 turn. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks).",
      "descriptionBRRaw": "Essa habilidade torna Roshi invulnerável por 1 turno. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula).",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Roshi invulnerable for 1 turn. 'Passive: Fiery Body' deals 1 additional damage permanently (stacks). Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Roshi invulnerável por 1 turno. 'Passive: Fiery Body' causa 1 de dano adicional permanentemente (acumula). Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Passive: Fiery Body",
      "file": "edo_tensei_roshi_(s)_skill_5_(passive_fiery_body).png",
      "description": "Every time Roshi uses a new skill, he deals 1 affliction damage to the enemy team, ignoring invulnerability.",
      "descriptionBR": "Toda vez que Roshi usa uma nova habilidade, ele causa 1 de dano affliction ao time inimigo ignorando invulnerabilidade.",
      "descriptionRaw": "Every time Roshi uses a new skill, he deals 1 affliction damage to the enemy team, ignoring invulnerability.",
      "descriptionBRRaw": "Toda vez que Roshi usa uma nova habilidade, ele causa 1 de dano affliction ao time inimigo ignorando invulnerabilidade.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Every time Roshi uses a new skill, he deals 1 affliction damage to the enemy team, ignoring invulnerability. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Toda vez que Roshi usa uma nova habilidade, ele causa 1 de dano affliction ao time inimigo ignorando invulnerabilidade. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
