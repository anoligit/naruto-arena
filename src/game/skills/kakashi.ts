import type { SkillDefinition } from '../types'

export const kakashiSkills: SkillDefinition[] = [
  {
    id: 'kakashi-reflect', name: 'Sharingan Reflect',
    description: 'Durante a próxima jogada adversária, Kakashi reflete as novas habilidades inimigas das classes Physical, Chakra e Mental que o atingirem, devolvendo seus efeitos ao atacante. Não remove efeitos anteriores. A proteção fica invisível para o adversário. Habilidades Control refletidas perdem a conexão e são canceladas.',
    image: 'images/kakashi/kakashi_skill_3.jpg',
    cost: { specific: { bloodline: 1 } }, cooldown: 2, target: 'self', classes: ['mental', 'instant'],
    effects: [{ type: 'apply-status', statusId: 'kakashi-reflect' }],
  },
  {
    id: 'kakashi-dogs', name: 'Summoning: Ninja Dogs',
    description: 'Prende um inimigo, impedindo o uso de suas habilidades Physical, Chakra e Mental na próxima jogada dele. Na jogada seguinte deste Kakashi, Raikiri mata esse alvo instantaneamente enquanto os cães permanecerem ativos. Por ser Control, termina se Kakashi morrer ou tiver suas habilidades Mental stunadas, ou se o alvo ficar invulnerável. Imunidade a stun impede a prisão.',
    image: 'images/kakashi/kakashi_skill_2.jpg',
    cost: { specific: { ninjutsu: 1 }, random: 1 }, cooldown: 2, target: 'enemy', classes: ['mental', 'control', 'ranged'],
    effects: [{ type: 'apply-status', statusId: 'kakashi-dogs' }],
  },
  {
    id: 'kakashi-raikiri', name: 'Raikiri',
    description: 'Causa 50 de dano piercing a um inimigo, ignorando redução de dano. Se o alvo ainda estiver preso pelo Ninja Dogs usado por este Kakashi na jogada anterior dele, mata o alvo instantaneamente. Não ignora invulnerabilidade.',
    image: 'images/kakashi/kakashi_skill_1.jpg',
    cost: { specific: { ninjutsu: 1, taijutsu: 1 } }, cooldown: 1, target: 'enemy', classes: ['chakra', 'instant', 'melee'],
    effects: [{ type: 'damage', amount: 50, damageType: 'piercing', executeIf: { statusId: 'kakashi-dogs', fromSourceOnly: true, previousUserTurn: true } }],
  },
  {
    id: 'kakashi-hiding', name: 'Clever Hiding',
    description: 'Kakashi fica invulnerável às habilidades inimigas durante a próxima jogada adversária. Não remove efeitos já aplicados.',
    image: 'images/kakashi/kakashi_skill_4.jpg',
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['mental', 'instant'],
    effects: [{ type: 'apply-status', statusId: 'invulnerable-one-turn' }],
  },
]
