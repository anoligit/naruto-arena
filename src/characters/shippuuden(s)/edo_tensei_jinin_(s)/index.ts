// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Jinin (S)",
  "description": "Edo Tensei Jinin (S) is a former member of the seven swordsman of the mist. Using his sword Kabutowari he will demonstrate the power of the previous generation on the battttle.",
  "descriptionBR": "Edo Tensei Jinin (S) é um antigo membro dos Sete Espadachins da Névoa. Usando sua espada Kabutowari, ele demonstrará o poder da geração anterior no campo de batalha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_jinin_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Silent Killing Axe",
      "file": "edo_tensei_jinin_(s)_skill_1_(silent_killing_axe).jpeg",
      "description": "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will be unable to reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn.",
      "descriptionBR": "ET Jinin causa 20 de dano perfurante a um inimigo e o marca por 2 turnos. Enquanto marcado, esse inimigo não poderá reduzir dano ou se tornar invulnerável. Se o alvo estiver marcado por 'Silent Killing Hammer', sua duração será estendida em 1 turno.",
      "descriptionRaw": "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will be unable to reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn.",
      "descriptionBRRaw": "ET Jinin causa 20 de dano perfurante a um inimigo e o marca por 2 turnos. Enquanto marcado, esse inimigo não poderá reduzir dano ou se tornar invulnerável. Se o alvo estiver marcado por 'Silent Killing Hammer', sua duração será estendida em 1 turno.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will be unable to reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Jinin causa 20 de dano perfurante a um inimigo e o marca por 2 turnos. Enquanto marcado, esse inimigo não poderá reduzir dano ou se tornar invulnerável. Se o alvo estiver marcado por 'Silent Killing Hammer', sua duração será estendida em 1 turno. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Silent Killing Hammer",
      "file": "edo_tensei_jinin_(s)_skill_2_(silent_killing_hammer).jpeg",
      "description": "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional non-affliction damage. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn.",
      "descriptionBR": "ET Jinin causa 20 de dano a um inimigo, atordoa suas habilidades não mentais e o marca por 1 turno. Enquanto marcado, ele receberá 5 de dano não-affliction adicional. Se o alvo estiver marcado por 'Silent Killing Axe', sua duração será estendida em 1 turno.",
      "descriptionRaw": "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional non-affliction damage. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn.",
      "descriptionBRRaw": "ET Jinin causa 20 de dano a um inimigo, atordoa suas habilidades não mentais e o marca por 1 turno. Enquanto marcado, ele receberá 5 de dano não-affliction adicional. Se o alvo estiver marcado por 'Silent Killing Axe', sua duração será estendida em 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional non-affliction damage. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Jinin causa 20 de dano a um inimigo, atordoa suas habilidades não mentais e o marca por 1 turno. Enquanto marcado, ele receberá 5 de dano não-affliction adicional. Se o alvo estiver marcado por 'Silent Killing Axe', sua duração será estendida em 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Axe & Hammer Smash",
      "file": "edo_tensei_jinin_(s)_skill_3_(axe_&_hammer_smash).jpeg",
      "description": "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn.",
      "descriptionBR": "ET Jinin causa 30 de dano a um inimigo. Antes de causar o dano, se o alvo estiver marcado por 'Silent Killing Axe', sua defesa destrutível será destruída. Se estiver marcado por 'Silent Killing Hammer', qualquer redução de dano será convertida em dano adicional não affliction. Se estiver marcado por ambos, esta habilidade causará 10 de dano extra e atordoará o inimigo por 1 turno.",
      "descriptionRaw": "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn.",
      "descriptionBRRaw": "ET Jinin causa 30 de dano a um inimigo. Antes de causar o dano, se o alvo estiver marcado por 'Silent Killing Axe', sua defesa destrutível será destruída. Se estiver marcado por 'Silent Killing Hammer', qualquer redução de dano será convertida em dano adicional não affliction. Se estiver marcado por ambos, esta habilidade causará 10 de dano extra e atordoará o inimigo por 1 turno.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Jinin causa 30 de dano a um inimigo. Antes de causar o dano, se o alvo estiver marcado por 'Silent Killing Axe', sua defesa destrutível será destruída. Se estiver marcado por 'Silent Killing Hammer', qualquer redução de dano será convertida em dano adicional não affliction. Se estiver marcado por ambos, esta habilidade causará 10 de dano extra e atordoará o inimigo por 1 turno. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Skilled Evasion",
      "file": "edo_tensei_jinin_(s)_skill_4_(skilled_evasion).jpeg",
      "description": "This skill makes Edo Tensei Jinin (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Jinin (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Jinin (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Jinin (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Jinin (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Jinin (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
