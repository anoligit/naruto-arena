import image0 from './jiraiya_char_1.jpg'
import image1 from './jiraiya_skill_1_(great_fireball_technique).jpg'
import image2 from './jiraiya_skill_2_(summoning_toad_mouth_bind).jpg'
import image3 from './jiraiya_skill_3_(major_summoning_gamabunta).jpg'
import image4 from './jiraiya_skill_4_(spiked_buddha).jpg'
import image5 from './jiraiya_skill_5_(toad_oil_flame_bullet).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Great Fireball Technique
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-jiraiya-1",
    "name": "Great Fireball Technique",
    "description": "Jiraiya cospe uma grande bola de fogo em todos os inimigos, causando 20 de dano affliction a um inimigo e 10 de dano affliction a todos os outros.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
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
        "amount": 10,
        "damageType": "affliction",
        "primaryAmount": 20
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  }
}

// HABILIDADE 2 — Summoning: Toad Mouth Bind
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-jiraiya-2",
    "name": "Summoning: Toad Mouth Bind",
    "description": "Jiraiya invoca o estômago de um sapo gigante, colocando todos os personagens dentro dele. Por 2 turnos, os inimigos não poderão reduzir dano nem se tornar invulneráveis e, durante esse tempo, se Jiraiya ou um de seus aliados receber dano de uma habilidade não-affliction, eles se tornarão invulneráveis por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 4,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-jiraiya-bind",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiraiya-protect",
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-jiraiya-bind",
      "name": "Summoning: Toad Mouth Bind",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "prevent-invulnerability"
        }
      ]
    },
    {
      "id": "classico-jiraiya-protect",
      "name": "Summoning: Toad Mouth Bind",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "on-new-skill-damage",
          "statusId": "classico-jiraiya-triggered-invulnerability",
          "exceptClasses": [
            "affliction"
          ]
        }
      ]
    },
    {
      "id": "classico-jiraiya-triggered-invulnerability",
      "name": "Summoning: Toad Mouth Bind",
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

// HABILIDADE 3 — Major Summoning: Gamabunta
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-jiraiya-3",
    "name": "Major Summoning: Gamabunta",
    "description": "Jiraiya invoca Gamabunta no campo de batalha, causando 25 affliction de dano a todos os inimigos. Pelo resto do jogo, o time inimigo irá receber 5 de dano adicional de habilidades affliction e essa habilidade será substituída por 'Toad Oil Flame Bullet'.",
    "image": image3,
    "cost": {
      "specific": {
        "taijutsu": 1,
        "bloodline": 1,
        "genjutsu": 1
      }
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
        "amount": 25,
        "damageType": "affliction",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiraiya-affliction",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiraiya-gamabunta",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-jiraiya-affliction",
      "name": "Major Summoning: Gamabunta",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 5,
          "classes": [
            "affliction"
          ]
        }
      ]
    },
    {
      "id": "classico-jiraiya-gamabunta",
      "name": "Major Summoning: Gamabunta",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "indicatorNote": "Libera Toad Oil Flame Bullet."
    }
  ]
}

// HABILIDADE 4 — Spiked Buddha
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-jiraiya-4",
    "name": "Spiked Buddha",
    "description": "Essa habilidade faz Jiraiya invulnerável por 1 turno.",
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
        "statusId": "classico-jiraiya-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-jiraiya-hide",
      "name": "Spiked Buddha",
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

// HABILIDADE 5 — Toad Oil Flame Bullet
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-jiraiya-5",
    "name": "Toad Oil Flame Bullet",
    "description": "Gamabunta cospe ainda mais óleo no time inimigo, seguido por Jiraiya cuspindo fogo neles, causando 15 de dano affliction a todos os inimigos por 2 turnos.",
    "image": image5,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "affliction",
      "action",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-jiraiya-oil"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "replacement": {
      "skillId": "classico-jiraiya-3",
      "whenStatusId": "classico-jiraiya-gamabunta"
    }
  },
  "statuses": [
    {
      "id": "classico-jiraiya-oil",
      "name": "Toad Oil Flame Bullet",
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
          "damageType": "affliction"
        }
      ]
    }
  ]
}

export default defineCharacter({
  "id": "classico-jiraiya",
  "name": "Jiraiya",
  "image": image0,
  "description": "Jiraiya é um dos Lendários Sannin. Com seus diversos jutsus baseados em sapos, ele é capaz de enfraquecer e causar dano a todos os seus oponentes.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 156,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
