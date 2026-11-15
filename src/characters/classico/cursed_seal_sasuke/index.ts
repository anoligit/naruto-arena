import image0 from './cursed_seal_sasuke_char_1.jpg'
import image1 from './cursed_seal_sasuke_skill_1_(corrupt_chidori).jpg'
import image2 from './cursed_seal_sasuke_skill_2_(katon_goukakyuu_no_jutsu).jpg'
import image3 from './cursed_seal_sasuke_skill_3_(cursed_seal).jpg'
import image4 from './cursed_seal_sasuke_skill_4_(sharingan_evasion).jpg'
import image5 from './cursed_seal_sasuke_skill_5_(dark_void).jpeg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Corrupt Chidori
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-sasuke-1",
    "name": "Corrupt Chidori",
    "description": "Usando um Chidori corrompido pelo chakra do selo amaldiçoado, Sasuke causa 45 de dano perfurante a um inimigo e por 2 turnos, irá fazer ele causar 20 de dano não-affliction a menos.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 2
      }
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
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-sasuke-weakness"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-cs-sasuke-ready",
        "cost": {
          "random": 1
        },
        "effects": [
          {
            "type": "damage",
            "amount": 45,
            "damageType": "piercing"
          },
          {
            "type": "apply-status",
            "statusId": "classico-cs-sasuke-weakness"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-sasuke-weakness",
      "name": "Corrupt Chidori",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 20,
          "excludesAffliction": true
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Katon: Goukakyuu no Jutsu
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-sasuke-2",
    "name": "Katon: Goukakyuu no Jutsu",
    "description": "Sasuke lança uma gigantesca bola de fogo, causando 20 de dano affliction a um inimigo. Por 1 turno, se esse inimigo usar uma habilidade, ele receberá 10 de dano affliction. Durante 'Cursed Seal', esta habilidade será melhorada e causará 10 de dano adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
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
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-sasuke-fire"
      }
    ],
    "variants": [
      {
        "whenUserHasStatus": "classico-cs-sasuke-ready",
        "cost": {},
        "effects": [
          {
            "type": "damage",
            "amount": 30,
            "damageType": "affliction"
          },
          {
            "type": "apply-status",
            "statusId": "classico-cs-sasuke-fire"
          }
        ]
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-sasuke-fire",
      "name": "Katon: Goukakyuu no Jutsu",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "on-skill-use-damage",
          "amount": 10,
          "damageType": "affliction"
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Cursed Seal
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-sasuke-3",
    "name": "Cursed Seal",
    "description": "Sasuke acessa o poder do selo amaldiçoado, ficando invulnerável por 1 turno e recebendo 20 de dano affliction, que não pode matá-lo. No turno seguinte, 'Corrupt Chidori' custará 1 chakra aleatório, 'Katon: Goukakyuu no Jutsu' terá nenhum custo, e esta habilidade será substituída por 'Dark Void'.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 1,
    "target": "self",
    "classes": [
      "affliction",
      "instant"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 20,
        "damageType": "affliction",
        "nonlethal": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-sasuke-ready"
      },
      {
        "type": "apply-status",
        "statusId": "classico-cs-sasuke-seal-protection"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-sasuke-ready",
      "name": "Cursed Seal",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": []
    },
    {
      "id": "classico-cs-sasuke-seal-protection",
      "name": "Cursed Seal",
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

// HABILIDADE 4 — Sharingan Evasion
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-sasuke-4",
    "name": "Sharingan Evasion",
    "description": "Essa habilidade faz Cursed Seal Sasuke invulnerável por 1 turno.",
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
        "statusId": "classico-cs-sasuke-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-cs-sasuke-hide",
      "name": "Sharingan Evasion",
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

// HABILIDADE 5 — Dark Void
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-cs-sasuke-5",
    "name": "Dark Void",
    "description": "Expulsando o chakra corrompido, Sasuke envolve um inimigo, atordoando-o por 2 turnos e tornando-o invulnerável a todas as habilidades. Quando esta habilidade terminar, esse inimigo receberá 55 de dano. Esta habilidade terminará se Sasuke morrer. Os 55 de dano só acontecem ao completar os 2 turnos; não acontecem se Sasuke morrer antes.",
    "image": image5,
    "cost": {
      "random": 2
    },
    "cooldown": 4,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-cs-sasuke-void"
      }
    ],
    "replacement": {
      "skillId": "classico-cs-sasuke-3",
      "whenStatusId": "classico-cs-sasuke-ready"
    }
  },
  "statuses": [
    {
      "id": "classico-cs-sasuke-void",
      "name": "Dark Void",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "stun"
        },
        {
          "type": "invulnerable",
          "blocksAllies": true
        }
      ],
      "endsWhenSourceDies": true,
      "onExpireEffects": [
        {
          "type": "damage",
          "amount": 55,
          "damageType": "normal"
        }
      ],
      "indicatorNote": "Ao completar os 2 turnos, termina a proteção e causa 55 de dano. Se Sasuke morrer antes, cancela sem causar esse dano."
    }
  ]
}

export default defineCharacter({
  "id": "classico-cs-sasuke",
  "name": "Cursed Seal Sasuke",
  "image": image0,
  "description": "Quando Sasuke libera todo o poder de seu selo amaldiçoado, seu corpo e chakra se tornam uma visão distorcida de si mesmo e sua força é amplificada enormemente.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 107,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
