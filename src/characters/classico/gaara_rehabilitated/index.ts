import image0 from './gaara_rehabilitated_char_1.jpg'
import image1 from './gaara_rehabilitated_skill_1_(sand_mastery).jpg'
import image2 from './gaara_rehabilitated_skill_2_(desert_imperial_funeral).jpg'
import image3 from './gaara_rehabilitated_skill_3_(quicksand_waterfall).jpg'
import image4 from './gaara_rehabilitated_skill_4_(shield_of_shukaku).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Sand Mastery
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-rehab-1",
    "name": "Sand Mastery",
    "description": "Usando a areia tanto para se defender quanto para atacar, Gaara ganha 5 de defesa destrutível permanente. Permanentemente, as habilidades de Gaara custarão 1 chakra aleatório a menos.",
    "image": image1,
    "cost": {},
    "cooldown": 2,
    "target": "self",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-rehab-small"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rehab-mastery"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-rehab-small",
      "name": "Sand Mastery",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 5
        }
      ]
    },
    {
      "id": "classico-rehab-mastery",
      "name": "Sand Mastery",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "skill-cost-reduction",
          "random": 1
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Desert Imperial Funeral
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-rehab-2",
    "name": "Desert Imperial Funeral",
    "description": "Gaara causa 25 de dano perfurante a um inimigo. Por 1 turno, esse inimigo não poderá reduzir dano ou se tornar invulnerável, e suas habilidades custarão 1 chakra aleatório adicional. Se esse inimigo estiver afetado por 'Quicksand Waterfall', o custo aumentará em 2 chakras aleatórios.",
    "image": image2,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 2
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
        "amount": 25,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rehab-deny"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rehab-extra",
        "whenTargetHasStatus": "classico-rehab-wave"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-rehab-deny",
      "name": "Desert Imperial Funeral",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "prevent-invulnerability"
        },
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "skill-cost-increase",
          "random": 1
        }
      ]
    },
    {
      "id": "classico-rehab-extra",
      "name": "Desert Imperial Funeral",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "skill-cost-increase",
          "random": 1
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Quicksand Waterfall
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-rehab-3",
    "name": "Quicksand Waterfall",
    "description": "Gaara cria enormes ondas de areia. Por 4 turnos, Gaara e seus aliados ganham 10 de defesa destrutível e todos os inimigos recebem 10 de dano*. Durante esse tempo, se Gaara ou um aliado receber dano novo não affliction, ganhará 5 de defesa destrutível no turno seguinte.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 2
    },
    "cooldown": 4,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "action",
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
        "statusId": "classico-rehab-wave"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rehab-sand",
        "recipient": "all-allies"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rehab-guard",
        "recipient": "all-allies"
      },
      {
        "type": "apply-status",
        "statusId": "classico-rehab-react",
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    }
  },
  "statuses": [
    {
      "id": "classico-rehab-wave",
      "name": "Quicksand Waterfall",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
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
      "id": "classico-rehab-sand",
      "name": "Quicksand Waterfall",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 10
        }
      ]
    },
    {
      "id": "classico-rehab-guard",
      "name": "Quicksand Waterfall",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-rehab-sand"
        }
      ]
    },
    {
      "id": "classico-rehab-react",
      "name": "Quicksand Waterfall",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "on-new-skill-damage",
          "statusId": "classico-rehab-delay",
          "exceptClasses": [
            "affliction"
          ]
        }
      ]
    },
    {
      "id": "classico-rehab-delay",
      "name": "Quicksand Waterfall",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [],
      "onExpireEffects": [
        {
          "type": "apply-status",
          "statusId": "classico-rehab-reward"
        }
      ]
    },
    {
      "id": "classico-rehab-reward",
      "name": "Quicksand Waterfall",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Shield of Shukaku
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-gaara-rehab-4",
    "name": "Shield of Shukaku",
    "description": "Gaara usa a defesa absoluta mais resistente, criando um escudo protetor à frente de sua equipe, concedendo 20 pontos de defesa destrutível por 3 turnos.",
    "image": image4,
    "cost": {
      "random": 3
    },
    "cooldown": 4,
    "target": "ally",
    "classes": [
      "physical",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-rehab-shukaku"
      }
    ],
    "targetExpansion": {
      "target": "all-living-allies"
    }
  },
  "statuses": [
    {
      "id": "classico-rehab-shukaku",
      "name": "Shield of Shukaku",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 20
        }
      ]
    }
  ]
}

export default defineCharacter({
  "id": "classico-gaara-rehab",
  "name": "Gaara Rehabilitated",
  "image": image0,
  "description": "Após seu encontro decisivo com Naruto, Gaara abandonou seus caminhos assassinos. Ele também se tornou ainda mais habilidoso no uso da areia desde a última vez que Naruto o viu.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 172,
  abilities: [ability1, ability2, ability3, ability4],
})
