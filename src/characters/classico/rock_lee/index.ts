import image0 from './rock_lee_char_1.jpg'
import image1 from './rock_lee_skill_1_(high_speed_taijutsu).jpg'
import image2 from './rock_lee_skill_2_(front_lotus).jpg'
import image3 from './rock_lee_skill_3_(fifth_gate_opening).jpg'
import image4 from './rock_lee_skill_4_(lee_block).jpg'
import image5 from './rock_lee_skill_5_(final_lotus).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — High Speed Taijutsu
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-lee-1",
    "name": "High Speed Taijutsu",
    "description": "Lee causa 10 de dano a um inimigo por 3 turnos. Durante esse tempo, Lee irá causar 10 de dano adicional com 'Front Lotus' e ganha 5 pontos de redução de dano.* Esta habilidade acumula e irá causar 10 de dano adicional durante 'Fifth Gate Opening'.",
    "image": image1,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "melee",
      "action"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-lee-speed"
      },
      {
        "type": "apply-status",
        "statusId": "classico-lee-bonus",
        "recipient": "user"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-lee-gate",
      "damage": {
        "amount": 20,
        "damageType": "normal"
      }
    }
  },
  "statuses": [
    {
      "id": "classico-lee-speed",
      "name": "High Speed Taijutsu",
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
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-lee-bonus",
      "name": "High Speed Taijutsu",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-lee-2",
          "amount": 15
        },
        {
          "type": "damage-reduction",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Front Lotus
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-lee-2",
    "name": "Front Lotus",
    "description": "Abrindo o primeiro portão, Lee usa um taijutsu poderoso para causar 35 de dano a um inimigo. Esta habilidade irá causar 15 de dano adicional para cada 'High Speed Taijutsu'. Durante 'Fifth Gate Opening', essa habilidade irá causar 15 de dano adicional.",
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
      "melee",
      "instant"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "normal"
      }
    ],
    "enhancement": {
      "whenUserHasStatus": "classico-lee-gate",
      "damage": {
        "amount": 50,
        "damageType": "normal"
      }
    }
  }
}

// HABILIDADE 3 — Fifth Gate Opening
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-lee-3",
    "name": "Fifth Gate Opening",
    "description": "Lee remove todos os efeitos ofensivos de si mesmo e, por 2 turnos, ficará invulnerável a todas as habilidades ofensivas. Nos próximos 2 turnos, essa habilidade será substituída por 'Final Lotus' e quando Lee usar uma nova habilidade, irá receber 10 de dano.* Lee não pode morrer dessa habilidade.",
    "image": image3,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "mental",
      "affliction",
      "instant"
    ],
    "effects": [
      {
        "type": "remove-harmful-statuses",
        "classes": [
          "physical",
          "chakra",
          "mental",
          "affliction",
          "instant",
          "action",
          "control",
          "ranged",
          "melee",
          "unique"
        ]
      },
      {
        "type": "apply-status",
        "statusId": "classico-lee-gate"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-lee-gate",
      "name": "Fifth Gate Opening",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "invulnerable"
        },
        {
          "type": "on-skill-use-damage",
          "amount": 10,
          "damageType": "affliction",
          "nonlethal": true
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Lee Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-lee-4",
    "name": "Lee Block",
    "description": "Esta habilidade deixa Rock Leeinvulnerável por 1 turno.",
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
        "statusId": "classico-lee-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-lee-hide",
      "name": "Lee Block",
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

// HABILIDADE 5 — Final Lotus
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-lee-5",
    "name": "Final Lotus",
    "description": "Lee usa sua habilidade mais poderosa, gastando todo o seu chakra e causando 80 de dano a um inimigo. Depois disso, 'Fifth Gate Opening' irá terminar.",
    "image": image5,
    "cost": {
      "specific": {
        "taijutsu": 2
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "melee",
      "instant"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 80,
        "damageType": "normal"
      },
      {
        "type": "remove-statuses",
        "statusIds": [
          "classico-lee-gate"
        ],
        "recipient": "user"
      }
    ],
    "replacement": {
      "skillId": "classico-lee-3",
      "whenStatusId": "classico-lee-gate"
    }
  }
}

export default defineCharacter({
  "id": "classico-lee",
  "name": "Rock Lee",
  "image": image0,
  "description": "Sem genjutsu ou ninjutsu, não era um ninja. Por isso eu era humilhado quando era criança. Eu provei que posso acabar com quem desmerecia, Até quem era do meu time não acreditava, Neji dizia que meu esforço não valia nada, Mas eu nunca parei pra ouvir quem me criticava, Porquê quanto mais eles falavam, mais eu treinava.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 168,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
