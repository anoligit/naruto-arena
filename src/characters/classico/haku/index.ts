import image0 from './haku_char_1.jpg'
import missionImage from './Haku_mission.jpg'
import image1 from './haku_skill_1_(flying_water_needles_of_death).jpg'
import image2 from './haku_skill_2_(acupuncture).jpg'
import image3 from './haku_skill_3_(demonic_ice_mirrors).jpg'
import image4 from './haku_skill_4_(mirror_transfer).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// FOTO DA MISSÃO: o import missionImage acima aponta para Haku_mission.jpg.


// HABILIDADE 1 — Flying Water Needles of Death
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-haku-1",
    "name": "Flying Water Needles of Death",
    "description": "Haku arremessa várias agulhas de água, causando 35 de dano a um inimigo. Quando aprimorada por 'Demonic Ice Mirrors', essa habilidade irá causar 45 de dano ao alvo.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "physical",
      "ranged",
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
      "whenUserHasStatus": "classico-haku-mirrors",
      "damage": {
        "amount": 45,
        "damageType": "normal"
      }
    }
  }
}

// HABILIDADE 2 — Acupuncture
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-haku-2",
    "name": "Acupuncture",
    "description": "Haku atinge os pontos de acupuntura de um inimigo, atordoando suas habilidades por 1 turno. Quando aprimorada por 'Demonic Ice Mirrors', irá atordoar por 2 turnos. Essa habilidade ignora invulnerabilidade.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "physical",
      "ranged",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-haku-stun-1"
      }
    ],
    "allowInvulnerableTarget": true,
    "variants": [
      {
        "whenUserHasStatus": "classico-haku-mirrors",
        "cost": {
          "specific": {
            "ninjutsu": 1
          }
        },
        "effects": [
          {
            "type": "apply-status",
            "statusId": "classico-haku-stun-2"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-haku-stun-1",
      "name": "Acupuncture",
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
      "id": "classico-haku-stun-2",
      "name": "Acupuncture",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "stun"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Demonic Ice Mirrors
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-haku-3",
    "name": "Demonic Ice Mirrors",
    "description": "Haku cria numerosos espelhos, causando 10 de dano a todos os inimigos por 3 turnos. Nos próximos 3 turnos, 'Flying Water Needles of Death' e 'Acupuncture' serão aprimorados. Durante esse tempo, Haku ganha 30 pontos de defesa destrutível e irá ignorar efeitos atordoantes.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1,
        "ninjutsu": 1
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "chakra",
      "ranged",
      "action",
      "instant",
      "unique"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "normal",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-haku-mirror-damage",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-haku-mirrors",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-haku-shield",
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
      "id": "classico-haku-mirror-damage",
      "action": true,
      "endsWhenSourceDies": true,
      "name": "Demonic Ice Mirrors",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 10,
          "damageType": "normal"
        }
      ],
      "indicatorNote": "Recebe 10 de dano nas duas próximas jogadas de Haku."
    },
    {
      "id": "classico-haku-mirrors",
      "name": "Demonic Ice Mirrors",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "stun-immunity"
        }
      ],
      "indicatorNote": "Flying Water Needles causa 45; Acupuncture stuna por 2 turnos."
    },
    {
      "id": "classico-haku-shield",
      "name": "Demonic Ice Mirrors",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 30
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Mirror Transfer
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-haku-4",
    "name": "Mirror Transfer",
    "description": "Essa habilidade faz Haku invulnerável por 1 turno.",
    "image": image4,
    "cost": {
      "random": 1
    },
    "cooldown": 4,
    "target": "self",
    "classes": [
      "chakra",
      "instant",
      "unique"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-haku-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-haku-hide",
      "name": "Mirror Transfer",
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
  "id": "classico-haku",
  "name": "Haku",
  "image": image0,
  "description": "O único sobrevivente do clã Yuki e subordinado de Zabuza, Haku, apesar de jovem, possui força potencial suficiente para superar quase qualquer ninja. Usando sua linhagem sanguínea baseada em gelo e sua inteligência, Haku pode atacar e se defender quase simultaneamente.",
  "unlockRequirement": {
    "type": "mission",
    "missionId": "haku"
  },
  // Edite a missão AQUI. Tela, descrições e validação do servidor leem este bloco.
  mission: {
    id: 'haku', // Identificador permanente: mantenha para preservar o progresso salvo.
    name: 'A Neve Esquecida pela Névoa', // Nome da missão: pode alterar.
    category: 'Missões D e C',
    image: missionImage,
    minimumRank: 'Genin',
    minimumLevel: 6,
    prerequisiteMissionIds: [], // Sem outra missão como requisito.
    objective: {
      type: 'consecutive-wins',
      consecutiveWins: 2,
      charactersAnyOf: ['classico-naruto', 'classico-sasuke'],
    },
  },
  "order": 22,
  abilities: [ability1, ability2, ability3, ability4],
})
