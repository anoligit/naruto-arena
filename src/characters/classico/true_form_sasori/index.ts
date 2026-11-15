import image0 from './true_form_sasori_char_1.png'
import image1 from './true_form_sasori_skill_1_(puppet_flamethrower).png'
import image2 from './true_form_sasori_skill_2_(water_stream_shooters).png'
import image3 from './true_form_sasori_skill_3_(red_secret_technique_100_puppets).png'
import image4 from './true_form_sasori_skill_4_(magnificent_pose).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

// HABILIDADE 1 — Puppet Flamethrower
const ability1: AbilityDefinition = {
  "skill": {
    "id": "classico-sasori-1",
    "name": "Puppet Flamethrower",
    "description": "Sasori causa 10 de dano affliction a um inimigo. No próximo turno, esse inimigo irá receber 5 de dano affliction permanentemente. Se usada em um inimigo afetado por 'Water Stream Shooters', essa habilidade terá um efeito diferente, causando 20 de dano affliction e atordoando habilidades ofensivas por 1 turno.",
    "image": image1,
    "cost": {
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
        "amount": 10,
        "damageType": "affliction",
        "unlessTargetHasStatus": "classico-sasori-water"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasori-flame",
        "unlessTargetHasStatus": "classico-sasori-water"
      },
      {
        "type": "damage",
        "amount": 20,
        "damageType": "affliction",
        "whenTargetHasStatus": "classico-sasori-water"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasori-off",
        "whenTargetHasStatus": "classico-sasori-water"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sasori-flame",
      "name": "Puppet Flamethrower",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 5,
          "damageType": "affliction"
        }
      ],
      "replaces": [
        "classico-sasori-flame"
      ]
    },
    {
      "id": "classico-sasori-off",
      "name": "Puppet Flamethrower",
      "duration": {
        "type": "opponent-turns",
        "turns": 1
      },
      "modifiers": [
        {
          "type": "stun",
          "scope": "harmful"
        }
      ]
    }
  ]
}

// HABILIDADE 2 — Water Stream Shooters
const ability2: AbilityDefinition = {
  "skill": {
    "id": "classico-sasori-2",
    "name": "Water Stream Shooters",
    "description": "Sasori causa 10 de dano affliction a um inimigo. No próximo turno, esse inimigo irá receber 5 de dano affliction permanentemente. Se usada em um inimigo afetado por 'Puppet Flamethrower', essa habilidade terá um efeito diferente, causando 30 de dano affliction e atordoando habilidades defensivas por 1 turno.",
    "image": image2,
    "cost": {
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
        "amount": 10,
        "damageType": "affliction",
        "unlessTargetHasStatus": "classico-sasori-flame"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasori-water",
        "unlessTargetHasStatus": "classico-sasori-flame"
      },
      {
        "type": "damage",
        "amount": 30,
        "damageType": "affliction",
        "whenTargetHasStatus": "classico-sasori-flame"
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasori-helpful",
        "whenTargetHasStatus": "classico-sasori-flame"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sasori-water",
      "name": "Water Stream Shooters",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 5,
          "damageType": "affliction"
        }
      ],
      "replaces": [
        "classico-sasori-water"
      ]
    },
    {
      "id": "classico-sasori-helpful",
      "name": "Water Stream Shooters",
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

// HABILIDADE 3 — Red Secret Technique: 100 Puppets
const ability3: AbilityDefinition = {
  "skill": {
    "id": "classico-sasori-3",
    "name": "Red Secret Technique: 100 Puppets",
    "description": "Sasori usa a Técnica Secreta Vermelha, invocando cem marionetes e ganhando 50 pontos de defesa destrutível. Permanentemente, todos os inimigos irão receber 15 de dano perfurante a cada turno. Essa habilidade irá terminar se Sasori receber dano com sucesso ou perder toda sua defesa destrutível.",
    "image": image3,
    "cost": {
      "specific": {
        "bloodline": 1,
        "ninjutsu": 1
      }
    },
    "cooldown": 5,
    "target": "enemy",
    "classes": [
      "physical",
      "instant",
      "ranged"
    ],
    "effects": [
      {
        "type": "apply-status",
        "statusId": "classico-sasori-puppets",
        "recipient": "user"
      },
      {
        "type": "damage",
        "amount": 15,
        "damageType": "piercing",
        "skipIfUntargetable": true
      },
      {
        "type": "apply-status",
        "statusId": "classico-sasori-dot",
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
      "id": "classico-sasori-puppets",
      "name": "Red Secret Technique: 100 Puppets",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [
        {
          "type": "destructible-defense",
          "amount": 50
        }
      ],
      "endsOnNewSkillDamage": true
    },
    {
      "id": "classico-sasori-dot",
      "name": "Red Secret Technique: 100 Puppets",
      "duration": {
        "type": "permanent",
        "turns": 0
      },
      "modifiers": [],
      "requiresSourceStatus": "classico-sasori-puppets",
      "periodicEffects": [
        {
          "type": "damage",
          "amount": 15,
          "damageType": "piercing"
        }
      ]
    }
  ]
}

// HABILIDADE 4 — Magnificent Pose
const ability4: AbilityDefinition = {
  "skill": {
    "id": "classico-sasori-4",
    "name": "Magnificent Pose",
    "description": "Essa habilidade faz True Form Sasori invulnerável por 1 turno.",
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
        "statusId": "classico-sasori-hide"
      }
    ]
  },
  "statuses": [
    {
      "id": "classico-sasori-hide",
      "name": "Magnificent Pose",
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
  "id": "classico-sasori",
  "name": "True Form Sasori",
  "image": image0,
  "description": "Levado ao limite, Sasori revela o segredo de seu corpo eternamente jovem: ele transformou a si mesmo em uma marionete com um \"núcleo\" vivo que agora constitui todo o seu ser. Usando o próprio corpo como arma, Sasori também utiliza as lendárias Cem Marionetes de Chikamatsu, que, segundo rumores, seriam capazes de derrubar uma nação inteira.",
  "unlockRequirement": {
    "type": "none"
  },
  "order": 185,
  abilities: [ability1, ability2, ability3, ability4],
})
