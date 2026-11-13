import type { StatusDefinition } from './types'

export const statuses: StatusDefinition[] = [
  {
    id: 'kakashi-reflect', name: 'Sharingan Reflect', invisible: true,
    duration: { type: 'opponent-turns', turns: 1 },
    modifiers: [{ type: 'reflect', classes: ['physical', 'chakra', 'mental'] }],
  },
  {
    id: 'kakashi-dogs', name: 'Summoning: Ninja Dogs', control: true, endsWhenSourceDies: true,
    duration: { type: 'owner-turns', turns: 1 },
    modifiers: [{ type: 'stun', classes: ['physical', 'chakra', 'mental'] }],
  },
  {
    id: 'naruto-clones',
    name: 'Clones das Sombras',
    duration: {
      type: 'opponent-turns',
      turns: 4,
    },
    modifiers: [
      {
        type: 'damage-reduction',
        amount: 15,
      },
      {
        type: 'damage-multiplier',
        skillId: 'naruto-combo',
        multiplier: 2,
      },
    ],
  },
  {
    id: 'stun-one-turn',
    name: 'Stun',
    duration: {
      type: 'opponent-turns',
      turns: 1,
    },
    modifiers: [
      { type: 'stun' },
    ],
  },
  {
    id: 'invulnerable-one-turn',
    name: 'Invulnerabilidade',
    duration: {
      type: 'opponent-turns',
      turns: 1,
    },
    modifiers: [
      { type: 'invulnerable' },
    ],
  },
  {
    id: 'stun-physical-chakra-one-turn', name: 'Stun: Physical e Chakra',
    duration: { type: 'opponent-turns', turns: 1 },
    modifiers: [{ type: 'stun', classes: ['physical', 'chakra'] }],
  },
  {
    id: 'stun-physical-mental-one-turn', name: 'Stun: Physical e Mental',
    duration: { type: 'opponent-turns', turns: 1 },
    modifiers: [{ type: 'stun', classes: ['physical', 'mental'] }],
  },
  {
    id: 'sakura-inner', name: 'Inner Sakura',
    duration: { type: 'opponent-turns', turns: 4 },
    modifiers: [
      { type: 'damage-reduction-percent', percent: 25 },
      { type: 'stun-immunity' },
      { type: 'damage-multiplier', skillId: 'sakura-ko-punch', multiplier: 2 },
    ],
  },
  {
    id: 'sasuke-fireball-burn', name: 'Katon: dano ao usar habilidade',
    duration: { type: 'opponent-turns', turns: 1 },
    modifiers: [{ type: 'on-skill-use-damage', amount: 5, damageType: 'affliction' }],
  },
  {
    id: 'sasuke-sharingan', name: 'Sharingan',
    duration: { type: 'opponent-turns', turns: 3 }, endsWhenSourceDies: true,
    modifiers: [{ type: 'damage-reduction-percent', percent: 50 }],
  },
  {
    id: 'sasuke-sharingan-mark', name: 'Marca de Sharingan',
    duration: { type: 'opponent-turns', turns: 3 }, endsWhenSourceDies: true,
    modifiers: [
      { type: 'damage-taken-multiplier', skillId: 'sasuke-lion-combo', multiplier: 1.5, fromSourceOnly: true },
      { type: 'damage-taken-bonus', skillId: 'sasuke-chidori', amount: 10, fromSourceOnly: true },
    ],
  },
]