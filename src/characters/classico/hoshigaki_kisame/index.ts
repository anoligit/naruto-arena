import image0 from './hoshigaki_kisame_char_1.jpg'
import image1 from './hoshigaki_kisame_skill_1_(samehada_slash).jpg'
import image2 from './hoshigaki_kisame_skill_2_(samehada_shred).jpg'
import image3 from './hoshigaki_kisame_skill_3_(water_shark_projectile).jpg'
import image4 from './hoshigaki_kisame_skill_4_(samehada_scale_block).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Samehada Slash
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kisame-1",
    "name": "Samehada Slash",
    "description": "Usando sua espada, Samehada, Kisame corta um inimigo que recebe 20 de dano e tem as habilidades Physical e Chakra dele atordoadas por 1 turno.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
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
        "statusId": "classico-kisame-stun-0"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kisame-stun-0",
      "name": "Samehada Slash",
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

// HABILIDADE 2 — Samehada Shred
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kisame-2",
    "name": "Samehada Shred",
    "description": "Kisame desembrulha a Samehada e dilacera um inimigo. Por 2 turnos, esse inimigo recebe 20 de dano e 1 chakra aleatório é roubado de sua pool.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1,
        "ninjutsu": 1
      }
    },
    "cooldown": 2,
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
        "statusId": "classico-kisame-shred"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kisame-shred",
      "action": true,
      "endsWhenSourceDies": true,
      "name": "Samehada Shred",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 20,
          "damageType": "normal"
        },
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
      ],
      "indicatorNote": "Repete 20 de dano e rouba 1 energia disponível na próxima jogada de Kisame."
    }
  ]
}

// HABILIDADE 3 — Water Shark Projectile
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kisame-3",
    "name": "Water Shark Projectile",
    "description": "Usando um jato de água comprimida, Kisame causa 20 de dano a um inimigo e atordoa suas habilidades Chakra e Affliction por 1 turno.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
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
        "statusId": "classico-kisame-stun-2"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kisame-stun-2",
      "name": "Water Shark Projectile",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "chakra",
            "affliction"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Samehada Scale Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kisame-4",
    "name": "Samehada Scale Block",
    "description": "Essa habilidade faz Hoshigaki Kisame invulnerável por 1 turno.",
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
        "statusId": "classico-kisame-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kisame-hide",
      "name": "Samehada Scale Block",
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
  "id": "classico-kisame",
  "name": "Hoshigaki Kisame",
  "image": image0,
  "description": "Anteriormente um dos Sete Espadachins da Vila da Névoa, Kisame é um ninja rank S procurado. Ele é parceiro de Itachi e membro de uma organização misteriosa. Criado junto com Redxmaverick.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 115,
  abilities: [ability1, ability2, ability3, ability4],
})
