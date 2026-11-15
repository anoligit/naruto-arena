import image0 from './namikaze_minato_char_1.jpg'
import image1 from './namikaze_minato_skill_1_(flying_thunder_god).jpg'
import image2 from './namikaze_minato_skill_2_(space-time_marking).jpg'
import image3 from './namikaze_minato_skill_3_(space-time_kunai_scatter).jpg'
import image4 from './namikaze_minato_skill_4_(seal_sensing).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Flying Thunder God
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-minato-1",
    "name": "Flying Thunder God",
    "description": "Usando suas habilidades de teletransporte, Minato ataca um inimigo, causando 20 de dano a ele, ou protege um aliado, tornando-o invulnerável por 1 turno. Minato também ficará invulnerável por 1 turno. Nos próximos 3 turnos, essa habilidade irá custar 1 chakra aleatório adicional e irá causar 15 de dano adicional.\n",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "ally-or-enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal",
        "targetCondition": "enemy"
      },
      {
        "type": "apply-status",
        "statusId": "classico-minato-safe",
        "targetCondition": "ally"
      },
      {
        "type": "apply-status",
        "statusId": "classico-minato-safe",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-minato-boost",
        "recipient": "user"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-minato-boost",
        "cost": {
          "specific": {
            "genjutsu": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 35,
            "damageType": "normal",
            "targetCondition": "enemy"
          },
          {
            "type": "apply-status",
            "statusId": "classico-minato-safe",
            "targetCondition": "ally"
          },
          {
            "type": "apply-status",
            "statusId": "classico-minato-safe",
            "recipient": "user"
          },
          {
            "type": "apply-status",
            "statusId": "classico-minato-boost",
            "recipient": "user"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-minato-safe",
      "name": "Flying Thunder God",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "invulnerable"
        }
      ]
    },
    {
      "id": "classico-minato-boost",
      "name": "Flying Thunder God",
      "duration": {
        "type": "owner-turns",
        "turns": 3
      },
      "modifiers": [],
      "replaces": [
        "classico-minato-boost"
      ]
    }
  ]
}

// HABILIDADE 2 — Space-Time Marking
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-minato-2",
    "name": "Space-Time Marking",
    "description": "Minato marca um inimigo, fazendo com que ele não possa reduzir dano nem se tornar invulnerável por 2 turnos. Se 'Flying Thunder God' for usada, esse inimigo irá receber 10 de dano adicional e sua marca será renovada por 1 turno. Esta habilidade ignora invulnerabilidade.",
    "image": image2,
    "cost": {},
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "chakra",
      "control",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-minato-mark"
      }
    ],
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-minato-mark",
      "name": "Space-Time Marking",
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
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-minato-1",
          "amount": 10,
          "fromSourceOnly": true
        }
      ],
      "control": true,
      "endsWhenSourceDies": true,
      "replaces": [
        "classico-minato-mark"
      ]
    }
  ]
}

// HABILIDADE 3 — Space-Time Kunai Scatter
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-minato-3",
    "name": "Space-Time Kunai Scatter",
    "description": "Espalhando kunais de hiraishin, Minato aplica 'Space-Time Marking' em todos os inimigos. Por 2 turnos, Minato ganha 1 chakra aleatório. Esta habilidade ignora invulnerabilidade.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "chakra",
      "control",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-minato-mark"
      },
      {
        "type": "gain-energy",
        "amount": 1
      },
      {
        "type": "apply-status",
        "statusId": "classico-minato-regen",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-minato-regen",
      "name": "Space-Time Kunai Scatter",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "gain-energy",
          "amount": 1
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Seal Sensing
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-minato-4",
    "name": "Seal Sensing",
    "description": "Essa habilidade faz Namikaze Minato invulnerável por 1 turno.",
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
        "statusId": "classico-minato-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-minato-hide",
      "name": "Seal Sensing",
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
  "id": "classico-minato",
  "name": "Namikaze Minato",
  "image": image0,
  "description": "Conhecido como o Relâmpago Amarelo de Konoha, Minato é o líder do Time Minato. Seu estilo de combate é único e ele é uma pessoa altamente analítica e atenciosa.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 178,
  abilities: [ability1, ability2, ability3, ability4],
})
