import image0 from './karatachi_yagura_char_1.png'
import image1 from './karatachi_yagura_skill_1_(isobu_tailed_beast_bomb).png'
import image2 from './karatachi_yagura_skill_2_(bloodshed).png'
import image3 from './karatachi_yagura_skill_3_(isobu_transformation).png'
import image4 from './karatachi_yagura_skill_4_(isobu_chakra_skin).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Isobu: Tailed Beast Bomb
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-yagura-1",
    "name": "Isobu: Tailed Beast Bomb",
    "description": "Yagura cura 5 de vida e causa 20 de dano a um inimigo. Esta habilidade causa 10 de dano adicional  para cada 15 de vida extra que cura.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 5,
        "recipient": "user"
      },
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal",
        "healingBonusScaling": true
      }
    ]
  }
}

// HABILIDADE 2 — Bloodshed
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-yagura-2",
    "name": "Bloodshed",
    "description": "Yagura causa 10 de dano perfurante a todos os inimigos. Por 2 turnos, se um inimigo não usar uma nova habilidade, suas habilidades terão 1 de cooldown adicional por 1 turno; caso contrário, 'Isobu: Tailed Beast Bomb' curará 5 de vida adicionais permanentemente. Esta habilidade acumula e não pode ser counterada.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-yagura-blood"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "cannotBeCountered": true,
    "variants": [
      {
        "whenUserHasStatus": "classico-yagura-immune",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 10,
            "damageType": "piercing"
          },
          {
            "type": "apply-status",
            "statusId": "classico-yagura-blood"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yagura-blood",
      "name": "Bloodshed",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-yagura-heal",
              "recipient": "user"
            }
          ]
        }
      ]
    },
    {
      "id": "classico-yagura-heal",
      "name": "Bloodshed",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "healing-bonus",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Isobu Transformation
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-yagura-3",
    "name": "Isobu Transformation",
    "description": "Por 1 turno, Yagura ignorará os efeitos de atordoamento e 'Bloodshed' custará 1 chakra aleatório. Permanentemente, toda vez que Yagura usar uma nova habilidade, ele ignorará todos os efeitos de atordoamento por 1 turno. Durante esse tempo, esta habilidade pode ser usada para fazer com que 'Bloodshed'  custe 1 chakra aleatório por 1 turno. Esta habilidade não pode ser removida.",
    "image": image3,
    "cost": {},
    "cooldown": 2,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-yagura-trans"
      },
      {
        "type": "apply-status",
        "statusId": "classico-yagura-immune"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yagura-trans",
      "name": "Isobu Transformation",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-yagura-immune"
            }
          ]
        }
      ],
      "unremovable": true,
      "replaces": [
        "classico-yagura-trans"
      ]
    },
    {
      "id": "classico-yagura-immune",
      "name": "Isobu Transformation",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun-immunity"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Isobu: Chakra Skin
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-yagura-4",
    "name": "Isobu: Chakra Skin",
    "description": "Esta habilidade torna Yagura invulnerável por 1 turno.",
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
        "statusId": "classico-yagura-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yagura-hide",
      "name": "Isobu: Chakra Skin",
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
  "id": "classico-yagura",
  "name": "Karatachi Yagura",
  "image": image0,
  "description": "O Quarto Mizukage da Vila da Névoa Oculta, Yagura também é o hospedeiro jinchuuriki da Besta de Três Caudas, Isobu. Um personagem trágico manipulado por \"Uchiha Madara\" ao longo de seu reinado infame e sangrento, Yagura usa as habilidades únicas da Besta de Três Caudas, baseadas em névoa e coral, em batalha para deter seus inimigos com eficiência.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 174,
  abilities: [ability1, ability2, ability3, ability4],
})
