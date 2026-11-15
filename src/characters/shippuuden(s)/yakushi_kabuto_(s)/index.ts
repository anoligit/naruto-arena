// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yakushi Kabuto (S)",
  "description": "After two years, Kabuto remains Orochimaru's subordinate and Sasori's spy. His medical skills continue to improve, in addition to being able to use his current chakra to attack, Kabuto can use the chakra to heal himself instantly.",
  "descriptionBR": "Após dois anos, Kabuto continua sendo subordinado de Orochimaru e espião de Sasori. Suas habilidades médicas continuam a melhorar e, além de usar chakra para atacar, Kabuto pode usá-lo para se curar instantaneamente.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yakushi_kabuto_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Charged Mystical Palm",
      "file": "yakushi_kabuto_(s)_skill_1_(charged_mystical_palm).jpg",
      "description": "If used on an enemy: Kabuto heals 5 health, deals 20 piercing damage to one enemy and stuns their stunning skills for 1 turn.  If used on himself or an ally: They will heal 20 health, remove all affliction skills from themselves, and ignore stun effects for 1 turn.",
      "descriptionBR": "Se usada em um inimigo: Kabuto cura 5 de vida, causa 20 de dano perfurante a esse inimigo e atordoa as habilidedes com efeitos atordoantes dele.  Se usada em um aliado ou nele mesmo: Cura 20 de vida, remove todas as habilidades Affliction, e faz ignorar efeitos atordoantes por 1 turno.",
      "descriptionRaw": "If used on an enemy: Kabuto heals 5 health, deals 20 piercing damage to one enemy and stuns their stunning skills for 1 turn. <br> If used on himself or an ally: They will heal 20 health, remove all affliction skills from themselves, and ignore stun effects for 1 turn.",
      "descriptionBRRaw": "Se usada em um inimigo: Kabuto cura 5 de vida, causa 20 de dano perfurante a esse inimigo e atordoa as habilidedes com efeitos atordoantes dele. <br> Se usada em um aliado ou nele mesmo: Cura 20 de vida, remove todas as habilidades Affliction, e faz ignorar efeitos atordoantes por 1 turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "If used on an enemy: Kabuto heals 5 health, deals 20 piercing damage to one enemy and stuns their stunning skills for 1 turn.  If used on himself or an ally: They will heal 20 health, remove all affliction skills from themselves, and ignore stun effects for 1 turn. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Se usada em um inimigo: Kabuto cura 5 de vida, causa 20 de dano perfurante a esse inimigo e atordoa as habilidedes com efeitos atordoantes dele.  Se usada em um aliado ou nele mesmo: Cura 20 de vida, remove todas as habilidades Affliction, e faz ignorar efeitos atordoantes por 1 turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Dead Soul Jutsu",
      "file": "yakushi_kabuto_(s)_skill_2_(dead_soul_jutsu).jpg",
      "description": "Kabuto deals 25 damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently, 'Charged Mystical Palm' will increase its damage and heal by 10. This skill cannot be countered.",
      "descriptionBR": "Kabuto causa 25 de dano a um inimigo. Por 2 turnos, todos os outros inimigos terão suas habilidades de cura atordoadas. Permanentemente, o dano e cura de 'Charged Mystical Palm' serão aumentados em 10. Esta habilidade não pode ser counterada.",
      "descriptionRaw": "Kabuto deals 25 damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently, 'Charged Mystical Palm' will increase its damage and heal by 10. This skill cannot be countered.",
      "descriptionBRRaw": "Kabuto causa 25 de dano a um inimigo. Por 2 turnos, todos os outros inimigos terão suas habilidades de cura atordoadas. Permanentemente, o dano e cura de 'Charged Mystical Palm' serão aumentados em 10. Esta habilidade não pode ser counterada.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Kabuto deals 25 damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently, 'Charged Mystical Palm' will increase its damage and heal by 10. This skill cannot be countered. Chakra cost: 2 Random. Catalog classes: Chakra, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto causa 25 de dano a um inimigo. Por 2 turnos, todos os outros inimigos terão suas habilidades de cura atordoadas. Permanentemente, o dano e cura de 'Charged Mystical Palm' serão aumentados em 10. Esta habilidade não pode ser counterada. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Orochimaru Cells Takeover",
      "file": "yakushi_kabuto_(s)_skill_3_(orochimaru_cells_takeover).jpg",
      "description": "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be set to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered.",
      "descriptionBR": "Kabuto se prepara por 2 turnos. Durante esse tempo, se sua vida chegar a 0, ela será definida como 35 e ele ganhará 2 chakras aleatórios, encerrando a habilidade. Esta habilidade é invisível até ser ativada.",
      "descriptionRaw": "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be set to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered.",
      "descriptionBRRaw": "Kabuto se prepara por 2 turnos. Durante esse tempo, se sua vida chegar a 0, ela será definida como 35 e ele ganhará 2 chakras aleatórios, encerrando a habilidade. Esta habilidade é invisível até ser ativada.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be set to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kabuto se prepara por 2 turnos. Durante esse tempo, se sua vida chegar a 0, ela será definida como 35 e ele ganhará 2 chakras aleatórios, encerrando a habilidade. Esta habilidade é invisível até ser ativada. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kabuto Dodge",
      "file": "yakushi_kabuto_(s)_skill_4_(kabuto_dodge).jpg",
      "description": "This skill makes Yakushi Kabuto (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Yakushi Kabuto (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Yakushi Kabuto (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Yakushi Kabuto (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Yakushi Kabuto (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Yakushi Kabuto (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
