import image0 from './inuzuka_kiba_char_1.png'
import image1 from './inuzuka_kiba_skill_1_(garouga).png'
import image2 from './inuzuka_kiba_skill_2_(double_headed_wolf).png'
import image3 from './inuzuka_kiba_skill_3_(dynamic_air_marking).png'
import image4 from './inuzuka_kiba_skill_4_(smoke_bomb).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Garouga
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kiba-1",
    "name": "Garouga",
    "description": "Kiba causa 30 de dano a um inimigo. Durante 'Double Headed Wolf', essa habilidade é melhorada e custará 1 chakra aleatório a menos.",
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
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-kiba-wolf",
        "cost": {
          "specific": {
            "taijutsu": 1
          }
        },
        "effects": [
          {
            "type": "damage",
            "amount": 30,
            "damageType": "normal"
          }
        ]
      }
    ]
  }
}

// HABILIDADE 2 — Double Headed Wolf
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kiba-2",
    "name": "Double Headed Wolf",
    "description": "Kiba e Akamaru se transformam em uma besta gigante e atacam todos os inimigos, causando 15 de dano a eles por 3 turnos. Nos próximos 3 turnos, 'Garouga' é melhorado e custará 1 chakra aleatório a menos. Durante esse tempo, Kiba ganha 10 pontos de redução de dano impenetrável.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1,
        "bloodline": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "physical",
      "action",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-kiba-wolf-damage",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-kiba-wolf",
        "recipient": "user"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-kiba-wolf-damage",
      "name": "Double Headed Wolf",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "action": true,
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "normal"
        }
      ]
    },
    {
      "id": "classico-kiba-wolf",
      "name": "Double Headed Wolf",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
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

// HABILIDADE 3 — Dynamic Air Marking
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kiba-3",
    "name": "Dynamic Air Marking",
    "description": "Akamaru espalha urina em um inimigo que não poderá reduzir dano ou se tornar invulnerável por 3 turnos. Durante esse tempo, 'Double Headed Wolf' e 'Garouga' irão causar 10 de dano adicional a ele. Essa habilidade não pode ser usada em um inimigo que já esteja afetado por ela.",
    "image": image3,
    "cost": {},
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kiba-mark"
      }
    ],
    "targetMustLackStatus": "classico-kiba-mark"
  },
  "statuses": [
    {
      "id": "classico-kiba-mark",
      "name": "Dynamic Air Marking",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "prevent-invulnerability"
        },
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-kiba-1",
          "amount": 10,
          "fromSourceOnly": true
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-kiba-2",
          "amount": 10,
          "fromSourceOnly": true
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Smoke Bomb
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kiba-4",
    "name": "Smoke Bomb",
    "description": "Essa habilidade faz Inuzuka Kiba invulnerável por 1 turno.",
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
        "statusId": "classico-kiba-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kiba-hide",
      "name": "Smoke Bomb",
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
  "id": "classico-kiba",
  "name": "Inuzuka Kiba",
  "image": image0,
  "description": "Uma Genin do Time 8, Kiba é um membro do clã Inuzuka, sendo impetuoso e de temperamento curto. Usando seu cachorro, Akamaru, Kiba é capaz de realizar poderosos taijutsus ou se fundir com Akamaru para se tornar um mortal cachorro de duas cabeças.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 5,
  abilities: [ability1, ability2, ability3, ability4],
})
