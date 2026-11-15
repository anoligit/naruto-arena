import image0 from './uchiha_madara_char_1.png'
import image1 from './uchiha_madara_skill_1_(eternal_mangekyou).png'
import image2 from './uchiha_madara_skill_2_(great_fire_annihilation).png'
import image3 from './uchiha_madara_skill_3_(madara_susanoo).png'
import image4 from './uchiha_madara_skill_4_(emergency_susanoo_defense).png'
import image5 from './uchiha_madara_skill_5_(armored_susanoo_assault).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Eternal Mangekyou
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-madara-1",
    "name": "Eternal Mangekyou",
    "description": "Madara ativa seu Eternal Mangekyou Sharingan. Por 4 turnos, todo dano não affliction recebido será reduzido para um máximo de 25. Durante esse tempo, Madara pode usar essa habilidade novamente sem custo para ignorar todos os efeitos ofensivas, exceto dano, por 1 turno.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-madara-eye"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-madara-eye",
        "cost": {},
        "effects": [
          {
            "type": "apply-status",
            "statusId": "classico-madara-immune"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-madara-eye",
      "name": "Eternal Mangekyou",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "incoming-damage-cap",
          "amount": 25
        }
      ]
    },
    {
      "id": "classico-madara-immune",
      "name": "Eternal Mangekyou",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "harmful-effect-immunity"
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Great Fire Annihilation
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-madara-2",
    "name": "Great Fire Annihilation",
    "description": "Madara incendeia todo o campo de batalha, causando 10 de dano affliction a um inimigo e 5 a todos os outros por 3 turnos. Durante esse tempo, se um inimigo usar uma nova habilidade defensiva, ele receberá 10 de dano affliction. Enquanto 'Eternal Mangekyou' estiver ativo, essa habilidade será aprimorada e não terá tempo de recarga.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
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
        "amount": 5,
        "damageType": "affliction",
        "primaryAmount": 10
      },
      {
        "type": "apply-status",
        "statusId": "classico-madara-fire"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "variants": [
      {
        "whenUserHasStatus": "classico-madara-eye",
        "cost": {
          "specific": {
            "ninjutsu": 1
          }
        },
        "cooldown": 0,
        "effects": [
          {
            "type": "damage",
            "amount": 5,
            "damageType": "affliction",
            "primaryAmount": 10
          },
          {
            "type": "apply-status",
            "statusId": "classico-madara-fire"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-madara-fire",
      "name": "Great Fire Annihilation",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 5,
          "damageType": "affliction",
          "primaryAmount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Madara: Susanoo
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-madara-3",
    "name": "Madara: Susanoo",
    "description": "Madara se envolve em seu Susanoo, ganhando 70 de defesa destrutível. Durante esse tempo, essa habilidade será substituída por 'Armored Susanoo Assault'. Usar esta habilidade reiniciará os acúmulos de 'Armored Susanoo Assault'.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 2
      }
    },
    "cooldown": 5,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-madara-susanoo"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-madara-susanoo",
      "name": "Madara: Susanoo",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 70
        }
      ],
      "replaces": [
        "classico-madara-susanoo"
      ]
    }
  ]
}

// HABILIDADE 4 — Emergency Susanoo Defense
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-madara-4",
    "name": "Emergency Susanoo Defense",
    "description": "Essa habilidade faz Uchiha Madara invulnerável por 1 turno.",
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
        "statusId": "classico-madara-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-madara-hide",
      "name": "Emergency Susanoo Defense",
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

// HABILIDADE 5 — Armored Susanoo Assault
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-madara-5",
    "name": "Armored Susanoo Assault",
    "description": "O Susanoo de Madara se fortalece e ataca um inimigo com sua espada, causando 30 de dano mais 5 adicionais para cada turno em que 'Madara: Susanoo' esteve ativo. Esta habilidade não pode ser counterada.",
    "image": image5,
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
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 30,
        "damageType": "normal",
        "statusTurnScaling": {
          "statusId": "classico-madara-susanoo",
          "amount": 5
        }
      }
    ],
    "cannotBeCountered": true,
    "replacement": {
      "skillId": "classico-madara-3",
      "whenStatusId": "classico-madara-susanoo"
    }
  }
}

export default defineCharacter({
  "id": "classico-madara",
  "name": "Uchiha Madara",
  "image": image0,
  "description": "O antigo líder do clã Uchiha durante a fundação de Konoha, que discordava do Hokage sobre como alcançar a paz. Madara foi um dos poucos ninjas capazes de rivalizar com o poder de Hashirama, usando seu Mangekyou e Susanoo.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 188,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
