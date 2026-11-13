import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import type { SkillDefinition, StatusDefinition, SkillClass } from '../../game/types'
import { characterWithSkills } from '../definition'
import portrait from './images/kakashi_char_1.jpeg'
import skill1Image from './images/kakashi_skill_3.jpg'
import skill2Image from './images/kakashi_skill_2.jpg'
import skill3Image from './images/kakashi_skill_1.jpg'
import skill4Image from './images/kakashi_skill_4.jpg'

// Balanceamento: estes valores alimentam o combate e as descrições.
export const kakashiBalance = {
  reflect: { turns: 1, classes: ['physical', 'chakra', 'mental'] as SkillClass[] },
  dogs: { turns: 1, stunClasses: ['physical', 'chakra', 'mental'] as SkillClass[] },
  raikiri: { damage: 50 },
  hiding: { turns: 1 },
}

// Habilidades: custos, recargas, classes e efeitos aplicados.
export const kakashiSkills: SkillDefinition[] = [
  {
    id: 'kakashi-reflect',
    name: 'Sharingan Reflect',
    description: `Kakashi reflete as novas habilidades inimigas das classes ${formatSkillClasses(kakashiBalance.reflect.classes)} que o atingirem ${duration(kakashiBalance.reflect.turns)}, devolvendo seus efeitos ao atacante. Não remove efeitos anteriores. A proteção fica invisível para o adversário. Habilidades Control refletidas perdem a conexão e são canceladas.`,
    image: skill1Image,
    cost: {
      specific: {
        bloodline: 1
      }
    },
    cooldown: 2,
    target: 'self',
    classes: ['mental', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: 'kakashi-reflect'
      }
    ]
  },
  {
    id: 'kakashi-dogs',
    name: 'Summoning: Ninja Dogs',
    description: `Prende um inimigo e impede o uso das habilidades das classes ${formatSkillClasses(kakashiBalance.dogs.stunClasses)}. A prisão permanece ${duration(kakashiBalance.dogs.turns, "owner-turns", "Kakashi")}. Na jogada seguinte deste Kakashi, Raikiri mata esse alvo instantaneamente se os cães ainda estiverem ativos. Por ser Control, termina se Kakashi morrer ou ficar impedido de manter Ninja Dogs por stun, ou se o alvo ficar invulnerável. Imunidade a stun impede a prisão.`,
    image: skill2Image,
    cost: {
      specific: {
        ninjutsu: 1
      },
      random: 1
    },
    cooldown: 2,
    target: 'enemy',
    classes: ['mental', 'control', 'ranged'],
    effects: [
      {
        type: 'apply-status',
        statusId: 'kakashi-dogs'
      }
    ]
  },
  {
    id: 'kakashi-raikiri',
    name: 'Raikiri',
    description: `Causa ${n(kakashiBalance.raikiri.damage)} de dano piercing a um inimigo, ignorando redução de dano. Se o alvo ainda estiver preso pelo Ninja Dogs usado por este Kakashi na jogada anterior dele, mata o alvo instantaneamente. Não ignora invulnerabilidade.`,
    image: skill3Image,
    cost: {
      specific: {
        ninjutsu: 1,
        taijutsu: 1
      }
    },
    cooldown: 1,
    target: 'enemy',
    classes: ['chakra', 'instant', 'melee'],
    effects: [
      {
        type: 'damage',
        amount: kakashiBalance.raikiri.damage,
        damageType: 'piercing',
        executeIf: {
          statusId: 'kakashi-dogs',
          fromSourceOnly: true,
          previousUserTurn: true
        }
      }
    ]
  },
  {
    id: 'kakashi-hiding',
    name: 'Clever Hiding',
    description: `Kakashi fica invulnerável às novas habilidades inimigas ${duration(kakashiBalance.hiding.turns)}. Não remove efeitos já aplicados.`,
    image: skill4Image,
    cost: {
      random: 1
    },
    cooldown: 4,
    target: 'self',
    classes: ['mental', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: 'kakashi-invulnerable'
      }
    ]
  }
]

// Efeitos persistentes usados pelas habilidades acima.
export const kakashiStatuses: StatusDefinition[] = [
  {
    id: 'kakashi-reflect',
    indicatorNote: 'Habilidades Control refletidas são canceladas. Não remove efeitos anteriores.',
    name: 'Sharingan Reflect',
    invisible: true,
    duration: {
      type: 'opponent-turns',
      turns: kakashiBalance.reflect.turns
    },
    modifiers: [
      {
        type: 'reflect',
        classes: kakashiBalance.reflect.classes
      }
    ]
  },
  {
    id: 'kakashi-dogs',
    indicatorNote: 'Na próxima jogada do Kakashi que aplicou os cães, Raikiri pode executar este alvo.',
    name: 'Summoning: Ninja Dogs',
    control: true,
    endsWhenSourceDies: true,
    duration: {
      type: 'owner-turns',
      turns: kakashiBalance.dogs.turns
    },
    modifiers: [
      {
        type: 'stun',
        classes: kakashiBalance.dogs.stunClasses
      }
    ]
  },
  {
    id: 'kakashi-invulnerable',
    indicatorNote: 'Não remove efeitos já aplicados.',
    name: 'Invulnerabilidade',
    duration: {
      type: 'opponent-turns',
      turns: kakashiBalance.hiding.turns
    },
    modifiers: [
      {
        type: 'invulnerable'
      }
    ]
  }
]

// Cadastro do personagem: retrato, descrição e habilidades.
export const kakashi = characterWithSkills('kakashi', 'Hatake Kakashi', portrait, 'Líder do Time 7, conhecido como Copy Ninja, Kakashi coloca a vida de seus companheiros acima de tudo. É capaz de copiar técnicas inimigas e utiliza sua técnica original, Raikiri. No jogo de referência, é desbloqueado pela missão “Time 7 Luta como uma Equipe”.', kakashiSkills)
