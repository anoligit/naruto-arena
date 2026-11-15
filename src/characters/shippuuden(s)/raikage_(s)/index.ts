// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Raikage (S)",
  "description": "Ay is the fourth Raikage of Hidden Cloud Ninja and supreme leader of the Shinobi Alliance. Son of the Third Raikage, he is also Killer Bee's older brother.",
  "descriptionBR": "Ay é o quarto Raikage da Vila Oculta da Nuvem e líder supremo da Aliança Shinobi. Filho do Terceiro Raikage, ele também é o irmão mais velho de Killer Bee.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "raikage_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Lightning Release",
      "file": "raikage_(s)_skill_1_(lightning_release).png",
      "description": "Using lightning, Raikage will permanently deal 10 additional damage until he uses a new harmful skill. While active, he gains 10 points of damage reduction. Each time this skill is used, it costs 1 additional random chakra, its bonus damage increases by 10, and grants 5 additional points of damage reduction.",
      "descriptionBR": "Usando relâmpago, Raikage irá causar 10 de dano adicional permanentemente até usar uma nova habilidade ofensiva. Enquanto ativa, ele ganha 10 pontos de redução de dano. Cada vez que essa habilidade é usada, ela custa 1 chakra aleatório adicional, seu dano adicional aumenta em 10 e concede 5 pontos adicionais de redução de dano.",
      "descriptionRaw": "Using lightning, Raikage will permanently deal 10 additional damage until he uses a new harmful skill. While active, he gains 10 points of damage reduction. Each time this skill is used, it costs 1 additional random chakra, its bonus damage increases by 10, and grants 5 additional points of damage reduction.",
      "descriptionBRRaw": "Usando relâmpago, Raikage irá causar 10 de dano adicional permanentemente até usar uma nova habilidade ofensiva. Enquanto ativa, ele ganha 10 pontos de redução de dano. Cada vez que essa habilidade é usada, ela custa 1 chakra aleatório adicional, seu dano adicional aumenta em 10 e concede 5 pontos adicionais de redução de dano.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Using lightning, Raikage will permanently deal 10 additional damage until he uses a new harmful skill. While active, he gains 10 points of damage reduction. Each time this skill is used, it costs 1 additional random chakra, its bonus damage increases by 10, and grants 5 additional points of damage reduction. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando relâmpago, Raikage irá causar 10 de dano adicional permanentemente até usar uma nova habilidade ofensiva. Enquanto ativa, ele ganha 10 pontos de redução de dano. Cada vez que essa habilidade é usada, ela custa 1 chakra aleatório adicional, seu dano adicional aumenta em 10 e concede 5 pontos adicionais de redução de dano. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Liger Bomb",
      "file": "raikage_(s)_skill_2_(liger_bomb).png",
      "description": "Raikage lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their non-affliction damage by 15 for 1 turn. The following turn, that enemy's skills will be stunned.",
      "descriptionBR": "Raikage ergue um inimigo no ar e brutalmente esmaga sua cabeça contra o chão, causando 30 de dano e reduzindo seu dano não-affliction em 15 por 1 turno. No turno seguinte, as habilidades desse inimigo serão atordoadas.",
      "descriptionRaw": "Raikage lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their non-affliction damage by 15 for 1 turn. The following turn, that enemy's skills will be stunned.",
      "descriptionBRRaw": "Raikage ergue um inimigo no ar e brutalmente esmaga sua cabeça contra o chão, causando 30 de dano e reduzindo seu dano não-affliction em 15 por 1 turno. No turno seguinte, as habilidades desse inimigo serão atordoadas.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Raikage lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their non-affliction damage by 15 for 1 turn. The following turn, that enemy's skills will be stunned. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Raikage ergue um inimigo no ar e brutalmente esmaga sua cabeça contra o chão, causando 30 de dano e reduzindo seu dano não-affliction em 15 por 1 turno. No turno seguinte, as habilidades desse inimigo serão atordoadas. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Lightning Oppression Horizontal",
      "file": "raikage_(s)_skill_3_(lightning_oppression_horizontal).png",
      "description": "Raikage performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage.",
      "descriptionBR": "Raikage desfere um golpe horizontal com as costas da mão contra um inimigo, destruindo toda a defesa destrutível e causando 20 de dano perfurante.",
      "descriptionRaw": "Raikage performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage.",
      "descriptionBRRaw": "Raikage desfere um golpe horizontal com as costas da mão contra um inimigo, destruindo toda a defesa destrutível e causando 20 de dano perfurante.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Raikage performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Raikage desfere um golpe horizontal com as costas da mão contra um inimigo, destruindo toda a defesa destrutível e causando 20 de dano perfurante. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Lightning Speed",
      "file": "raikage_(s)_skill_4_(lightning_speed).png",
      "description": "This skill makes Raikage (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Raikage (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Raikage (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Raikage (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Raikage (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Raikage (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
