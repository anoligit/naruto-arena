import image0 from './tenten_char_1.jpg'
import image1 from './tenten_skill_1_(twin_rising_dragons).jpg'
import image2 from './tenten_skill_2_(twin_rising_dragons_trap).jpg'
import image3 from './tenten_skill_3_(twin_rising_dragons_full_release).jpg'
import image4 from './tenten_skill_4_(spiked_boulder_shield).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Twin Rising Dragons
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-tenten-1",
    "name": "Twin Rising Dragons",
    "description": "Tenten cria diversas armas de seu pergaminho, causando 10 de dano a todos os inimigos por 2 turnos. Nos próximos 2 turnos, essa habilidade poderá ser usada novamente para causar 20 de dano a um inimigo e 10 de dano a todos os outros inimigos. Esta habilidade não pode ser counterada.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
    },
    "cooldown": 0,
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
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tenten-stack"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tenten-dragons"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tenten-mode",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "cannotBeCountered": true,
    "variants": [
      {
        "whenUserHasStatus": "classico-tenten-mode",
        "cost": {
          "specific": {
            "taijutsu": 1
          }
        },
        "effects": [
          {
            "type": "damage",
            "amount": 10,
            "damageType": "normal",
            "primaryAmount": 20
          },
          {
            "type": "apply-status",
            "statusId": "classico-tenten-stack"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tenten-dragons",
      "name": "Twin Rising Dragons",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        },
        {
          "type": "apply-status",
          "statusId": "classico-tenten-stack"
        }
      ]
    },
    {
      "id": "classico-tenten-mode",
      "name": "Twin Rising Dragons",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": []
    },
    {
      "id": "classico-tenten-stack",
      "name": "Twin Rising Dragons",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-tenten-2",
          "amount": 5,
          "fromSourceOnly": true
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Twin Rising Dragons Trap
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-tenten-2",
    "name": "Twin Rising Dragons Trap",
    "description": "Tenten usa múltiplos projéteis em todos os inimigos, causando 15 de dano perfurante a eles e 5 de dano adicional para cada vez que eles receberam dano de 'Twin Rising Dragons', removendo todos os stacks depois. Esta habilidade não pode ser counterada.",
    "image": image2,
    "cost": {
      "random": 2
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
        "type": "damage",
        "amount": 15,
        "damageType": "piercing"
      },
      {
        "type": "remove-statuses",
        "statusIds": [
          "classico-tenten-stack"
        ]
      },
      {
        "type": "apply-status",
        "statusId": "classico-tenten-stun",
        "whenUserHasStatus": "classico-tenten-release"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-tenten-stun",
      "name": "Twin Rising Dragons Trap",
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
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Twin Rising Dragons Full Release
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-tenten-3",
    "name": "Twin Rising Dragons Full Release",
    "description": "Tenten se torna invulnerável a habilidades não-mentais por 1 turno e aprimora suas habilidades pelas próximas 3 vezes que forem usadas. 'Twin Rising Dragons' irá causar 5 de dano adicional, e 'Twin Rising Dragons Trap' também irá atordoar todas as habilidades Physical e Chakra por 1 turno. Essa habilidade não acumula.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 3,
    "target": "self",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-tenten-release"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tenten-safe"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tenten-release",
      "name": "Twin Rising Dragons Full Release",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-tenten-1",
          "amount": 5
        }
      ],
      "replaces": [
        "classico-tenten-release"
      ]
    },
    {
      "id": "classico-tenten-safe",
      "name": "Twin Rising Dragons Full Release",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "invulnerable",
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

// HABILIDADE 4 — Spiked Boulder Shield
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-tenten-4",
    "name": "Spiked Boulder Shield",
    "description": "Essa habilidade faz Tenten invulnerável por 1 turno.",
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
        "statusId": "classico-tenten-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tenten-hide",
      "name": "Spiked Boulder Shield",
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
  "id": "classico-tenten",
  "name": "Tenten",
  "image": image0,
  "description": "Membro da equipe Gai, Tenten é uma especialista em armas, com uma personalidade meio moleca, que acredita que uma kunoichi pode ser tão forte quanto um ninja masculino. Em batalha, Tenten cerca o campo de batalha com armas, utilizando-as para causar dano e desabilitar seus inimigos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 12,
  abilities: [ability1, ability2, ability3, ability4],
})
