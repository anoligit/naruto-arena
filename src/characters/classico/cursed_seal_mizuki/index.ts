import image0 from './cursed_seal_mizuki_char_1.png'
import image1 from './cursed_seal_mizuki_skill_1_(curse_seal_tiger).jpg'
import image2 from './cursed_seal_mizuki_skill_2_(curse_seal_tiger_punch).png'
import image3 from './cursed_seal_mizuki_skill_3_(puppets_genjutsu).png'
import image4 from './cursed_seal_mizuki_skill_4_(evil_intentions).png'
import image5 from './cursed_seal_mizuki_skill_5_(curse_seal_tiger_bomb).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Curse Seal: Tiger
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-mizuki-1",
    "name": "Curse Seal: Tiger",
    "description": "Ao beber uma poção do selo amaldiçoado, Mizuki se transforma em um tigre selvagem. Nos próximos 3 turnos, Mizuki ganhará 35 pontos de defesa destrutível e durante esse tempo, 'Curse Seal: Tiger Punch' será >melhorada e 'Puppets Genjutsu' será substituída por sua versão alternativa.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 3,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-cs-mizuki-tiger"
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-mizuki-shield"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-mizuki-tiger",
      "name": "Curse Seal: Tiger",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": []
    },
    {
      "id": "classico-cs-mizuki-shield",
      "name": "Curse Seal: Tiger",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 35
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Curse Seal: Tiger Punch
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-mizuki-2",
    "name": "Curse Seal: Tiger Punch",
    "description": "Mizuki golpeia ferozmente um inimigo, causando 30 de dano. Por 2 turnos, as habilidades desse inimigo causarão 15 a menos de dano não-affliction. Durante 'Curse Seal: Tiger', esta habilidade é melhorada e causará 45 de dano. Esta habilidade não acumula.",
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
        "amount": 30,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-mizuki-punch-weakness"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-cs-mizuki-tiger",
      "damage": {
        "amount": 45,
        "damageType": "normal"
      }
    }
  },
  "statuses": [
    {
      "id": "classico-cs-mizuki-punch-weakness",
      "name": "Curse Seal: Tiger Punch",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 15,
          "excludesAffliction": true
        }
      ],
      "replaces": [
        "classico-cs-mizuki-punch-weakness"
      ]
    }
  ]
}

// HABILIDADE 3 — Puppets Genjutsu
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-mizuki-3",
    "name": "Puppets Genjutsu",
    "description": "Mizuki coloca um inimigo sob um genjutsu. Por 2 turnos, esse inimigo não poderá reduzir dano ou se tornar invulnerável, e suas habilidades causarão 5 a menos de dano e custarão 1 chakra aleatório adicional. Durante esse tempo, se o inimigo não usar uma nova habilidade, sofrerá 10 de dano.",
    "image": image3,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-cs-mizuki-puppets"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-mizuki-puppets",
      "name": "Puppets Genjutsu",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "prevent-invulnerability"
        },
        {
          "type": "outgoing-damage-reduction",
          "amount": 5,
          "excludesAffliction": false
        },
        {
          "type": "skill-cost-increase",
          "random": 1
        }
      ],
      "idleEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ],
      "indicatorNote": "No fim de cada jogada do alvo, recebe 10 de dano se não tiver usado uma habilidade nova."
    }
  ]
}

// HABILIDADE 4 — Evil Intentions
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-mizuki-4",
    "name": "Evil Intentions",
    "description": "Essa habilidade faz Cursed Seal Mizuki invulnerável por 1 turno.",
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
        "statusId": "classico-cs-mizuki-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-mizuki-hide",
      "name": "Evil Intentions",
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

// HABILIDADE 5 — Curse Seal: Tiger Bomb
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-mizuki-5",
    "name": "Curse Seal: Tiger Bomb",
    "description": "Mizuki avança como uma bomba, causando 45 de dano a um inimigo e tornando-se invulnerável por 1 turno.",
    "image": image5,
    "cost": {
      "specific": {
        "bloodline": 1
      },
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
        "amount": 45,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-mizuki-bomb-protection",
        "recipient": "user"
      }
    ],
    "replacement": {
      "skillId": "classico-cs-mizuki-3",
      "whenStatusId": "classico-cs-mizuki-tiger"
    }
  },
  "statuses": [
    {
      "id": "classico-cs-mizuki-bomb-protection",
      "name": "Curse Seal: Tiger Bomb",
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
  "id": "classico-cs-mizuki",
  "name": "Cursed Seal Mizuki",
  "image": image0,
  "description": "Touji Mizuki agora é um ninja renegado que foi corrompido por suas próprias ambições sombrias e pela vontade de Orochimaru.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 106,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
