import image0 from './uchiha_obito_char_1.jpg'
import image1 from './uchiha_obito_skill_1_(piercing_stab).jpg'
import image2 from './uchiha_obito_skill_2_(obito_goukakyuu_no_jutsu).jpg'
import image3 from './uchiha_obito_skill_3_(obito_sharingan).jpg'
import image4 from './uchiha_obito_skill_4_(sparkling_parry).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Piercing Stab
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-obito-1",
    "name": "Piercing Stab",
    "description": "Encontrando uma brecha na defesa do inimigo, Obito rapidamente o apunhala, causando 15 de dano a um inimigo. Durante 'Obito Sharingan', essa habilidade irá causar 25 de dano perfurante que irá ignorar invulnerabilidade.",
    "image": image1,
    "cost": {
      "random": 1
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
        "amount": 15,
        "damageType": "normal"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-obito-eye",
      "damage": {
        "amount": 25,
        "damageType": "piercing"
      },
      "ignoreInvulnerability": true
    }
  }
}

// HABILIDADE 2 — Obito Goukakyuu no Jutsu
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-obito-2",
    "name": "Obito Goukakyuu no Jutsu",
    "description": "Obito exala fogo ardente em um inimigo, causando 15 de dano affliction a ele por 2 turnos. Durante 'Obito Sharingan', essa habilidade irá causar 30 de dano affliction instantaneamente enquanto ignora invulnerabilidade.",
    "image": image2,
    "cost": {
      "specific": {
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
        "amount": 15,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-obito-fire"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-obito-eye",
      "ignoreInvulnerability": true
    },
    "variants": [
      {
        "whenUserHasStatus": "classico-obito-eye",
        "cost": {
          "specific": {
            "ninjutsu": 1
          }
        },
        "effects": [
          {
            "type": "damage",
            "amount": 30,
            "damageType": "affliction"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-obito-fire",
      "name": "Obito Goukakyuu no Jutsu",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": false,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "affliction"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Obito Sharingan
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-obito-3",
    "name": "Obito Sharingan",
    "description": "Obito ativa seu Sharingan, ganhando 15 pontos de redução de dano por 4 turnos. Durante esse tempo, se algum aliado de Obito usar uma nova habilidade, o custo de suas habilidades ofensivas será reduzido em 1 chakra aleatório por 1 turno. Essa habilidade não pode ser ativada duas vezes seguidas no mesmo aliado. Essa habilidade termina se Obito morrer.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 3,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-obito-eye"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-obito-eye",
      "name": "Obito Sharingan",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 15
        }
      ],
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 4 — Sparkling Parry
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-obito-4",
    "name": "Sparkling Parry",
    "description": "Essa habilidade faz Uchiha Obito invulnerável por 1 turno.",
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
        "statusId": "classico-obito-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-obito-hide",
      "name": "Sparkling Parry",
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
  "id": "classico-obito",
  "name": "Uchiha Obito",
  "image": image0,
  "description": "Um membro menor do clã Uchiha e um chuunin, Obito é integrante do Time Minato. Embora Obito não possua nenhuma habilidade extremamente poderosa, ele pode usar tudo o que sabe junto com seu Sharingan em desenvolvimento para lutar.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 189,
  abilities: [ability1, ability2, ability3, ability4],
})
