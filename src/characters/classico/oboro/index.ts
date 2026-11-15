import image0 from './oboro_char_1.jpg'
import image1 from './oboro_skill_1_(underground_ambush).jpg'
import image2 from './oboro_skill_2_(exploding_kunai).jpg'
import image3 from './oboro_skill_3_(haze_clones).jpg'
import image4 from './oboro_skill_4_(fleet_of_foot).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Underground Ambush
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-oboro-1",
    "name": "Underground Ambush",
    "description": "Escondido no chão, Oboro ataca um inimigo por trás, causando 20 de dano e atordoando suas habilidades Physical e Mental por 1 turno. Durante 'Haze Clones', essa habilidade é aprimorada e atinge todos os inimigos.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
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
        "statusId": "classico-oboro-stun"
      }
    ],
    "targetExpansion": {
      "whenUserHasStatus": "classico-oboro-clones",
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-oboro-stun",
      "name": "Underground Ambush",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "mental"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Exploding Kunai
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-oboro-2",
    "name": "Exploding Kunai",
    "description": "Oboro lança um kunai com uma etiqueta explosiva, causando 15 de dano a todos os inimigos. Durante 'Haze Clones', essa habilidade é aprimorada e causa 20 de dano.",
    "image": image2,
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
        "amount": 15,
        "damageType": "normal"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "enhancement": {
      "whenUserHasStatus": "classico-oboro-clones",
      "damage": {
        "amount": 20,
        "damageType": "normal"
      }
    }
  }
}

// HABILIDADE 3 — Haze Clones
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-oboro-3",
    "name": "Haze Clones",
    "description": "Oboro cria duplicatas ilusórias de si mesmo. Nos próximos 3 turnos, 'Exploding Kunai' e 'Underground Ambush' serão aprimorados. Durante esse tempo, Oboro ganha 30 pontos de defesa destrutível e se torna invulnerável a habilidades Mental.",
    "image": image3,
    "cost": {
      "random": 2
    },
    "cooldown": 5,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-oboro-clones"
      },
      {
        "type": "apply-status",
        "statusId": "classico-oboro-shield"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-oboro-clones",
      "name": "Haze Clones",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "invulnerable",
          "classes": [
            "mental"
          ]
        }
      ]
    },
    {
      "id": "classico-oboro-shield",
      "name": "Haze Clones",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 30
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Fleet of Foot
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-oboro-4",
    "name": "Fleet of Foot",
    "description": "Essa habilidade faz Oboro invulnerável por 1 turno.",
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
        "statusId": "classico-oboro-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-oboro-hide",
      "name": "Fleet of Foot",
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
  "id": "classico-oboro",
  "name": "Oboro",
  "image": image0,
  "description": "Um Genin da Vila da Chuva nos exames Chuunin, Oboro é especializado em distrair seus oponentes com ilusões e atacar quando menos esperado.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 146,
  abilities: [ability1, ability2, ability3, ability4],
})
