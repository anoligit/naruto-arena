import image0 from './hyuuga_neji_char_1.jpg'
import image1 from './hyuuga_neji_skill_1_(neji_gentle_fist).jpg'
import image2 from './hyuuga_neji_skill_2_(eight_trigram_heavenly_spin).jpg'
import image3 from './hyuuga_neji_skill_3_(eight_trigram_sixty-four_palms).jpg'
import image4 from './hyuuga_neji_skill_4_(neji_byakugan).jpeg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Neji Gentle Fist
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-neji-1",
    "name": "Neji Gentle Fist",
    "description": "Usando a forma especial de taijutsu do Clã Hyuuga, Neji irá causar 25 de dano a um inimigo por 2 turnos. Cada turno, as habilidades não-ofensivas desse inimigo irão custar 1 chakra aleatório adicional. No próximo turno, 'Eight Trigram Sixty-Four Palms' irá custar 1 taijutsu e 1 random chakra.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
      },
      "random": 1
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
        "amount": 25,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-neji-fist"
      },
      {
        "type": "apply-status",
        "statusId": "classico-neji-fist-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-neji-fist",
      "name": "Neji Gentle Fist",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "skill-cost-increase",
          "random": 1,
          "scope": "helpful"
        }
      ],
      "action": true,
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 25,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-neji-fist-ready",
      "name": "Neji Gentle Fist",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Eight Trigram Heavenly Spin
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-neji-2",
    "name": "Eight Trigram Heavenly Spin",
    "description": "Neji se torna invulnerável por 1 turno enquanto irá causar 15 de dano a todos os inimigos. No próximo turno, 'Eight Trigram Sixty-Four Palms' irá custar 1 bloodline e 1 random chakra.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-neji-spin-protection",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-neji-spin-ready",
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
      "id": "classico-neji-spin-protection",
      "name": "Eight Trigram Heavenly Spin",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "invulnerable"
        }
      ]
    },
    {
      "id": "classico-neji-spin-ready",
      "name": "Eight Trigram Heavenly Spin",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 3 — Eight Trigram Sixty-Four Palms
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-neji-3",
    "name": "Eight Trigram Sixty-Four Palms",
    "description": "Neji fecha todos os pontos de chakra de um inimigo, causando 40 de dano a ele e removendo 1 chakra aleatório dele por 1 turno.",
    "image": image3,
    "cost": {
      "specific": {
        "taijutsu": 1,
        "bloodline": 1
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
        "amount": 40,
        "damageType": "normal"
      },
      {
        "type": "remove-energy",
        "amount": 1
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-neji-fist-ready",
        "cost": {
          "specific": {
            "taijutsu": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 40,
            "damageType": "normal"
          },
          {
            "type": "remove-energy",
            "amount": 1
          }
        ]
      },
      {
        "whenUserHasStatus": "classico-neji-spin-ready",
        "cost": {
          "specific": {
            "bloodline": 1
          },
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 40,
            "damageType": "normal"
          },
          {
            "type": "remove-energy",
            "amount": 1
          }
        ]
      }
    ]
  }
}

// HABILIDADE 4 — Neji Byakugan
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-neji-4",
    "name": "Neji Byakugan",
    "description": "Essa habilidade faz Hyuuga Neji invulnerável por 1 turno.",
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
        "statusId": "classico-neji-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-neji-hide",
      "name": "Neji Byakugan",
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
  "id": "classico-neji",
  "name": "Hyuuga Neji",
  "image": image0,
  "description": "Um membro do Time Gai, Neji é o membro mais talentoso do Clã Hyuuga tanto em mente quanto em corpo. Neji pode usar as técnicas mais poderosas de seu clã, anulando o chakra de um inimigo ou se defendendo com uma defesa absoluta.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 118,
  abilities: [ability1, ability2, ability3, ability4],
})
