import image0 from './shodai_hokage_char_1.jpg'
import image1 from './shodai_hokage_skill_1_(tree_strangulation).jpg'
import image2 from './shodai_hokage_skill_2_(branch_manipulation).jpg'
import image3 from './shodai_hokage_skill_3_(birth_of_the_trees).jpg'
import image4 from './shodai_hokage_skill_4_(deflection).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Tree Strangulation
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-shodai-1",
    "name": "Tree Strangulation",
    "description": "Hashirama captura e esmaga um inimigo com galhos gigantes, causando 25 de dano perfurante e atordoando suas habilidades Physical e Chakra por 1 turno. Durante 'Birth of the Trees', essa skill custará 1 chakra aleatório a menos.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 1
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
        "amount": 25,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shodai-stun"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-shodai-trees",
        "cost": {
          "specific": {
            "bloodline": 1
          }
        },
        "effects": [
          {
            "type": "damage",
            "amount": 25,
            "damageType": "piercing"
          },
          {
            "type": "apply-status",
            "statusId": "classico-shodai-stun"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shodai-stun",
      "name": "Tree Strangulation",
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

// HABILIDADE 2 — Branch Manipulation
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-shodai-2",
    "name": "Branch Manipulation",
    "description": "Hashirama envia suas árvores em todas as direções, causando 10 de dano affliction a todos os inimigos e concedendo 5 pontos de defesa destrutiva permanente para si mesmo e aliados. Durante 'Birth of the Trees', essa habilidade não terá cooldown.",
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
        "damageType": "affliction",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-shodai-branch",
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true,
    "variants": [
      {
        "whenUserHasStatus": "classico-shodai-trees",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 10,
            "damageType": "affliction",
            "skipIfUntargetable": true
          },
          {
            "type": "apply-status",
            "statusId": "classico-shodai-branch",
            "recipient": "all-allies"
          }
        ],
        "cooldown": 0
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shodai-branch",
      "name": "Branch Manipulation",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Birth of the Trees
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-shodai-3",
    "name": "Birth of the Trees",
    "description": "Hashirama invoca um enorme campo de árvores. Por 3 turnos, qualquer inimigo que usar uma nova habilidade ofensiva terá o custo de suas habilidades ofensivas aumentado em 2 chakra aleatório por 1 turno. Por 3 turns, Hashirama e seus aliados são concedidos 10 pontos de defesa destrutiva..",
    "image": image3,
    "cost": {
      "random": 2
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shodai-mark",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-shodai-trees",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shodai-shield",
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-shodai-mark",
      "name": "Birth of the Trees",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "on-harmful-skill",
          "statusId": "classico-shodai-tax",
          "endsWithTriggerTurn": false
        }
      ]
    },
    {
      "id": "classico-shodai-tax",
      "name": "Birth of the Trees",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "skill-cost-increase",
          "random": 2,
          "scope": "harmful"
        }
      ],
      "replaces": [
        "classico-shodai-tax"
      ]
    },
    {
      "id": "classico-shodai-trees",
      "name": "Birth of the Trees",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "indicatorNote": "Tree Strangulation custa 1 aleatória a menos; Branch Manipulation fica sem recarga."
    },
    {
      "id": "classico-shodai-shield",
      "name": "Birth of the Trees",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
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

// HABILIDADE 4 — Deflection
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-shodai-4",
    "name": "Deflection",
    "description": "Essa skill torna Shodai Hokage invulnerável por 1 turno.",
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
        "statusId": "classico-shodai-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shodai-hide",
      "name": "Deflection",
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
  "id": "classico-shodai",
  "name": "Shodai Hokage",
  "image": image0,
  "description": "O Primeiro Hokage e fundador da Vila Oculta de Konoha, Shodai Hokage tem a habilidade de criar e manipular árvores. Essa capacidade de dar vida mostra o quão poderoso ele é.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 159,
  abilities: [ability1, ability2, ability3, ability4],
})
