import image0 from './sandaime_hokage_char_1.jpg'
import image1 from './sandaime_hokage_skill_1_(fire_dragon_flame_missile).jpg'
import image2 from './sandaime_hokage_skill_2_(dead_demon_consuming_seal).jpg'
import image3 from './sandaime_hokage_skill_3_(summoning_enma).jpg'
import image4 from './sandaime_hokage_skill_4_(earth_release_wall).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Fire Dragon Flame Missile
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-sandaime-1",
    "name": "Fire Dragon Flame Missile",
    "description": "Sandaime Hokage causa 30 de dano affliction a um inimigo. Esse inimigo também receberá 10 de dano affliction no turno seguinte.",
    "image": image1,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
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
        "amount": 30,
        "damageType": "affliction"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sandaime-fire"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sandaime-fire",
      "name": "Fire Dragon Flame Missile",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
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

// HABILIDADE 2 — Dead Demon Consuming Seal
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-sandaime-2",
    "name": "Dead Demon Consuming Seal",
    "description": "O deus da morte suga a vida de um inimigo, que recebe 40 de dano affliction, é atordoado e não pode reduzir dano ou se tornar invulnerável a cada turno.* Sandaime também recebe 20 de dano affliction e é atordoado a cada turno. Esta habilidade não pode ser removida ou ignorada, e é terminada quando Sandaime morre.",
    "image": image2,
    "cost": {
      "random": 3
    },
    "cooldown": 0,
    "target": "enemy",
    "classes": [
      "affliction",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 40,
        "damageType": "affliction",
        "ignoresImmunity": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-sandaime-seal"
      },
      {
        "type": "damage",
        "amount": 20,
        "damageType": "affliction",
        "recipient": "user",
        "ignoresImmunity": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-sandaime-sacrifice",
        "recipient": "user"
      }
    ],
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-sandaime-seal",
      "name": "Dead Demon Consuming Seal",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "stun"
        },
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "prevent-invulnerability"
        }
      ],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 40,
          "damageType": "affliction",
          "ignoresImmunity": true
        }
      ],
      "endsWhenSourceDies": true,
      "unremovable": true,
      "ignoresImmunity": true
    },
    {
      "id": "classico-sandaime-sacrifice",
      "name": "Dead Demon Consuming Seal",
      "duration": {
        "type": "permanent",
        "turns": 0
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
          "damageType": "affliction",
          "ignoresImmunity": true
        }
      ],
      "endsWhenSourceDies": true,
      "unremovable": true,
      "ignoresImmunity": true
    }
  ]
}

// HABILIDADE 3 — Summoning: Enma
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-sandaime-3",
    "name": "Summoning: Enma",
    "description": "Ao invocar Enma, Sandaime e todos os aliados irão ganhar 15 pontos de redução de dano e eles não poderão ser mortos por 2 turnos. Se possível, Sandaime também causará 15 de dano a todos os inimigos por 2 turnos.",
    "image": image3,
    "cost": {
      "specific": {
        "ninjutsu": 1,
        "genjutsu": 1
      },
      "random": 1
    },
    "cooldown": 5,
    "target": "enemy",
    "classes": [
      "physical",
      "action",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-sandaime-enma",
        "recipient": "all-allies"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "normal",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-sandaime-strike",
        "skipIfUntargetable": true
      }
    ],
    "targetExpansion": {
      "target": "all-enemies"
    },
    "allowInvulnerableTarget": true
  },
  "statuses": [
    {
      "id": "classico-sandaime-enma",
      "name": "Summoning: Enma",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 15
        },
        {
          "type": "cannot-die"
        }
      ]
    },
    {
      "id": "classico-sandaime-strike",
      "name": "Summoning: Enma",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
      },
      "modifiers": [],
      "action": true,
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "normal"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Earth Release Wall
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-sandaime-4",
    "name": "Earth Release Wall",
    "description": "Essa habilidade faz Sandaime Hokage invulnerável por 1 turno.",
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
        "statusId": "classico-sandaime-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sandaime-hide",
      "name": "Earth Release Wall",
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
  "id": "classico-sandaime",
  "name": "Sandaime Hokage",
  "image": image0,
  "description": "Sandaime Hokage, conhecido como o Deus Shinobi, foi o Kage mais poderoso que já existiu. Ele é capaz de se concentrar em um inimigo enquanto sua invocação, Enma, enfrenta os outros. Quando tudo falha, ele pode invocar o deus da morte.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 161,
  abilities: [ability1, ability2, ability3, ability4],
})
