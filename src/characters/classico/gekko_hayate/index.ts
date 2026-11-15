import image0 from './gekko_hayate_char_1.jpg'
import image1 from './gekko_hayate_skill_1_(crescent_moon_slash).jpg'
import image2 from './gekko_hayate_skill_2_(dance_of_the_crescent_moon).jpg'
import image3 from './gekko_hayate_skill_3_(eavesdrop).jpg'
import image4 from './gekko_hayate_skill_4_(determined_retreat).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Crescent Moon Slash
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-hayate-1",
    "name": "Crescent Moon Slash",
    "description": "Hayate salta sobre um inimigo por cima, causando 20 de dano perfurante. Permanentemente, 'Dance of the Crescent Moon' causará 10 de dano adicional sempre que esta habilidade for usada. Esse efeito é acumulativo.",
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
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hayate-dance-power",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hayate-dance-power",
      "name": "Crescent Moon Slash",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-hayate-2",
          "amount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Dance of the Crescent Moon
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-hayate-2",
    "name": "Dance of the Crescent Moon",
    "description": "Usando sua espada junto com genjutsu, Hayate torna-se invulnerável por 1 turno e causa 35 de dano a um inimigo.",
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
      "mental",
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
        "statusId": "classico-hayate-dance-protection",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hayate-dance-protection",
      "name": "Dance of the Crescent Moon",
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

// HABILIDADE 3 — Eavesdrop
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-hayate-3",
    "name": "Eavesdrop",
    "description": "Por 1 turno, a primeira habilidade ofensiva usada em Hayate será counterada. Esta habilidade é invisível no primeiro turno. Se for bem-sucedido, 'Dance of the Crescent Moon' irá permanentemente causar 10 de dano adicional sempre que esta habilidade for usada. Esse efeito é acumulativo.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 2,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-hayate-eavesdrop"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hayate-eavesdrop",
      "name": "Eavesdrop",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "counter-first-harmful",
          "onCounterStatusId": "classico-hayate-dance-power"
        }
      ],
      "invisible": true
    }
  ]
}

// HABILIDADE 4 — Determined Retreat
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-hayate-4",
    "name": "Determined Retreat",
    "description": "Essa habilidade faz Gekko Hayate invulnerável por 1 turno.",
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
        "statusId": "classico-hayate-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hayate-hide",
      "name": "Determined Retreat",
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
  "id": "classico-hayate",
  "name": "Gekko Hayate",
  "image": image0,
  "description": "Gekko Hayate é um jounin e um dos instrutores dos exames chuunin em Konoha. Ele é um shinobi inteligente que se distancia dos inimigos para usar técnicas ilusórias.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 111,
  abilities: [ability1, ability2, ability3, ability4],
})
