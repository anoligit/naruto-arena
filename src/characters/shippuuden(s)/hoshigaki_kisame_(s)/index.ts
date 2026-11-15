// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hoshigaki Kisame (S)",
  "description": "Hoshigake Kisame (S) is the partner of Uchiha Itachi in Akatsuki. He is an expert swordsman and missing nin from the Hidden Mist Village.",
  "descriptionBR": "Hoshigake Kisame (S) é o parceiro de Uchiha Itachi na Akatsuki. Ele é um especialista em espadas e um ninja desaparecido da Vila Oculta da Névoa.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hoshigaki_kisame_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hungry Sharks",
      "file": "hoshigaki_kisame_(s)_skill_1_(hungry_sharks).png",
      "description": "Kisame summons one hungry shark for each enemy alive, dealing 5 affliction damage to all of them permanently. Each turn, the first enemy to use a new harmful skill will be marked, causing all other hungry sharks to attack only the marked enemy next turn. This skill cannot be removed; Ends if Kisame dies.",
      "descriptionBR": "Kisame invoca um tubarão faminto para cada inimigo vivo, causando 5 de dano affliction a todos eles permanentemente. A cada turno, o primeiro inimigo a usar uma nova habilidade ofensiva será marcado, fazendo com que todos os outros tubarões famintos ataquem apenas o inimigo marcado no próximo turno. Esta habilidade não pode ser removida; termina se Kisame morrer.",
      "descriptionRaw": "Kisame summons one hungry shark for each enemy alive, dealing 5 affliction damage to all of them permanently. Each turn, the first enemy to use a new harmful skill will be marked, causing all other hungry sharks to attack only the marked enemy next turn. This skill cannot be removed; Ends if Kisame dies.",
      "descriptionBRRaw": "Kisame invoca um tubarão faminto para cada inimigo vivo, causando 5 de dano affliction a todos eles permanentemente. A cada turno, o primeiro inimigo a usar uma nova habilidade ofensiva será marcado, fazendo com que todos os outros tubarões famintos ataquem apenas o inimigo marcado no próximo turno. Esta habilidade não pode ser removida; termina se Kisame morrer.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged",
        "enemyBypass"
      ],
      "cooldown": 0,
      "ruleDescription": "Kisame summons one hungry shark for each enemy alive, dealing 5 affliction damage to all of them permanently. Each turn, the first enemy to use a new harmful skill will be marked, causing all other hungry sharks to attack only the marked enemy next turn. This skill cannot be removed; Ends if Kisame dies. Chakra cost: 1 Random. Catalog classes: Affliction, Action, Ranged, enemyBypass. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kisame invoca um tubarão faminto para cada inimigo vivo, causando 5 de dano affliction a todos eles permanentemente. A cada turno, o primeiro inimigo a usar uma nova habilidade ofensiva será marcado, fazendo com que todos os outros tubarões famintos ataquem apenas o inimigo marcado no próximo turno. Esta habilidade não pode ser removida; termina se Kisame morrer. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Action, Ranged, enemyBypass. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Shark Bomb",
      "file": "hoshigaki_kisame_(s)_skill_2_(shark_bomb).png",
      "description": "Kisame blasts an enemy with his shark bomb, dealing 30 damage and removing 1 bloodline or ninjutsu from them. For this turn, that enemy will receive 5 additional damage from 'Hungry Sharks'.",
      "descriptionBR": "Kisame lança uma bomba de tubarão em um inimigo, causando 30 de dano e removendo 1 chakra Bloodline ou Ninjutsu deles. Durante este turno, esse inimigo receberá 5 de dano adicional de 'Hungry Sharks'.",
      "descriptionRaw": "Kisame blasts an enemy with his shark bomb, dealing 30 damage and removing 1 bloodline or ninjutsu from them. For this turn, that enemy will receive 5 additional damage from 'Hungry Sharks'.",
      "descriptionBRRaw": "Kisame lança uma bomba de tubarão em um inimigo, causando 30 de dano e removendo 1 chakra Bloodline ou Ninjutsu deles. Durante este turno, esse inimigo receberá 5 de dano adicional de 'Hungry Sharks'.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kisame blasts an enemy with his shark bomb, dealing 30 damage and removing 1 bloodline or ninjutsu from them. For this turn, that enemy will receive 5 additional damage from 'Hungry Sharks'. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kisame lança uma bomba de tubarão em um inimigo, causando 30 de dano e removendo 1 chakra Bloodline ou Ninjutsu deles. Durante este turno, esse inimigo receberá 5 de dano adicional de 'Hungry Sharks'. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Samehada Guard",
      "file": "hoshigaki_kisame_(s)_skill_3_(samehada_guard).png",
      "description": "Samehada protects Kisame with his spikes. For 1 turn, the first enemy to use a new non-mental skill on Kisame will be countered. If sucessfully, Kisame deal 15 piercing damage and remove 1 random chakra from that enemy. This skill is invisible.",
      "descriptionBR": "Samehada protege Kisame com seus espinhos. Por 1 turno, o primeiro inimigo a usar uma nova habilidade não-Mental em Kisame será contra-atacado. Se for bem-sucedido, Kisame irá causar 15 de dano perfurante e remove 1 random chakra desse inimigo. Esta habilidade é invisível.",
      "descriptionRaw": "Samehada protects Kisame with his spikes. For 1 turn, the first enemy to use a new non-mental skill on Kisame will be countered. If sucessfully, Kisame deal 15 piercing damage and remove 1 random chakra from that enemy. This skill is invisible.",
      "descriptionBRRaw": "Samehada protege Kisame com seus espinhos. Por 1 turno, o primeiro inimigo a usar uma nova habilidade não-Mental em Kisame será contra-atacado. Se for bem-sucedido, Kisame irá causar 15 de dano perfurante e remove 1 random chakra desse inimigo. Esta habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Samehada protects Kisame with his spikes. For 1 turn, the first enemy to use a new non-mental skill on Kisame will be countered. If sucessfully, Kisame deal 15 piercing damage and remove 1 random chakra from that enemy. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Samehada protege Kisame com seus espinhos. Por 1 turno, o primeiro inimigo a usar uma nova habilidade não-Mental em Kisame será contra-atacado. Se for bem-sucedido, Kisame irá causar 15 de dano perfurante e remove 1 random chakra desse inimigo. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Water Isolation",
      "file": "hoshigaki_kisame_(s)_skill_4_(water_isolation).png",
      "description": "This skill makes Hoshigaki Kisame (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hoshigaki Kisame (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hoshigaki Kisame (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hoshigaki Kisame (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hoshigaki Kisame (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hoshigaki Kisame (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
