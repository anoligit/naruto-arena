import image0 from './hyuuga_hanabi_char_1.jpg'
import image1 from './hyuuga_hanabi_skill_1_(hanabi_gentle_fist).png'
import image2 from './hyuuga_hanabi_skill_2_(hanabi_kaiten).png'
import image3 from './hyuuga_hanabi_skill_3_(unyielding_tenacity).jpg'
import image4 from './hyuuga_hanabi_skill_4_(byakugan_insight).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Hanabi Gentle Fist
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-hanabi-1",
    "name": "Hanabi Gentle Fist",
    "description": "Hanabi causa 20 de dano a um inimigo por 1 turno, e 10 de dano no turno seguinte. Por 1 turno, se esse inimigo usar uma nova habilidade não-chakra, ele irá perder 1 chakra não-genjutsu.",
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
      "action",
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
        "statusId": "classico-hanabi-dot-0"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hanabi-reaction-0"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-hanabi-tenacity",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 20,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hanabi-dot-0"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hanabi-reaction-0"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hanabi-dot-0",
      "name": "Hanabi Gentle Fist",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-hanabi-reaction-0",
      "name": "Hanabi Gentle Fist",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "exceptClasses": [
            "chakra"
          ],
          "effects": [
            {
              "type": "remove-energy",
              "amount": 1,
              "types": [
                "bloodline",
                "ninjutsu",
                "taijutsu"
              ]
            }
          ]
        }
      ],
      "action": true,
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 2 — Hanabi Kaiten
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-hanabi-2",
    "name": "Hanabi Kaiten",
    "description": "Hanabi gira em direção a um inimigo, causando 20 de dano a ele por 1 turno, e 10 de dano no turno seguinte. Por 1 turno, se esse inimigo usar uma nova habilidade não-physical, as habilidades dele serão atordoadas por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "action",
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
        "statusId": "classico-hanabi-dot-1"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hanabi-reaction-1"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-hanabi-tenacity",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 20,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hanabi-dot-1"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hanabi-reaction-1"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hanabi-dot-1",
      "name": "Hanabi Kaiten",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-hanabi-reaction-1",
      "name": "Hanabi Kaiten",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "exceptClasses": [
            "physical"
          ],
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-hanabi-reactive-stun"
            }
          ]
        }
      ],
      "action": true,
      "endsWhenSourceDies": true
    },
    {
      "id": "classico-hanabi-reactive-stun",
      "name": "Hanabi Kaiten",
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

// HABILIDADE 3 — Unyielding Tenacity
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-hanabi-3",
    "name": "Unyielding Tenacity",
    "description": "Hanabi luta até o fim. Por 2 turnos, Hanabi não poderá ser morta e irá ignorar todos os efeitos de atordoamento. Durante esse tempo, 'Hanabi Gentle Fist' e 'Hanabi Kaiten' irão custar 1 chakra aleatório e Hanabi irá causar 5 de dano adicional.",
    "image": image3,
    "cost": {},
    "cooldown": 4,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-hanabi-tenacity"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hanabi-tenacity",
      "name": "Unyielding Tenacity",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "cannot-die"
        },
        {
          "type": "stun-immunity"
        },
        {
          "type": "outgoing-damage-bonus",
          "skillId": "*",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Byakugan Insight
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-hanabi-4",
    "name": "Byakugan Insight",
    "description": "Essa habilidade faz Hyuuga Hanabi invulnerável por 1 turno.",
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
        "statusId": "classico-hanabi-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hanabi-hide",
      "name": "Byakugan Insight",
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
  "id": "classico-hanabi",
  "name": "Hyuuga Hanabi",
  "image": image0,
  "description": "A irmã mais nova de Hinata, Hanabi é um membro do clã Hyuuga da família principal, que treina incansavelmente para provar seu valor. Embora jovem, as habilidades de Hanabi superam as de sua irmã mais velha, e, embora ainda não consiga utilizar seu Byakugan e falte força física, Hanabi compensa isso com sua tenacidade e velocidade.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 122,
  abilities: [ability1, ability2, ability3, ability4],
})
