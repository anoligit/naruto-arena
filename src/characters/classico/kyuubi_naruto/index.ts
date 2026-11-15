import image0 from './kyuubi_naruto_char_1.jpg'
import image1 from './kyuubi_naruto_skill_1_(kyuubi_rasengan).jpg'
import image2 from './kyuubi_naruto_skill_2_(kyuubi_rage).jpg'
import image3 from './kyuubi_naruto_skill_3_(kyuubi_chakra).jpg'
import image4 from './kyuubi_naruto_skill_4_(chakra_howl).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Kyuubi Rasengan
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kyuubi-naruto-1",
    "name": "Kyuubi Rasengan",
    "description": "Kyuubi Naruto causa 40 de dano a um inimigo e atordoa as habilidades Physical and Chakra dele por 1 turno. Kyuubi Naruto recebe 10 de dano affliction*. Durante 'Kyuubi Rage', esta habilidade causará 50 de dano. Durante 'Kyuubi Chakra', esta habilidade causará 30 de dano.",
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
      "melee",
      "affliction"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 40,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kyuubi-stun"
      },
      {
        "type": "damage",
        "amount": 10,
        "damageType": "affliction",
        "recipient": "user"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-kyuubi-rage",
        "cost": {
          "specific": {
            "ninjutsu": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 50,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-kyuubi-stun"
          },
          {
            "type": "damage",
            "amount": 10,
            "damageType": "affliction",
            "recipient": "user"
          }
        ]
      },
      {
        "whenUserHasStatus": "classico-kyuubi-chakra",
        "cost": {
          "specific": {
            "ninjutsu": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 30,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-kyuubi-stun"
          },
          {
            "type": "damage",
            "amount": 10,
            "damageType": "affliction",
            "recipient": "user"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kyuubi-stun",
      "name": "Kyuubi Rasengan",
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

// HABILIDADE 2 — Kyuubi Rage
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kyuubi-naruto-2",
    "name": "Kyuubi Rage",
    "description": "Usando o chakra vil do Kyuubi ao seu redor, Kyuubi Naruto causa 10 de dano a todos os inimigos por 3 turnos. Durante esse tempo, 'Kyuubi Rasengan' será melhorado*. Esta habilidade irá cancelar 'Kyuubi Chakra' ao ser usada.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "chakra",
      "action",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kyuubi-dot"
      },
      {
        "type": "remove-statuses",
        "statusIds": [
          "classico-kyuubi-chakra"
        ],
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kyuubi-rage",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-kyuubi-dot",
      "name": "Kyuubi Rage",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
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
      "id": "classico-kyuubi-rage",
      "name": "Kyuubi Rage",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 3 — Kyuubi Chakra
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kyuubi-naruto-3",
    "name": "Kyuubi Chakra",
    "description": "Usando inconscientemente o Chakra do Kyuubi, Naruto ganha 10 pontos de redução de dano* e cura 15 de vida a cada turno por 3 turnos. Durante esse tempo, 'Kyuubi Rasengan' será enfraquecido.* Esta habilidade irá cancelar 'Kyuubi Rage' ao ser usada.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 3,
    "target": "self",
    "classes": [
      "chakra",
      "action",
      "instant"
    ],
    "effects": [
      {
        "type": "remove-statuses",
        "statusIds": [
          "classico-kyuubi-rage",
          "classico-kyuubi-dot"
        ],
        "scope": "source-applications"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kyuubi-chakra"
      },
      {
        "type": "heal",
        "amount": 15
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kyuubi-chakra",
      "name": "Kyuubi Chakra",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10
        }
      ],
      "action": true,
      "periodicEffects": [
        {
          "type": "heal",
          "amount": 15
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Chakra Howl
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kyuubi-naruto-4",
    "name": "Chakra Howl",
    "description": "Esta habilidade torna Kyuubi Naruto invulnerável por 1 turno.",
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
        "statusId": "classico-kyuubi-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kyuubi-hide",
      "name": "Chakra Howl",
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
  "id": "classico-kyuubi-naruto",
  "name": "Kyuubi Naruto",
  "image": image0,
  "description": "Ao extrair a força do demônio Kyuubi selado dentro dele, o poder de Naruto explode, e ele se torna praticamente um exército sozinho.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 162,
  abilities: [ability1, ability2, ability3, ability4],
})
