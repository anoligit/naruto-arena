import { formatSkillClasses } from '../classes'
import type { BattleState, PlayerId, SkillDefinition } from '../types'
import type { ActiveStatus, StatusDefinition, StatusModifier } from './types'

const number = (value: number) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)

// Os números vêm dos modificadores: balancear o efeito atualiza o indicador.
export function describeStatusEffect(definition: StatusDefinition, skills: readonly SkillDefinition[]): string[] {
  const skillName = (id: string) => skills.find((skill) => skill.id === id)?.name ?? id
  const describe = (modifier: StatusModifier): string => {
    switch (modifier.type) {
      case 'counter-first-harmful': return `Cancela a primeira habilidade ofensiva que atingir este personagem.${modifier.responseSkillId ? ` Responde com ${skillName(modifier.responseSkillId)}.` : ''}`
      case 'destructible-defense': return `Possui ${number(modifier.amount)} pontos de defesa destrutível contra dano normal e piercing. Affliction passa pela defesa.`
      case 'on-harmful-skill': return 'Ao usar uma nova habilidade ofensiva, ativa o efeito adicional registrado nesta marca.'
      case 'outgoing-damage-reduction': return `Causa ${number(modifier.amount)} a menos de dano${modifier.excludesAffliction ? ' não affliction' : ''}.`
      case 'prevent-damage-reduction':
        return 'Impede novas reduções de dano. Preserva as que já estavam ativas antes deste efeito.'
      case 'periodic-damage':
        return `Recebe ${number(modifier.amount)} de dano ${modifier.damageType} a cada turno de quem aplicou a habilidade.`
      case 'prevent-invulnerability':
        return 'Impede novas invulnerabilidades. Não remove as que já estavam ativas antes deste efeito.'
      case 'enemy-skill-cost-increase':
        return `As habilidades inimigas das classes ${formatSkillClasses(modifier.classes)} custam ${number(modifier.random)} energia aleatória adicional por uso.`
      case 'damage-reduction':
        return `Reduz o dano normal recebido em ${number(modifier.amount)} pontos. Não reduz piercing ou affliction.`
      case 'damage-reduction-percent':
        return `Reduz o dano normal recebido em ${number(modifier.percent)}%. Não reduz piercing ou affliction.`
      case 'damage-multiplier':
        return `Multiplica o dano de ${skillName(modifier.skillId)} por ${number(modifier.multiplier)}.`
      case 'stun':
        return modifier.classes
          ? `Não pode usar habilidades das classes: ${formatSkillClasses(modifier.classes)}.`
          : 'Não pode usar habilidades.'
      case 'stun-immunity':
        return 'Fica imune a stun.'
      case 'invulnerable':
        return modifier.classes
          ? `Fica invulnerável a novas habilidades inimigas das classes: ${formatSkillClasses(modifier.classes)}.`
          : 'Fica invulnerável a novas habilidades inimigas que respeitem invulnerabilidade.'
      case 'reflect':
        return `Devolve ao atacante as novas habilidades inimigas das classes: ${formatSkillClasses(modifier.classes)}.`
      case 'damage-taken-multiplier':
        return `Multiplica o dano recebido de ${skillName(modifier.skillId)} por ${number(modifier.multiplier)}${modifier.fromSourceOnly ? ', apenas do personagem que aplicou este efeito' : ''}.`
      case 'damage-taken-bonus':
        return `Recebe ${number(modifier.amount)} pontos de dano adicional de ${skillName(modifier.skillId)}${modifier.fromSourceOnly ? ', apenas do personagem que aplicou este efeito' : ''}.`
      case 'on-skill-use-damage':
        return `Ao executar uma habilidade, recebe ${number(modifier.amount)} de dano ${modifier.damageType}.`
      default: {
        const unsupported: never = modifier
        void unsupported
        return 'Efeito ativo.'
      }
    }
  }
  const lines = definition.modifiers.map(describe)
  if (definition.indicatorNote) lines.push(definition.indicatorNote)
  if (definition.endsWhenSourceDies) lines.push('Termina se quem aplicou este efeito morrer.')
  if (definition.action) lines.push('Efeito Action: fica suspenso enquanto o usuário estiver stunado para esta habilidade ou o alvo estiver invulnerável a ela.')
  if (definition.control) lines.push('Termina se o usuário ficar stunado nas classes desta habilidade ou se o alvo ficar invulnerável a esta habilidade.')
  return lines
}

export function getStatusRemainingTurns(battle: BattleState, active: ActiveStatus): number {
  const owner = battle.players[active.expiration.playerId]
  return Math.max(0, active.expiration.afterTurn - owner.turnsStarted + (battle.activePlayerId === owner.id ? 1 : 0))
}

export function formatStatusDuration(
  battle: BattleState,
  active: ActiveStatus
): string {
  if (active.expiration.permanent) return 'Até ser destruída.'
  const remaining = getStatusRemainingTurns(battle, active)
  if (remaining === 0) return 'Efeito encerrado.'
  if (remaining === 1 && active.expiration.playerId === battle.activePlayerId) return 'acaba esse turno'
  return `${remaining} ${remaining === 1 ? 'turno' : 'turnos'}`
}

export function isStatusVisible(definition: StatusDefinition | undefined, active: ActiveStatus, viewerId: PlayerId): boolean {
  return !definition?.invisible || active.sourcePlayerId === viewerId
}
