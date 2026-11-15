// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Sasori (S)",
  "description": "Edo Tensei Sasori (S) has been resurrected in the ageless body that he had always wanted during his life. He is sent out to the battlefield in Akatsuki's ambush squad.",
  "descriptionBR": "Edo Tensei Sasori (S) foi ressuscitado no corpo imortal que sempre desejou em vida. Ele é enviado ao campo de batalha como parte do esquadrão de emboscada da Akatsuki.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_sasori_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chakra Threads",
      "file": "edo_tensei_sasori_(s)_skill_1_(chakra_threads).jpeg",
      "description": "Sasori manipulates his puppets, gaining 10 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead.",
      "descriptionBR": "Sasori manipula suas marionetes, ganhando 10 pontos de defesa destrutível por 3 turnos. Durante esse tempo, 'Puppet Manipulation' causa 5 de dano adicional e 'Chakra Threads: Puppet Trap' irá refletir todas as habilidades ofensivas.",
      "descriptionRaw": "Sasori manipulates his puppets, gaining 10 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead.",
      "descriptionBRRaw": "Sasori manipula suas marionetes, ganhando 10 pontos de defesa destrutível por 3 turnos. Durante esse tempo, 'Puppet Manipulation' causa 5 de dano adicional e 'Chakra Threads: Puppet Trap' irá refletir todas as habilidades ofensivas.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Sasori manipulates his puppets, gaining 10 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasori manipula suas marionetes, ganhando 10 pontos de defesa destrutível por 3 turnos. Durante esse tempo, 'Puppet Manipulation' causa 5 de dano adicional e 'Chakra Threads: Puppet Trap' irá refletir todas as habilidades ofensivas. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Puppet Manipulation",
      "file": "edo_tensei_sasori_(s)_skill_2_(puppet_manipulation).jpeg",
      "description": "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn.",
      "descriptionBR": "Edo Tensei Sasori causa 15 de dano a um inimigo. Por 1 turno, esse inimigo causará 10 de dano não affliction a menos. Se a vida desse inimigo cair para 35 ou menos, suas habilidades do tipo Physical e Chakra serão atordoadas por 1 turno.",
      "descriptionRaw": "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn.",
      "descriptionBRRaw": "Edo Tensei Sasori causa 15 de dano a um inimigo. Por 1 turno, esse inimigo causará 10 de dano não affliction a menos. Se a vida desse inimigo cair para 35 ou menos, suas habilidades do tipo Physical e Chakra serão atordoadas por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Edo Tensei Sasori causa 15 de dano a um inimigo. Por 1 turno, esse inimigo causará 10 de dano não affliction a menos. Se a vida desse inimigo cair para 35 ou menos, suas habilidades do tipo Physical e Chakra serão atordoadas por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chakra Threads: Puppet Trap",
      "file": "edo_tensei_sasori_(s)_skill_3_(chakra_threads_puppet_trap).jpeg",
      "description": "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible.",
      "descriptionBR": "Edo Tensei Sasori seleciona um aliado por 1 turno. A primeira habilidade ofensiva usada nesse aliado será refletida contra o inimigo. Esta habilidade é invisível.",
      "descriptionRaw": "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible.",
      "descriptionBRRaw": "Edo Tensei Sasori seleciona um aliado por 1 turno. A primeira habilidade ofensiva usada nesse aliado será refletida contra o inimigo. Esta habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Edo Tensei Sasori seleciona um aliado por 1 turno. A primeira habilidade ofensiva usada nesse aliado será refletida contra o inimigo. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Falling Guard",
      "file": "edo_tensei_sasori_(s)_skill_4_(falling_guard).jpeg",
      "description": "This skill makes Edo Tensei Sasori (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Sasori (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Sasori (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Sasori (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Sasori (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Sasori (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
