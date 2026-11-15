import image0 from './mitarashi_anko_char_1.jpg'
import image1 from './mitarashi_anko_skill_1_(dual_pin).jpg'
import image2 from './mitarashi_anko_skill_2_(twin_snakes).jpg'
import image3 from './mitarashi_anko_skill_3_(hidden_shadow_snake_hand).jpg'
import image4 from './mitarashi_anko_skill_4_(quick_reflexes).jpg'
import image5 from './mitarashi_anko_skill_5_(dragon_fire).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Dual Pin
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-anko-1",
    "name": "Dual Pin",
    "description": "Anko irá causar 5 dano affliction a um inimigo permanentemente. Até que esse inimigo morra, ele irá receber 5 de dano adicional de todas as outras habilidades de Anko. Durante esse tempo, essa habilidade será substituída por 'Dragon Fire'.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 5,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-anko-pin"
      },
      {
        "type": "apply-status",
        "statusId": "classico-anko-focus",
        "recipient": "user",
        "linkTo": "target"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-anko-pin",
      "name": "Dual Pin",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-anko-2",
          "amount": 5,
          "fromSourceOnly": true
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-anko-3",
          "amount": 5,
          "fromSourceOnly": true
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-anko-5",
          "amount": 5,
          "fromSourceOnly": true
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 5,
          "damageType": "affliction"
        }
      ]
    },
    {
      "id": "classico-anko-focus",
      "name": "Dual Pin",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "endsWhenLinkedTargetDies": true
    }
  ]
}

// HABILIDADE 2 — Twin Snakes
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-anko-2",
    "name": "Twin Snakes",
    "description": "Anko entrega uma grande dose de veneno, causando 15 dano affliction a um inimigo aleatório. Por 1 turno, Anko se tornará invulnerável a habilidades Physical. No próximo turno, as habilidades de Anko irão custar 1 chakra aleatório a menos.",
    "image": image2,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "self",
    "classes": [
      "affliction",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction",
        "recipient": "random-enemy"
      },
      {
        "type": "apply-status",
        "statusId": "classico-anko-safe"
      },
      {
        "type": "apply-status",
        "statusId": "classico-anko-cheap"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-anko-safe",
      "name": "Twin Snakes",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "invulnerable",
          "classes": [
            "physical"
          ]
        }
      ]
    },
    {
      "id": "classico-anko-cheap",
      "name": "Twin Snakes",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "skill-cost-reduction",
          "random": 1
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Hidden Shadow Snake Hand
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-anko-3",
    "name": "Hidden Shadow Snake Hand",
    "description": "Anko invoca cobras debaixo de sua jaqueta que atingem um inimigo, causando 20 de dano e *15 de dano affliction a ele. Em seguida, Anko recebe 5 de defesa destrutível permanente.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "melee",
      "affliction"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-anko-shield",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-anko-shield",
      "name": "Hidden Shadow Snake Hand",
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

// HABILIDADE 4 — Quick Reflexes
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-anko-4",
    "name": "Quick Reflexes",
    "description": "Essa habilidade faz Mitarashi Anko invulnerável por 1 turno.",
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
        "statusId": "classico-anko-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-anko-hide",
      "name": "Quick Reflexes",
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

// HABILIDADE 5 — Dragon Fire
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-anko-5",
    "name": "Dragon Fire",
    "description": "Anko incendeia o campo de batalha com fogo, causando 10 de dano affliction a um inimigo e 5 de dano affliction a todos os outros por 2 turnos. Durante esse tempo, eles também irão receber 5 de dano affliction adicional de todas as outras habilidades Affliction. Essa habilidade termina quando Anko morrer.",
    "image": image5,
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
        "amount": 5,
        "damageType": "affliction",
        "primaryAmount": 10
      },
      {
        "type": "apply-status",
        "statusId": "classico-anko-fire"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "replacement": {
      "skillId": "classico-anko-1",
      "whenStatusId": "classico-anko-focus"
    }
  },
  "statuses": [
    {
      "id": "classico-anko-fire",
      "name": "Dragon Fire",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "classes": [
            "affliction"
          ],
          "amount": 5
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 5,
          "damageType": "affliction",
          "primaryAmount": 10
        }
      ],
      "endsWhenSourceDies": true
    }
  ]
}

export default defineCharacter({
  "id": "classico-anko",
  "name": "Mitarashi Anko",
  "image": image0,
  "description": "Uma ex-aluna de Orochimaru e portadora do Selo Amaldiçoado do Céu, Anko é agora uma Jounin especial que supervisiona a segunda parte dos exames Chuunin.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 177,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
