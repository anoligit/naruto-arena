import image0 from './haruno_sakura_char_1.png'
import image1 from './haruno_sakura_skill_1_(ko_punch).png'
import image2 from './haruno_sakura_skill_2_(cure).png'
import image3 from './haruno_sakura_skill_3_(inner_sakura).png'
import image4 from './haruno_sakura_skill_4_(sakura_replacement_technique).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — KO Punch
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-sakura-1",
    "name": "KO Punch",
    "description": "Sakura soca um inimigo com toda a sua força, causando 20 de dano e atordoando suas habilidades physical e mental por 1 turno. Durante 'Inner Sakura', essa habilidade irá causar 10 de dano adicional.",
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
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sakura-stun"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-sakura-inner",
      "damage": {
        "amount": 30,
        "damageType": "normal"
      }
    }
  },
  "statuses": [
    {
      "id": "classico-sakura-stun",
      "name": "KO Punch",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "mental"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Cure
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-sakura-2",
    "name": "Cure",
    "description": "Usando técnicas básicas de cura, Sakura cura a si mesma ou um aliado em 20 de vida. Durante 'Inner Sakura', essa habilidade irá curar 10 de vida adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "ally",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 20
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-sakura-inner",
        "cost": {
          "specific": {
            "ninjutsu": 1
          }
        },
        "effects": [
          {
            "type": "heal",
            "amount": 30
          }
        ]
      }
    ]
  }
}

// HABILIDADE 3 — Inner Sakura
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-sakura-3",
    "name": "Inner Sakura",
    "description": "O verdadeiro eu de Sakura surge e a incentiva. Por 4 turnos, Sakura ganhará 10 pontos de redução de dano e irá ignorar todos os efeitos exceto dano. Durante esse tempo, as habilidades de Sakura serão aprimoradas.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 3,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-sakura-inner"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sakura-inner",
      "name": "Inner Sakura",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10
        },
        {
          "type": "harmful-effect-immunity"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Sakura Replacement Technique
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-sakura-4",
    "name": "Sakura Replacement Technique",
    "description": "Essa habilidade faz Haruno Sakura invulnerável por 1 turno.",
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
        "statusId": "classico-sakura-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sakura-hide",
      "name": "Sakura Replacement Technique",
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
  "id": "classico-sakura",
  "name": "Haruno Sakura",
  "image": image0,
  "description": "Uma Genin do Time 7, Sakura é muito inteligente, mas insegura sobre si mesma. Tendo recebido treinamento de Tsunade recentemente, Sakura agora é capaz de desferir golpes poderosos e curar seus próprios aliados.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 113,
  abilities: [ability1, ability2, ability3, ability4],
})
