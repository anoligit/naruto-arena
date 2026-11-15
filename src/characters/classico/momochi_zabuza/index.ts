import image0 from './momochi_zabuza_char_1.jpg'
import image1 from './momochi_zabuza_skill_1_(silent_homicide_technique).jpg'
import image2 from './momochi_zabuza_skill_2_(great_waterfall_technique).jpg'
import image3 from './momochi_zabuza_skill_3_(hidden_mist_technique).jpg'
import image4 from './momochi_zabuza_skill_4_(water_clone_zabuza).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Silent Homicide Technique
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-zabuza-1",
    "name": "Silent Homicide Technique",
    "description": "Usando uma técnica de assassinato avançada, Zabuza causa 30 de dano perfurante a um inimigo. Durante 'Hidden Mist Technique', essa habilidade será aprimorada e irá causar 45 de dano perfurante a um inimigo, ignorando invulnerabilidade.",
    "image": image1,
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
        "amount": 30,
        "damageType": "piercing"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-zabuza-mist",
      "damage": {
        "amount": 45,
        "damageType": "piercing"
      },
      "ignoreInvulnerability": true
    }
  }
}

// HABILIDADE 2 — Great Waterfall Technique
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-zabuza-2",
    "name": "Great Waterfall Technique",
    "description": "Zabuza derruba todos os inimigos com uma onda gigante de água, causando 10 de dano a eles e atordoando suas habilidades Physical e Affliction por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-zabuza-waterfall"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-zabuza-waterfall",
      "name": "Great Waterfall Technique",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "affliction"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Hidden Mist Technique
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-zabuza-3",
    "name": "Hidden Mist Technique",
    "description": "Zabuza cria uma névoa densa. Por 2 turnos, todas as habilidades Physical e Mental dos inimigos irão custar 1 chakra aleatório adicional; Esse efeito não pode ser ignorado. Nos próximos 2 turnos, Zabuza irá receber 10 pontos de redução de dano, e 'Silent Homicide Technique' será aprimorado. Essa habilidade ignora invulnerabilidade.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "self-or-enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-zabuza-mist",
        "recipient": "user"
      }
    ],
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-zabuza-mist",
      "name": "Hidden Mist Technique",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10
        },
        {
          "type": "enemy-skill-cost-increase",
          "classes": [
            "physical",
            "mental"
          ],
          "random": 1
        }
      ],
      "indicatorNote": "A cobrança adicional afeta Physical e Mental de toda a equipe inimiga, mesmo sob imunidade a efeitos. Silent Homicide causa 45 piercing e ignora invulnerabilidade."
    }
  ]
}

// HABILIDADE 4 — Water Clone Zabuza
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-zabuza-4",
    "name": "Water Clone Zabuza",
    "description": "Essa habilidade faz Momochi Zabuza invulnerável por 1 turno.",
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
        "statusId": "classico-zabuza-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-zabuza-hide",
      "name": "Water Clone Zabuza",
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
  "id": "classico-zabuza",
  "name": "Momochi Zabuza",
  "image": image0,
  "description": "Zabuza é um ninja renegado da Vila da Névoa Oculta. Ele é um oponente aterrorizante, atacando seus inimigos a partir da névoa que cria.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 144,
  abilities: [ability1, ability2, ability3, ability4],
})
