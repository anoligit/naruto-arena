import image0 from './drunken_lee_char_1.png'
import image1 from './drunken_lee_skill_1_(unpredictable_assault).png'
import image2 from './drunken_lee_skill_2_(drunken_fist).jpeg'
import image3 from './drunken_lee_skill_3_(drunken_counter).png'
import image4 from './drunken_lee_skill_4_(drunken_leap).jpeg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Unpredictable Assault
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-drunken-1",
    "name": "Unpredictable Assault",
    "description": "Usando suas habilidades de mestre bêbado, Lee causa 20 de dano a um inimigo que não pode ser counterado. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, Lee curará instantaneamente 10 de vida. Permanentemente, Lee causará 5 de dano adicional. Este efeito acumula.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
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
        "amount": 20,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-drunken-assault-mark"
      },
      {
        "type": "apply-status",
        "statusId": "classico-drunken-power",
        "recipient": "user"
      }
    ],
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-drunken-assault-mark",
      "name": "Unpredictable Assault",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-harmful-skill-heal-source",
          "amount": 10
        }
      ]
    },
    {
      "id": "classico-drunken-power",
      "name": "Unpredictable Assault",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "*",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Drunken Fist
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-drunken-2",
    "name": "Drunken Fist",
    "description": "Lee avança contra um inimigo e o acerta com um golpe nocauteante, causando 30 de dano. Por 1 turno, as habilidades desse inimigo causarão 100% a menos de dano.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      },
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 30,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-drunken-no-damage"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-drunken-no-damage",
      "name": "Drunken Fist",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction-percent",
          "percent": 100
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Drunken Counter
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-drunken-3",
    "name": "Drunken Counter",
    "description": "Lee mira em si mesmo ou em um aliado. Por 1 turno, a primeira habilidade física ofensiva usada nesse aliado será counterada. Se for bem-sucedido, o inimigo que foi counterado receberá 'Unpredictable Assault'. Essa habilidade é invisível.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 2,
    "target": "ally",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-drunken-counter"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-drunken-counter",
      "name": "Drunken Counter",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "counter-first-harmful",
          "responseSkillId": "classico-drunken-1",
          "classes": [
            "physical"
          ]
        }
      ],
      "invisible": true
    }
  ]
}

// HABILIDADE 4 — Drunken Leap
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-drunken-4",
    "name": "Drunken Leap",
    "description": "Essa habilidade faz Drunken Lee invulnerável por 1 turno.",
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
        "statusId": "classico-drunken-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-drunken-hide",
      "name": "Drunken Leap",
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
  "id": "classico-drunken",
  "name": "Drunken Lee",
  "image": image0,
  "description": "Rock Lee bebeu álcool acidentalmente em excesso e despertou sua técnica natural do Punho Bêbado, que lhe concedeu velocidade incrível e imprevisibilidade.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 109,
  abilities: [ability1, ability2, ability3, ability4],
})
