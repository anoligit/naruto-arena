// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Fukasaku and Shima (S)",
  "description": "Fukasaku and Shima (S) are known as the two great sage toads of Mount Myoboku. They taught both Jiraiya and Naruto sage jutsu and are each skilled in elemental techniques as well as genjutsu techniques.",
  "descriptionBR": "Fukasaku e Shima (S) são conhecidos como os dois grandes sapos sábios do Monte Myoboku. Eles ensinaram o jutsu sábio tanto para Jiraiya quanto para Naruto e são habilidosos com técnicas elementares e também com técnicas de genjutsu.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "fukasaku_and_shima_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Frog Song",
      "file": "fukasaku_and_shima_(s)_skill_1_(frog_song).jpg",
      "description": "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead.",
      "descriptionBR": "Fukasaku e Shima (S) usam seu genjutsu característico para executar o Frog Song. Eles miram em 1 inimigo e causam 15 de dano affliction por 2 turnos. Durante Toad Confrontation Singing, esta habilidade custará 1 chakra aleatório em vez disso.",
      "descriptionRaw": "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead.",
      "descriptionBRRaw": "Fukasaku e Shima (S) usam seu genjutsu característico para executar o Frog Song. Eles miram em 1 inimigo e causam 15 de dano affliction por 2 turnos. Durante Toad Confrontation Singing, esta habilidade custará 1 chakra aleatório em vez disso.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead. Chakra cost: 1 Gen. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fukasaku e Shima (S) usam seu genjutsu característico para executar o Frog Song. Eles miram em 1 inimigo e causam 15 de dano affliction por 2 turnos. Durante Toad Confrontation Singing, esta habilidade custará 1 chakra aleatório em vez disso. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Sand Dust",
      "file": "fukasaku_and_shima_(s)_skill_2_(sand_dust).jpg",
      "description": "This skill makes Fukasaku and Shima's team invulnerable to non-mental skills for 1 turn.",
      "descriptionBR": "Essa habilidade faz o time de Fukasaku and Shima invulnerável a habilidades non-mental por 1 turno.",
      "descriptionRaw": "This skill makes Fukasaku and Shima's team invulnerable to non-mental skills for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz o time de Fukasaku and Shima invulnerável a habilidades non-mental por 1 turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "This skill makes Fukasaku and Shima's team invulnerable to non-mental skills for 1 turn. Chakra cost: 1 Nin. Catalog classes: Physical, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz o time de Fukasaku and Shima invulnerável a habilidades non-mental por 1 turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Toad Confrontation Singing",
      "file": "fukasaku_and_shima_(s)_skill_3_(toad_confrontation_singing).jpg",
      "description": "Fukasaku and Shima targets all enemies, dealing 15 damage to them for 2 turns. For 1 turn, if they use a new harmful non-mental skill, they will have their harmful non-mental skills stunned for 1 turn.",
      "descriptionBR": "Fukasaku and Shima mira em todos os inimigos, causando 15 de dano a eles por 2 turnos. Por 1 turn, se eles usarem uma nova habilidade ofensiva não-Mental, eles terão suas habilidades ofensivas não-Mental atordoadas por 1 turno.",
      "descriptionRaw": "Fukasaku and Shima targets all enemies, dealing 15 damage to them for 2 turns. For 1 turn, if they use a new harmful non-mental skill, they will have their harmful non-mental skills stunned for 1 turn.",
      "descriptionBRRaw": "Fukasaku and Shima mira em todos os inimigos, causando 15 de dano a eles por 2 turnos. Por 1 turn, se eles usarem uma nova habilidade ofensiva não-Mental, eles terão suas habilidades ofensivas não-Mental atordoadas por 1 turno.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Action",
        "Ranged",
        "__$"
      ],
      "cooldown": 2,
      "ruleDescription": "Fukasaku and Shima targets all enemies, dealing 15 damage to them for 2 turns. For 1 turn, if they use a new harmful non-mental skill, they will have their harmful non-mental skills stunned for 1 turn. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Action, Ranged, __$. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fukasaku and Shima mira em todos os inimigos, causando 15 de dano a eles por 2 turnos. Por 1 turn, se eles usarem uma nova habilidade ofensiva não-Mental, eles terão suas habilidades ofensivas não-Mental atordoadas por 1 turno. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Action, Ranged, __$. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Frogs Tag Team",
      "file": "fukasaku_and_shima_(s)_skill_4_(frogs_tag_team).jpg",
      "description": "This skill makes Fukasaku and Shima (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Fukasaku and Shima (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Fukasaku and Shima (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Fukasaku and Shima (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Fukasaku and Shima (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Fukasaku and Shima (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
