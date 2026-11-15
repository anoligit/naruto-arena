// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Mangekyou Sasuke (S)",
  "description": "Mangekyou Sasuke (S), Sasuke after defeating his older brother Itachi has gained the mangekyou sharingan. Sasuke is now a member of the Akatsuki, and also the leader of the newly created Team Taka, whose goal is to destroy the Hidden Leaf.",
  "descriptionBR": "Mangekyou Sasuke (S), após derrotar seu irmão mais velho Itachi, adquiriu o Mangekyou Sharingan. Sasuke agora é membro da Akatsuki e também líder da recém-criada Equipe Taka, cujo objetivo é destruir a Vila da Folha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "mangekyou_sasuke_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Amaterasu Wave",
      "file": "mangekyou_sasuke_(s)_skill_1_(amaterasu_wave).jpeg",
      "description": "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed.",
      "descriptionBR": "Usando seu Amaterasu no campo de batalha, Sasuke causa 12 de dano affliction a todos os inimigos por 2 turnos. Enquanto estiver ativa, qualquer inimigo que não usar uma nova habilidade fará com que 'Amaterasu Wave' dure 1 turno a mais sobre ele. Esta habilidade não pode ser usada em inimigos já afetados por ela e não pode ser removida.",
      "descriptionRaw": "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed.",
      "descriptionBRRaw": "Usando seu Amaterasu no campo de batalha, Sasuke causa 12 de dano affliction a todos os inimigos por 2 turnos. Enquanto estiver ativa, qualquer inimigo que não usar uma nova habilidade fará com que 'Amaterasu Wave' dure 1 turno a mais sobre ele. Esta habilidade não pode ser usada em inimigos já afetados por ela e não pode ser removida.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed. Chakra cost: 1 Nin, 1 Random. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando seu Amaterasu no campo de batalha, Sasuke causa 12 de dano affliction a todos os inimigos por 2 turnos. Enquanto estiver ativa, qualquer inimigo que não usar uma nova habilidade fará com que 'Amaterasu Wave' dure 1 turno a mais sobre ele. Esta habilidade não pode ser usada em inimigos já afetados por ela e não pode ser removida. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Enton Amaterasu",
      "file": "mangekyou_sasuke_(s)_skill_2_(enton_amaterasu).jpg",
      "description": "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks.",
      "descriptionBR": "Sasuke usa seu Amaterasu como escudo por 4 turnos, concedendo-lhe 15 pontos de defesa destrutível. Durante esse tempo, qualquer inimigo que usar uma nova habilidade não mental em Sasuke receberá 5 de dano affliction permanentemente. Esta habilidade acumula.",
      "descriptionRaw": "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks.",
      "descriptionBRRaw": "Sasuke usa seu Amaterasu como escudo por 4 turnos, concedendo-lhe 15 pontos de defesa destrutível. Durante esse tempo, qualquer inimigo que usar uma nova habilidade não mental em Sasuke receberá 5 de dano affliction permanentemente. Esta habilidade acumula.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 4,
      "ruleDescription": "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged, Harmful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke usa seu Amaterasu como escudo por 4 turnos, concedendo-lhe 15 pontos de defesa destrutível. Durante esse tempo, qualquer inimigo que usar uma nova habilidade não mental em Sasuke receberá 5 de dano affliction permanentemente. Esta habilidade acumula. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Dark Genjutsu",
      "file": "mangekyou_sasuke_(s)_skill_3_(dark_genjutsu).jpg",
      "description": "Mangekyou Sasuke (S) deals 25 piercing damage to one enemy. That enemy's non-mental skills will be stunned for 1 turn.",
      "descriptionBR": "Mangekyou Sasuke (S) causa 25 de dano perfurante a um inimigo. As habilidades não mentais desse inimigo serão atordoadas por 1 turno.",
      "descriptionRaw": "Mangekyou Sasuke (S) <Damage>deals 25 piercing damage<Damage> to one enemy. That enemy's <Classes>non-mental skills<Classes> will be<Effects> stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Mangekyou Sasuke (S) <Damage>causa 25 de dano perfurante<Damage> a um inimigo. As <Classes>habilidades não mentais<Classes> desse inimigo serão <Effects>atordoadas<Effects> por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Mangekyou Sasuke (S) deals 25 piercing damage to one enemy. That enemy's non-mental skills will be stunned for 1 turn. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Mangekyou Sasuke (S) causa 25 de dano perfurante a um inimigo. As habilidades não mentais desse inimigo serão atordoadas por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hawk Summoning",
      "file": "mangekyou_sasuke_(s)_skill_4_(hawk_summoning).jpg",
      "description": "This skill makes Mangekyou Sasuke (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Mangekyou Sasuke (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Mangekyou Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Mangekyou Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Mangekyou Sasuke (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Mangekyou Sasuke (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
