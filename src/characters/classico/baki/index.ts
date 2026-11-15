import image0 from './baki_char_1.jpg'
import image1 from './baki_skill_1_(sudden_strike).jpg'
import image2 from './baki_skill_2_(wind_blade).jpg'
import image3 from './baki_skill_3_(flak_jacket).jpg'
import image4 from './baki_skill_4_(baki_teleportation).jpeg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Sudden Strike
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-baki-1",
    "name": "Sudden Strike",
    "description": "Um ataque simples e incrivelmente rápido, deixando um rastro ilusório para confundir os inimigos. Baki causa 20 de dano perfurante a um inimigo. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente.",
    "image": image1,
    "cost": {
      "specific": {
        "genjutsu": 1
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
        "damageType": "piercing",
        "executeBelowHealth": 5
      }
    ]
  }
}

// HABILIDADE 2 — Wind Blade
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-baki-2",
    "name": "Wind Blade",
    "description": "Baki conjura um redemoinho de vento cortante e causa 40 de dano perfurante a um inimigo. Se a vida desse inimigo cair para 10 ou menos, ele será morto instantaneamente.",
    "image": image2,
    "cost": {
      "specific": {
        "genjutsu": 1,
        "ninjutsu": 1
      }
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
        "amount": 40,
        "damageType": "piercing",
        "executeBelowHealth": 10
      }
    ]
  }
}

// HABILIDADE 3 — Flak Jacket
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-baki-3",
    "name": "Flak Jacket",
    "description": "Baki veste um colete especial da vila da areia em si mesmo ou em um aliado, concedendo 50 de defesa destrutível por 4 turnos. Durante esse tempo, o personagem irá ignorar todos os efeitos nocivos, exceto dano, até que essa defesa seja destruída.",
    "image": image3,
    "cost": {
      "random": 2
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
        "statusId": "classico-baki-jacket"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-baki-jacket",
      "name": "Flak Jacket",
      "duration": {
        "type": "opponent-turns",
        "turns": 4
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 50
        },
        {
          "type": "harmful-effect-immunity"
        }
      ],
      "indicatorNote": "Ignora efeitos nocivos não relacionados a dano até o escudo se esgotar ou completar 4 turnos."
    }
  ]
}

// HABILIDADE 4 — Baki Teleportation
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-baki-4",
    "name": "Baki Teleportation",
    "description": "Essa habilidade faz Baki invulnerável por 1 turno.",
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
        "statusId": "classico-baki-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-baki-hide",
      "name": "Baki Teleportation",
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
  "id": "classico-baki",
  "name": "Baki",
  "image": image0,
  "description": "Baki é o líder Jounin da equipe de Gaara, Temari e Kankuro. Um homem misterioso e talvez ardiloso, mas leal, ele é especialista em jutsus do elemento vento.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 105,
  abilities: [ability1, ability2, ability3, ability4],
})
