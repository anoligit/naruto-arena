// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Cursed Seal Juugo (S)",
  "description": "Cursed Seal Juugo (S) is fully transformed and no longer recognizable. Becoming a psychotic lunatic Juugo is able to maintain absurd amounts of chakra making him nearly impossible to defeat.",
  "descriptionBR": "Cursed Seal Juugo (S) está totalmente transformado e irreconhecível. Tornando-se um lunático psicótico, Juugo é capaz de manter quantidades absurdas de chakra, tornando-o quase impossível de ser derrotado.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "cursed_seal_juugo_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Psychotic Break",
      "file": "cursed_seal_juugo_(s)_skill_1_(psychotic_break).jpg",
      "description": "Juugo loses his mind and assaults one enemy, stealing 10 health from them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn.",
      "descriptionBR": "Juugo perde a razão e ataca um inimigo, roubando 10 de vida dele por 3 turnos. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, as habilidades de Juugo serão melhoradas e passarão a custar chakra aleatório por 1 turno.",
      "descriptionRaw": "Juugo loses his mind and assaults one enemy, stealing 10 health from them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn.",
      "descriptionBRRaw": "Juugo perde a razão e ataca um inimigo, roubando 10 de vida dele por 3 turnos. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, as habilidades de Juugo serão melhoradas e passarão a custar chakra aleatório por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Melee"
      ],
      "cooldown": 3,
      "ruleDescription": "Juugo loses his mind and assaults one enemy, stealing 10 health from them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn. Chakra cost: 1 Random. Catalog classes: Affliction, Action, Melee. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Juugo perde a razão e ataca um inimigo, roubando 10 de vida dele por 3 turnos. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, as habilidades de Juugo serão melhoradas e passarão a custar chakra aleatório por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Action, Melee. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Chakra Cannons",
      "file": "cursed_seal_juugo_(s)_skill_2_(chakra_cannons).jpg",
      "description": "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra.",
      "descriptionBR": "Juugo usa seus apêndices semelhantes a propulsores para carregar chakra e disparar uma poderosa rajada de chakra, causando 45 de dano a um inimigo. Enquanto estiver melhorada, esta habilidade custará 2 chakras aleatórios.",
      "descriptionRaw": "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra.",
      "descriptionBRRaw": "Juugo usa seus apêndices semelhantes a propulsores para carregar chakra e disparar uma poderosa rajada de chakra, causando 45 de dano a um inimigo. Enquanto estiver melhorada, esta habilidade custará 2 chakras aleatórios.",
      "energy": [
        "Nin",
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra. Chakra cost: 2 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Juugo usa seus apêndices semelhantes a propulsores para carregar chakra e disparar uma poderosa rajada de chakra, causando 45 de dano a um inimigo. Enquanto estiver melhorada, esta habilidade custará 2 chakras aleatórios. Custo de chakra: 2 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Body Absorption",
      "file": "cursed_seal_juugo_(s)_skill_3_(body_absorption).jpg",
      "description": "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra.",
      "descriptionBR": "Juugo absorve o corpo de um inimigo, roubando 15 de vida e fazendo com que esse inimigo não possa reduzir dano ou se tornar invulnerável por 2 turnos. Por 1 turno, Juugo ignorará todos os efeitos ofensivos, exceto dano. Enquanto estiver melhorada, esta habilidade custará 1 chakra aleatório.",
      "descriptionRaw": "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra.",
      "descriptionBRRaw": "Juugo absorve o corpo de um inimigo, roubando 15 de vida e fazendo com que esse inimigo não possa reduzir dano ou se tornar invulnerável por 2 turnos. Por 1 turno, Juugo ignorará todos os efeitos ofensivos, exceto dano. Enquanto estiver melhorada, esta habilidade custará 1 chakra aleatório.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Juugo absorve o corpo de um inimigo, roubando 15 de vida e fazendo com que esse inimigo não possa reduzir dano ou se tornar invulnerável por 2 turnos. Por 1 turno, Juugo ignorará todos os efeitos ofensivos, exceto dano. Enquanto estiver melhorada, esta habilidade custará 1 chakra aleatório. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Juugo Block",
      "file": "cursed_seal_juugo_(s)_skill_4_(juugo_block).jpg",
      "description": "This skill makes Cursed Seal Juugo (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Cursed Seal Juugo (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Cursed Seal Juugo (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Cursed Seal Juugo (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Cursed Seal Juugo (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Cursed Seal Juugo (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
