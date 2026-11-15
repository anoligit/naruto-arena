import image0 from './young_kushina_char_1.png'
import image1 from './young_kushina_skill_1_(red-hot_habanero).png'
import image2 from './young_kushina_skill_2_(fierce_punch).png'
import image3 from './young_kushina_skill_3_(dropping_kick).png'
import image4 from './young_kushina_skill_4_(skilled_landing).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Red-Hot Habanero
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kushina-1",
    "name": "Red-Hot Habanero",
    "description": "Kushina usa sua força para proteger um aliado. Nos próximos 3 turnos, se Kushina usar 'Fierce Punch' ou 'Dropping Kick', o aliado protegido irá curar 15 de vida. Durante esse tempo, ela irá ignorar efeitos atordoantes.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "ally",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-young-kushina-habanero"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kushina-stun-immunity",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kushina-habanero",
      "name": "Red-Hot Habanero",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "on-source-skill-use-heal",
          "skillIds": [
            "classico-young-kushina-2",
            "classico-young-kushina-3"
          ],
          "amount": 15
        }
      ],
      "endsWhenSourceDies": true
    },
    {
      "id": "classico-young-kushina-stun-immunity",
      "name": "Red-Hot Habanero",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "stun-immunity"
        }
      ],
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 2 — Fierce Punch
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kushina-2",
    "name": "Fierce Punch",
    "description": "Kushina acerta um poderoso soco em um inimigo, causando 20 de dano a ele. No próximo turno, 'Dropping Kick' irá causar 20 de dano adicional.",
    "image": image2,
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
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kushina-stun",
        "whenUserHasStatus": "classico-young-kushina-kick-ready"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kushina-punch-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kushina-punch-ready",
      "name": "Fierce Punch",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-young-kushina-3",
          "amount": 20
        }
      ]
    },
    {
      "id": "classico-young-kushina-stun",
      "name": "Fierce Punch",
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

// HABILIDADE 3 — Dropping Kick
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kushina-3",
    "name": "Dropping Kick",
    "description": "Kushina desfere um poderoso chute, causando 10 de dano a um inimigo e atordoando suas habilidades por 1 turno. No próximo turno, 'Fierce Punch' irá causar 10 de dano adicional e irá atordoar um inimigo por 1 turno.",
    "image": image3,
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
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kushina-stun"
      },
      {
        "type": "apply-status",
        "statusId": "classico-young-kushina-kick-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kushina-kick-ready",
      "name": "Dropping Kick",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-young-kushina-2",
          "amount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Skilled Landing
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-young-kushina-4",
    "name": "Skilled Landing",
    "description": "Essa habilidade faz Young Kushina invulnerável por 1 turno.",
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
        "statusId": "classico-young-kushina-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-young-kushina-hide",
      "name": "Skilled Landing",
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
  "id": "classico-young-kushina",
  "name": "Young Kushina",
  "image": image0,
  "description": "Kushina é uma sobrevivente do famoso clã Uzumaki da Vila Oculta do Redemoinho, e uma imigrante da Vila Oculta da Folha após a queda de sua própria vila. Devido à sua natureza agressiva e violenta, e seu cabelo vermelho brilhante, Kushina é conhecida como a 'Pimenta Vermelha Sangrenta', já que está constantemente se metendo em confusão.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 153,
  abilities: [ability1, ability2, ability3, ability4],
})
