import image0 from './yamanaka_ino_char_1.jpg'
import image1 from './yamanaka_ino_skill_1_(mind_body_disturbance).jpg'
import image2 from './yamanaka_ino_skill_2_(change_of_heart).jpg'
import image3 from './yamanaka_ino_skill_3_(chakra_hair_strand_trap).jpeg'
import image4 from './yamanaka_ino_skill_4_(ino_block).png'
import image5 from './yamanaka_ino_skill_5_(art_of_the_valentine).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Mind Body Disturbance
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-ino-1",
    "name": "Mind Body Disturbance",
    "description": "Usando essa habilidade, Ino atordoa as habilidades Não-Mental de um inimigo por 1 turno. Durante esse tempo, esse inimigo será incapaz de reduzir dano ou se tornar invulnerável. Um inimigo aleatório diferente irá receber 20 de dano que ignora invulnerabilidade.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-ino-disturb",
        "durationBonus": {
          "whenTargetHasStatus": "classico-ino-mark",
          "turns": 1,
          "fromSourceOnly": true
        }
      },
      {
        "type": "damage",
        "amount": 20,
        "damageType": "normal",
        "recipient": "random-other-enemy"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-ino-disturb",
      "name": "Mind Body Disturbance",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "classes": [
            "physical",
            "chakra",
            "affliction"
          ]
        },
        {
          "type": "prevent-invulnerability"
        },
        {
          "type": "prevent-damage-reduction"
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Change of Heart
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-ino-2",
    "name": "Change of Heart",
    "description": "Ino assume o controle da mente de um inimigo. Por 3 turnos, esse inimigo será atordoado e não poderá reduzir dano ou se tornar invulnerável. Nos próximos 2 turnos, essa habilidade será substituída por 'Art of the Valentine'.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 2
      }
    },
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "mental",
      "control",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-ino-heart",
        "durationBonus": {
          "whenTargetHasStatus": "classico-ino-mark",
          "turns": 1,
          "fromSourceOnly": true
        }
      },
      {
        "type": "apply-status",
        "statusId": "classico-ino-alt",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-ino-heart",
      "name": "Change of Heart",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "stun"
        },
        {
          "type": "prevent-invulnerability"
        },
        {
          "type": "prevent-damage-reduction"
        }
      ],
      "control": true,
      "endsWhenSourceDies": true
    },
    {
      "id": "classico-ino-alt",
      "name": "Change of Heart",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 3 — Chakra Hair Strand Trap
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-ino-3",
    "name": "Chakra Hair Strand Trap",
    "description": "Ino cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, então por 2 turnos, 'Change of Heart' irá durar 1 turno adicional nesse inimigo e 'Mind Body Disturbance' fará com que esse inimigo não possa reduzir dano ou se tornar invulnerável por 2 turnos. Essa habilidade é invisível.",
    "image": image3,
    "cost": {},
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-ino-trap"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-ino-trap",
      "name": "Chakra Hair Strand Trap",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-harmful-skill",
          "statusId": "classico-ino-mark",
          "endsWithTriggerTurn": false
        }
      ],
      "invisible": true,
      "endsOnSkillUse": true
    },
    {
      "id": "classico-ino-mark",
      "name": "Chakra Hair Strand Trap",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": []
    }
  ]
}

// HABILIDADE 4 — Ino Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-ino-4",
    "name": "Ino Block",
    "description": "Essa habilidade faz Yamanaka Ino invulnerável por 1 turno.",
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
        "statusId": "classico-ino-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-ino-hide",
      "name": "Ino Block",
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

// HABILIDADE 5 — Art of the Valentine
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-ino-5",
    "name": "Art of the Valentine",
    "description": "Ino causa 25 de dano a um inimigo. Se usada em um inimigo afetado por 'Change of Heart', essa habilidade irá causar 30 de dano.",
    "image": image5,
    "cost": {
      "random": 1
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
        "damageType": "normal",
        "unlessTargetHasStatus": "classico-ino-heart"
      },
      {
        "type": "damage",
        "amount": 30,
        "damageType": "normal",
        "whenTargetHasStatus": "classico-ino-heart"
      }
    ],
    "replacement": {
      "skillId": "classico-ino-2",
      "whenStatusId": "classico-ino-alt"
    }
  }
}

export default defineCharacter({
  "id": "classico-ino",
  "name": "Yamanaka Ino",
  "image": image0,
  "description": "Uma Genin do Time 10, Ino é membro do clã Yamanaka e uma garota muito confiante e vaidosa. Ino é capaz de usar uma variedade de habilidades para tomar o controle de seus inimigos, tornando difícil distinguir amigo de inimigo.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 192,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
