import image0 from './uchiha_sasuke_char_1.png'
import image1 from './uchiha_sasuke_skill_1_(lion_combo).png'
import image2 from './uchiha_sasuke_skill_2_(chidori).png'
import image3 from './uchiha_sasuke_skill_3_(sharingan).png'
import image4 from './uchiha_sasuke_skill_4_(swift_block).png'
import image5 from './uchiha_sasuke_skill_5_(passive_cursed_seal_awakening).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Lion Combo
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-sasuke-1",
    "name": "Lion Combo",
    "description": "Copiando um combo de taijutsu que Lee usou contra ele, Sasuke causa 30 de dano a um inimigo. Essa habilidade irá causar 15 de dano adicional a um inimigo afetado por 'Sharingan'.",
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
    ]
  }
}

// HABILIDADE 2 — Chidori
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-sasuke-2",
    "name": "Chidori",
    "description": "Usando um jutsu de ataque do elemento raio, Sasuke causa 40 de dano perfurante a um inimigo. Essa habilidade irá causar 15 de dano adicional a um inimigo afetado por 'Sharingan'. Essa habilidade requer que 'Sharingan' esteja ativo em Sasuke.",
    "image": image2,
    "cost": {
      "specific": {
        "ninjutsu": 1
      },
      "random": 1
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
        "amount": 40,
        "damageType": "piercing"
      }
    ],
    "requirements": [
      {
        "type": "has-status",
        "statusId": "classico-sasuke-sharingan"
      }
    ]
  }
}

// HABILIDADE 3 — Sharingan
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-sasuke-3",
    "name": "Sharingan",
    "description": "Sasuke marca um inimigo. Por 4 turnos, Sasuke ganhará 5 pontos de redução de dano e 'Chidori' poderá ser usado. Durante esse tempo, esse inimigo irá receber 15 de dano adicional de 'Lion Combo' e 'Chidori'.",
    "image": image3,
    "cost": {},
    "cooldown": 3,
    "target": "enemy",
    "classes": [
      "mental",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-sasuke-mark"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasuke-sharingan",
        "recipient": "user"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasuke-deny",
        "whenUserHasStatus": "classico-sasuke-awakening"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sasuke-sharingan",
      "name": "Sharingan",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 5
        }
      ],
      "endsWhenSourceDies": true
    },
    {
      "id": "classico-sasuke-mark",
      "name": "Sharingan",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-sasuke-1",
          "amount": 15,
          "fromSourceOnly": true
        },
        {
          "type": "damage-taken-bonus",
          "skillId": "classico-sasuke-2",
          "amount": 15,
          "fromSourceOnly": true
        }
      ],
      "endsWhenSourceDies": true
    },
    {
      "id": "classico-sasuke-deny",
      "name": "Sharingan",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "prevent-damage-reduction"
        },
        {
          "type": "prevent-invulnerability"
        }
      ],
      "endsWhenSourceDies": true
    }
  ]
}

// HABILIDADE 4 — Swift Block
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-sasuke-4",
    "name": "Swift Block",
    "description": "Essa habilidade faz Uchiha Sasuke invulnerável por 1 turno.",
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
        "statusId": "classico-sasuke-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sasuke-hide",
      "name": "Swift Block",
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

// HABILIDADE 5 — Passive: Cursed Seal Awakening
const ability5: AbilityDefinition = {
  "skill": {
    "id": "classico-sasuke-5",
    "name": "Passive: Cursed Seal Awakening",
    "description": "Quando Sasuke atingir 50 de vida pela primeira vez, a Marca da Maldição será despertada, concedendo a Sasuke 10 pontos de redução de dano impenetrável permanentemente. Durante esse tempo, 'Sharingan' também fará com que o inimigo não possa reduzir dano ou se tornar invulnerável.",
    "image": image5,
    "cost": {},
    "cooldown": 0,
    "target": "self",
    "classes": [
      "instant"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-sasuke-awakening"
      }
    ],
    "passive": true,
    "healthTrigger": 50
  },
  "statuses": [
    {
      "id": "classico-sasuke-awakening",
      "name": "Passive: Cursed Seal Awakening",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "damage-reduction",
          "amount": 10,
          "includesPiercing": true
        }
      ],
      "unremovable": true
    }
  ]
}

// ORDEM NA LISTA: para mover só este personagem, use order: { position: 4 }, por exemplo.
export default defineCharacter({
  "id": "classico-sasuke",
  "name": "Uchiha Sasuke",
  "image": image0,
  "description": "Um Genin do Time 7, Sasuke é o único sobrevivente do clã Uchiha e jurou vingança contra seu irmão. Usando seu Sharingan, Sasuke é capaz de antecipar ataques e realizar golpes ofensivos avançados.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 2,
  abilities: [ability1, ability2, ability3, ability4, ability5],
})
