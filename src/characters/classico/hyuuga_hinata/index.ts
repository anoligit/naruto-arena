import image0 from './hyuuga_hinata_char_1.png'
import image1 from './hyuuga_hinata_skill_1_(hinata_gentle_fist).png'
import image2 from './hyuuga_hinata_skill_2_(eight_trigrams_64_palms_protection).png'
import image3 from './hyuuga_hinata_skill_3_(byakugan).png'
import image4 from './hyuuga_hinata_skill_4_(hinata_block).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Hinata Gentle Fist
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-hinata-1",
    "name": "Hinata Gentle Fist",
    "description": "Usando o estilo de taijutsu do clã Hyuuga, Hinata causa 15 de dano a um inimigo. Durante 'Byakugan', essa habilidade irá instantaneamente remover 1 chakra taijutsu ou ninjutsu dele. Permanentemente, esse inimigo irá receber 10 de dano adicional das habilidades de Hinata.",
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
        "amount": 15,
        "damageType": "normal"
      },
      {
        "type": "remove-energy",
        "amount": 1,
        "types": [
          "taijutsu",
          "ninjutsu"
        ],
        "whenUserHasStatus": "classico-hinata-byakugan"
      },
      {
        "type": "apply-status",
        "statusId": "classico-hinata-mark"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hinata-mark",
      "name": "Hinata Gentle Fist",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-hinata-1",
          "amount": 10,
          "fromSourceOnly": true
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-hinata-2",
          "amount": 10,
          "fromSourceOnly": true
        }
      ],
      "replaces": [
        "classico-hinata-mark"
      ]
    }
  ]
}

// HABILIDADE 2 — Eight Trigrams 64 Palms Protection
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-hinata-2",
    "name": "Eight Trigrams 64 Palms Protection",
    "description": "Hinata causa 10 de dano perfurante a todos os inimigos por 2 turnos, e todos os aliados, incluindo ela, irão ganhar 10 pontos de redução de dano impenetravel por 2 turnos. Durante 'Byakugan', essa habilidade será aprimorada e causará 5 de dano adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "chakra",
      "action",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "piercing",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-hinata-palms",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-hinata-team-protection",
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
      "id": "classico-hinata-palms",
      "name": "Eight Trigrams 64 Palms Protection",
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
          "damageType": "piercing"
        }
      ]
    },
    {
      "id": "classico-hinata-team-protection",
      "name": "Eight Trigrams 64 Palms Protection",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10,
          "includesPiercing": true
        }
      ],
      "action": true,
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 3 — Byakugan
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-hinata-3",
    "name": "Byakugan",
    "description": "Hinata ativa seu Byakugan e ganha 5 pontos de redução de dano por 3 turnos. Nos próximos 3 turnos, 'Byakugan' irá revelar qualquer habilidade invisível usada pela equipe inimiga, e as habilidades de Hinata serão melhoradas. Essa habilidade não pode ser counterada e termina se Hinata morrer. Todos os efeitos invisíveis inimigos ficam visíveis apenas enquanto este Byakugan estiver ativo.",
    "image": image3,
    "cost": {},
    "cooldown": 3,
    "target": "self",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-hinata-byakugan"
      }
    ],
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-hinata-byakugan",
      "name": "Byakugan",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 5
        },
        {
          "type": "reveal-enemy-invisible"
        },
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-hinata-2",
          "amount": 5
        }
      ],
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 4 — Hinata Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-hinata-4",
    "name": "Hinata Block",
    "description": "Essa habilidade faz Hyuuga Hinata invulnerável por 1 turno.",
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
        "statusId": "classico-hinata-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-hinata-hide",
      "name": "Hinata Block",
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

// ORDEM NA LISTA: para mover só este personagem, use order: { position: 4 }, por exemplo.
export default defineCharacter({
  "id": "classico-hinata",
  "name": "Hyuuga Hinata",
  "image": image0,
  "description": "Uma Genin do Time 8, Hinata é a próxima na linha do clã Hyuuga, mas é tímida e muito reservada. Usando o Byakugan, marca registrada dos Hyuuga, Hinata é capaz de atingir delicadamente os Pontos de Chakra de um inimigo enquanto defende a equipe.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 4,
  abilities: [ability1, ability2, ability3, ability4],
})
