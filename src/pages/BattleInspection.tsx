import { getEffectiveSkill } from '../game/skillCatalog'
import { describeSkillTarget } from '../game/targeting/index'
import { energyLabels } from '../game/energy/index'
import { formatCooldown } from '../game/cooldown'
import SkillClasses from '../components/SkillClasses'
import EnergyCost from '../components/EnergyCost'
import { imageUrl } from '../utils/imageUrl'
import { characters } from '../data/characters'
import type { BattleState } from '../game/types'

export type BattleInspection = { characterInstanceId: string; skillName: string | null }

export default function BattleInspectionPanel({ battle, inspection, onCharacter, onSkill }: {
  battle: BattleState
  inspection: BattleInspection | null
  onCharacter: (instanceId: string) => void
  onSkill?: (instanceId: string, skillName: string) => void
}) {
  const member = Object.values(battle.players).flatMap((owner) => owner.team)
    .find((entry) => entry.instanceId === inspection?.characterInstanceId)
  const definition = characters.find((entry) => entry.id === member?.characterId)
  const skillName = inspection?.skillName
  const baseSkill = definition?.skillDefinitions?.find((entry) => entry.name === skillName)
  const skill = member && baseSkill ? getEffectiveSkill(battle, member, baseSkill) : baseSkill
  const image = skillName ? skill?.image ?? definition?.skillImages?.[skillName] : definition?.image
  const description = skillName
    ? skill?.description ?? definition?.skillDescriptions?.[skillName] ?? 'Regras desta habilidade ainda não cadastradas.'
    : definition?.description ?? 'Descrição deste personagem ainda não cadastrada.'

  return <section className="battle-inspection" aria-label="Consulta de personagens e habilidades">
    {member && definition ? <>
      <div className="inspection-image">{image ? <img src={imageUrl(image)} alt={skillName ?? definition.name} draggable={false} onError={(event) => { event.currentTarget.hidden = true }} /> : <span>{skillName ?? definition.name}</span>}</div>
      <div className="inspection-copy">
        <small>Consulta · {definition.name}</small>
        <h2>{skillName ?? definition.name}</h2>
        <p>{description}</p>
        {skill && <dl><div><dt>{energyLabels.cost}</dt><dd><EnergyCost cost={skill.cost} /></dd></div>
          <div><dt>Recarga</dt><dd>{formatCooldown(skill.cooldown, 'full')}</dd></div>
          <div><dt>Alvo</dt><dd>{describeSkillTarget(battle, member, skill)}</dd></div>
          <div><dt>Classes</dt><dd><SkillClasses classes={skill.classes} /></dd></div></dl>}
        {skill && onSkill && definition.skillDefinitions?.filter((candidate) => candidate.replacement?.skillId === skill.id).map((candidate) =>
          <button key={candidate.id} onClick={() => onSkill(member.instanceId, candidate.name)}>Consultar habilidade alternativa: {candidate.name}</button>
        )}
        {skill?.replacement && <small>Substitui {definition.skillDefinitions?.find((candidate) => candidate.id === skill.replacement?.skillId)?.name} enquanto o efeito necessário estiver ativo.</small>}
        {skillName && <button onClick={() => onCharacter(member.instanceId)}>Ver descrição do personagem</button>}
      </div>
    </> : <p>{energyLabels.consultationHelp}</p>}
  </section>
}
