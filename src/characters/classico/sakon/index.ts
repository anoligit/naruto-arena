import image0 from './sakon_char_1.jpg'
import image1 from './sakon_skill_1_(gattling_punch).jpg'
import image2 from './sakon_skill_2_(parasite_demon_technique).jpg'
import image3 from './sakon_skill_3_(rest).jpg'
import image4 from './sakon_skill_4_(summoning_rashoumon).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Gattling Punch
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-sakon-1",
    "name": "Gattling Punch",
    "description": "Usando um corpo, Sakon e Ukon rapidamente socam um inimigo, causando 40 de dano a ele.",
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
        "amount": 40,
        "damageType": "normal"
      }
    ]
  }
}

// HABILIDADE 2 — Parasite Demon Technique
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-sakon-2",
    "name": "Parasite Demon Technique",
    "description": "Sakon e Ukon irão causar 15 de dano affliction a um inimigo permanentemente. Durante esse tempo, Sakon ganha 15 pontos de redução de dano e irá curar 5 de vida todo turno. Essa habilidade não pode ser usada no mesmo alvo. Essa habilidade terminará se usada em um inimigo diferente ou se o inimigo afetado morrer.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sakon-parasite"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sakon-benefit",
        "recipient": "user",
        "linkTo": "target"
      },
      {
        "type": "heal",
        "amount": 5,
        "recipient": "user"
      }
    ],
    "targetMustLackStatus": "classico-sakon-parasite"
  },
  "statuses": [
    {
      "id": "classico-sakon-parasite",
      "name": "Parasite Demon Technique",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "exclusiveToSource": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "affliction"
        }
      ]
    },
    {
      "id": "classico-sakon-benefit",
      "name": "Parasite Demon Technique",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 15
        }
      ],
      "endsWhenLinkedTargetDies": true,
      "replaces": [
        "classico-sakon-benefit"
      ],
      "periodicEffects": [
        {
          "type": "heal",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Rest
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-sakon-3",
    "name": "Rest",
    "description": "Ukon descansa dentro do corpo de Sakon, curando-o em 30 de vida. Essa habilidade terminará 'Parasite Demon Technique' se estiver ativada no momento.",
    "image": image3,
    "cost": {
      "random": 2
    },
    "cooldown": 2,
    "target": "self",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "remove-statuses",
        "statusIds": [
          "classico-sakon-parasite",
          "classico-sakon-benefit"
        ],
        "scope": "source-applications"
      },
      {
        "type": "heal",
        "amount": 30
      }
    ]
  }
}

// HABILIDADE 4 — Summoning: Rashoumon
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-sakon-4",
    "name": "Summoning: Rashoumon",
    "description": "Essa habilidade torna Sakon  invulnerável por 1 turno.",
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
        "statusId": "classico-sakon-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sakon-hide",
      "name": "Summoning: Rashoumon",
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
  "id": "classico-sakon",
  "name": "Sakon",
  "image": image0,
  "description": "Sakon geralmente carrega uma cabeça estranha nas costas. Essa cabeça é, na verdade, seu irmão Ukon, que também pode sair de Sakon e entrar em outros corpos para destruí-los.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 179,
  abilities: [ability1, ability2, ability3, ability4],
})
