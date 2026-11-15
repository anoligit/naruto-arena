import image0 from './nidaime_hokage_char_1.jpg'
import image1 from './nidaime_hokage_skill_1_(water_assault).jpg'
import image2 from './nidaime_hokage_skill_2_(water_collision_destruction).jpg'
import image3 from './nidaime_hokage_skill_3_(bringer_of_darkness).jpg'
import image4 from './nidaime_hokage_skill_4_(water_encampment_wall).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Water Assault
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-nidaime-1",
    "name": "Water Assault",
    "description": "Tobirama aprisiona um inimigo em água, fazendo com que ele ignore todos os efeitos defensivos por 1 turno e causando 15 de dano a ele.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
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
        "type": "apply-status",
        "statusId": "classico-nidaime-ignore"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal"
      }
    ],
    "allowInvulnerableTarget": true,
    "cannotBeCountered": true,
    "enhancement": {
      "whenUserHasStatus": "classico-nidaime-assault",
      "damage": {
        "amount": 30,
        "damageType": "normal"
      }
    }
  },
  "statuses": [
    {
      "id": "classico-nidaime-ignore",
      "name": "Water Assault",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "ignore-defenses"
        }
      ],
      "ignoresImmunity": true
    }
  ]
}

// HABILIDADE 2 — Water Collision Destruction
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-nidaime-2",
    "name": "Water Collision Destruction",
    "description": "Invocando uma enorme onda de água, Tobirama causa 10 de dano a todos os inimigos por 3 turnos. A cada turno, todos os inimigos terão as habilidades Affliction deles atordoadas. Nos 3 turnos seguintes, 'Water Assault' causará 15 de dano adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 3,
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
        "damageType": "normal",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-nidaime-wave",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-nidaime-assault",
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
      "id": "classico-nidaime-wave",
      "name": "Water Collision Destruction",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "affliction"
          ]
        }
      ],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-nidaime-assault",
      "name": "Water Collision Destruction",
      "duration": {
        "type": "owner-turns",
        "turns": 3
      },
      "modifiers": [],
      "indicatorNote": "Water Assault causa 15 de dano adicional."
    }
  ]
}

// HABILIDADE 3 — Bringer of Darkness
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-nidaime-3",
    "name": "Bringer of Darkness",
    "description": "Tobirama mergulha o campo de batalha em completa escuridão. Por 1 turno, Tobirama e seus aliados ficam invulneráveis a habilidades Physical e Mental.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "ally",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-nidaime-darkness"
      }
    ],
    "targetExpansion": {
      "target": "all-living-allies"
    }
  },
  "statuses": [
    {
      "id": "classico-nidaime-darkness",
      "name": "Bringer of Darkness",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "invulnerable",
          "classes": [
            "physical",
            "mental"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Water Encampment Wall
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-nidaime-4",
    "name": "Water Encampment Wall",
    "description": "Essa habilidade faz Nidaime Hokage invulnerável por 1 turno.",
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
        "statusId": "classico-nidaime-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-nidaime-hide",
      "name": "Water Encampment Wall",
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
  "id": "classico-nidaime",
  "name": "Nidaime Hokage",
  "image": image0,
  "description": "Nidaime é o Segundo Hokage e tio-avô de Tsunade. Ele é muito habilidoso com jutsus de água, não necessitando de fonte de água para executá-los.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 160,
  abilities: [ability1, ability2, ability3, ability4],
})
