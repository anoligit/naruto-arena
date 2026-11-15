import image0 from './kankuro_char_1.jpg'
import image1 from './kankuro_skill_1_(black_secret_machine_one_shot).jpg'
import image2 from './kankuro_skill_2_(poison_bomb).jpg'
import image3 from './kankuro_skill_3_(puppet_preparation).jpg'
import image4 from './kankuro_skill_4_(puppet_replacement_technique).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Black Secret Machine One Shot
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kankuro-1",
    "name": "Black Secret Machine One Shot",
    "description": "Kankuro usa duas de suas marionetes para esfaquear um inimigo, que recebe 30 de dano perfurante. Durante 'Puppet Preparation', essa habilidade irá causar 5 de dano adicional.",
    "image": image1,
    "cost": {
      "random": 2
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
        "damageType": "piercing"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-kankuro-preparation",
      "damage": {
        "amount": 35,
        "damageType": "piercing"
      }
    }
  }
}

// HABILIDADE 2 — Poison Bomb
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kankuro-2",
    "name": "Poison Bomb",
    "description": "Uma das marionetes de Kankuro cria uma nuvem de fumaça, causando 10 de dano affliction a todos os inimigo. Durante 'Puppet Preparation', essa habilidade irá durar 1 turno adicional.",
    "image": image2,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "affliction"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "variants": [
      {
        "whenUserHasStatus": "classico-kankuro-preparation",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 10,
            "damageType": "affliction"
          },
          {
            "type": "apply-status",
            "statusId": "classico-kankuro-poison"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kankuro-poison",
      "name": "Poison Bomb",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "affliction"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Puppet Preparation
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kankuro-3",
    "name": "Puppet Preparation",
    "description": "Kankuro prepara suas marionetes para o combate, ganhando 10 pontos de defesa destrutível permanentemente. Nos próximos 3 turnos, as habilidades de Kankuro serão melhoradas.",
    "image": image3,
    "cost": {},
    "cooldown": 3,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kankuro-preparation"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kankuro-shield"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kankuro-preparation",
      "name": "Puppet Preparation",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": []
    },
    {
      "id": "classico-kankuro-shield",
      "name": "Puppet Preparation",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Puppet Replacement Technique
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kankuro-4",
    "name": "Puppet Replacement Technique",
    "description": "Essa habilidade faz Kankuro invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kankuro-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kankuro-hide",
      "name": "Puppet Replacement Technique",
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
  "id": "classico-kankuro",
  "name": "Kankuro",
  "image": image0,
  "description": "O irmão de Gaara e um mestre marionetista, Kankuro é um dos três irmãos da areia. Com suas marionetes, Kankuro é capaz de usar as habilidades variadas escondidas nelas para atacar seus inimigos, ou até mesmo se proteger.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 120,
  abilities: [ability1, ability2, ability3, ability4],
})
