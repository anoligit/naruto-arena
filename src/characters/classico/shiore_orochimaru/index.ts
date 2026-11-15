import image0 from './shiore_orochimaru_char_1.png'
import image1 from './shiore_orochimaru_skill_1_(five_elements_seal).png'
import image2 from './shiore_orochimaru_skill_2_(giant_snake_bind).png'
import image3 from './shiore_orochimaru_skill_3_(curse_seal).png'
import image4 from './shiore_orochimaru_skill_4_(snake_body_replacement).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Five Elements Seal
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-shiore-1",
    "name": "Five Elements Seal",
    "description": "Shiore sela um inimigo, causando 10 de dano affliction a ele por 3 turnos. Durante esse tempo, esse inimigo irá causar 10 a menos de dano não-affliction e suas habilidades ofensivas irão custar 1 chakra aleatório adicional.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shiore-seal"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shiore-seal",
      "name": "Five Elements Seal",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 10,
          "excludesAffliction": true
        },
        {
          "type": "skill-cost-increase",
          "random": 1,
          "scope": "harmful"
        }
      ],
      "action": false,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "affliction"
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Giant Snake Bind
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-shiore-2",
    "name": "Giant Snake Bind",
    "description": "Shiore invoca uma cobra gigante e prende um inimigo, causando 20 de dano a ele por 2 turnos. No primeiro turno, esse inimigo será atordoado por 1 turno.",
    "image": image2,
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
      "action",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shiore-snake"
      },
      {
        "type": "apply-status",
        "statusId": "classico-shiore-stun"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shiore-snake",
      "name": "Giant Snake Bind",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 20,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-shiore-stun",
      "name": "Giant Snake Bind",
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

// HABILIDADE 3 — Curse Seal
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-shiore-3",
    "name": "Curse Seal",
    "description": "Shiore coloca um selo amaldiçoado em um inimigo, roubando 5 de vida dele por 3 turnos. Enquanto ativo, esse inimigo não poderá se tornar invulnerável*. Durante esse tempo, se esse inimigo for morto, Shiore ganha 1 chakra aleatório*.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "affliction",
      "action",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "steal-health",
        "amount": 5
      },
      {
        "type": "apply-status",
        "statusId": "classico-shiore-curse"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shiore-curse",
      "name": "Curse Seal",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "prevent-invulnerability"
        }
      ],
      "action": true,
      "periodicEffects": [
        {
          "type": "steal-health",
          "amount": 5
        }
      ],
      "onTargetDeathEffects": [
        {
          "type": "gain-energy",
          "amount": 1
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Snake Body Replacement
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-shiore-4",
    "name": "Snake Body Replacement",
    "description": "Essa habilidade faz Shiore Orochimaru invulnerável por 1 turno.",
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
        "statusId": "classico-shiore-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-shiore-hide",
      "name": "Snake Body Replacement",
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
  "id": "classico-shiore",
  "name": "Shiore Orochimaru",
  "image": image0,
  "description": "Originalmente um genin da Vila da Grama que participava dos Exames Chuunin, Shiore foi morto por Orochimaru pouco antes do início dos exames. Orochimaru então tomou o corpo de Shiore e o usou como disfarce para se infiltrar nos Exames Chuunin e avaliar o potencial de Uchiha Sasuke como um possível receptáculo futuro.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 182,
  abilities: [ability1, ability2, ability3, ability4],
})
