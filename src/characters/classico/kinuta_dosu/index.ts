import image0 from './kinuta_dosu_char_1.jpg'
import image1 from './kinuta_dosu_skill_1_(resonating_echo_drill).jpg'
import image2 from './kinuta_dosu_skill_2_(sound_manipulation).jpg'
import image3 from './kinuta_dosu_skill_3_(melody_arm_tuning).jpg'
import image4 from './kinuta_dosu_skill_4_(dosu_hide).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Resonating Echo Drill
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-dosu-1",
    "name": "Resonating Echo Drill",
    "description": "Dosu ataca com sua broca, causando 20 de dano a um inimigo, que ficará incapaz de reduzir dano ou se tornar invulnerável por 2 turnos. Nos próximos 2 turnos, esse inimigo irá receber 10 de dano adicional de 'Sound Manipulation'.",
    "image": image1,
    "cost": {
      "specific": {
        "bloodline": 1
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
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-dosu-drill"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-dosu-drill",
      "name": "Resonating Echo Drill",
      "duration": {
        "type": "opponent-turns",
        "turns": 2
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
          "skillId": "classico-dosu-2",
          "amount": 10,
          "fromSourceOnly": true
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Sound Manipulation
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-dosu-2",
    "name": "Sound Manipulation",
    "description": "Dosu manipula o som para desorientar diretamente um inimigo, causando 10 de dano a ele e atordoando suas habilidades por 1 turno. No próximo turno, 'Resonating Echo Drill' irá causar 10 de dano adicional.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1
      }
    },
    "cooldown": 1,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "melee"
    ],
    "effects": [
      {
        "type": "damage",
        "amount": 10,
        "damageType": "normal"
      },
      {
        "type": "apply-status",
        "statusId": "classico-dosu-stun"
      },
      {
        "type": "apply-status",
        "statusId": "classico-dosu-sound-ready",
        "recipient": "user"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-dosu-stun",
      "name": "Sound Manipulation",
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
      "id": "classico-dosu-sound-ready",
      "name": "Sound Manipulation",
      "duration": {
        "type": "owner-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-dosu-1",
          "amount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 3 — Melody Arm Tuning
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-dosu-3",
    "name": "Melody Arm Tuning",
    "description": "Dosu ajusta finamente seu Melody Arm para produzir vibrações sonoras debilitantes. Nos próximos 5 turnos, 'Resonating Echo Drill' irá causar 20 de dano adicional e 'Sound Manipulation' irá causar 10 de dano adicional.",
    "image": image3,
    "cost": {
      "random": 1
    },
    "cooldown": 5,
    "target": "self",
    "classes": [
      "mental",
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-dosu-tuning"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-dosu-tuning",
      "name": "Melody Arm Tuning",
      "duration": {
        "type": "opponent-turns",
        "turns": 5
      },
      "modifiers": [
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-dosu-1",
          "amount": 20
        },
        {
          "type": "outgoing-damage-bonus",
          "skillId": "classico-dosu-2",
          "amount": 10
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Dosu Hide
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-dosu-4",
    "name": "Dosu Hide",
    "description": "Essa habilidade faz Kinuta Dosu invulnerável por 1 turno.",
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
        "statusId": "classico-dosu-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-dosu-hide",
      "name": "Dosu Hide",
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

// ORDEM NA LISTA: para mover só este personagem, use order: { position: 4 }, por exemplo.
export default defineCharacter({
  "id": "classico-dosu",
  "name": "Kinuta Dosu",
  "image": image0,
  "description": "Talvez o mais forte dos três genin do Som, Kinuta Dosu usa seu Melody Arm implantado para amplificar ondas sonoras e aumentar o poder de seu taijutsu.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 16,
  abilities: [ability1, ability2, ability3, ability4],
})
