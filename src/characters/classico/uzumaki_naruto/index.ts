import image0 from './uzumaki_naruto_char_1.png'
import image1 from './uzumaki_naruto_skill_1_(uzumaki_naruto_combo).png'
import image2 from './uzumaki_naruto_skill_2_(rasengan).png'
import image3 from './uzumaki_naruto_skill_3_(shadow_clones).png'
import image4 from './uzumaki_naruto_skill_4_(sexy_technique).png'
import image5 from "./uzumaki_naruto_skill_5_(passive_kyuubi's_chakra_awakening).png"
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Uzumaki Naruto Combo
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-naruto-1",
    "name": "Uzumaki Naruto Combo",
    "description": "A versão de Naruto do Lion Combo. Essa habilidade causa 20 de dano a um inimigo. Durante 'Shadow Clones', essa habilidade irá causar 10 de dano adicional.",
    "image": image1,
    "cost": {
      "random": 1
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
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-naruto-clones",
      "damage": {
        "amount": 30,
        "damageType": "normal"
      }
    }
  }
}

// HABILIDADE 2 — Rasengan
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-naruto-2",
    "name": "Rasengan",
    "description": "Naruto atinge um inimigo com uma esfera de chakra, causando 45 de dano e atordoando todas as suas habilidades por 1 turno. Essa habilidade requer 'Shadow Clones'.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
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
        "amount": 45,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-naruto-stun"
      }
    ],
    "requirements": [
      {
        "type": "has-status",
        "statusId": "classico-naruto-clones"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-naruto-stun",
      "name": "Rasengan",
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

// HABILIDADE 3 — Shadow Clones
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-naruto-3",
    "name": "Shadow Clones",
    "description": "Naruto cria vários clones das sombras, escondendo seu verdadeiro eu. Naruto ganha 15 pontos de redução de dano por 5 turnos. Durante esse tempo, 'Uzumaki Naruto Combo' irá causar 10 de dano adicional, e 'Rasengan' poderá ser usado.",
    "image": image3,
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
        "statusId": "classico-naruto-clones"
      },
      {
        "type": "apply-status",
        "statusId": "classico-naruto-awakened-clones",
        "whenUserHasStatus": "classico-naruto-awakening"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-naruto-clones",
      "name": "Shadow Clones",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 15
        }
      ]
    },
    {
      "id": "classico-naruto-awakened-clones",
      "name": "Shadow Clones",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10,
          "includesPiercing": true
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Sexy Technique
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-naruto-4",
    "name": "Sexy Technique",
    "description": "Essa habilidade torna Uzumaki Naruto invulnerável por 1 turno. Durante 'Kyuubi's Chakra Awakening', essa habilidade será substituída por 'Kyuubi's Presence' e será classificada como Mental.",
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
        "statusId": "classico-naruto-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-naruto-hide",
      "name": "Sexy Technique",
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

// HABILIDADE 5 — Passive: Kyuubi's Chakra Awakening
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-naruto-5",
    "name": "Passive: Kyuubi's Chakra Awakening",
    "description": "Quando Naruto atingir 50 de vida pela primeira vez, o chakra da Kyuubi despertará, curando Naruto em 5 de vida permanentemente a cada turno. Durante esse tempo, 'Shadow Clones' será aprimorada e concederá 10 pontos de redução de dano impenetrável.",
    "image": image5,
    "cost": {},
    "cooldown": 0,
    "target": "self",
    "classes": [
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-naruto-awakening"
      }
    ],
    "passive": true,
    "healthTrigger": 50
  },
  "statuses": [
    {
      "id": "classico-naruto-awakening",
      "name": "Passive: Kyuubi's Chakra Awakening",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "heal",
          "amount": 5
        }
      ],
      "unremovable": true
    }
  ]
}

export default defineCharacter({
  "id": "classico-naruto",
  "name": "Uzumaki Naruto",
  "image": image0,
  "description": "Um Genin do Time 7, Naruto é um órfão com o objetivo de se tornar Hokage um dia. Usando seu movimento característico, 'Shadow Clones', Naruto é capaz de realizar golpes poderosos, como 'Uzumaki Naruto Combo' e 'Rasengan'.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 164,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
