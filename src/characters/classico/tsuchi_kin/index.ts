import image0 from './tsuchi_kin_char_1.jpg'
import image1 from './tsuchi_kin_skill_1_(illusion_bell_needles).jpg'
import image2 from './tsuchi_kin_skill_2_(needle_and_bell_trap).jpg'
import image3 from './tsuchi_kin_skill_3_(unnerving_bells).jpg'
import image4 from './tsuchi_kin_skill_4_(sharp_analysis).jpeg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Illusion Bell Needles
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kin-1",
    "name": "Illusion Bell Needles",
    "description": "Um inimigo recebe 15 de dano. Se usado um turno após 'Needle and Bell Trap', esse inimigo irá receber 15 de dano adicional. Se usado um turno após 'Unnerving Bells', esse inimigo irá receber 25 de dano adicional.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kin-needles-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kin-needles-ready",
      "name": "Illusion Bell Needles",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Needle and Bell Trap
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kin-2",
    "name": "Needle and Bell Trap",
    "description": "Um inimigo será atordoado por 1 turno. Se usado um turno após 'Illusion Bell Needles', esse inimigo ficará incapaz de reduzir dano ou se tornar invulnerável por 2 turns.",
    "image": image2,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kin-stun"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kin-prevent",
        "whenUserHasStatus": "classico-kin-needles-ready"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kin-trap-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kin-stun",
      "name": "Needle and Bell Trap",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun"
        }
      ]
    },
    {
      "id": "classico-kin-prevent",
      "name": "Needle and Bell Trap",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "prevent-invulnerability"
        }
      ]
    },
    {
      "id": "classico-kin-trap-ready",
      "name": "Needle and Bell Trap",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-kin-1",
          "amount": 15
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Unnerving Bells
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kin-3",
    "name": "Unnerving Bells",
    "description": "Um inimigo perde 1 chakra aleatório. Se usado um turno após 'Illusion Bell Needles', esse inimigo irá receber 5 de dano não-affliction adicional de habilidades Melee permanentemente.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "remove-energy",
        "amount": 1
      },
      {
        "type": "apply-status",
        "statusId": "classico-kin-melee-bonus",
        "whenUserHasStatus": "classico-kin-needles-ready"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kin-bell-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kin-melee-bonus",
      "name": "Unnerving Bells",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 5,
          "excludesAffliction": true,
          "classes": [
            "melee"
          ]
        }
      ]
    },
    {
      "id": "classico-kin-bell-ready",
      "name": "Unnerving Bells",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-kin-1",
          "amount": 25
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Sharp Analysis
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kin-4",
    "name": "Sharp Analysis",
    "description": "Essa habilidade torna Tsuchi Kin invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kin-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kin-hide",
      "name": "Sharp Analysis",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "invulnerable"
        }
      ]
    }
  ]
}

export default defineCharacter({
  "id": "classico-kin",
  "name": "Tsuchi Kin",
  "image": image0,
  "description": "Uma das três genins do Som, Kin é uma ninja confiante que gosta de brincar com seus inimigos antes de finalizá-los. Usando um conjunto de agulhas e sinos, Kin pode criar uma variedade de efeitos para atacar seus inimigos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 150,
  abilities: [ability1, ability2, ability3, ability4],
})
