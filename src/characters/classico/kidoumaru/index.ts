import image0 from './kidoumaru_char_1.jpg'
import image1 from './kidoumaru_skill_1_(golden_arrow).jpg'
import image2 from './kidoumaru_skill_2_(summoning_kyodaigumo).jpg'
import image3 from './kidoumaru_skill_3_(spider_web).jpg'
import image4 from './kidoumaru_skill_4_(golden_armor).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Golden Arrow
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kidoumaru-1",
    "name": "Golden Arrow",
    "description": "Kidoumaru dispara uma seta especial feita de enzimas de sua boca em um inimigo, causando 50 de dano perfurante.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1,
        "ninjutsu": 1
      }
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
        "amount": 50,
        "damageType": "piercing"
      }
    ]
  }
}

// HABILIDADE 2 — Summoning: Kyodaigumo
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kidoumaru-2",
    "name": "Summoning: Kyodaigumo",
    "description": "Kidoumaru invoca Kyodaigumo, causando 10 de dano a todos os inimigos por 5 turnos. Nos próximos 5 turnos, Kidoumaru irá ganhar 10 de defesa destrutível permanente a cada turno e qualquer habilidade nova que um inimigo usar terá seu cooldown aumentado em 1.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1,
        "ninjutsu": 1
      }
    },
    "cooldown": 5,
    "target": "enemy",
    "classes": [
      "physical",
      "action",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kidoumaru-spiders"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kidoumaru-armor",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kidoumaru-growth",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kidoumaru-cd"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-kidoumaru-spiders",
      "name": "Summoning: Kyodaigumo",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-kidoumaru-armor",
      "name": "Summoning: Kyodaigumo",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 10
        }
      ]
    },
    {
      "id": "classico-kidoumaru-growth",
      "name": "Summoning: Kyodaigumo",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-kidoumaru-armor"
        }
      ]
    },
    {
      "id": "classico-kidoumaru-cd",
      "name": "Summoning: Kyodaigumo",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-kidoumaru-slow"
            }
          ]
        }
      ]
    },
    {
      "id": "classico-kidoumaru-slow",
      "name": "Summoning: Kyodaigumo",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "cooldown-increase",
          "amount": 1
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Spider Web
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kidoumaru-3",
    "name": "Spider Web",
    "description": "Kidoumaru usa teias de aranha nele mesmo ou em um aliado. Por 1 turno, o primeiro inimigo que usar uma nova habilidade de dano ofensiva nesse aliado será counterado e irá causar 15 a menos de dano não-affliction por 2 turnos. Se for bem-sucedida, o cooldown atual de 'Spider Web' será aumentado em 1.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1
      }
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
        "statusId": "classico-kidoumaru-web"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kidoumaru-web",
      "name": "Spider Web",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "counter-first-harmful",
          "onCounterAttackerStatusId": "classico-kidoumaru-weak"
        }
      ]
    },
    {
      "id": "classico-kidoumaru-weak",
      "name": "Spider Web",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 15,
          "excludesAffliction": true
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Golden Armor
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kidoumaru-4",
    "name": "Golden Armor",
    "description": "Essa habilidade faz Kidoumaru invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kidoumaru-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kidoumaru-hide",
      "name": "Golden Armor",
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
  "id": "classico-kidoumaru",
  "name": "Kidoumaru",
  "image": image0,
  "description": "Kidoumaru possui habilidades semelhantes às de uma aranha. Ele tem 6 braços e a capacidade de criar armas e armadilhas com um estranho líquido dourado semelhante a teias.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 175,
  abilities: [ability1, ability2, ability3, ability4],
})
