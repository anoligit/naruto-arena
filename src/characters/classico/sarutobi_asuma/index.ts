import image0 from './sarutobi_asuma_char_1.jpg'
import image1 from './sarutobi_asuma_skill_1_(flying_swallow).jpg'
import image2 from './sarutobi_asuma_skill_2_(finishing_blow).jpg'
import image3 from './sarutobi_asuma_skill_3_(self_sacrifice).jpg'
import image4 from './sarutobi_asuma_skill_4_(wind_chakra_blades_block).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Flying Swallow
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-asuma-1",
    "name": "Flying Swallow",
    "description": "Usando lâminas com chakra de vento, Asuma e seus aliados ganham 10 pontos de redução de dano, e todos os inimigos irão receber 10 de dano por 3 turnos. *Enquanto estiver ativa, cada turno essa habilidade irá aumentar o seu dano e pontos de redução de dano em 5.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
    },
    "cooldown": 3,
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
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-asuma-swallow"
      },
      {
        "type": "apply-status",
        "statusId": "classico-asuma-guard",
        "recipient": "all-allies"
      },
      {
        "type": "apply-status",
        "statusId": "classico-asuma-stage1",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-asuma-swallow",
      "name": "Flying Swallow",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal",
          "growthPerTurn": 5
        }
      ]
    },
    {
      "id": "classico-asuma-guard",
      "name": "Flying Swallow",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10,
          "growthPerTurn": 5
        }
      ]
    },
    {
      "id": "classico-asuma-stage1",
      "name": "Flying Swallow",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [],
      "onExpireEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-asuma-stage2"
        }
      ]
    },
    {
      "id": "classico-asuma-stage2",
      "name": "Flying Swallow",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [],
      "onExpireEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-asuma-stage3"
        }
      ]
    },
    {
      "id": "classico-asuma-stage3",
      "name": "Flying Swallow",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 2 — Finishing Blow
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-asuma-2",
    "name": "Finishing Blow",
    "description": "Asuma causa 35 de dano a um inimigo. Durante o segundo turno de 'Flying Swallow', essa habilidade irá atordoar completamente por 1 turno. Durante o terceiro turno de 'Flying Swallow', essa habilidade irá causar 5 de dano adicional e irá remover 1 chakra aleatório.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1
      },
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
        "amount": 35,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-asuma-stun",
        "whenUserHasStatus": "classico-asuma-stage2"
      },
      {
        "type": "damage",
        "amount": 5,
        "damageType": "normal",
        "whenUserHasStatus": "classico-asuma-stage3"
      },
      {
        "type": "remove-energy",
        "amount": 1,
        "whenUserHasStatus": "classico-asuma-stage3"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-asuma-stun",
      "name": "Finishing Blow",
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

// HABILIDADE 3 — Self Sacrifice
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-asuma-3",
    "name": "Self Sacrifice",
    "description": "Sarutobi Asuma protege um aliado do perigo. Por 1 turno, esse aliado se tornará invulnerável a habilidades ofensivas.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "ally",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-asuma-sacrifice"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-asuma-sacrifice",
      "name": "Self Sacrifice",
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

// HABILIDADE 4 — Wind Chakra Blades Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-asuma-4",
    "name": "Wind Chakra Blades Block",
    "description": "Essa habilidade faz Sarutobi Asuma invulnerável por 1 turno.",
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
        "statusId": "classico-asuma-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-asuma-hide",
      "name": "Wind Chakra Blades Block",
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
  "id": "classico-asuma",
  "name": "Sarutobi Asuma",
  "image": image0,
  "description": "Sarutobi Asuma é o líder do Time 10. Ele usa facas de trincheira ampliadas por seu chakra para lutar e proteger seus companheiros de equipe.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 180,
  abilities: [ability1, ability2, ability3, ability4],
})
