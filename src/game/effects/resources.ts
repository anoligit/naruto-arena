import { generateEnergy, energyTypes } from '../energy'
import { applyDamage } from './damage'
import { nonnegative } from './validation'
import type { SkillEffect, EffectContext, EffectError } from './types'

export function applyStealHealth(effect: Extract<SkillEffect, { type: 'steal-health' }>, context: EffectContext): EffectError | null {
  const before = context.damageEvents.length
  const error = applyDamage({ type: 'damage', amount: effect.amount, damageType: 'affliction' }, context)
  if (!error && context.damageEvents.length > before) context.damageEvents.at(-1)!.leechToInstanceId = context.beneficiaryInstanceId ?? context.source.instanceId
  return error
}

export function applyStealEnergy(effect: Extract<SkillEffect, { type: 'steal-energy' }>, context: EffectContext): EffectError | null {
  return transferEnergy(effect, context, true)
}

export function applyRemoveEnergy(effect: Extract<SkillEffect, { type: 'remove-energy' }>, context: EffectContext): EffectError | null {
  return transferEnergy(effect, context, false)
}

function transferEnergy(effect: Extract<SkillEffect, { type: 'steal-energy' | 'remove-energy' }>, context: EffectContext, transfer: boolean): EffectError | null {
  const types = effect.types ?? energyTypes
  if (!Number.isInteger(effect.amount) || !nonnegative(effect.amount) || !types.length || !types.every(type => energyTypes.includes(type))) return 'invalid-effect-definition'
  const owner = context.state.players[context.playerId]
  const enemy = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.target.instanceId))!
  if (transfer && owner === enemy) return null
  for (let index = 0; index < effect.amount; index++) {
    const choices = [...new Set(types)].filter(type => enemy.energy[type] > 0)
    if (!choices.length) break
    const type = choices[Math.floor((context.random ?? Math.random)() * choices.length)]
    enemy.energy[type] -= 1
    if (transfer) owner.energy[type] += 1
  }
  return null
}

export function applyGainEnergy(effect: Extract<SkillEffect, { type: 'gain-energy' }>, context: EffectContext): EffectError | null {
  if (!Number.isInteger(effect.amount) || !nonnegative(effect.amount)) return 'invalid-effect-definition'
  const owner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === (effect.team === 'target' ? context.target : context.source).instanceId))!
  if (effect.energyType) {
    if (!energyTypes.includes(effect.energyType)) return 'invalid-effect-definition'
    owner.energy[effect.energyType] += effect.amount
    return null
  }
  const generated = generateEnergy(effect.amount, context.random)
  for (const type of energyTypes) owner.energy[type] += generated[type]
  return null
}
