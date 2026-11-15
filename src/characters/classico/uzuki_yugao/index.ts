import image0 from './uzuki_yugao_char_1.jpg'
import image1 from './uzuki_yugao_skill_1_(hazy_moon_night).jpg'
import image2 from './uzuki_yugao_skill_2_(crescent_moon_strike).jpg'
import image3 from './uzuki_yugao_skill_3_(sealing_technique).jpg'
import image4 from './uzuki_yugao_skill_4_(yugao_hide).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Hazy Moon Night
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-yugao-1",
    "name": "Hazy Moon Night",
    "description": "Yugao se cobre com uma névoa e atinge um inimigo, causando 20 de dano perfurante a ele. Por 1 turno, se Yugao ou um aliado usar uma nova habilidade no alvo de 'Hazy Moon Night', ele se tornará invulnerável por 1 turno. Essa habilidade é ativada uma vez por aliado. A marca permanece até o fim da próxima jogada da Yugao. Quem recebe a invulnerabilidade é o aliado que usou a nova habilidade no alvo marcado, uma vez por aliado. A marca permanece até o fim da próxima jogada da Yugao.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 1,
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
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-yugao-moon-mark"
      },
      {
        "type": "apply-status",
        "statusId": "classico-yugao-moon-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yugao-moon-mark",
      "name": "Hazy Moon Night",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-ally-targeted-hit",
          "statusId": "classico-yugao-moon-protection"
        }
      ]
    },
    {
      "id": "classico-yugao-moon-protection",
      "name": "Hazy Moon Night",
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
      "id": "classico-yugao-moon-ready",
      "name": "Hazy Moon Night",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-yugao-2",
          "amount": 15
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Crescent Moon Strike
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-yugao-2",
    "name": "Crescent Moon Strike",
    "description": "Yugao realiza um elegante corte com sua espada, causando 15 de dano perfurante a um inimigo. Essa habilidade irá causar 15 de dano adicional se 'Hazy Moon Night' foi usada no turno anterior.",
    "image": image2,
    "cost": {
      "random": 1
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
        "damageType": "piercing"
      }
    ]
  }
}

// HABILIDADE 3 — Sealing Technique
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-yugao-3",
    "name": "Sealing Technique",
    "description": "Yugao nega as habilidades de um inimigo, causando 10 de dano affliction a ele. Por 2 turnos, esse inimigo se tornará invulnerável a habilidades defensivas e suas habilidades ofensivas serão atordoadas. Durante esse tempo, ele irá receber 5 de dano adicional de habilidades não-aflitivas.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1,
        "genjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-yugao-seal"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yugao-seal",
      "name": "Sealing Technique",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "stun",
          "scope": "harmful"
        },
        {
          "type": "invulnerable",
          "blocksAllies": true,
          "scope": "helpful"
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "*",
          "amount": 5,
          "excludesAffliction": true
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Yugao Hide
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-yugao-4",
    "name": "Yugao Hide",
    "description": "Essa habilidade faz Uzuki Yugao invulnerável por 1 turno.",
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
        "statusId": "classico-yugao-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-yugao-hide",
      "name": "Yugao Hide",
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
  "id": "classico-yugao",
  "name": "Uzuki Yugao",
  "image": image0,
  "description": "Membro da Anbu de Konoha, Yugao foi amante de Gekkou Hayate antes de sua morte prematura, sendo uma pessoa dedicada, esforçada e gentil. Yugao luta usando uma poderosa esgrima aprimorada por genjutsu, e também é proficiente no uso de técnicas de selamento para incapacitar seus inimigos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 154,
  abilities: [ability1, ability2, ability3, ability4],
})
