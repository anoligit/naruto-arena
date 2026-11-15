import image0 from './tsunade_char_1.jpg'
import image1 from './tsunade_skill_1_(painful_sky_leg).jpg'
import image2 from './tsunade_skill_2_(revitalizing_heal).png'
import image3 from './tsunade_skill_3_(major_summoning_katsuyu).jpg'
import image4 from './tsunade_skill_4_(elbow_block).png'
import image5 from './tsunade_skill_5_(creation_rebirth).jpg'
import image6 from './tsunade_skill_6_(tongue_tooth_sticky_acid).png'
import { defineCharacter } from '../../definition'
import type { SkillEffect } from '../../../game/types'
import type { AbilityDefinition } from '../../definition'

// Efeitos compartilhados pela cura em si mesma e pela consulta da alternativa.
const creationRebirthEffects: SkillEffect[] = [
      {
        "type": "remove-harmful-statuses",
        "classes": [
          "affliction"
        ]
      },
      {
        "type": "heal",
        "amount": 35
      },
      {
        "type": "apply-status",
        "statusId": "classico-tsunade-rebirth"
      }
    ]

// HABILIDADE 1 — Painful Sky Leg
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-tsunade-1",
    "name": "Painful Sky Leg",
    "description": "Tsunade aplica um chute descendente com sua força insana, causando 35 de dano a um inimigo e atordoando suas habilidades por 1 turno.",
    "image": image1,
    "cost": {
      "specific": {
        "taijutsu": 1
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
        "amount": 35,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tsunade-stun"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tsunade-stun",
      "name": "Painful Sky Leg",
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

// HABILIDADE 2 — Revitalizing Heal
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-tsunade-2",
    "name": "Revitalizing Heal",
    "description": "Se usada em um aliado: Esse aliado irá curar 30 de vida por 1 turno.  Se usada na Tsunade: Ela irá aplicar 'Creation Rebirth' em si mesma, removendo todas as habilidades Affliction dela, curando 35 de vida e se tornando imune a dano affliction por 1 turno.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "ally",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 30,
        "targetCondition": "other"
      },
      ...creationRebirthEffects.map(effect => ({ ...effect, targetCondition: 'self' as const }))
    ]
  },
  "statuses": [
    {
      "id": "classico-tsunade-rebirth",
      "name": "Revitalizing Heal",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "damage-immunity",
          "types": [
            "affliction"
          ]
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Major Summoning: Katsuyu
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-tsunade-3",
    "name": "Major Summoning: Katsuyu",
    "description": "Tsunade invoca a rainha das lesmas, Katsuyu, curando sua equipe em 20 de vida instantaneamente. Katsuyu também cospe ácido em todos os inimigos, causando 20 de dano affliction a eles. Pelo resto do jogo, Tsunade e seus aliados recuperam 5 de vida a cada turno dela, enquanto Tsunade estiver viva e esta habilidade será substituída por 'Tongue Tooth Sticky Acid'.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1,
        "ninjutsu": 1,
        "genjutsu": 1
      }
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "affliction",
        "skipIfUntargetable": true
      },
      {
        "type": "heal",
        "amount": 20,
        "recipient": "all-allies"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tsunade-katsuyu",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-tsunade-healing",
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-tsunade-katsuyu",
      "name": "Major Summoning: Katsuyu",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "endsWhenSourceDies": true,
      "indicatorNote": "Libera Tongue Tooth Sticky Acid."
    },
    {
      "id": "classico-tsunade-healing",
      "name": "Major Summoning: Katsuyu",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "endsWhenSourceDies": true,
      "periodicEffects": [
        {
          "type": "heal",
          "amount": 5
        }
      ],
      "indicatorNote": "Recupera 5 de vida a cada turno de Tsunade."
    }
  ]
}

// HABILIDADE 4 — Elbow Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-tsunade-4",
    "name": "Elbow Block",
    "description": "Essa habilidade faz Tsunade invulnerável por 1 turno.",
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
        "statusId": "classico-tsunade-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-tsunade-hide",
      "name": "Elbow Block",
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

// HABILIDADE 5 — Creation Rebirth
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-tsunade-5",
    "name": "Creation Rebirth",
    "description": "Tsunade usa o seu chakra armazenado para remover todas as habilidades Affliction ofensivas dela, curar 35 de vida e se tornar imune a dano affliction por 1 turno. Essa habilidade é ativada automaticamente quando 'Revitalizing Heal' é usada na Tsunade.",
    "image": image5,
    "cost": {},
    "cooldown": 0,
    "target": "self",
    "classes": [
      "chakra",
      "instant"
    ],
    "effects": creationRebirthEffects,
    "passive": true
  }
}

// HABILIDADE 6 — Tongue Tooth Sticky Acid
const ability6: AbilityDefinition = {
  "skill": {
    "id": "classico-tsunade-6",
    "name": "Tongue Tooth Sticky Acid",
    "description": "Katsuyu libera uma pasta ácida de sua boca, causando 15 de dano affliction a todos os inimigos e curando 15 de vida de Tsunade e seus aliados.",
    "image": image6,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
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
        "damageType": "affliction",
        "skipIfUntargetable": true
      },
      {
        "type": "heal",
        "amount": 15,
        "recipient": "all-allies"
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true,
    "replacement": {
      "skillId": "classico-tsunade-3",
      "whenStatusId": "classico-tsunade-katsuyu"
    }
  }
}

export default defineCharacter({
  "id": "classico-tsunade",
  "name": "Tsunade",
  "image": image0,
  "description": "Tsunade é a Godaime Hokage e uma das Lendárias Sannin. Sua habilidade com ninjutsu médico permite causar dano significativo e curar a si mesma e seus aliados.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 158,
  abilities: [ability1, ability2, ability3, ability4, ability5, ability6],
})
