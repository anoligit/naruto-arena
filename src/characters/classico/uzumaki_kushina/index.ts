import image0 from './uzumaki_kushina_char_1.png'
import image1 from './uzumaki_kushina_skill_1_(four_symbols_seal).jpg'
import image2 from './uzumaki_kushina_skill_2_(life_link).jpg'
import image3 from './uzumaki_kushina_skill_3_(adamantine_sealing_chains).jpg'
import image4 from './uzumaki_kushina_skill_4_(adamantine_covering_chains).jpg'
import image5 from './uzumaki_kushina_skill_5_(life_transfer).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Four Symbols Seal
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-kushina-1",
    "name": "Four Symbols Seal",
    "description": "Kushina tenta selar um inimigo, destruindo sua defesa destrutível, causando 15 de dano perfurante, atordoando suas habilidades por 1 turno e permanentemente diminuindo o dano não-affliction que ele causa e recebe em 5.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
      },
      "random": 1
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "remove-defensive-statuses",
        "onlyShields": true
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "piercing"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kushina-stun"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kushina-seal"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kushina-stun",
      "name": "Four Symbols Seal",
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
      "id": "classico-kushina-seal",
      "name": "Four Symbols Seal",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 5,
          "excludesAffliction": true
        },
        {
          "type": "damage-reduction",
          "includesPiercing": true,
          "amount": 5
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Life Link
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-kushina-2",
    "name": "Life Link",
    "description": "Por 4 turnos, se Kushina ou um inimigo morrer, o outro também morrerá. Nos 4 turnos seguintes, esta habilidade será substituída por 'Life Transfer'. Esta habilidade ignora invulnerabilidade e não pode ser counterada, refletida, ignorada, removida ou interagir com outras habilidades.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      },
      "random": 1
    },
    "cooldown": 4,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-kushina-link",
        "linkTo": "source"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kushina-selflink",
        "recipient": "user",
        "linkTo": "target"
      }
    ],
    "allowInvulnerableTarget": true,
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-kushina-link",
      "name": "Life Link",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "life-link"
        }
      ],
      "unremovable": true,
      "ignoresImmunity": true
    },
    {
      "id": "classico-kushina-selflink",
      "name": "Life Link",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "life-link"
        }
      ],
      "unremovable": true,
      "ignoresImmunity": true
    }
  ]
}

// HABILIDADE 3 — Adamantine Sealing Chains
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-kushina-3",
    "name": "Adamantine Sealing Chains",
    "description": "Kushina usa um selo extremamente poderoso, cercando um inimigo com correntes. Primeiro remove todas as habilidades defensivas nele, depois o atordoa e o torna invulnerável a quaisquer outras habilidades por 2 turnos. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1,
        "genjutsu": 1
      }
    },
    "cooldown": 5,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "remove-defensive-statuses"
      },
      {
        "type": "apply-status",
        "statusId": "classico-kushina-chains"
      }
    ],
    "allowInvulnerableTarget": true,
    "cannotBeCountered": true
  },
  "statuses": [
    {
      "id": "classico-kushina-chains",
      "name": "Adamantine Sealing Chains",
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
      "ignoresImmunity": true
    }
  ]
}

// HABILIDADE 4 — Adamantine Covering Chains
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-kushina-4",
    "name": "Adamantine Covering Chains",
    "description": "Essa habilidade faz Uzumaki Kushina invulnerável por 1 turno.",
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
        "statusId": "classico-kushina-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-kushina-hide",
      "name": "Adamantine Covering Chains",
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

// HABILIDADE 5 — Life Transfer
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-kushina-5",
    "name": "Life Transfer",
    "description": "Kushina cura um aliado em 25 pontos e causa 25 de dano a si mesma.",
    "image": image5,
    "cost": {
      "random": 1
    },
    "cooldown": 0,
    "target": "ally",
    "classes": [
      "affliction",
      "instant"
    ],
    "effects": [
      {
        "type": "heal",
        "amount": 25
      },
      {
        "type": "damage",
        "amount": 25,
        "damageType": "affliction",
        "recipient": "user"
      }
    ],
    "replacement": {
      "skillId": "classico-kushina-2",
      "whenStatusId": "classico-kushina-selflink"
    }
  }
}

export default defineCharacter({
  "id": "classico-kushina",
  "name": "Uzumaki Kushina",
  "image": image0,
  "description": "Mãe de Uzumaki Naruto, esposa de Minato e antiga jinchuuriki da raposa de nove caudas. Kushina é especialista em técnicas únicas de selamento e barreiras que podem impedir e neutralizar até os inimigos mais poderosos.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 190,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
