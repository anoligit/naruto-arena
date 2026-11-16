import image0 from './young_kakashi_char_1.jpg'
import image1 from './young_kakashi_skill_1_(white_fang_slash).jpg'
import image2 from './young_kakashi_skill_2_(amateur_raikiri).jpg'
import image3 from './young_kakashi_skill_3_(implanted_sharingan).jpg'
import image4 from './young_kakashi_skill_4_(sword_parry).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — White Fang Slash
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kakashi-1",
    "name": "White Fang Slash",
    "description": "Usando sua espada, Young Kakashi causa 20 de dano perfurante a um inimigo. Por 1 turno, esse inimigo irá causar 5 a menos de dano não-affliction. No próximo turno, as habilidades de Young Kakashi irão causar 10 de dano adicional.",
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
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-weak"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-boost",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-full-stun",
        "whenUserHasStatus": "classico-young-kakashi-reaction-stun"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kakashi-weak",
      "name": "White Fang Slash",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 5,
          "excludesAffliction": true
        }
      ]
    },
    {
      "id": "classico-young-kakashi-boost",
      "name": "White Fang Slash",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "*",
          "amount": 10
        }
      ],
      "replaces": [
        "classico-young-kakashi-boost"
      ]
    }
  ]
}

// HABILIDADE 2 — Amateur Raikiri
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kakashi-2",
    "name": "Amateur Raikiri",
    "description": "Usando uma forma mais fraca de seu jutsu característico, Young Kakashi causa 25 de dano perfurante a um inimigo. Por 1 turno, esse inimigo irá causar 5 a menos de dano não-affliction. No próximo turno, as habilidades de Young Kakashi irão causar 10 de dano adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
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
        "amount": 25,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-weak"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-boost",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-full-stun",
        "whenUserHasStatus": "classico-young-kakashi-reaction-stun"
      }
    ]
  }
}

// HABILIDADE 3 — Implanted Sharingan
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kakashi-3",
    "name": "Implanted Sharingan",
    "description": "Por 1 turno, se um inimigo usar uma habilidade que remove ou rouba chakra, Kakashi irá ganhar 1 chakra aleatório; se usar uma habilidade que atordoa, as habilidades de Kakashi irão atordoar por 1 turno; se usar uma habilidade que causa dano, Kakashi irá causar 10 de dano adicional por 1 turno. Essa habilidade é invisível e termina quando for ativada.",
    "image": image3,
    "cost": {},
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-young-kakashi-observe"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kakashi-observe",
      "name": "Implanted Sharingan",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-skill-use",
          "skillEffect": "damage",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-young-kakashi-boost",
              "recipient": "user"
            }
          ]
        },
        {
          "type": "on-skill-use",
          "skillEffect": "energy",
          "effects": [
            {
              "type": "gain-energy",
              "amount": 1
            }
          ]
        },
        {
          "type": "on-skill-use",
          "skillEffect": "stun",
          "effects": [
            {
              "type": "apply-status",
              "statusId": "classico-young-kakashi-reaction-stun",
              "recipient": "user"
            }
          ]
        }
      ],
      "invisible": true,
      "endsOnSkillUse": true
    },
    {
      "id": "classico-young-kakashi-reaction-stun",
      "name": "Implanted Sharingan",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    },
    {
      "id": "classico-young-kakashi-full-stun",
      "name": "Implanted Sharingan",
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

// HABILIDADE 4 — Sword Parry
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kakashi-4",
    "name": "Sword Parry",
    "description": "Essa habilidade torna Young Kakashi invulnerável por 1 turno.",
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
        "statusId": "classico-young-kakashi-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kakashi-hide",
      "name": "Sword Parry",
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
  "id": "classico-young-kakashi",
  "name": "Young Kakashi",
  "image": image0,
  "description": "Um jounin aos 13 anos e filho da lendária Canino Branco, Kakashi é membro da Equipe Minato. Usando seu ninjutsu precoce e o sharingan emprestado, Kakashi pode lutar em pé de igualdade contra qualquer adulto.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 21,
  abilities: [ability1, ability2, ability3, ability4],
})
