import image0 from './kimimaro_char_1.jpg'
import image1 from './kimimaro_skill_1_(dance_of_the_camellia).jpg'
import image2 from './kimimaro_skill_2_(dance_of_the_clematis).jpg'
import image3 from './kimimaro_skill_3_(dance_of_the_seedling_fern).jpg'
import image4 from './kimimaro_skill_4_(bone_defense).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Dance of the Camellia
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kimimaro-1",
    "name": "Dance of the Camellia",
    "description": "Kimimaro usa seu taijutsu superior e ossos do braço como uma espada, causando 30 de dano a um inimigo. Essa habilidade não pode ser counterada ou refletida. Em seguida, Kimimaro irá receber 5 de dano affliction.",
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
      "melee",
      "affliction"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 30,
        "damageType": "normal"
      },
      {
        "type": "damage",
        "amount": 5,
        "damageType": "affliction",
        "recipient": "user"
      }
    ],
    "cannotBeCountered": true
  }
}

// HABILIDADE 2 — Dance of the Clematis
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kimimaro-2",
    "name": "Dance of the Clematis",
    "description": "Kimimaro ataca um inimigo com uma lança óssea extremamente dura e afiada, causando 45 de dano a ele e atordoando-o por 1 turno. Essa habilidade não pode ser counterada ou refletida. Em seguida, Kimimaro irá receber 10 de dano affliction.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1,
        "bloodline": 1
      }
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
        "amount": 45,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kimimaro-stun"
      },
      {
        "type": "damage",
        "amount": 10,
        "damageType": "affliction",
        "recipient": "user"
      }
    ],
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-kimimaro-stun",
      "name": "Dance of the Clematis",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Dance of the Seedling Fern
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kimimaro-3",
    "name": "Dance of the Seedling Fern",
    "description": "Kimimaro cria uma floresta de ossos afiados, causando 35 de dano perfurante e fazendo eles causarem 15 a menos de dano não-affliction com as habilidades Physical e Chakra deles. Essa habilidade não pode ser counterada ou refletida. Em seguida, Kimimaro irá receber 15 de dano affliction por 2 turnos.* A redução no dano inimigo dura 1 turno. Kimimaro recebe 15 de dano affliction na execução e mais 15 na próxima jogada dele.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 2
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged",
      "affliction"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kimimaro-weakness"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kimimaro-fern-cost",
        "recipient": "user"
      }
    ],
    "cannotBeCountered": true,
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-kimimaro-weakness",
      "name": "Dance of the Seedling Fern",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 15,
          "excludesAffliction": true,
          "classes": [
            "physical",
            "chakra"
          ]
        }
      ]
    },
    {
      "id": "classico-kimimaro-fern-cost",
      "name": "Dance of the Seedling Fern",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "affliction"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Bone Defense
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kimimaro-4",
    "name": "Bone Defense",
    "description": "Essa habilidade faz Kimimaro invulnerável por 1 turno.",
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
        "statusId": "classico-kimimaro-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kimimaro-hide",
      "name": "Bone Defense",
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
  "id": "classico-kimimaro",
  "name": "Kimimaro",
  "image": image0,
  "description": "Membro do Quinteto do Som, Kimimaro era o líder e o mais forte da equipe antes de sua doença. Sua linhagem sanguínea lhe concede um poder ofensivo imparável; no entanto, sua doença está lentamente o matando, lhe restando muito pouco tempo.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 121,
  abilities: [ability1, ability2, ability3, ability4],
})
