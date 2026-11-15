import image0 from './tsurugi_misumi_char_1.png'
import image1 from './tsurugi_misumi_skill_1_(flexible_twisting_joints).jpg'
import image2 from './tsurugi_misumi_skill_2_(soft_physique_modification).jpg'
import image3 from './tsurugi_misumi_skill_3_(tighten_joints).jpg'
import image4 from './tsurugi_misumi_skill_4_(misumi_block).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Flexible Twisting Joints
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-misumi-1",
    "name": "Flexible Twisting Joints",
    "description": "Usando suas articulações exageradamente soltas, Misumi atinge um aliado ou inimigo. Se usado em um inimigo, ele causará 15 de dano que ignora invulnerabilidade. Se usado em um aliado, esse aliado ganhará 15 pontos de redução de dano por 1 turno.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "ally-or-enemy",
    "classes": [
      "physical",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal",
        "targetCondition": "enemy"
      },
      {
        "type": "apply-status",
        "statusId": "classico-misumi-guard",
        "targetCondition": "ally"
      }
    ],
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-misumi-guard",
      "name": "Flexible Twisting Joints",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 15
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Soft Physique Modification
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-misumi-2",
    "name": "Soft Physique Modification",
    "description": "Misumi se envolve em torno de um inimigo. Por 2 turnos, todas as novas habilidades ofensivas usadas em Misumi serão refletidas para aquele inimigo. Durante esse tempo, aquele inimigo não poderá reduzir dano nem se tornar invulnerável.",
    "image": image2,
    "cost": {
      "random": 2
    },
    "cooldown": 4,
    "target": "enemy",
    "classes": [
      "physical",
      "control",
      "melee"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-misumi-soft"
      },
      {
        "type": "apply-status",
        "statusId": "classico-misumi-reflect",
        "recipient": "user",
        "linkTo": "target"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-misumi-soft",
      "name": "Soft Physique Modification",
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
      ],
      "control": true
    },
    {
      "id": "classico-misumi-reflect",
      "name": "Soft Physique Modification",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "reflect",
          "classes": [
            "physical",
            "chakra",
            "mental",
            "affliction"
          ],
          "toLinkedTarget": true
        }
      ],
      "endsWhenLinkedTargetDies": true
    }
  ]
}

// HABILIDADE 3 — Tighten Joints
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-misumi-3",
    "name": "Tighten Joints",
    "description": "Misumi aperta suas articulações, ganhando 15 pontos de defesa destrutível. Se 'Soft Physique Modification' estiver ativo, o inimigo no qual está ativo também irá receber 20 de dano e será atordoado por 1 turno.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "self",
    "classes": [
      "physical",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-misumi-shield"
      },
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal",
        "recipient": "linked-target",
        "whenUserHasStatus": "classico-misumi-reflect"
      },
      {
        "type": "apply-status",
        "statusId": "classico-misumi-stun",
        "recipient": "linked-target",
        "whenUserHasStatus": "classico-misumi-reflect"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-misumi-shield",
      "name": "Tighten Joints",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 15
        }
      ]
    },
    {
      "id": "classico-misumi-stun",
      "name": "Tighten Joints",
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

// HABILIDADE 4 — Misumi Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-misumi-4",
    "name": "Misumi Block",
    "description": "Essa habilidade faz Tsurugi Misumi invulnerável por 1 turno.",
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
        "statusId": "classico-misumi-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-misumi-hide",
      "name": "Misumi Block",
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
  "id": "classico-misumi",
  "name": "Tsurugi Misumi",
  "image": image0,
  "description": "Um genin da Vila do Som que se infiltrou em Konoha como espião, Misumi gosta de tomar a iniciativa, preferindo ser o primeiro a atacar no combate. Com suas habilidades únicas, Misumi pode flexionar seus músculos e ossos, torcendo-os para se enrolar em seus inimigos, ou até mesmo defender seus aliados.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 186,
  abilities: [ability1, ability2, ability3, ability4],
})
