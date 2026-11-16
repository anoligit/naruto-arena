import { freezeUsedSkill, getBattleSkills } from '../skillCatalog'
import type { EffectContext, EffectError, SkillEffect } from './types'
import { getActiveStatuses } from './active'
import { getAppliedModifiers } from './appliedModifiers'

export function applyMemoryEffect(effect: Extract<SkillEffect, { type: 'cancel-delayed-skills' | 'store-triggering-skill' | 'store-random-target-skill' | 'consume-status-uses' | 'reset-skill-uses' | 'set-cooldown' | 'consume-revival' | 'consume-stacks' | 'store-health' | 'restore-health' }>, context: EffectContext): EffectError | null {
  const { source, target } = context
  if (effect.type === 'cancel-delayed-skills') {
    const canceled = context.state.scheduledSkills?.filter(record => record.sourceInstanceId === target.instanceId) ?? []
    context.state.scheduledSkills = context.state.scheduledSkills?.filter(record => !canceled.includes(record))
    const markers = new Set(canceled.map(record => record.markerInstanceId))
    for (const player of Object.values(context.state.players)) for (const member of player.team) member.statuses = member.statuses.filter(active => !markers.has(active.instanceId))
  } else if (effect.type === 'consume-status-uses') {
    const active = target.statuses.find(active => active.statusId === effect.statusId)
    if (active) active.remainingUses = Math.max(0, (active.remainingUses ?? 0) - effect.amount)
  } else if (effect.type === 'reset-skill-uses') {
    target.skillUses = { ...target.skillUses, [effect.skillId]: 0 }
  } else if (effect.type === 'set-cooldown') {
    const owner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === target.instanceId))!
    target.skillReadyOnTurn[effect.skillId] = Math.max(target.skillReadyOnTurn[effect.skillId] ?? 0, owner.turnsStarted + effect.turns + 1)
  } else if (effect.type === 'consume-stacks') {
    let remaining = effect.count
    target.statuses = target.statuses.filter(active => active.statusId !== effect.statusId || remaining-- <= 0)
  } else if (effect.type === 'consume-revival') {
    const active = getActiveStatuses(context.state, target).find(active => getAppliedModifiers(active).some(modifier => modifier.type === 'revive-on-death'))
    const revive = active && getAppliedModifiers(active).find(modifier => modifier.type === 'revive-on-death')
    if (active && revive?.type === 'revive-on-death') active.remainingUses = Math.max(0, (active.remainingUses ?? revive.uses ?? 1) - effect.amount)
  } else if (effect.type === 'store-health') {
    target.memory = { ...target.memory, health: { ...target.memory?.health, [effect.key]: target.health } }
  } else if (effect.type === 'restore-health') {
    const value = target.memory?.health?.[effect.key]
    if (value !== undefined) target.health = Math.min(target.maxHealth, Math.max(0, value))
  } else {
    const choices = getBattleSkills(context.state, target).filter(skill => !skill.passive && !skill.implementationPending && (skill.target === 'enemy' || skill.target === 'ally-or-enemy')) ?? []
    const stored = effect.type === 'store-triggering-skill' ? context.triggeringSkill : choices.length ? choices[Math.floor((context.random ?? Math.random)() * choices.length)] : undefined
    if (stored) source.memory = { ...source.memory, storedSkills: [...(source.memory?.storedSkills ?? []), freezeUsedSkill(context.state, effect.type === 'store-triggering-skill' ? context.triggeringSource ?? target : target, stored)] }
  }
  return null
}
