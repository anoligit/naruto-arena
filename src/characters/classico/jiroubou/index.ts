import image0 from './jiroubou_char_1.jpg'
import image1 from './jiroubou_skill_1_(nirvana_fist_style).jpg'
import image2 from './jiroubou_skill_2_(earth_seal_mud_cannonball).jpg'
import image3 from './jiroubou_skill_3_(dungeon_chamber_of_nothingness).jpg'
import image4 from './jiroubou_skill_4_(earth_wall_land_flip).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Nirvana Fist Style
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-jiroubou-1",
    "name": "Nirvana Fist Style",
    "description": "Jiroubou causa 35 de dano a um inimigo. No próximo turno, 'Earth Seal Mud Cannonball' irá causar 5 de dano adicional.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiroubou-fist-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-jiroubou-fist-ready",
      "name": "Nirvana Fist Style",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-jiroubou-2",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Earth Seal Mud Cannonball
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-jiroubou-2",
    "name": "Earth Seal Mud Cannonball",
    "description": "Jiroubou causa 15 de dano a todos os inimigos. No próximo turno, 'Nirvana Fist Style' irá causar 10 de dano adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1
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
        "amount": 15,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiroubou-cannon-ready",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-jiroubou-cannon-ready",
      "name": "Earth Seal Mud Cannonball",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-jiroubou-1",
          "amount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Dungeon Chamber of Nothingness
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-jiroubou-3",
    "name": "Dungeon Chamber of Nothingness",
    "description": "Jiroubou captura o time inimigo em uma prisão de terra, roubando 2 chakras aleatórios deles. Jiroubou e todos os aliados se tornam invulneráveis por 1 turno.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 2
      },
      "random": 1
    },
    "cooldown": 5,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "steal-energy",
        "amount": 2,
        "types": [
          "bloodline",
          "ninjutsu",
          "taijutsu",
          "genjutsu"
        ]
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiroubou-dungeon-protection",
        "recipient": "all-allies"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-jiroubou-dungeon-protection",
      "name": "Dungeon Chamber of Nothingness",
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

// HABILIDADE 4 — Earth Wall Land Flip
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-jiroubou-4",
    "name": "Earth Wall Land Flip",
    "description": "Essa habilidade faz Jiroubou invulnerável por 1 turno.",
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
        "statusId": "classico-jiroubou-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-jiroubou-hide",
      "name": "Earth Wall Land Flip",
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
  "id": "classico-jiroubou",
  "name": "Jiroubou",
  "image": image0,
  "description": "Jiroubou é o maior membro do Quarteto do Som. Seu estilo de luta envolve ataques físicos poderosos combinados com manipulação da terra.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 119,
  abilities: [ability1, ability2, ability3, ability4],
})
