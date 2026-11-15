import image0 from './gaara_of_the_desert_char_1.jpg'
import image1 from './gaara_of_the_desert_skill_1_(desert_graveyard).jpg'
import image2 from './gaara_of_the_desert_skill_2_(desert_coffin).jpg'
import image3 from './gaara_of_the_desert_skill_3_(third_eye).jpeg'
import image4 from './gaara_of_the_desert_skill_4_(sand_shield).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Desert Graveyard
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-1",
    "name": "Desert Graveyard",
    "description": "Gaara esmaga um inimigo com areia, causando 50 de dano affliction a ele e removendo todos os stacks de 'Desert Coffin' dele. Esta habilidade não pode ser counterada.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1,
        "ninjutsu": 1
      }
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
        "amount": 50,
        "damageType": "affliction"
      },
      {
        "type": "remove-statuses",
        "statusIds": [
          "classico-gaara-coffin"
        ]
      }
    ],
    "cannotBeCountered": true
  }
}

// HABILIDADE 2 — Desert Coffin
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-2",
    "name": "Desert Coffin",
    "description": "Gaara envolve um inimigo com uma pilha de areia, atordoando suas habilidades não mental por 1 turno. Permanentemente, esse inimigo irá receber 25 de dano adicional de 'Desert Graveyard'. Essa habilidade acumula.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-gaara-stun"
      },
      {
        "type": "apply-status",
        "statusId": "classico-gaara-coffin"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-gaara-stun",
      "name": "Desert Coffin",
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
    },
    {
      "id": "classico-gaara-coffin",
      "name": "Desert Coffin",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-gaara-1",
          "amount": 25,
          "fromSourceOnly": true
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Third Eye
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-3",
    "name": "Third Eye",
    "description": "Por 2 turnos, se uma nova habilidade ofensiva for usada em Gaara ou em seus aliados, o seguinte acontecerá: física/chakra - o custo das habilidades será reduzido em 1 chakra aleatório por 1 turno; affliction - recupera 10 de vida e ignorar dano affliction por 1 turno; mental - Ficará invulnerável por 1 turno. Essa habilidade termina após ser ativada e é invisível.",
    "image": image3,
    "cost": {
      "random": 1
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
        "statusId": "classico-gaara-eye"
      }
    ],
    "targetExpansion": {
      "target": "all-living-allies"
    }
  },
  "statuses": [
    {
      "id": "classico-gaara-eye",
      "name": "Third Eye",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "on-targeted-harmful",
          "classes": [
            "physical",
            "chakra"
          ],
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-gaara-cheap"
            }
          ]
        },
        {
          "type": "on-targeted-harmful",
          "classes": [
            "affliction"
          ],
          "effects": [
            {
              "type": "heal",
              "amount": 10
            },
            {
              "type": "apply-status",
              "statusId": "classico-gaara-immune"
            }
          ]
        },
        {
          "type": "on-targeted-harmful",
          "classes": [
            "mental"
          ],
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-gaara-safe"
            }
          ]
        }
      ],
      "invisible": true
    },
    {
      "id": "classico-gaara-cheap",
      "name": "Third Eye",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "skill-cost-reduction",
          "random": 1
        }
      ]
    },
    {
      "id": "classico-gaara-immune",
      "name": "Third Eye",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-immunity",
          "types": [
            "affliction"
          ]
        }
      ]
    },
    {
      "id": "classico-gaara-safe",
      "name": "Third Eye",
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

// HABILIDADE 4 — Sand Shield
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-4",
    "name": "Sand Shield",
    "description": "Essa habilidade faz Gaara of the Desert invulnerável por 1 turno.",
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
        "statusId": "classico-gaara-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-gaara-hide",
      "name": "Sand Shield",
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
  "id": "classico-gaara",
  "name": "Gaara of the Desert",
  "image": image0,
  "description": "Uma Jinchuuriki da Vila da Areia, Gaara é um ninja instável com o Shukaku, a besta de uma cauda. Com o Shukaku e suas próprias habilidades, Gaara pode manipular a areia em seu cântaro para esmagar o inimigo ou se defender.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 171,
  abilities: [ability1, ability2, ability3, ability4],
})
