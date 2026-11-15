// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hyuuga Hiashi (S)",
  "description": "Head of the Hyuuga clan, and father to both Hinata and Hanabi, Hiashi is a strict, but caring man who would do anything for his clan. In battle, there is no equal when it comes to mastering the Hyuuga clan abilitie",
  "descriptionBR": "Líder do clã Hyuuga e pai de Hinata e Hanabi, Hiashi é um homem rígido, mas atencioso, que faria qualquer coisa pelo seu clã. Em batalha, não há igual quando se trata de dominar as habilidades do clã Hyuuga.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hyuuga_hiashi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Master Gentle Fist",
      "file": "hyuuga_hiashi_(s)_skill_1_(master_gentle_fist).jpg",
      "description": "Hiashi slams one enemy with his fists, dealing 25 damage to them and removing 1 random chakra from them. The following turn, one other random enemy will receive 20 damage and lose 1 taijutsu or ninjutsu chakra. The target of this skill is invisible.",
      "descriptionBR": "Hiashi golpeia um inimigo com seus punhos, causando 25 de dano e removendo 1 chakra aleatório dele. No turno seguinte, outro inimigo aleatório receberá 20 de dano e perderá 1 chakra taijutsu ou ninjutsu. O alvo dessa habilidade é invisível.",
      "descriptionRaw": "Hiashi slams one enemy with his fists, dealing 25 damage to them and removing 1 random chakra from them. The following turn, one other random enemy will receive 20 damage and lose 1 taijutsu or ninjutsu chakra. The target of this skill is invisible.",
      "descriptionBRRaw": "Hiashi golpeia um inimigo com seus punhos, causando 25 de dano e removendo 1 chakra aleatório dele. No turno seguinte, outro inimigo aleatório receberá 20 de dano e perderá 1 chakra taijutsu ou ninjutsu. O alvo dessa habilidade é invisível.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Hiashi slams one enemy with his fists, dealing 25 damage to them and removing 1 random chakra from them. The following turn, one other random enemy will receive 20 damage and lose 1 taijutsu or ninjutsu chakra. The target of this skill is invisible. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Action, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hiashi golpeia um inimigo com seus punhos, causando 25 de dano e removendo 1 chakra aleatório dele. No turno seguinte, outro inimigo aleatório receberá 20 de dano e perderá 1 chakra taijutsu ou ninjutsu. O alvo dessa habilidade é invisível. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Master Revolving Heaven",
      "file": "hyuuga_hiashi_(s)_skill_2_(master_revolving_heaven).jpg",
      "description": "Hiashi spins, becoming invulnerable for 2 turns, dealing 15 damage to one enemy and 10 to all others each turn.",
      "descriptionBR": "Hiashi gira, tornando-se invulnerável por 2 turnos e causando 15 de dano a um inimigo e 10 a todos os outros a cada turno.",
      "descriptionRaw": "Hiashi spins, becoming invulnerable for 2 turns, dealing 15 damage to one enemy and 10 to all others each turn.",
      "descriptionBRRaw": "Hiashi gira, tornando-se invulnerável por 2 turnos e causando 15 de dano a um inimigo e 10 a todos os outros a cada turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Melee"
      ],
      "cooldown": 3,
      "ruleDescription": "Hiashi spins, becoming invulnerable for 2 turns, dealing 15 damage to one enemy and 10 to all others each turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Action, Melee. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hiashi gira, tornando-se invulnerável por 2 turnos e causando 15 de dano a um inimigo e 10 a todos os outros a cada turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Action, Melee. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Eight Trigrams Vacuum Wall Palm",
      "file": "hyuuga_hiashi_(s)_skill_3_(eight_trigrams_vacuum_wall_palm).jpg",
      "description": "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy.",
      "descriptionBR": "Hiashi se prepara para rebater um ataque inimigo. No próximo turno, o primeiro inimigo que usar uma nova habilidade ofensiva em um aliado ou nele mesmo terá essa habilidade refletida para um inimigo aleatório.",
      "descriptionRaw": "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy.",
      "descriptionBRRaw": "Hiashi se prepara para rebater um ataque inimigo. No próximo turno, o primeiro inimigo que usar uma nova habilidade ofensiva em um aliado ou nele mesmo terá essa habilidade refletida para um inimigo aleatório.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 3,
      "ruleDescription": "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hiashi se prepara para rebater um ataque inimigo. No próximo turno, o primeiro inimigo que usar uma nova habilidade ofensiva em um aliado ou nele mesmo terá essa habilidade refletida para um inimigo aleatório. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hiashi Byakugan",
      "file": "hyuuga_hiashi_(s)_skill_4_(hiashi_byakugan).jpg",
      "description": "This skill makes Hyuuga Hiashi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hyuuga Hiashi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hyuuga Hiashi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hyuuga Hiashi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hyuuga Hiashi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hyuuga Hiashi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
