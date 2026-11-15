import image0 from './tayuya_char_1.jpg'
import image1 from './tayuya_skill_1_(summoning_doki).jpg'
import image2 from './tayuya_skill_2_(doki_ghosts).jpg'
import image3 from './tayuya_skill_3_(demonic_flute_illusion).jpg'
import image4 from './tayuya_skill_4_(tayuya_insight).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Summoning: Doki
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-tayuya-1",
    "name": "Summoning: Doki",
    "description": "Tayuya invoca os Demônios Doki. Os Demônios Doki irão causar 15 de dano perfurante a todos os inimigos por 2 turnos. Nos próximos 2 turnos, Tayuya terá 10 pontos de redução de dano. Por 1 turno, 'Doki Ghosts' será aprimorada.",
    "image": image1,
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
      "action",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-doki"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-guard",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-drain",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-tayuya-doki",
      "name": "Summoning: Doki",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "piercing"
        }
      ]
    },
    {
      "id": "classico-tayuya-guard",
      "name": "Summoning: Doki",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10
        }
      ]
    },
    {
      "id": "classico-tayuya-drain",
      "name": "Summoning: Doki",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Doki Ghosts
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-tayuya-2",
    "name": "Doki Ghosts",
    "description": "Os fantasmas Doki causam 15 de dano affliction a um inimigo. Se usada um turno após 'Summoning: Doki', essa habilidade também irá remover 1 chakra aleatório. Se usada um turno após 'Demonic Flute Illusion', essa habilidade também irá atordoar completamente por 1 turno.",
    "image": image2,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction"
      },
      {
        "type": "remove-energy",
        "amount": 1,
        "whenUserHasStatus": "classico-tayuya-drain"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-full",
        "whenUserHasStatus": "classico-tayuya-flute"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tayuya-full",
      "name": "Doki Ghosts",
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

// HABILIDADE 3 — Demonic Flute Illusion
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-tayuya-3",
    "name": "Demonic Flute Illusion",
    "description": "Tocando uma melodia de genjutsu em sua flauta, Tayuya atordoa as habilidades Physical e Chakra de todos os inimigos por 1 turno. No próximo turno, 'Doki Ghosts' será aprimorada. Essa habilidade não pode ser counterada.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      },
      "random": 1
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-stun"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-flute",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-tayuya-stun",
      "name": "Demonic Flute Illusion",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "chakra"
          ]
        }
      ]
    },
    {
      "id": "classico-tayuya-flute",
      "name": "Demonic Flute Illusion",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 4 — Tayuya Insight
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-tayuya-4",
    "name": "Tayuya Insight",
    "description": "Essa habilidade faz Tayuya invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-tayuya-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tayuya-hide",
      "name": "Tayuya Insight",
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
  "id": "classico-tayuya",
  "name": "Tayuya",
  "image": image0,
  "description": "A única arma de Tayuya é uma flauta com a qual ela pode lançar Genjutsu ou controlar três demônios invocados, os Doki.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 165,
  abilities: [ability1, ability2, ability3, ability4],
})
