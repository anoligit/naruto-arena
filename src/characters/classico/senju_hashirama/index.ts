import image0 from './senju_hashirama_char_1.png'
import image1 from './senju_hashirama_skill_1_(wood_release_wood_dragon).png'
import image2 from './senju_hashirama_skill_2_(wood_release_wood_human).png'
import image3 from './senju_hashirama_skill_3_(wood_release_true_thousand_hands).png'
import image4 from './senju_hashirama_skill_4_(sage_knowledge).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Wood Release: Wood Dragon
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-hashirama-1",
    "name": "Wood Release: Wood Dragon",
    "description": "Por 2 turnos, Hashirama ficará invulnerável a todas as habilidades Chakra* e, por 2 turnos, roubará 1 chakra aleatório de um inimigo. Nos próximos 2 turnos, esta habilidade poderá ser usada novamente por 1 chakra aleatório para roubar todas as habilidades defensivas de um inimigo.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "action",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "steal-energy",
        "amount": 1,
        "types": [
          "bloodline",
          "ninjutsu",
          "taijutsu",
          "genjutsu"
        ]
      },
      {
        "type": "apply-status",
        "statusId": "classico-hashirama-dragon"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hashirama-ds",
        "recipient": "user"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-hashirama-ds",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "steal-defenses"
          }
        ]
      },
      {
        "whenUserHasStatus": "classico-hashirama-buddha",
        "cost": {
          "specific": {
            "bloodline": 1
          }
        },
        "effects": [
          {
            "type": "steal-energy",
            "amount": 1,
            "types": [
              "bloodline",
              "ninjutsu",
              "taijutsu",
              "genjutsu"
            ]
          },
          {
            "type": "apply-status",
            "statusId": "classico-hashirama-dragon"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hashirama-ds",
            "recipient": "user"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hashirama-dragon",
      "name": "Wood Release: Wood Dragon",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "steal-energy",
          "amount": 1,
          "types": [
            "bloodline",
            "ninjutsu",
            "taijutsu",
            "genjutsu"
          ]
        }
      ]
    },
    {
      "id": "classico-hashirama-ds",
      "name": "Wood Release: Wood Dragon",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "invulnerable",
          "classes": [
            "chakra"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Wood Release: Wood Human
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-hashirama-2",
    "name": "Wood Release: Wood Human",
    "description": "Por 2 turnos, Hashirama ficará invulnerável a todas as habilidades Physical* e, por 2 turnos, causará 20 de dano a um inimigo. Nos próximos 2 turnos, esta habilidade poderá ser usada novamente por 1 chakra aleatório para causar 20 de dano a um inimigo.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "action",
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
        "statusId": "classico-hashirama-human"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hashirama-hs",
        "recipient": "user"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-hashirama-hs",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 20,
            "damageType": "normal"
          }
        ]
      },
      {
        "whenUserHasStatus": "classico-hashirama-buddha",
        "cost": {
          "specific": {
            "bloodline": 1
          }
        },
        "effects": [
          {
            "type": "damage",
            "amount": 20,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hashirama-human"
          },
          {
            "type": "apply-status",
            "statusId": "classico-hashirama-hs",
            "recipient": "user"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hashirama-human",
      "name": "Wood Release: Wood Human",
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
      "id": "classico-hashirama-hs",
      "name": "Wood Release: Wood Human",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "invulnerable",
          "classes": [
            "physical"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Wood Release: True Thousand Hands
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-hashirama-3",
    "name": "Wood Release: True Thousand Hands",
    "description": "Hashirama invoca um Buda gigante que concede 35 de defesa destrutível a ele e seus aliados. Por 3 turnos, se utilizadas, 'Wood Release: Wood Dragon!' e 'Wood Release: Wood Human!' irão inicialmente durar 1 turno adicional e custar 1 chakra aleatório a menos.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 2
      }
    },
    "cooldown": 5,
    "target": "ally",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-hashirama-shield"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hashirama-buddha",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-living-allies"
    }
  },
  "statuses": [
    {
      "id": "classico-hashirama-shield",
      "name": "Wood Release: True Thousand Hands",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 35
        }
      ]
    },
    {
      "id": "classico-hashirama-buddha",
      "name": "Wood Release: True Thousand Hands",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 4 — Sage Knowledge
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-hashirama-4",
    "name": "Sage Knowledge",
    "description": "Essa habilidade faz Senju Hashirama invulnerável por 1 turno.",
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
        "statusId": "classico-hashirama-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hashirama-hide",
      "name": "Sage Knowledge",
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
  "id": "classico-hashirama",
  "name": "Senju Hashirama",
  "image": image0,
  "description": "Membro do clã Senju e um dos maiores guerreiros do Período dos Estados Combatentes, Hashirama foi um dos fundadores de Konoha. Mesmo antes de se tornar Hokage, já demonstrava sua força e habilidade com seus incomparáveis jutsus de Liberação de Madeira.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 181,
  abilities: [ability1, ability2, ability3, ability4],
})
