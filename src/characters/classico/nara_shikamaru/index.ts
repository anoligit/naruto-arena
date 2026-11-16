import image0 from './nara_shikamaru_char_1.jpg'
import image1 from './nara_shikamaru_skill_1_(meditate).jpg'
import image2 from './nara_shikamaru_skill_2_(shadow-neck_bind).jpg'
import image3 from './nara_shikamaru_skill_3_(shadow_imitation).jpg'
import image4 from './nara_shikamaru_skill_4_(shikamaru_hide).jpeg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Meditate
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-shikamaru-1",
    "name": "Meditate",
    "description": "Shikamaru começa a pensar em uma estratégia contra um inimigo, marcando ele por 5 turnos. Durante esse tempo, 'Shadow-Neck Bind' and 'Shadow Imitation' irão durar 1 turno adicional nele. Essa habilidade não pode ser counterada ou refletida e não pode ser usada em um inimigo já afetado por ela.",
    "image": image1,
    "cost": {},
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shikamaru-meditate"
      }
    ],
    "cannotBeCountered": true,
    "targetMustLackStatus": "classico-shikamaru-meditate"
  },
  "statuses": [
    {
      "id": "classico-shikamaru-meditate",
      "name": "Meditate",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Shadow-Neck Bind
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-shikamaru-2",
    "name": "Shadow-Neck Bind",
    "description": "Shikamaru estrangula todos os inimigos, deixando eles incapazes de reduzir dano ou se tornar invulnerável*, e causando 15 de dano a eles por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "action",
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
        "statusId": "classico-shikamaru-bind",
        "durationBonus": {
          "whenTargetHasStatus": "classico-shikamaru-meditate",
          "turns": 1,
          "fromSourceOnly": true
        }
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-shikamaru-bind",
      "name": "Shadow-Neck Bind",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "prevent-invulnerability"
        },
        {
          "type": "periodic-damage",
          "amount": 15,
          "damageType": "normal"
        }
      ],
      "action": true,
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 3 — Shadow Imitation
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-shikamaru-3",
    "name": "Shadow Imitation",
    "description": "Shikamaru captura todos os inimigos nas sombras, atordoando suas habilidades não mentais por 1 turno.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      },
      "random": 1
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "chakra",
      "control",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shikamaru-imitation",
        "durationBonus": {
          "whenTargetHasStatus": "classico-shikamaru-meditate",
          "turns": 1,
          "fromSourceOnly": true
        }
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-shikamaru-imitation",
      "name": "Shadow Imitation",
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
      ],
      "control": true,
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 4 — Shikamaru Hide
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-shikamaru-4",
    "name": "Shikamaru Hide",
    "description": "Essa habilidade faz Nara Shikamaru invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shikamaru-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shikamaru-hide",
      "name": "Shikamaru Hide",
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

// ORDEM NA LISTA: para mover só este personagem, use order: { position: 4 }, por exemplo.
export default defineCharacter({
  "id": "classico-shikamaru",
  "name": "Nara Shikamaru",
  "image": image0,
  "description": "Uma Genin do Time 10, membro do clã Nara, Shikamaru é considerado o Genin mais inteligente de todos os Konoha 11. Usando sua linhagem, Shikamaru pode manipular as sombras no campo de batalha para desabilitar e atacar seus inimigos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 7,
  abilities: [ability1, ability2, ability3, ability4],
})
