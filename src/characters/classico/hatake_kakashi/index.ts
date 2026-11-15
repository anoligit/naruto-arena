import image0 from './hatake_kakashi_char_1.jpg'
import image1 from './hatake_kakashi_skill_1_(raikiri).jpg'
import image2 from './hatake_kakashi_skill_2_(summoning_ninja_dogs).jpg'
import image3 from './hatake_kakashi_skill_3_(kakashi_sharingan).jpg'
import image4 from './hatake_kakashi_skill_4_(clever_hiding).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Raikiri
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kakashi-1",
    "name": "Raikiri",
    "description": "Um ataque tão forte que dizem cortar relâmpagos. Essa habilidade causa 35 de dano perfurante a um inimigo. Essa habilidade não pode ser counterada ou refletida.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "piercing"
      }
    ],
    "cannotBeCountered": true
  }
}

// HABILIDADE 2 — Summoning: Ninja Dogs
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kakashi-2",
    "name": "Summoning: Ninja Dogs",
    "description": "Kakashi invoca cães ninjas que mordem um inimigo. Esse inimigo terá as habilidades não-Mental dele atordoadas por 1 turno. Por 1 turno, esse inimigo irá receber 5 de dano adicional de habilidades chakra.",
    "image": image2,
    "cost": {
      "random": 1
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kakashi-dogs"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kakashi-dogs",
      "name": "Summoning: Ninja Dogs",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "chakra",
            "affliction"
          ]
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "classes": [
            "chakra"
          ],
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Kakashi Sharingan
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kakashi-3",
    "name": "Kakashi Sharingan",
    "description": "Kakashi ativa seu sharingan copiador. Por 5 turnos, Kakashi irá todo turno imitar um jutsu de um inimigo aleatório, copiando uma habilidade ofensiva aleatória desse inimigo, enquanto altera o custo da habilidade copiada para chakras aleatórios.",
    "image": image3,
    "cost": {},
    "cooldown": 5,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kakashi-copy"
      },
      {
        "type": "copy-enemy-skill"
      }
    ],
    "copySlotStatusId": "classico-kakashi-copy"
  },
  "statuses": [
    {
      "id": "classico-kakashi-copy",
      "name": "Kakashi Sharingan",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "copy-enemy-skill"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Clever Hiding
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kakashi-4",
    "name": "Clever Hiding",
    "description": "Essa habilidade faz Hatake Kakashi invulnerável por 1 turno.",
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
        "statusId": "classico-kakashi-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kakashi-hide",
      "name": "Clever Hiding",
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
  "id": "classico-kakashi",
  "name": "Hatake Kakashi",
  "image": image0,
  "description": "Kakashi é o sensei de Naruto, Sakura e Sasuke. Com seu Sharingan, ele é capaz de devolver as habilidades dos inimigos contra eles mesmos e pode causar dano severo com suas habilidades Raikiri e Nin-Dogs.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 173,
  abilities: [ability1, ability2, ability3, ability4],
})
