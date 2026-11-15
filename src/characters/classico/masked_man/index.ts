import image0 from './masked_man_char_1.png'
import image1 from './masked_man_skill_1_(strange_jutsu).png'
import image2 from './masked_man_skill_2_(chain_assault).png'
import image3 from './masked_man_skill_3_(summoning_kyuubi).png'
import image4 from './masked_man_skill_4_(masked_man_block).png'
import image5 from './masked_man_skill_5_(summoned_kyuubi_bijuudama).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Strange Jutsu
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-masked-1",
    "name": "Strange Jutsu",
    "description": "Masked Man isola a si mesmo e um inimigo do campo de batalha, tornando ambos invulneráveis a todos os personagens exceto um ao outro por 3 turnos; este efeito não pode ser ignorado. Durante esse tempo, o inimigo receberá 15 de dano a cada turno.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 2,
    "target": "enemy",
    "classes": [
      "chakra",
      "action",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-masked-duel",
        "linkTo": "source"
      },
      {
        "type": "apply-status",
        "statusId": "classico-masked-self",
        "recipient": "user",
        "linkTo": "target"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-masked-duel",
      "name": "Strange Jutsu",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "isolated"
        }
      ],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "normal"
        }
      ],
      "ignoresImmunity": true,
      "endsWhenSourceDies": true
    },
    {
      "id": "classico-masked-self",
      "name": "Strange Jutsu",
      "duration": {
        "type": "opponent-turns",
        "turns": 3
      },
      "modifiers": [
        {
          "type": "isolated"
        }
      ],
      "ignoresImmunity": true,
      "endsWhenLinkedTargetDies": true
    }
  ]
}

// HABILIDADE 2 — Chain Assault
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-masked-2",
    "name": "Chain Assault",
    "description": "Produzindo correntes de seus pulsos, Masked Man causa 20 de dano a um inimigo, reduzindo o dano não affliction dele em 10 por 1 turno. Esta habilidade causa 30 de dano se ele estiver afetado por 'Strange Jutsu'.",
    "image": image2,
    "cost": {
      "specific": {
        "taijutsu": 1
      }
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
        "amount": 20,
        "damageType": "normal",
        "unlessTargetHasStatus": "classico-masked-duel"
      },
      {
        "type": "damage",
        "amount": 30,
        "damageType": "normal",
        "whenTargetHasStatus": "classico-masked-duel"
      },
      {
        "type": "apply-status",
        "statusId": "classico-masked-weak"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-masked-weak",
      "name": "Chain Assault",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-reduction",
          "amount": 10,
          "excludesAffliction": true
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Summoning: Kyuubi
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-masked-3",
    "name": "Summoning: Kyuubi",
    "description": "Masked Man pode invocar o Kyuubi se estiver com 50 de vida ou menos, concedendo a si mesmo 40 pontos de defesa destrutível permanente. Enquanto tiver essa defesa, esta habilidade será substituída por 'Summoned Kyuubi: Bijuudama'.",
    "image": image3,
    "cost": {
      "random": 2
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
        "statusId": "classico-masked-kyuubi"
      }
    ],
    "maxUserHealth": 50
  },
  "statuses": [
    {
      "id": "classico-masked-kyuubi",
      "name": "Summoning: Kyuubi",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 40
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Masked Man Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-masked-4",
    "name": "Masked Man Block",
    "description": "Essa habilidade faz Masked Man invulnerável por 1 turno.",
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
        "statusId": "classico-masked-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-masked-hide",
      "name": "Masked Man Block",
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

// HABILIDADE 5 — Summoned Kyuubi: Bijuudama
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-masked-5",
    "name": "Summoned Kyuubi: Bijuudama",
    "description": "Kyuubi reúne uma esfera massiva de chakra e dispara contra todos os inimigos causando 35 de dano perfurante a eles.",
    "image": image5,
    "cost": {
      "specific": {
        "bloodline": 1
      },
      "random": 2
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "chakra",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 35,
        "damageType": "piercing"
      }
    ],
    "targetExpansion": {
      "target": "all-vulnerable-enemies"
    },
    "replacement": {
      "skillId": "classico-masked-3",
      "whenStatusId": "classico-masked-kyuubi"
    }
  }
}

export default defineCharacter({
  "id": "classico-masked",
  "name": "Masked Man",
  "image": image0,
  "description": "Pouco se sabe sobre o Masked Man, além do seu ódio incontrolável pela Vila da Folha. Após extrair o Kyuubi de Kushina, Masked Man é capaz de invocar a Besta de Nove Caudas no campo de batalha, além de usar outras técnicas desconhecidas.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 176,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
