import { generateEnergy, energyTypes } from '../energy'
import { applyDamage } from './damage'
import { nonnegative } from './validation'
import type { SkillEffect, EffectContext, EffectError } from './types'

export function applyStealHealth(effect: Extract<SkillEffect, { type: 'steal-health' }>, context: EffectContext): EffectError | null {
  const before = context.damageEvents.length
  const error = applyDamage({ type: 'damage', amount: effect.amount, damageType: 'affliction' }, context)
  if (!error && context.damageEvents.length > before) context.damageEvents.at(-1)!.leechToInstanceId = context.source.instanceId
  return error
}

export function applyStealEnergy(effect: Extract<SkillEffect, { type: 'steal-energy' }>, context: EffectContext): EffectError | null {
  if (!Number.isInteger(effect.amount) || !nonnegative(effect.amount) || !effect.types.length || !effect.types.every(type => energyTypes.includes(type))) return 'invalid-effect-definition'
  const owner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.source.instanceId))!
  const enemy = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.target.instanceId))!
  if (owner === enemy) return null
  for (let index = 0; index < effect.amount; index++) {
    const choices = [...new Set(effect.types)].filter(type => enemy.energy[type] > 0)
    if (!choices.length) break
    const type = choices[Math.floor((context.random ?? Math.random)() * choices.length)]
    enemy.energy[type] -= 1
    owner.energy[type] += 1
  }
  return null
}

export function applyGainEnergy(effect: Extract<SkillEffect, { type: 'gain-energy' }>, context: EffectContext): EffectError | null {
  if (!Number.isInteger(effect.amount) || !nonnegative(effect.amount)) return 'invalid-effect-definition'
  const owner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.source.instanceId))!
  const generated = generateEnergy(effect.amount, context.random)
  for (const type of energyTypes) owner.energy[type] += generated[type]
  return null
}
