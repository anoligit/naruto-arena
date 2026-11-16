import image0 from './nohara_rin_char_1.jpg'
import image1 from './nohara_rin_skill_1_(pit_trap).jpg'
import image2 from './nohara_rin_skill_2_(healing_touch).jpg'
import image3 from './nohara_rin_skill_3_(medical_kit).jpg'
import image4 from './nohara_rin_skill_4_(flee).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Pit Trap
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-rin-1",
    "name": "Pit Trap",
    "description": "Rin prende um inimigo, causando 20 de dano perfurante a ele. Por 1 turno, se esse inimigo usar uma nova habilidade, ele irá receber mais 20 de dano perfurante.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
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
        "amount": 20,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rin-pit"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-rin-pit",
      "name": "Pit Trap",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-skill-use-damage",
          "amount": 20,
          "damageType": "piercing"
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Healing Touch
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-rin-2",
    "name": "Healing Touch",
    "description": "Rin cura si mesma ou um aliado por 25 de vida e remove todas as habilidades affliction ofensivas dele.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "ally",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 25
      },
      {
        "type": "remove-harmful-statuses",
        "classes": [
          "affliction"
        ]
      }
    ]
  }
}

// HABILIDADE 3 — Medical Kit
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-rin-3",
    "name": "Medical Kit",
    "description": "Rin entrega seu kit médico a si mesma ou a um aliado, concedendo 15 pontos de redução de dano e curando 15 de vida por 3 turnos.",
    "image": image3,
    "cost": {
      "random": 2
    },
    "cooldown": 4,
    "target": "ally",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 15
      },
      {
        "type": "apply-status",
        "statusId": "classico-rin-kit"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-rin-kit",
      "name": "Medical Kit",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 15
        }
      ],
      "periodicEffects": [
        {
          "type": "heal",
          "amount": 15
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Flee
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-rin-4",
    "name": "Flee",
    "description": "Essa habilidade faz Nohara Rin invulnerável por 1 turno.",
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
        "statusId": "classico-rin-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-rin-hide",
      "name": "Flee",
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
  "id": "classico-rin",
  "name": "Nohara Rin",
  "image": image0,
  "description": "Uma chuunin médica designada para o Time Minato, Rin é uma garota quieta e passiva que se concentra em manter seus companheiros de equipe vivos. Usando suas habilidades de cura e sua inteligência, Rin é capaz de curar seus aliados enquanto prende seus inimigos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 19,
  abilities: [ability1, ability2, ability3, ability4],
})
