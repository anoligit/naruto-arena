import { energyLabels } from '../game/energy/index'
import SkillClasses from '../components/SkillClasses'
import EnergyCost from '../components/EnergyCost'
import { imageUrl } from '../utils/imageUrl'
import { describeUnlockRequirement } from '../missions'
import type { Character } from '../data/characters'
import type { SkillDefinition } from '../game/types'

export default function CharacterInspectionContent({ definition, skill, skillName, onSkill, showUnlock = false, unlockText }: {
  definition: Character; skill?: SkillDefinition; skillName: string | null | undefined
  onSkill?: (name: string) => void; showUnlock?: boolean; unlockText?: string
}) {
  const image = skillName ? skill?.image : definition.image
  const description = skillName
    ? skill?.description ?? 'Regras desta habilidade ainda não cadastradas.'
    : definition.description ?? 'Descrição deste personagem ainda não cadastrada.'

  const skillShortcuts = (
      <aside className="inspection-shortcuts" aria-label={`Consultar habilidades de ${definition.name}`}>
        {definition.skillDefinitions?.map(entry => <button type="button" className="inspection-skill" key={entry.id}
          title={entry.name} aria-label={`Consultar ${entry.name}`} aria-pressed={entry.name === skillName}
          onClick={() => onSkill?.(entry.name)}>
          {entry.image ? <img src={imageUrl(entry.image)} alt="" draggable={false} /> : <span>{entry.name}</span>}
        </button>)}
      </aside>
  )

  return <section className={`battle-inspection${skillName ? '' : ' character-inspection'}`} aria-label="Consulta de personagens e habilidades">
    <>
      <header className="inspection-summary">
        <div className="inspection-image">{image ? <img src={imageUrl(image)} alt={skillName ?? definition.name} draggable={false} onError={(event) => { event.currentTarget.hidden = true }} /> : <span>{skillName ?? definition.name}</span>}</div>
        <div className="inspection-heading"><h2>{skillName ?? definition.name}</h2>
          {skill && <div className="inspection-energy"><span>{energyLabels.cost}</span><EnergyCost cost={skill.cost} /></div>}
        </div>
        {!skillName && skillShortcuts}
        {skill && <dl className="inspection-facts">
          <div className="inspection-classes"><dt>Classes:</dt><dd><SkillClasses classes={skill.classes} /></dd></div>
          <div className="inspection-cooldown"><dt>Recarga:</dt><dd>{skill.cooldown}</dd></div>
        </dl>}
      </header>
      <div className="inspection-copy">
        <div className="inspection-description"><p>{description}</p>
        {showUnlock && !skillName && <p className="character-unlock">Requisito para desbloquear: {unlockText ?? describeUnlockRequirement(definition.unlockRequirement)}</p>}
        {skill && onSkill && definition.skillDefinitions?.filter((candidate) => candidate.replacement?.skillId === skill.id).map((candidate) =>
          <button type="button" className="inspection-alternative" key={candidate.id} onClick={() => onSkill(candidate.name)}>Consultar habilidade alternativa: <strong>{candidate.name}</strong></button>
        )}
        {skill?.replacement && <small>Substitui {definition.skillDefinitions?.find((candidate) => candidate.id === skill.replacement?.skillId)?.name} enquanto o efeito necessário estiver ativo.</small>}
        </div>
      </div>
      {skillName && skillShortcuts}
    </>
  </section>
}
