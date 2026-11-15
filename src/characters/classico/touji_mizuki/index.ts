import image0 from './touji_mizuki_char_1.jpg'
import image1 from './touji_mizuki_skill_1_(kunai_assault).jpeg'
import image2 from './touji_mizuki_skill_2_(execution_shuriken).jpg'
import image3 from './touji_mizuki_skill_3_(genjutsu_ambush_tactics).png'
import image4 from './touji_mizuki_skill_4_(mizuki_dodge).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Kunai Assault
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-mizuki-1",
    "name": "Kunai Assault",
    "description": "Mizuki arremessa um número de kunais a um inimigo, causando 15 de dano perfurante a ele por 2 turnos.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "action",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-mizuki-knives"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-mizuki-ready",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 30,
            "damageType": "piercing"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-mizuki-knives",
      "name": "Kunai Assault",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "piercing"
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Execution Shuriken
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-mizuki-2",
    "name": "Execution Shuriken",
    "description": "Mizuki arremessa uma de suas shurikens gigantes a um inimigo, causando 20 de dano perfurante a ele, e 10 de dano adicional para cada 20 de vida que ele perdeu. Mizuki carrega apenas 2 dessas shurikens gigantes ao mesmo tempo e só pode usar essa habilidade duas vezes em uma partida.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1
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
        "amount": 20,
        "damageType": "piercing",
        "healthScaling": {
          "step": 20,
          "bonus": 10,
          "of": "target"
        }
      }
    ],
    "maxUses": 2,
    "enhancement": {
      "whenUserHasStatus": "classico-mizuki-ready",
      "damage": {
        "amount": 50,
        "damageType": "piercing"
      }
    }
  }
}

// HABILIDADE 3 — Genjutsu Ambush Tactics
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-mizuki-3",
    "name": "Genjutsu Ambush Tactics",
    "description": "No próximo turno, Mizuki se tornará invulnerável, 'Execution Shuriken' irá causar 30 de dano adicional e 'Kunai Assault' irá causar 30 de dano perfurante instantaneamente. Essa habilidade terminará se Mizuki receber novo dano ofensivo. Essa habilidade é invisível no primeiro turno.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-mizuki-ambush"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-mizuki-ambush",
      "name": "Genjutsu Ambush Tactics",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [],
      "invisible": true,
      "onExpireEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-mizuki-ready"
        }
      ]
    },
    {
      "id": "classico-mizuki-ready",
      "name": "Genjutsu Ambush Tactics",
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

// HABILIDADE 4 — Mizuki Dodge
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-mizuki-4",
    "name": "Mizuki Dodge",
    "description": "Essa habilidade faz Touji Mizuki invulnerável por 1 turno.",
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
        "statusId": "classico-mizuki-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-mizuki-hide",
      "name": "Mizuki Dodge",
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
  "id": "classico-mizuki",
  "name": "Touji Mizuki",
  "image": image0,
  "description": "Instrutor de Konoha, Mizuki é um chuunin e velho amigo de Iruka que, com o tempo, se tornou invejoso e mesquinho. Embora Mizuki não possua habilidades especiais, ele sabe ser paciente e esperar o momento certo para atacar.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 169,
  abilities: [ability1, ability2, ability3, ability4],
})
