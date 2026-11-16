import image0 from './temari_char_1.jpg'
import image1 from './temari_skill_1_(cutting_whirlwind).jpg'
import image2 from './temari_skill_2_(summoning_quick_beheading_dance).jpg'
import image3 from './temari_skill_3_(dust_wind).jpg'
import image4 from './temari_skill_4_(fan_defence_technique).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Cutting Whirlwind
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-temari-1",
    "name": "Cutting Whirlwind",
    "description": "Temari cria um vento cortante afiado, causando 20 de dano perfurante a um inimigo e 10 de dano perfurante a todos os outros inimigos. Por 1 turno, Temari se tornará invulnerável a habilidades não-Mental.",
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
        "type": "damage",
        "amount": 10,
        "damageType": "piercing",
        "primaryAmount": 20
      },
      {
        "type": "apply-status",
        "statusId": "classico-temari-wind-protection",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-temari-wind-ready",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-temari-wind-protection",
      "name": "Cutting Whirlwind",
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
    },
    {
      "id": "classico-temari-wind-ready",
      "name": "Cutting Whirlwind",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Summoning Quick Beheading Dance
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-temari-2",
    "name": "Summoning Quick Beheading Dance",
    "description": "Temari invoca a doninha do vento Kamatari no campo de batalha, causando 35 de dano a todos os inimigos. Se usada um turno após 'Cutting Whirlwind', essa habilidade irá custar 1 chakra aleatório a menos.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
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
        "amount": 35,
        "damageType": "normal"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "variants": [
      {
        "whenUserHasStatus": "classico-temari-wind-ready",
        "cost": {
          "specific": {
            "ninjutsu": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 35,
            "damageType": "normal"
          }
        ]
      }
    ]
  }
}

// HABILIDADE 3 — Dust Wind
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-temari-3",
    "name": "Dust Wind",
    "description": "Temari levanta poeira, tornando sua equipe invulnerável por 1 turno. Se alvejável, todos os inimigos irão causar 20 a menos de dano não-affliction por 1 turno. Se usada um turno após 'Cutting Whirlwind', essa habilidade irá reduzir dano por 2 turnos.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 4,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-temari-weakness-1",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-temari-team-protection",
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true,
    "variants": [
      {
        "whenUserHasStatus": "classico-temari-wind-ready",
        "cost": {
          "specific": {
            "ninjutsu": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "apply-status",
            "statusId": "classico-temari-weakness-2",
            "skipIfUntargetable": true
          },
          {
            "type": "apply-status",
            "statusId": "classico-temari-team-protection",
            "recipient": "all-allies"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-temari-team-protection",
      "name": "Dust Wind",
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
      "id": "classico-temari-weakness-1",
      "name": "Dust Wind",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 20,
          "excludesAffliction": true
        }
      ]
    },
    {
      "id": "classico-temari-weakness-2",
      "name": "Dust Wind",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 20,
          "excludesAffliction": true
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Fan Defence Technique
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-temari-4",
    "name": "Fan Defence Technique",
    "description": "Essa habilidade faz Temari invulnerável por 1 turno.",
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
        "statusId": "classico-temari-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-temari-hide",
      "name": "Fan Defence Technique",
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
  "id": "classico-temari",
  "name": "Temari",
  "image": image0,
  "description": "A irmã mais velha de Gaara e Kankuro, Temari é uma ninja um tanto cruel e direta que luta usando o vento a seu favor. Com seu leque, Temari pode criar poderosas rajadas de vento que ela pode manipular à sua vontade.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 14,
  abilities: [ability1, ability2, ability3, ability4],
})
