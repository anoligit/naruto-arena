import type { SkillDefinition } from '../types'

export const sakuraSkills: SkillDefinition[] = [
  {
    id: 'sakura-ko-punch', name: 'KO Punch',
    description: 'Sakura causa 15 de dano físico a um inimigo e impede o uso das habilidades Physical e Mental desse alvo na próxima jogada dele. Com Inner Sakura ativo, o dano aumenta para 30. Não bloqueia habilidades que não tenham essas classes.',
    image: 'images/sakura/sakura_skill_1.jpg',
    cost: { specific: { taijutsu: 1 } }, cooldown: 0, target: 'enemy', classes: ['physical', 'melee', 'instant'],
    effects: [{ type: 'damage', amount: 15, damageType: 'normal' }, { type: 'apply-status', statusId: 'stun-physical-mental-one-turn' }],
  },
  {
    id: 'sakura-cure', name: 'Cure',
    description: 'Recupera 25 pontos de vida de um aliado vivo, incluindo a própria Sakura. A cura não pode ultrapassar a vida máxima e não revive personagens derrotados.',
    image: 'images/sakura/sakura_skill_2.jpg',
    cost: { specific: { ninjutsu: 1 } }, cooldown: 0, target: 'ally', classes: ['chakra', 'instant'],
    effects: [{ type: 'heal', amount: 25 }],
  },
  {
    id: 'sakura-inner', name: 'Inner Sakura',
    description: 'Por 4 turnos, Sakura recebe 25% de redução de dano e fica imune a stun; seu KO Punch passa a causar 30 de dano. O efeito começa na execução e termina após a quarta jogada adversária. A redução não afeta dano piercing ou affliction.',
    image: 'images/sakura/sakura_skill_3.jpg',
    cost: { random: 2 }, cooldown: 4, target: 'self', classes: ['mental', 'instant', 'unique'],
    effects: [{ type: 'apply-status', statusId: 'sakura-inner' }],
  },
  {
    id: 'sakura-replacement', name: 'Replacement Technique',
    description: 'Sakura fica invulnerável às habilidades inimigas durante a próxima jogada adversária. Não remove efeitos que já estavam aplicados.',
    image: 'images/sakura/sakura_skill_4.jpg',
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['chakra', 'instant'],
    effects: [{ type: 'apply-status', statusId: 'invulnerable-one-turn' }],
  },
]
