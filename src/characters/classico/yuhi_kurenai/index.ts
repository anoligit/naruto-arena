import image0 from './yuhi_kurenai_char_1.jpg'
import image1 from './yuhi_kurenai_skill_1_(cherry_blossom_suffocation).jpg'
import image2 from './yuhi_kurenai_skill_2_(plant_form_attack).jpg'
import image3 from './yuhi_kurenai_skill_3_(demonic_illusion_tree_binding_death).jpg'
import image4 from './yuhi_kurenai_skill_4_(vanishing_illusion).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Cherry Blossom Suffocation
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kurenai-1",
    "name": "Cherry Blossom Suffocation",
    "description": "Kurenai sufoca todos os inimigos com ilusórias flores de cerejeira, causando 10 de dano a eles por 3 turnos. Durante esse tempo, se 'Plant-Form Attack' for usada em um inimigo afetado por essa habilidade, ele terá as habilidades Physical e Chakra dele atordoado por 1 turno.",
    "image": image1,
    "cost": {
      "random": 2
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "mental",
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
        "statusId": "classico-kurenai-cherry"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-kurenai-cherry",
      "name": "Cherry Blossom Suffocation",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
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
    }
  ]
}

// HABILIDADE 2 — Plant Form Attack
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kurenai-2",
    "name": "Plant Form Attack",
    "description": "Kurenai atrapalha um inimigo com seu genjutsu, fazendo com que ele não possa reduzir dano ou se tornar invulnerável enquanto causa 20 de dano a ele por 1 turno. Se esse inimigo estiver afetado por 'Cherry Blossom Suffocation', as habilidades Physical e Chakra dele serão atordoadas por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "mental",
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
        "statusId": "classico-kurenai-deny"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kurenai-stun",
        "whenTargetHasStatus": "classico-kurenai-cherry"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kurenai-deny",
      "name": "Plant Form Attack",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
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
      "id": "classico-kurenai-stun",
      "name": "Plant Form Attack",
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
    }
  ]
}

// HABILIDADE 3 — Demonic Illusion: Tree Binding Death
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kurenai-3",
    "name": "Demonic Illusion: Tree Binding Death",
    "description": "Por 1 turno, a primeira habilidade physical ou chakra usada nela ou em um aliado será counterada. Se bem-sucedida, então, por 2 turnos, o inimigo counterado terá as habilidades physical e chakra dele atordoadas e irá receber o dobro de dano de habilidades mental.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 2,
    "target": "ally",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kurenai-counter"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kurenai-counter",
      "name": "Demonic Illusion: Tree Binding Death",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "counter-first-harmful",
          "classes": [
            "physical",
            "chakra"
          ],
          "onCounterAttackerStatusId": "classico-kurenai-punish"
        }
      ],
      "invisible": true
    },
    {
      "id": "classico-kurenai-punish",
      "name": "Demonic Illusion: Tree Binding Death",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "chakra"
          ]
        },
        {
          "type": "damage-taken-multiplier",
          "skillId": "*",
          "multiplier": 2,
          "classes": [
            "mental"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Vanishing Illusion
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kurenai-4",
    "name": "Vanishing Illusion",
    "description": "Essa habilidade faz Yuhi Kurenai invulnerável por 1 turno.",
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
        "statusId": "classico-kurenai-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kurenai-hide",
      "name": "Vanishing Illusion",
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
  "id": "classico-kurenai",
  "name": "Yuhi Kurenai",
  "image": image0,
  "description": "Yuhi Kurenai é uma jounin e líder de equipe de Hinata, Shino e Kiba. Ela é uma mestre em genjutsu, capaz de tanto incapacitar quanto atacar seus inimigos com ilusões.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 166,
  abilities: [ability1, ability2, ability3, ability4],
})
