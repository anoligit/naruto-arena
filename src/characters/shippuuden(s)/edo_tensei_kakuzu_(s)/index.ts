// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Kakuzu (S)",
  "description": "Resurrected through the Edo Tensei, Kakuzu returns to the battlefield with his forbidden technique. Commanding multiple elemental hearts, he overwhelms his enemies with powerful ninjutsu while exploiting their life force to sustain his relentless assault.",
  "descriptionBR": "Ressuscitado por meio do Edo Tensei, Kakuzu retorna ao campo de batalha com sua técnica proibida. Controlando múltiplos corações elementais, ele domina seus inimigos com poderosos ninjutsus, enquanto utiliza a força vital de seus adversários para sustentar sua ofensiva implacável.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_kakuzu_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Jiongu: Deadly Embrace",
      "file": "edo_tensei_kakuzu_(s)_skill_1_(jiongu_deadly_embrace).png",
      "description": "Kakuzu extends his black threads to wrap around an enemy's neck, dealing 25 damage to them and stunning their physical and mental skills for 1 turn.",
      "descriptionBR": "Kakuzu estende suas linhas negras para enforcar um inimigo, causando 25 de dano a ele e atordoando as habilidades physical e mental dele por 1 turno.",
      "descriptionRaw": "Kakuzu extends his black threads to wrap around an enemy's neck, dealing <Damage>25 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and mental skills <Classes>for 1 turn.",
      "descriptionBRRaw": "Kakuzu estende suas linhas negras para enforcar um inimigo, causando <Damage>25 de dano<Damage> a ele e <Effects>atordoando<Effects> as <Classes>habilidades physical e mental<Classes> dele por 1 turno.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kakuzu extends his black threads to wrap around an enemy's neck, dealing 25 damage to them and stunning their physical and mental skills for 1 turn. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kakuzu estende suas linhas negras para enforcar um inimigo, causando 25 de dano a ele e atordoando as habilidades physical e mental dele por 1 turno. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Heart Manifestation Assault",
      "file": "edo_tensei_kakuzu_(s)_skill_2_(heart_manifestation_assault).png",
      "description": "Using his Jiongu offensively, Kakuzu sacrifices one of his Jiongu hearts, dealing 60 damage to one enemy and stunning their physical and chakra skills for 1 turn. This skill can only be used as long as Kakuzu has any Jiongu Heart left.",
      "descriptionBR": "Usando seu Jiongu ofensivamente, Kakuzu sacrifica um de seus corações Jiongu, causando 60 de dano a um inimigo e atordoando as habilidades physical e chakra dele por 1 turno. Essa habilidade só pode ser usada enquanto Kakuzu tiver algum Coração Jiongu.",
      "descriptionRaw": "Using his Jiongu offensively, Kakuzu <Effects>sacrifices<Effects> one of his Jiongu hearts, dealing <Damage>60 damage<Damage> to one enemy and <Effects>stunning<Effects> their <Classes>physical and chakra skills<Classes> for 1 turn. This skill can only be used as long as Kakuzu has any Jiongu Heart left.",
      "descriptionBRRaw": "Usando seu Jiongu ofensivamente, Kakuzu <Effects>sacrifica<Effects> um de seus corações Jiongu, causando <Damage>60 de dano<Damage> a um inimigo e <Effects>atordoando<Effects> as habilidades <Classes>physical e chakra dele<Classes> por 1 turno. Essa habilidade só pode ser usada enquanto Kakuzu tiver algum Coração Jiongu.",
      "energy": [
        "Nin",
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Using his Jiongu offensively, Kakuzu sacrifices one of his Jiongu hearts, dealing 60 damage to one enemy and stunning their physical and chakra skills for 1 turn. This skill can only be used as long as Kakuzu has any Jiongu Heart left. Chakra cost: 1 Nin, 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando seu Jiongu ofensivamente, Kakuzu sacrifica um de seus corações Jiongu, causando 60 de dano a um inimigo e atordoando as habilidades physical e chakra dele por 1 turno. Essa habilidade só pode ser usada enquanto Kakuzu tiver algum Coração Jiongu. Custo de chakra: 1 ninjutsu, 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Heart Extraction",
      "file": "edo_tensei_kakuzu_(s)_skill_3_(heart_extraction).png",
      "description": "Kakuzu tears into an enemy to replenish his collection of hearts, stealing 15 health from that enemy and also any damage reduction effect they currently have on them.",
      "descriptionBR": "Kakuzu usa um inimigo para recuperar sua coleção de corações, roubando 15 de vida de um inimigo e também qualquer efeito de redução de dano que ele tiver nele.",
      "descriptionRaw": "Kakuzu tears into an enemy to replenish his collection of hearts, stealing <Damage>15 health<Damage> from that enemy and also any <Defense>damage reduction effect<Defense> they currently have on them.",
      "descriptionBRRaw": "Kakuzu usa um inimigo para recuperar sua coleção de corações, roubando <Damage>15 de vida<Damage> de um inimigo e também qualquer <Defense>efeito de redução de dano<Defense> que ele tiver nele.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kakuzu tears into an enemy to replenish his collection of hearts, stealing 15 health from that enemy and also any damage reduction effect they currently have on them. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kakuzu usa um inimigo para recuperar sua coleção de corações, roubando 15 de vida de um inimigo e também qualquer efeito de redução de dano que ele tiver nele. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Jiongu: Thread Evasion",
      "file": "edo_tensei_kakuzu_(s)_skill_4_(jiongu_thread_evasion).png",
      "description": "This skill makes Kakuzu invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Kakuzu invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kakuzu <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Kakuzu <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kakuzu invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Kakuzu invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Passive: Jiongu Heart Collection",
      "file": "edo_tensei_kakuzu_(s)_skill_5_(passive_jiongu_heart_collection).png",
      "description": "Through his Jiongu, Kakuzu starts the game with 4 additional hearts. Everytime his health reaches 0, his health will be set to 15. This can only happen 4 times in the game, one for each Jiongu Heart Kakuzu has. This skill's stacks refers to the amount of hearts lost.",
      "descriptionBR": "Através de seu Jiongu, Kakuzu começa o jogo com 4 corações adicionais. Sempre que sua vida chega a 0, sua vida é setada em 15. Isso só pode acontecer 4 vezes na partida, uma para cada Coração Jiongu que Kakuzu tem. Os stacks dessa habilidade se referem a quantidade de corações perdidos.",
      "descriptionRaw": "Through his Jiongu, Kakuzu starts the game with 4 additional hearts. Everytime his health reaches 0, <Defense>his health will be set to 15<Defense>. This can only happen 4 times in the game, one for each Jiongu Heart Kakuzu has. This skill's stacks refers to the amount of hearts lost.",
      "descriptionBRRaw": "Através de seu Jiongu, Kakuzu começa o jogo com 4 corações adicionais. Sempre que sua vida chega a 0, <Defense>sua vida é setada em 15<Defense>. Isso só pode acontecer 4 vezes na partida, uma para cada Coração Jiongu que Kakuzu tem. Os stacks dessa habilidade se referem a quantidade de corações perdidos.",
      "energy": [],
      "classes": [
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Through his Jiongu, Kakuzu starts the game with 4 additional hearts. Everytime his health reaches 0, his health will be set to 15. This can only happen 4 times in the game, one for each Jiongu Heart Kakuzu has. This skill's stacks refers to the amount of hearts lost. Chakra cost: no chakra cost listed. Catalog classes: Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Através de seu Jiongu, Kakuzu começa o jogo com 4 corações adicionais. Sempre que sua vida chega a 0, sua vida é setada em 15. Isso só pode acontecer 4 vezes na partida, uma para cada Coração Jiongu que Kakuzu tem. Os stacks dessa habilidade se referem a quantidade de corações perdidos. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
