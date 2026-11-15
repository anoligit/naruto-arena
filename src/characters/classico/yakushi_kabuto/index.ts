import image0 from './yakushi_kabuto_char_1.jpg'
import image1 from './yakushi_kabuto_skill_1_(mystical_palm_technique).jpg'
import image2 from './yakushi_kabuto_skill_2_(temple_of_nirvana).jpg'
import image3 from './yakushi_kabuto_skill_3_(secret_healing_wound_destruction).jpg'
import image4 from './yakushi_kabuto_skill_4_(dead_soul_technique).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Mystical Palm Technique
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kabuto-1",
    "name": "Mystical Palm Technique",
    "description": "Kabuto corta um inimigo através de sua carne como um bisturi, causando 20 de dano perfurante a ele. Por 1 turno, as habilidades ofensivas desse inimigo irão custar 1 chakra aleatório adicional, e ele irá receber 10 de dano adicional de habilidades melee. Esse efeito de dano adicional só pode ser ativado uma vez por turno.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kabuto-palm"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kabuto-palm",
      "name": "Mystical Palm Technique",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "skill-cost-increase",
          "random": 1,
          "scope": "harmful"
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 10,
          "classes": [
            "melee"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Temple of Nirvana
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kabuto-2",
    "name": "Temple of Nirvana",
    "description": "Kabuto cria um genjutsu em grande escala. Por 1 turno, qualquer inimigo que usar uma nova habilidade terá suas habilidades Physical e Chakra atordoadas e receberá 10 de dano adicional de habilidades Melee por 1 turno. Essa habilidade é invisível.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kabuto-trap"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-kabuto-trap",
      "name": "Temple of Nirvana",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-kabuto-stun"
            }
          ]
        }
      ],
      "invisible": true
    },
    {
      "id": "classico-kabuto-stun",
      "name": "Temple of Nirvana",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "chakra"
          ]
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 10,
          "classes": [
            "melee"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Secret Healing Wound Destruction
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kabuto-3",
    "name": "Secret Healing Wound Destruction",
    "description": "Kabuto remove todas as habilidades Affliction inimigas de si mesmo, ganha 20 pontos de redução de dano por 1 turno e cura 35 de vida. Essa habilidade irá curar 5 de vida a menos a cada vez que for usada.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "remove-harmful-statuses",
        "classes": [
          "affliction"
        ]
      },
      {
        "type": "apply-status",
        "statusId": "classico-kabuto-guard"
      },
      {
        "type": "heal",
        "amount": 35,
        "decreasePerUse": 5
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kabuto-guard",
      "name": "Secret Healing Wound Destruction",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 20
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Dead Soul Technique
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kabuto-4",
    "name": "Dead Soul Technique",
    "description": "Essa habilidade faz Yakushi Kabuto invulnerável por 1 turno.",
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
        "statusId": "classico-kabuto-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kabuto-hide",
      "name": "Dead Soul Technique",
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
  "id": "classico-kabuto",
  "name": "Yakushi Kabuto",
  "image": image0,
  "description": "Kabuto foi encontrado no campo de batalha, aprendeu ninjutsu médico e agora auxilia Orochimaru. Ele usa suas habilidades médicas tanto para ataque quanto para defesa.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 191,
  abilities: [ability1, ability2, ability3, ability4],
})
