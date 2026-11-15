import image0 from './maito_gai_char_1.jpg'
import image1 from './maito_gai_skill_1_(strong_whirlwind).jpg'
import image2 from './maito_gai_skill_2_(sixth_gate_opening).jpg'
import image3 from './maito_gai_skill_3_(counter_punch).jpg'
import image4 from './maito_gai_skill_4_(gai_dodge).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Strong Whirlwind
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-gai-1",
    "name": "Strong Whirlwind",
    "description": "Gai desfere um chute com um forte turbilhão, causando 35 de dano a um inimigo. Durante 'Sixth Gate Opening', essa habilidade é aprimorada e causa 65 de dano perfurante que irá ignorar invulnerabilidade.",
    "image": image1,
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
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "normal"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-gai-gate",
      "damage": {
        "amount": 65,
        "damageType": "piercing"
      },
      "ignoreInvulnerability": true
    }
  }
}

// HABILIDADE 2 — Sixth Gate Opening
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-gai-2",
    "name": "Sixth Gate Opening",
    "description": "Gai abre seis portões de chakra, tomando 40% de sua vida atual como dano affliction* e se tornando invulnerável por 2 turnos. Pelos 2 turnos seguintes, 'Strong Whirlwind' irá causar 65 de dano perfurante que irá ignorar invulnerabilidade.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "mental",
      "instant",
      "affliction"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 0,
        "damageType": "affliction",
        "currentHealthPercent": 40
      },
      {
        "type": "apply-status",
        "statusId": "classico-gai-gate"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-gai-gate",
      "name": "Sixth Gate Opening",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "invulnerable"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Counter Punch
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-gai-3",
    "name": "Counter Punch",
    "description": "Gai escolhe um inimigo para contra-atacar. Se esse inimigo usar uma nova habilidade ofensiva, ele será counterado e receberá 30 de dano. Essa habilidade é invisível.",
    "image": image3,
    "cost": {
      "specific": {
        "taijutsu": 1
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
        "type": "apply-status",
        "statusId": "classico-gai-counter"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-gai-counter",
      "name": "Counter Punch",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "counter-skill-use",
          "harmfulOnly": true,
          "effects": [
            {
              "type": "damage",
              "amount": 30,
              "damageType": "normal"
            }
          ]
        }
      ],
      "invisible": true
    }
  ]
}

// HABILIDADE 4 — Gai Dodge
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-gai-4",
    "name": "Gai Dodge",
    "description": "Essa habilidade faz Maito Gai invulnerável por 1 turno.",
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
        "statusId": "classico-gai-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-gai-hide",
      "name": "Gai Dodge",
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
  "id": "classico-gai",
  "name": "Maito Gai",
  "image": image0,
  "description": "Gai é o sensei de Lee, Tenten e Neji. Ele e Lee usam o mesmo estilo de luta, o Punho Forte, que envolve ataques de alta velocidade e a abertura dos portões internos de chakra.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 167,
  abilities: [ability1, ability2, ability3, ability4],
})
