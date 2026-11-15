import image0 from './umino_iruka_char_1.jpg'
import image1 from './umino_iruka_skill_1_(shuriken_throw).jpg'
import image2 from './umino_iruka_skill_2_(shield_ally).jpg'
import image3 from './umino_iruka_skill_3_(sealed_bombs_square_formation).jpg'
import image4 from './umino_iruka_skill_4_(kunai_parry).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Shuriken Throw
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-iruka-1",
    "name": "Shuriken Throw",
    "description": "Iruka lança alguns shurikens em um inimigo, que recebe 20 de dano perfurante. Essa habilidade irá causar 10 de dano adicional a cada 30 de vida que Iruka tiver perdido.",
    "image": image1,
    "cost": {
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
        "amount": 20,
        "damageType": "piercing",
        "healthScaling": {
          "step": 30,
          "bonus": 10
        }
      }
    ]
  }
}

// HABILIDADE 2 — Shield Ally
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-iruka-2",
    "name": "Shield Ally",
    "description": "Iruka usa seu próprio corpo para proteger um aliado. Por 1 turno, esse aliado irá ignorar todo dano causado a ele. Essa habilidade é invisível.",
    "image": image2,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "ally",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-iruka-shield"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-iruka-shield",
      "name": "Shield Ally",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-immunity"
        }
      ],
      "invisible": true
    }
  ]
}

// HABILIDADE 3 — Sealed Bombs Square Formation
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-iruka-3",
    "name": "Sealed Bombs Square Formation",
    "description": "Iruka cria uma armadilha com um conjunto de selos explosivos. Nos próximos 2 turnos, um inimigo receberá 75% a mais de dano de habilidades melee. Durante esse tempo, se esse inimigo usar uma nova habilidade, ele irá receber 20 de dano perfurante e essa habilidade será encerrada.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-iruka-bombs"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-iruka-bombs",
      "name": "Sealed Bombs Square Formation",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "damage-taken-multiplier",
          "skillId": "*",
          "multiplier": 1.75,
          "classes": [
            "melee"
          ]
        },
        {
          "type": "on-skill-use-damage",
          "amount": 20,
          "damageType": "piercing"
        }
      ],
      "endsOnSkillUse": true
    }
  ]
}

// HABILIDADE 4 — Kunai Parry
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-iruka-4",
    "name": "Kunai Parry",
    "description": "Essa habilidade faz Umino Iruka invulnerável por 1 turno.",
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
        "statusId": "classico-iruka-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-iruka-hide",
      "name": "Kunai Parry",
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
  "id": "classico-iruka",
  "name": "Umino Iruka",
  "image": image0,
  "description": "Iruka é um dos instrutores na academia ninja de Konoha. Ele é um ninja equilibrado, com habilidades e habilidades diversas.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 151,
  abilities: [ability1, ability2, ability3, ability4],
})
