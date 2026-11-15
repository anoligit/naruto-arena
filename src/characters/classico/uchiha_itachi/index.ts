import image0 from './uchiha_itachi_char_1.png'
import image1 from './uchiha_itachi_skill_1_(mangekyo_sharingan).png'
import image2 from './uchiha_itachi_skill_2_(amaterasu).png'
import image3 from './uchiha_itachi_skill_3_(tsukuyomi).png'
import image4 from './uchiha_itachi_skill_4_(sharingan_insight).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Mangekyo Sharingan
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-itachi-1",
    "name": "Mangekyo Sharingan",
    "description": "Itachi se torna invulnerável, aprimorando 'Amaterasu' e 'Tsukuyomi', aumentando seus cooldowns em 2 e dobrando seus custos. Durante esse tempo, Itachi irá receber 15 de dano affliction por turno, que não pode ser ignorado, e irá ignorar efeitos de cura. Essa habilidade pode ser usada novamente de graça para cancelá-la.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
      }
    },
    "cooldown": 0,
    "target": "self",
    "classes": [
      "mental",
      "instant",
      "affliction"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-itachi-eye"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction",
        "ignoresImmunity": true
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-itachi-eye",
        "cost": {},
        "effects": [
          {
            "type": "remove-statuses",
            "statusIds": [
              "classico-itachi-eye"
            ]
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-itachi-eye",
      "name": "Mangekyo Sharingan",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "invulnerable"
        },
        {
          "type": "ignore-healing"
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "affliction",
          "ignoresImmunity": true
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Amaterasu
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-itachi-2",
    "name": "Amaterasu",
    "description": "Itachi queima um inimigo com suas chamas, causando 15 de dano affliction a ele e, no próximo turno e em cada turno seguinte, ele irá receber 10 de dano affliction por turno. Essa habilidade não acumula. Durante 'Mangekyou Sharingan', essa habilidade irá causar 30 de dano affliction inicial e atingir todos os inimigos. Termina se Itachi morrer.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-itachi-fire"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies",
      "whenUserHasStatus": "classico-itachi-eye"
    },
    "variants": [
      {
        "whenUserHasStatus": "classico-itachi-eye",
        "cost": {
          "specific": {
            "ninjutsu": 2
          }
        },
        "cooldown": 3,
        "effects": [
          {
            "type": "damage",
            "amount": 30,
            "damageType": "affliction"
          },
          {
            "type": "apply-status",
            "statusId": "classico-itachi-fire"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-itachi-fire",
      "name": "Amaterasu",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "endsWhenSourceDies": true,
      "replaces": [
        "classico-itachi-fire"
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "affliction"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Tsukuyomi
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-itachi-3",
    "name": "Tsukuyomi",
    "description": "Itachi tortura mentalmente um inimigo por 3 dias e noites em questão de segundos, causando 20 de dano a ele e atordoando-o por 1 turno. Se usada durante 'Mangekyou Sharingan', essa habilidade irá durar 3 turnos.",
    "image": image3,
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
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-itachi-mind"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-itachi-eye",
        "cost": {
          "specific": {
            "genjutsu": 2
          }
        },
        "cooldown": 3,
        "effects": [
          {
            "type": "damage",
            "amount": 20,
            "damageType": "normal"
          },
          {
            "type": "apply-status",
            "statusId": "classico-itachi-long"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-itachi-mind",
      "name": "Tsukuyomi",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun"
        }
      ]
    },
    {
      "id": "classico-itachi-long",
      "name": "Tsukuyomi",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "stun"
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 20,
          "damageType": "normal"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Sharingan Insight
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-itachi-4",
    "name": "Sharingan Insight",
    "description": "Essa habilidade faz Uchiha Itachi invulnerável por 1 turno.",
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
        "statusId": "classico-itachi-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-itachi-hide",
      "name": "Sharingan Insight",
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
  "id": "classico-itachi",
  "name": "Uchiha Itachi",
  "image": image0,
  "description": "O único outro sobrevivente Uchiha, Itachi é um mestre em doujutsu, um ninja renegado de rank S e membro da Akatsuki, tendo Hoshigaki Kisame como parceiro. Apesar de poderoso, Itachi está ficando cego aos poucos, tornando suas habilidades mais fracas, mas, quando ativa seu Sharingan, ele se torna uma força imparável de puro poder.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 187,
  abilities: [ability1, ability2, ability3, ability4],
})
