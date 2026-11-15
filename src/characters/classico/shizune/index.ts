import image0 from './shizune_char_1.jpg'
import image1 from './shizune_skill_1_(prepared_needle_shot).jpg'
import image2 from './shizune_skill_2_(poison_mist).jpg'
import image3 from './shizune_skill_3_(healing_resuscitation_regeneration).jpg'
import image4 from './shizune_skill_4_(shizune_dodge).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Prepared Needle Shot
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-shizune-1",
    "name": "Prepared Needle Shot",
    "description": "Shizune dispara agulhas escondidas em um inimigo, causando 15 de dano a ele.",
    "image": image1,
    "cost": {
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
        "amount": 15,
        "damageType": "normal"
      }
    ]
  }
}

// HABILIDADE 2 — Poison Mist
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-shizune-2",
    "name": "Poison Mist",
    "description": "Shizune exala uma nuvem de veneno em um inimigo, que irá receber 10 de dano affliction por 3 turnos. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, ele irá receber 10 de dano adicional de habilidades não-Affliction por 1 turn.",
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
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shizune-poison"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shizune-poison",
      "name": "Poison Mist",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "on-harmful-skill",
          "endsWithTriggerTurn": false,
          "statusId": "classico-shizune-exposed"
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "affliction"
        }
      ]
    },
    {
      "id": "classico-shizune-exposed",
      "name": "Poison Mist",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 10,
          "excludesAffliction": true
        }
      ],
      "replaces": [
        "classico-shizune-exposed"
      ]
    }
  ]
}

// HABILIDADE 3 — Healing Resuscitation Regeneration
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-shizune-3",
    "name": "Healing Resuscitation Regeneration",
    "description": "Usando essa técnica avançada de cura, Shizune cura um aliado em 35 de vida e remove todas as habilidades Affliction inimigas dele.",
    "image": image3,
    "cost": {
      "random": 2
    },
    "cooldown": 1,
    "target": "ally",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 35
      },
      {
        "type": "remove-harmful-statuses",
        "classes": [
          "affliction"
        ]
      }
    ]
  }
}

// HABILIDADE 4 — Shizune Dodge
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-shizune-4",
    "name": "Shizune Dodge",
    "description": "Essa habilidade faz Shizune invulnerável por 1 turno.",
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
        "statusId": "classico-shizune-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shizune-hide",
      "name": "Shizune Dodge",
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
  "id": "classico-shizune",
  "name": "Shizune",
  "image": image0,
  "description": "Shizune é a assistente de Tsunade. Uma combatente competente que usa venenos e agulhas, ela também é uma médica altamente habilidosa capaz de curar seus aliados.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 148,
  abilities: [ability1, ability2, ability3, ability4],
})
