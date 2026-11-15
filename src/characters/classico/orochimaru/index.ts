import image0 from './orochimaru_char_1.jpg'
import image1 from './orochimaru_skill_1_(kusanagi).jpg'
import image2 from './orochimaru_skill_2_(cursed_seal_technique).jpg'
import image3 from './orochimaru_skill_3_(major_summoning_manda).jpg'
import image4 from './orochimaru_skill_4_(earth_clone_technique).jpg'
import image5 from './orochimaru_skill_5_(constrict_and_bite).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Kusanagi
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-orochimaru-1",
    "name": "Kusanagi",
    "description": "Orochimaru saca a lendária espada Kusanagi e perfura um inimigo, causando 30 de dano e removendo 1 chakra do tipo Bloodline ou Genjutsu daquele inimigo.",
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
        "damageType": "normal"
      },
      {
        "type": "remove-energy",
        "amount": 1,
        "types": [
          "bloodline",
          "genjutsu"
        ]
      }
    ]
  }
}

// HABILIDADE 2 — Cursed Seal Technique
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-orochimaru-2",
    "name": "Cursed Seal Technique",
    "description": "Orochimaru aplica um selo amaldiçoado em um aliado ou inimigo, causando 15 de dano affliction e concedendo 1 chakra aleatório ao alvo. Essa habilidade ignora invulnerabilidade.",
    "image": image2,
    "cost": {},
    "cooldown": 3,
    "target": "ally-or-enemy",
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
        "type": "gain-energy",
        "amount": 1,
        "team": "target"
      }
    ],
    "allowInvulnerableTarget": true
  }
}

// HABILIDADE 3 — Major Summoning: Manda
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-orochimaru-3",
    "name": "Major Summoning: Manda",
    "description": "Ao invocar Manda no campo de batalha, Orochimaru causa 45 de dano a um inimigo. Pelo resto do jogo, Orochimaru ganha 1 chakra aleatório a cada turno seguinte dele enquanto estiver vivo e essa habilidade será substituída por 'Constrict and Bite'.",
    "image": image3,
    "cost": {
      "specific": {
        "taijutsu": 1,
        "bloodline": 1,
        "ninjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 45,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-orochimaru-manda",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-orochimaru-manda",
      "name": "Major Summoning: Manda",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "gain-energy",
          "amount": 1
        }
      ],
      "endsWhenSourceDies": true,
      "indicatorNote": "Gera 1 energia aleatória a cada turno de Orochimaru e libera Constrict and Bite."
    }
  ]
}

// HABILIDADE 4 — Earth Clone Technique
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-orochimaru-4",
    "name": "Earth Clone Technique",
    "description": "Essa habilidade faz Orochimaru invulnerável por 1 turno.",
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
        "statusId": "classico-orochimaru-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-orochimaru-hide",
      "name": "Earth Clone Technique",
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

// HABILIDADE 5 — Constrict and Bite
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-orochimaru-5",
    "name": "Constrict and Bite",
    "description": "Manda se enrola em um inimigo, atordoando-o por 1 turno. No próximo turno, Manda irá devorá-lo, causando 30 de dano a ele.",
    "image": image5,
    "cost": {
      "random": 2
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "control",
      "melee"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-orochimaru-constrict"
      }
    ],
    "replacement": {
      "skillId": "classico-orochimaru-3",
      "whenStatusId": "classico-orochimaru-manda"
    }
  },
  "statuses": [
    {
      "id": "classico-orochimaru-constrict",
      "name": "Constrict and Bite",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun"
        }
      ],
      "control": true,
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 30,
          "damageType": "normal"
        }
      ],
      "indicatorNote": "Prende por 1 turno. Na próxima jogada de Orochimaru, causa 30 de dano se o Control continuar ativo."
    }
  ]
}

export default defineCharacter({
  "id": "classico-orochimaru",
  "name": "Orochimaru",
  "image": image0,
  "description": "Orochimaru é um dos Lendários Sannin. Ele pode aumentar o chakra de sua equipe a um custo e invocar cobras poderosas para derrotar seus inimigos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 157,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
