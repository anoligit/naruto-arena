import image0 from './demon_brothers_char_1.jpg'
import image1 from './demon_brothers_skill_1_(chain_wrap).jpg'
import image2 from './demon_brothers_skill_2_(bladed_gauntlet).jpg'
import image3 from './demon_brothers_skill_3_(puddle_illusion).jpg'
import image4 from './demon_brothers_skill_4_(demon_brothers_vanish).jpeg'
import image5 from './demon_brothers_skill_5_(chain_shred).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Chain Wrap
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-demons-1",
    "name": "Chain Wrap",
    "description": "Demon Brothers prende um inimigo com sua corrente. Nos próximos 3 turnos, se Demon Brothers usar uma nova habilidade ofensiva nesse inimigo, as habilidades não mentais dele serão atordoadas por 1 turno. Durante esse tempo, Demon Brothers ficará invulnerável a habilidades mentais e affliction, e esta habilidade será substituída por 'Chain Shred'.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-demons-chain"
      },
      {
        "type": "apply-status",
        "statusId": "classico-demons-chain-active",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-demons-chain",
      "name": "Chain Wrap",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "on-source-harmful-hit",
          "statusId": "classico-demons-chain-stun"
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-demons-2",
          "amount": 5,
          "fromSourceOnly": true
        }
      ]
    },
    {
      "id": "classico-demons-chain-active",
      "name": "Chain Wrap",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "invulnerable",
          "classes": [
            "mental",
            "affliction"
          ]
        }
      ]
    },
    {
      "id": "classico-demons-chain-stun",
      "name": "Chain Wrap",
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
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Bladed Gauntlet
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-demons-2",
    "name": "Bladed Gauntlet",
    "description": "Demon Brothers usam suas manoplas para dilacerar, ganhando 10 de defesa destrutível permanente e causando 30 de dano a um inimigo. Essa habilidade irá causar 5 de dano adicional ao inimigo afetado por 'Chain Wrap'.",
    "image": image2,
    "cost": {
      "random": 2
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
        "amount": 30,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-demons-gauntlet-defense",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-demons-gauntlet-defense",
      "name": "Bladed Gauntlet",
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

// HABILIDADE 3 — Puddle Illusion
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-demons-3",
    "name": "Puddle Illusion",
    "description": "Demons Brother se esconde na água, ganhando 20 pontos de defesa destrutível e 1 Taijutsu chakra.",
    "image": image3,
    "cost": {
      "random": 2
    },
    "cooldown": 1,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-demons-puddle-defense"
      },
      {
        "type": "gain-energy",
        "amount": 1,
        "energyType": "taijutsu"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-demons-puddle-defense",
      "name": "Puddle Illusion",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 20
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Demon Brothers Vanish
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-demons-4",
    "name": "Demon Brothers Vanish",
    "description": "Essa habilidade faz Demon Brothers invulnerável por 1 turno.",
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
        "statusId": "classico-demons-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-demons-hide",
      "name": "Demon Brothers Vanish",
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

// HABILIDADE 5 — Chain Shred
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-demons-5",
    "name": "Chain Shred",
    "description": "Demon Brothers despedaçam um inimigo afetado por 'Chain Wrap', causando 45 de dano perfurante nele.",
    "image": image5,
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
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 45,
        "damageType": "piercing"
      }
    ],
    "replacement": {
      "skillId": "classico-demons-1",
      "whenStatusId": "classico-demons-chain-active"
    },
    "targetMustHaveStatus": {
      "statusId": "classico-demons-chain",
      "fromSourceOnly": true
    }
  }
}

export default defineCharacter({
  "id": "classico-demons",
  "name": "Demon Brothers",
  "image": image0,
  "description": "Uma dupla de Ninjas da Névoa que trabalha para Zabuza, os Irmãos Demônios são especialistas em assassinar seus alvos com sua corrente de shuriken.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 108,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
