// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Deidara (S)",
  "description": "An akatsuki former rock ninja partner and apprentice of Sasori. Deidara is quite eccentric when it comes to art. His skill with clay allows him to create explosive sculptures, whether large, medium or small.",
  "descriptionBR": "Um ex-ninja da Pedra da Akatsuki, parceiro e aprendiz de Sasori. Deidara é bastante excêntrico quando se trata de arte. Sua habilidade com argila permite criar esculturas explosivas, sejam grandes, médias ou pequenas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "deidara_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Clay Molds",
      "file": "deidara_(s)_skill_1_(clay_molds).jpg",
      "description": "For 3 turns, Deidara gains 5 permanent destructible defense and activates \"C2\" first turn. Second turn he activates \"C3\". Third turn he activates \"C4\". Afterwards, this skill is restarted and Deidara gains 1 random chakra.",
      "descriptionBR": "Por 3 turnos, Deidara ganha 5 de defesa destrutível permanente e ativa 'C2' no primeiro turno. No segundo turno, ele ativa 'C3'. No terceiro turno, ele ativa 'C4'. Depois disso, esta habilidade é reiniciada e Deidara ganha 1 chakra aleatório.",
      "descriptionRaw": "For 3 turns, Deidara gains 5 permanent destructible defense and activates \"C2\" first turn. Second turn he activates \"C3\". Third turn he activates \"C4\". Afterwards, this skill is restarted and Deidara gains 1 random chakra.",
      "descriptionBRRaw": "Por 3 turnos, Deidara ganha 5 de defesa destrutível permanente e ativa 'C2' no primeiro turno. No segundo turno, ele ativa 'C3'. No terceiro turno, ele ativa 'C4'. Depois disso, esta habilidade é reiniciada e Deidara ganha 1 chakra aleatório.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Helpful"
      ],
      "cooldown": 0,
      "ruleDescription": "For 3 turns, Deidara gains 5 permanent destructible defense and activates \"C2\" first turn. Second turn he activates \"C3\". Third turn he activates \"C4\". Afterwards, this skill is restarted and Deidara gains 1 random chakra. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Helpful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, Deidara ganha 5 de defesa destrutível permanente e ativa 'C2' no primeiro turno. No segundo turno, ele ativa 'C3'. No terceiro turno, ele ativa 'C4'. Depois disso, esta habilidade é reiniciada e Deidara ganha 1 chakra aleatório. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Helpful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "C3 - Giant Doll",
      "file": "deidara_(s)_skill_2_(c3_-_giant_doll).jpg",
      "description": "Deidara deals 15 piercing damage to all enemies. During \"C2\", this skill deals 5 additional damage. During \"C3\", this skill deals 10 additional damage and stuns one random enemy's harmful skills for 1 turn. During \"C4\", this skill stuns all enemies' harmful skills for 1 turn. Requires 'Clay Mold'.",
      "descriptionBR": "Deidara causa 15 de dano perfurante a todos os inimigos. Durante 'C2', esta habilidade causa 5 de dano adicional. Durante 'C3', esta habilidade causa 10 de dano adicional e atordoa as habilidades ofensivas de um inimigo aleatório. Durante 'C4', esta habilidade atordoa as habilidades ofensivas de todos os inimigos por 1 turno. Requer 'Clay Mold'.",
      "descriptionRaw": "Deidara deals 15 piercing damage to all enemies. During \"C2\", this skill deals 5 additional damage. During \"C3\", this skill deals 10 additional damage and stuns one random enemy's harmful skills for 1 turn. During \"C4\", this skill stuns all enemies' harmful skills for 1 turn. Requires 'Clay Mold'.",
      "descriptionBRRaw": "Deidara causa 15 de dano perfurante a todos os inimigos. Durante 'C2', esta habilidade causa 5 de dano adicional. Durante 'C3', esta habilidade causa 10 de dano adicional e atordoa as habilidades ofensivas de um inimigo aleatório. Durante 'C4', esta habilidade atordoa as habilidades ofensivas de todos os inimigos por 1 turno. Requer 'Clay Mold'.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "Deidara deals 15 piercing damage to all enemies. During \"C2\", this skill deals 5 additional damage. During \"C3\", this skill deals 10 additional damage and stuns one random enemy's harmful skills for 1 turn. During \"C4\", this skill stuns all enemies' harmful skills for 1 turn. Requires 'Clay Mold'. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara causa 15 de dano perfurante a todos os inimigos. Durante 'C2', esta habilidade causa 5 de dano adicional. Durante 'C3', esta habilidade causa 10 de dano adicional e atordoa as habilidades ofensivas de um inimigo aleatório. Durante 'C4', esta habilidade atordoa as habilidades ofensivas de todos os inimigos por 1 turno. Requer 'Clay Mold'. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "C2 - Clay Centipede",
      "file": "deidara_(s)_skill_3_(c2_-_clay_centipede).png",
      "description": "Deidara deals 10 damage to one enemy for 2 turns. The target's draining chakra effects will not be applied. If used during \"C2\", this skill lasts 3 turns. If used during \"C3\", Deidara becomes invulnerable to non-mental skills for 1 turn. During \"C4\", this skill lasts 1 turn and deals 30 piercing damage. Requires 'Clay Mold'.",
      "descriptionBR": "Deidara causa 10 de dano a um inimigo por 2 turnos. Os efeitos de drenagem de chakra do alvo não serão aplicados. Se usado durante 'C2', esta habilidade dura 3 turnos. Se usado durante 'C3', Deidara se torna invulnerável a habilidades não mentais por 1 turno. Durante 'C4', esta habilidade dura 1 turno e causa 30 de dano perfurante. Requer 'Clay Mold'.",
      "descriptionRaw": "Deidara deals 10 damage to one enemy for 2 turns. The target's draining chakra effects will not be applied. If used during \"C2\", this skill lasts 3 turns. If used during \"C3\", Deidara becomes invulnerable to non-mental skills for 1 turn. During \"C4\", this skill lasts 1 turn and deals 30 piercing damage. Requires 'Clay Mold'.",
      "descriptionBRRaw": "Deidara causa 10 de dano a um inimigo por 2 turnos. Os efeitos de drenagem de chakra do alvo não serão aplicados. Se usado durante 'C2', esta habilidade dura 3 turnos. Se usado durante 'C3', Deidara se torna invulnerável a habilidades não mentais por 1 turno. Durante 'C4', esta habilidade dura 1 turno e causa 30 de dano perfurante. Requer 'Clay Mold'.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Deidara deals 10 damage to one enemy for 2 turns. The target's draining chakra effects will not be applied. If used during \"C2\", this skill lasts 3 turns. If used during \"C3\", Deidara becomes invulnerable to non-mental skills for 1 turn. During \"C4\", this skill lasts 1 turn and deals 30 piercing damage. Requires 'Clay Mold'. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara causa 10 de dano a um inimigo por 2 turnos. Os efeitos de drenagem de chakra do alvo não serão aplicados. Se usado durante 'C2', esta habilidade dura 3 turnos. Se usado durante 'C3', Deidara se torna invulnerável a habilidades não mentais por 1 turno. Durante 'C4', esta habilidade dura 1 turno e causa 30 de dano perfurante. Requer 'Clay Mold'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Aerial Retreat",
      "file": "deidara_(s)_skill_4_(aerial_retreat).jpg",
      "description": "This skill makes Deidara (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Deidara (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Deidara (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Deidara (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Deidara (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Deidara (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
