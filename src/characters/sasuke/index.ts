import { n, duration, capitalize } from '../description'
import type { SkillDefinition, StatusDefinition } from '../../game/types'
import { characterWithSkills } from '../definition'
import portrait from './images/sasuke_char_1.jpg'
import skill1Image from './images/sasuke_skill_1.jpg'
import skill2Image from './images/sasuke_skill_2.jpg'
import skill3Image from './images/sasuke_skill_3.jpg'
import skill4Image from './images/sasuke_skill_4.jpg'
import skill5Image from './images/sasuke_skill_5.jpg'

// Balanceamento: estes valores alimentam o combate e as descrições.
export const sasukeBalance = {
  lion: { damage: 30 },
  fireball: { damage: 15, triggeredDamage: 5, turns: 1 },
  sharingan: { reductionPercent: 50, turns: 3, lionMultiplier: 1.5, chidoriBonus: 10 },
  block: { turns: 1 },
  chidori: { damage: 40 },
}

// Habilidades: custos, recargas, classes e efeitos aplicados.
export const sasukeSkills: SkillDefinition[] = [
  {
    id: 'sasuke-lion-combo',
    name: 'Lion Combo',
    description: `Causa ${n(sasukeBalance.lion.damage)} de dano físico a um inimigo. Contra o inimigo marcado pelo Sharingan deste Sasuke, o dano é multiplicado por ${n(sasukeBalance.sharingan.lionMultiplier)}, para ${n(sasukeBalance.lion.damage * sasukeBalance.sharingan.lionMultiplier)}, enquanto a marca permanecer ativa.`,
    image: skill1Image,
    cost: {
      specific: {
        taijutsu: 1
      },
      random: 1
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['physical', 'melee', 'instant'],
    effects: [
      {
        type: 'damage',
        amount: sasukeBalance.lion.damage,
        damageType: 'normal'
      }
    ]
  },
  {
    id: 'sasuke-fireball',
    name: 'Katon: Goukakyuu no Jutsu',
    description: `Causa imediatamente ${n(sasukeBalance.fireball.damage)} de dano affliction a um inimigo. ${capitalize(duration(sasukeBalance.fireball.turns))}, se esse personagem executar uma habilidade, recebe mais ${n(sasukeBalance.fireball.triggeredDamage)} de dano affliction. Os dois danos ignoram redução de dano. O dano adicional só ocorre se o alvo efetivamente usar uma habilidade.`,
    image: skill2Image,
    cost: {
      specific: {
        ninjutsu: 1
      }
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['chakra', 'ranged', 'instant', 'unique', 'affliction'],
    effects: [
      {
        type: 'damage',
        amount: sasukeBalance.fireball.damage,
        damageType: 'affliction'
      },
      {
        type: 'apply-status',
        statusId: 'sasuke-fireball-burn'
      }
    ]
  },
  {
    id: 'sasuke-sharingan',
    name: 'Sharingan',
    description: `Sasuke recebe ${n(sasukeBalance.sharingan.reductionPercent)}% de redução de dano ${duration(sasukeBalance.sharingan.turns)}; nesse período, esta habilidade é substituída por Chidori. Se o inimigo escolhido puder ser afetado, recebe uma marca que multiplica por ${n(sasukeBalance.sharingan.lionMultiplier)} o dano de Lion Combo deste Sasuke e aumenta em ${n(sasukeBalance.sharingan.chidoriBonus)} o dano de seu Chidori. Contra um alvo invulnerável, Sasuke ainda recebe a proteção, mas a marca não é aplicada. Os efeitos terminam se Sasuke morrer.`,
    image: skill3Image,
    cost: {
      specific: {
        bloodline: 1
      }
    },
    cooldown: 3,
    target: 'enemy',
    classes: ['mental', 'ranged', 'instant', 'unique'],
    allowInvulnerableTarget: true,
    effects: [
      {
        type: 'apply-status',
        statusId: 'sasuke-sharingan',
        recipient: 'user'
      },
      {
        type: 'apply-status',
        statusId: 'sasuke-sharingan-mark',
        skipIfUntargetable: true
      }
    ]
  },
  {
    id: 'sasuke-swift-block',
    name: 'Swift Block',
    description: `Sasuke fica invulnerável às novas habilidades inimigas ${duration(sasukeBalance.block.turns)}. Não remove efeitos que já estavam aplicados.`,
    image: skill4Image,
    cost: {
      random: 1
    },
    cooldown: 4,
    target: 'self',
    classes: ['physical', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: 'sasuke-invulnerable'
      }
    ]
  },
  {
    id: 'sasuke-chidori',
    name: 'Chidori',
    description: `Requer Sharingan ativo no próprio Sasuke e ocupa o lugar de Sharingan enquanto esse efeito durar. Causa ${n(sasukeBalance.chidori.damage)} de dano piercing a um inimigo, ignorando sua redução de dano. Contra o alvo marcado pelo Sharingan deste Sasuke, causa ${n(sasukeBalance.chidori.damage + sasukeBalance.sharingan.chidoriBonus)}. A invulnerabilidade do alvo ainda impede o uso.`,
    image: skill5Image,
    cost: {
      specific: {
        ninjutsu: 1
      },
      random: 1
    },
    cooldown: 1,
    target: 'enemy',
    classes: ['chakra', 'melee', 'instant', 'unique'],
    replacement: {
      skillId: 'sasuke-sharingan',
      whenStatusId: 'sasuke-sharingan'
    },
    requirements: [
      {
        type: 'has-status',
        statusId: 'sasuke-sharingan'
      }
    ],
    effects: [
      {
        type: 'damage',
        amount: sasukeBalance.chidori.damage,
        damageType: 'piercing'
      }
    ]
  }
]

// Efeitos persistentes usados pelas habilidades acima.
export const sasukeStatuses: StatusDefinition[] = [
  {
    id: 'sasuke-fireball-burn',
    indicatorNote: 'O dano adicional só ocorre se o personagem executar uma habilidade.',
    name: 'Katon: dano ao usar habilidade',
    duration: {
      type: 'opponent-turns',
      turns: sasukeBalance.fireball.turns
    },
    modifiers: [
      {
        type: 'on-skill-use-damage',
        amount: sasukeBalance.fireball.triggeredDamage,
        damageType: 'affliction'
      }
    ]
  },
  {
    id: 'sasuke-sharingan',
    indicatorNote: 'Permite usar Chidori no lugar de Sharingan enquanto este efeito permanecer ativo.',
    name: 'Sharingan',
    duration: {
      type: 'opponent-turns',
      turns: sasukeBalance.sharingan.turns
    },
    endsWhenSourceDies: true,
    modifiers: [
      {
        type: 'damage-reduction-percent',
        percent: sasukeBalance.sharingan.reductionPercent
      }
    ]
  },
  {
    id: 'sasuke-sharingan-mark',
    indicatorNote: 'Os bônus valem apenas para o Sasuke que aplicou esta marca.',
    name: 'Marca de Sharingan',
    duration: {
      type: 'opponent-turns',
      turns: sasukeBalance.sharingan.turns
    },
    endsWhenSourceDies: true,
    modifiers: [
      {
        type: 'damage-taken-multiplier',
        skillId: 'sasuke-lion-combo',
        multiplier: sasukeBalance.sharingan.lionMultiplier,
        fromSourceOnly: true
      },
      {
        type: 'damage-taken-bonus',
        skillId: 'sasuke-chidori',
        amount: sasukeBalance.sharingan.chidoriBonus,
        fromSourceOnly: true
      }
    ]
  },
  {
    id: 'sasuke-invulnerable',
    indicatorNote: 'Não remove efeitos já aplicados.',
    name: 'Invulnerabilidade',
    duration: {
      type: 'opponent-turns',
      turns: sasukeBalance.block.turns
    },
    modifiers: [
      {
        type: 'invulnerable'
      }
    ]
  }
]

// Cadastro do personagem: retrato, descrição e habilidades.
export const sasuke = characterWithSkills('sasuke', 'Uchiha Sasuke', portrait, 'Genin do Time 7 e único sobrevivente do clã Uchiha, Sasuke jurou se vingar de seu irmão. Com o Sharingan, consegue antecipar ataques e executar técnicas ofensivas avançadas.', sasukeSkills)
