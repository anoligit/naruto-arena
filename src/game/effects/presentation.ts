import { statuses } from './catalog'
import { getActiveModifiers } from './active'
import { formatSkillClasses } from '../classes'
import type { BattleState, PlayerId, SkillDefinition } from '../types'
import type { ActiveStatus, StatusDefinition, StatusModifier } from './types'

const number = (value: number) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)

// Os números vêm dos modificadores: balancear o efeito atualiza o indicador.
export function describeStatusEffect(definition: StatusDefinition, skills: readonly SkillDefinition[]): string[] {
  const skillName = (id: string) => id === '*' ? 'todas as habilidades' : skills.find((skill) => skill.id === id)?.name ?? id
  const describe = (modifier: StatusModifier): string => {
    switch (modifier.type) {
      case 'on-harmful-skill-heal-source': return `Ao usar uma nova habilidade ofensiva, cura quem aplicou esta marca em ${number(modifier.amount)} de vida.`
      case 'on-source-harmful-hit': return 'Uma nova habilidade ofensiva de quem aplicou esta marca ativa o efeito adicional neste alvo.'
      case 'skill-cost-increase': return `As habilidades${modifier.scope === 'helpful' ? ' não ofensivas' : modifier.scope === 'harmful' ? ' ofensivas' : ''} custam ${number(modifier.random)} energia aleatória adicional.`
      case 'outgoing-damage-reduction-percent': return `Causa ${number(modifier.percent)}% a menos de dano de todos os tipos.`
      case 'counter-first-harmful': return `Cancela a primeira habilidade ofensiva${modifier.classes ? ` das classes ${formatSkillClasses(modifier.classes)}` : ''} que atingir este personagem.${modifier.responseSkillId ? ` Responde com ${skillName(modifier.responseSkillId)}.` : ''}`
      case 'destructible-defense': return `Possui ${number(modifier.amount)} pontos de defesa destrutível contra dano normal e piercing. Affliction passa pela defesa.`
      case 'on-harmful-skill': return 'Ao usar uma nova habilidade ofensiva, ativa o efeito adicional registrado nesta marca.'
      case 'outgoing-damage-bonus': return `${skillName(modifier.skillId)} causa ${number(modifier.amount)} de dano adicional.`
      case 'outgoing-damage-reduction': return `Causa ${number(modifier.amount)} a menos de dano${modifier.excludesAffliction ? ' não affliction' : ''}${modifier.classes ? ` nas habilidades ${formatSkillClasses(modifier.classes)}` : ''}.`
      case 'prevent-damage-reduction':
        return 'Impede novas reduções de dano. Preserva as que já estavam ativas antes deste efeito.'
      case 'periodic-damage':
        return `Recebe ${number(modifier.amount)} de dano ${modifier.damageType} a cada turno de quem aplicou a habilidade.`
      case 'prevent-invulnerability':
        return 'Impede novas invulnerabilidades. Não remove as que já estavam ativas antes deste efeito.'
      case 'enemy-skill-cost-increase':
        return `As habilidades inimigas das classes ${formatSkillClasses(modifier.classes)} custam ${number(modifier.random)} energia aleatória adicional por uso.`
      case 'damage-reduction':
        return `Reduz o dano normal recebido em ${number(modifier.amount)} pontos. ${modifier.includesPiercing ? 'Também reduz piercing, mas não affliction.' : 'Não reduz piercing ou affliction.'}`
      case 'damage-reduction-percent':
        return `Reduz o dano normal recebido em ${number(modifier.percent)}%. ${modifier.includesPiercing ? 'Também reduz piercing; não reduz affliction.' : 'Não reduz piercing ou affliction.'}`
      case 'damage-multiplier':
        return `Multiplica o dano de ${skillName(modifier.skillId)} por ${number(modifier.multiplier)}.`
      case 'stun':
        return modifier.classes
          ? `Não pode usar habilidades das classes: ${formatSkillClasses(modifier.classes)}.`
          : modifier.scope === 'harmful' ? 'Não pode usar habilidades ofensivas.' : 'Não pode usar habilidades.'
      case 'isolated': return 'Fica isolado: só pode receber habilidades de si mesmo ou do personagem vinculado.'
      case 'life-link': return 'Se um dos personagens vinculados morrer, o outro também morre.'
      case 'healing-bonus': return `Cura ${modifier.amount} de vida adicional.`
      case 'incoming-damage-cap': return `Limita cada dano não Affliction a ${modifier.amount}.`
      case 'cooldown-increase': return `As habilidades recebem ${modifier.amount} de recarga adicional.`
      case 'ignore-healing': return 'Não recebe cura enquanto este efeito estiver ativo.'
      case 'skill-cost-reduction': return `As habilidades${modifier.scope === 'harmful' ? ' ofensivas' : ''} custam ${modifier.random} energia aleatória a menos.`
      case 'on-targeted-harmful': return `Reage a uma nova habilidade ofensiva ${formatSkillClasses(modifier.classes)} e termina após ativar.`
      case 'counter-skill-use': return 'A próxima utilização registrada será counterada e ativará os efeitos desta marca.'
      case 'ignore-defenses': return 'Suspende defesas já ativas e novas: redução de dano, defesa destrutível, invulnerabilidade, imunidades, counters e proteção contra morte. Os efeitos não são removidos e voltam a funcionar ao terminar esta habilidade.'
      case 'cannot-die': return 'Não pode ser derrotado enquanto este efeito estiver ativo; conserva pelo menos 1 de vida.'
      case 'reveal-enemy-invisible': return 'Revela os efeitos invisíveis inimigos enquanto este efeito estiver ativo.'
      case 'on-skill-use': return `Uma nova habilidade${modifier.exceptClasses ? ` sem ${formatSkillClasses(modifier.exceptClasses)}` : ''} ativa a reação registrada nesta marca.`
      case 'on-source-skill-use-heal': return `Recupera ${number(modifier.amount)} de vida quando o autor usa uma das habilidades indicadas.`
      case 'on-ally-targeted-hit': return 'Cada aliado que usar uma nova habilidade neste alvo recebe a proteção registrada, uma vez por aliado.'
      case 'on-enemy-target-team': return `Um inimigo que usar habilidade nesta equipe recebe ${number(modifier.amount)} de dano ${modifier.damageType}, uma vez por atacante a cada turno.`
      case 'on-new-skill-damage': return `Ao perder vida por uma nova habilidade${modifier.exceptClasses ? ` sem ${formatSkillClasses(modifier.exceptClasses)}` : ''}, recebe a proteção registrada até terminar este turno.`
      case 'damage-immunity': if (modifier.types) return `Ignora dano dos tipos ${modifier.types.join(', ')} enquanto este efeito estiver ativo.`
        return 'Ignora todo dano, inclusive piercing e Affliction, enquanto este efeito estiver ativo.'
      case 'harmful-effect-immunity': return 'Ignora efeitos nocivos que não sejam dano enquanto esta proteção estiver ativa.'
      case 'stun-immunity':
        return 'Fica imune a stun.'
      case 'invulnerable':
        if (modifier.scope === 'helpful') return 'Não pode receber novas habilidades defensivas ou de ajuda.'
        if (modifier.blocksAllies) return 'Fica invulnerável a novas habilidades de ambos os times.'
        return modifier.classes
          ? `Fica invulnerável a novas habilidades inimigas das classes: ${formatSkillClasses(modifier.classes)}.`
          : 'Fica invulnerável a novas habilidades inimigas que respeitem invulnerabilidade.'
      case 'reflect':
        return `Devolve ao atacante as novas habilidades inimigas das classes: ${formatSkillClasses(modifier.classes)}.`
      case 'damage-taken-multiplier':
        return `Multiplica o dano recebido de ${skillName(modifier.skillId)} por ${number(modifier.multiplier)}${modifier.classes ? ` das classes ${formatSkillClasses(modifier.classes)}` : ''}${modifier.fromSourceOnly ? ', apenas do personagem que aplicou este efeito' : ''}.`
      case 'damage-taken-bonus':
        return `Recebe ${number(modifier.amount)} pontos de dano adicional de ${skillName(modifier.skillId)}${modifier.classes ? ` das classes ${formatSkillClasses(modifier.classes)}` : ''}${modifier.fromSourceOnly ? ', apenas do personagem que aplicou este efeito' : ''}${modifier.excludesAffliction ? ', exceto dano Affliction' : ''}.`
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
  if (definition.ignoresImmunity) lines.push('Este efeito não pode ser ignorado por imunidades.')
  if (definition.unremovable) lines.push('Este efeito não pode ser removido por habilidades de limpeza.')
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
  if (active.expiration.permanent) return statuses.find(definition => definition.id === active.statusId)?.modifiers.some(modifier => modifier.type === 'destructible-defense') ? 'Até ser destruída.' : 'Permanente.'
  const remaining = getStatusRemainingTurns(battle, active)
  if (remaining === 0) return 'Efeito encerrado.'
  if (remaining === 1 && active.expiration.playerId === battle.activePlayerId) return 'acaba esse turno'
  return `${remaining} ${remaining === 1 ? 'turno' : 'turnos'}`
}

export function isStatusVisible(definition: StatusDefinition | undefined, active: ActiveStatus, viewerId: PlayerId, battle?: BattleState): boolean {
  if (!definition?.invisible || active.sourcePlayerId === viewerId) return true
  return battle?.players[viewerId].team.some(member => member.health > 0 && getActiveModifiers(battle, member).some(modifier => modifier.type === 'reveal-enemy-invisible')) ?? false
}
