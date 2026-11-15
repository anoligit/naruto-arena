import image0 from './shigure_char_1.jpg'
import image1 from './shigure_skill_1_(umbrella_toss).jpg'
import image2 from './shigure_skill_2_(sprinkling_needles).jpg'
import image3 from './shigure_skill_3_(needle_barrage).jpg'
import image4 from './shigure_skill_4_(umbrella_block).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Umbrella Toss
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-shigure-1",
    "name": "Umbrella Toss",
    "description": "Shigure lança seus guarda-chuvas para o alto, ganhando 5 pontos de redução de dano por 3 turnos. Durante esse tempo, qualquer inimigo que usar uma nova habilidade em Shigure ou em seus aliados irá receber 5 de dano perfurante; É ativada uma vez por inimigo cada turno. Nos próximos 3 turnos, 'Sprinkling Needles' poderá ser usada. Essa habilidade termina quando Shigure morrer.",
    "image": image1,
    "cost": {},
    "cooldown": 3,
    "target": "self",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shigure-umbrella"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shigure-umbrella",
      "name": "Umbrella Toss",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 5
        },
        {
          "type": "on-enemy-target-team",
          "amount": 5,
          "damageType": "piercing"
        }
      ],
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 2 — Sprinkling Needles
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-shigure-2",
    "name": "Sprinkling Needles",
    "description": "Agulhas caiem dos guarda-chuvas de Shigure, causando 10 de dano perfurante a todos os inimigos por 3 turnos. Nos próximos 2 turnos, 'Needle Barrage' poderá ser usado em inimigos afetados por essa habilidade. Essa habilidade não pode ser counterada e requer o uso de 'Umbrella Toss'.",
    "image": image2,
    "cost": {
      "random": 2
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "physical",
      "action",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shigure-needles"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shigure-barrage-ready",
        "recipient": "user"
      }
    ],
    "cannotBeCountered": true,
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "requirements": [
      {
        "type": "has-status",
        "statusId": "classico-shigure-umbrella"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shigure-needles",
      "name": "Sprinkling Needles",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "action": true,
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "piercing"
        }
      ]
    },
    {
      "id": "classico-shigure-barrage-ready",
      "name": "Sprinkling Needles",
      "duration": {
        "type": "owner-turns",
        "turns": 2
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 3 — Needle Barrage
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-shigure-3",
    "name": "Needle Barrage",
    "description": "Shigure direciona especificamente agulhas a um inimigo, causando 30 de dano a ele. Essa habilidade só pode atingir inimigos que estão afetados por 'Sprinkling Needles'.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 30,
        "damageType": "normal"
      }
    ],
    "targetMustHaveStatus": {
      "statusId": "classico-shigure-needles",
      "fromSourceOnly": true
    },
    "requirements": [
      {
        "type": "has-status",
        "statusId": "classico-shigure-barrage-ready"
      }
    ]
  }
}

// HABILIDADE 4 — Umbrella Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-shigure-4",
    "name": "Umbrella Block",
    "description": "Essa habilidade faz Shigure invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shigure-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shigure-hide",
      "name": "Umbrella Block",
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
  "id": "classico-shigure",
  "name": "Shigure",
  "image": image0,
  "description": "Um Genin da Vila da Chuva, Shigure é especializado em usar seu chakra para controlar agulhas escondidas em seus guarda-chuvas.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 152,
  abilities: [ability1, ability2, ability3, ability4],
})
