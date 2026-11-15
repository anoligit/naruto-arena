import image0 from './shukaku_gaara_char_1.png'
import image1 from './shukaku_gaara_skill_1_(sand_claw).jpg'
import image2 from './shukaku_gaara_skill_2_(constricting_sand_prison).jpg'
import image3 from './shukaku_gaara_skill_3_(sand_transformation).jpg'
import image4 from './shukaku_gaara_skill_4_(thick_sand_coat).jpg'
import image5 from './shukaku_gaara_skill_5_(drilling_air_bullet).png'
import image6 from './shukaku_gaara_skill_6_(true_awakening).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Sand Claw
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-shukaku-1",
    "name": "Sand Claw",
    "description": "Gaara ataca com uma garra de areia concentrada, causando 35 de dano a um inimigo e ganhando 5 de defesa destrutível.",
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
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shukaku-shield",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shukaku-shield",
      "name": "Sand Claw",
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

// HABILIDADE 2 — Constricting Sand Prison
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-shukaku-2",
    "name": "Constricting Sand Prison",
    "description": "Gaara prende um inimigo com areia, causando 10 de dano a ele a cada turno. Durante esse tempo, a primeira habilidade que esse inimigo usar será counterada e esta habilidade terminará. Se for bem-sucedido, o inimigo counterado irá receber 5 de dano adicional de habilidades não-affliction por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "physical",
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
        "statusId": "classico-shukaku-prison"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shukaku-prison",
      "name": "Constricting Sand Prison",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "counter-skill-use",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-shukaku-weak"
            }
          ]
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-shukaku-weak",
      "name": "Constricting Sand Prison",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 5,
          "excludesAffliction": true
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Sand Transformation
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-shukaku-3",
    "name": "Sand Transformation",
    "description": "A cada turno, por 3 turnos, Gaara ganhará 15 de defesa destrutível. Quando esta habilidade terminar, Gaara se transformará no Shukaku por 3 turnos, reduzindo o custo de 'Sand Claw' em 1 chakra aleatório e  'Constricting Sand Prison' e 'Sand Transformation'.",
    "image": image3,
    "cost": {
      "random": 2
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
        "statusId": "classico-shukaku-trans"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shukaku-growing"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shukaku-trans",
      "name": "Sand Transformation",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-shukaku-growing"
        }
      ],
      "onExpireEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-shukaku-awake"
        }
      ]
    },
    {
      "id": "classico-shukaku-growing",
      "name": "Sand Transformation",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 15
        }
      ]
    },
    {
      "id": "classico-shukaku-awake",
      "name": "Sand Transformation",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "skill-cost-reduction",
          "random": 1
        }
      ]
    },
    {
      "id": "classico-shukaku-power",
      "name": "Sand Transformation",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-multiplier",
          "skillId": "classico-shukaku-1",
          "multiplier": 2
        },
        {
          "type": "damage-multiplier",
          "skillId": "classico-shukaku-5",
          "multiplier": 2
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Thick Sand Coat
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-shukaku-4",
    "name": "Thick Sand Coat",
    "description": "Essa habilidade faz Shukaku Gaara invulnerável por 1 turno.",
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
        "statusId": "classico-shukaku-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shukaku-hide",
      "name": "Thick Sand Coat",
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

// HABILIDADE 5 — Drilling Air Bullet
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-shukaku-5",
    "name": "Drilling Air Bullet",
    "description": "Lançando uma poderosa bola de vento, Gaara causa 45 de dano perfurante a um inimigo.",
    "image": image5,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 1
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
        "type": "damage",
        "amount": 45,
        "damageType": "piercing"
      }
    ],
    "replacement": {
      "skillId": "classico-shukaku-2",
      "whenStatusId": "classico-shukaku-awake"
    }
  }
}

// HABILIDADE 6 — True Awakening
const ability6: AbilityDefinition = {
  "skill": {
    "id": "classico-shukaku-6",
    "name": "True Awakening",
    "description": "Gaara permite que o Shukaku desperte verdadeiramente de dentro dele, deixando-o assumir o controle. No turno seguinte, 'Sand Claw' e 'Drilling Air Bullet' causarão o dobro de dano e essa skill não terá custo. ",
    "image": image6,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 0,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-shukaku-power"
      }
    ],
    "replacement": {
      "skillId": "classico-shukaku-3",
      "whenStatusId": "classico-shukaku-awake"
    },
    "variants": [
      {
        "whenUserHasStatus": "classico-shukaku-power",
        "cost": {},
        "effects": [
          {
            "type": "apply-status",
            "statusId": "classico-shukaku-power"
          }
        ]
      }
    ]
  }
}

export default defineCharacter({
  "id": "classico-shukaku",
  "name": "Shukaku Gaara",
  "image": image0,
  "description": "Tendo vivido dentro dele o tempo todo, Shukaku é uma das nove bestas com cauda e está muito ansioso para escapar e causar o caos no mundo. Enquanto Shukaku toma conta de Gaara aos poucos, seu próprio poder aumenta, permitindo-lhe destruir seus inimigos com poderosos ataques de areia.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 183,
  abilities: [ability1, ability2, ability3, ability4, ability5, ability6],
})
