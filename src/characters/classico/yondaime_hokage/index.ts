import image0 from './yondaime_hokage_char_1.jpg'
import image1 from './yondaime_hokage_skill_1_(hiraishin_rasengan).jpg'
import image2 from './yondaime_hokage_skill_2_(space_time_barrier).jpg'
import image3 from './yondaime_hokage_skill_3_(partial_dead_demon_consuming_seal).jpg'
import image4 from './yondaime_hokage_skill_4_(kunai_defense).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Hiraishin Rasengan
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-yondaime-1",
    "name": "Hiraishin Rasengan",
    "description": "Yondaime causa 40 de dano em um inimigo, que ignora invulnerabilidade, e não pode ser counterado nem refletido. No turno seguinte, essa habilidade custará 1 chakra ninjutsu e causará 35 de dano.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1,
        "genjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 40,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-yondaime-rasengan-ready",
        "recipient": "user"
      }
    ],
    "allowInvulnerableTarget": true,
    "cannotBeCountered": true,
    "variants": [
      {
        "whenUserHasStatus": "classico-yondaime-rasengan-ready",
        "cost": {
          "specific": {
            "ninjutsu": 1
          }
        },
        "effects": [
          {
            "type": "damage",
            "amount": 35,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-yondaime-rasengan-ready",
            "recipient": "user"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yondaime-rasengan-ready",
      "name": "Hiraishin Rasengan",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Space Time Barrier
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-yondaime-2",
    "name": "Space Time Barrier",
    "description": "Usando suas habilidades espaço-temporais, Yondaime Hokage mira em um aliado ou em si mesmo. Por 1 turno, todas as novas habilidades não mentais usadas nesse aliado serão refletidas no inimigo. Essa habilidade é invisível.",
    "image": image2,
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
        "statusId": "classico-yondaime-barrier"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yondaime-barrier",
      "name": "Space Time Barrier",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "reflect",
          "classes": [
            "physical",
            "chakra",
            "affliction"
          ]
        }
      ],
      "invisible": true
    }
  ]
}

// HABILIDADE 3 — Partial Dead Demon Consuming Seal
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-yondaime-3",
    "name": "Partial Dead Demon Consuming Seal",
    "description": "Yondaime sela parte de um inimigo, causando 25 de dano affliction a ele e atordando as habilidades Physical and Chakra dele por 1 turno. Se a vida desse inimigo cair para 10 ou menos, ele será morto. Yondaime também sofrerá 15 de dano affliction*.",
    "image": image3,
    "cost": {
      "random": 2
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
        "amount": 25,
        "damageType": "affliction",
        "executeBelowHealth": 10
      },
      {
        "type": "apply-status",
        "statusId": "classico-yondaime-stun"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yondaime-stun",
      "name": "Partial Dead Demon Consuming Seal",
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

// HABILIDADE 4 — Kunai Defense
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-yondaime-4",
    "name": "Kunai Defense",
    "description": "Essa habilidade faz Yondaime Hokage invulnerável por 1 turno.",
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
        "statusId": "classico-yondaime-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yondaime-hide",
      "name": "Kunai Defense",
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
  "id": "classico-yondaime",
  "name": "Yondaime Hokage",
  "image": image0,
  "description": "O Quarto Hokage era conhecido como o Flash Amarelo, considerado por todos o shinobi mais rápido que já existiu. Ele também é o pai de Uzumaki Naruto e quem selou o Kyuubi em seu filho.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 149,
  abilities: [ability1, ability2, ability3, ability4],
})
