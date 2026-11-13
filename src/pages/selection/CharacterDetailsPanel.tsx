import { energyLabels } from '../../game/energy/index'
import { formatCooldown } from '../../game/cooldown'
import EnergyCost from '../../components/EnergyCost'
import SkillClasses from '../../components/SkillClasses'
import { imageUrl } from '../../utils/imageUrl'
import type { Character } from '../../data/characters'

type Props = {
  character: Character | null
  selectedSkill: string | null
  onSkillChange: (skill: string | null) => void
}

export default function CharacterDetailsPanel({ character, selectedSkill, onSkillChange }: Props) {
  const skill = character?.skillDefinitions?.find((entry) => entry.name === selectedSkill)
  const image = selectedSkill ? character?.skillImages?.[selectedSkill] : character?.image
  const description = selectedSkill
    ? character?.skillDescriptions?.[selectedSkill] ?? 'Descrição desta habilidade ainda não disponível.'
    : character?.description ?? 'Descrição ainda não disponível.'
  return <section className="character-details" aria-label="Consulta de personagens e habilidades"
    style={{ visibility: character ? 'visible' : 'hidden' }}>
    {character && <>
      <h2>{character.name}</h2>
      <div className="character-details-top">
        <button type="button" className="portrait-slot" aria-label={`Consultar ${character.name}`}
          aria-pressed={selectedSkill === null} onClick={() => onSkillChange(null)}>
          {character.image ? <img src={imageUrl(character.image)} alt={character.name}
            className="character-portrait" draggable={false} /> : <span>{character.name}</span>}
        </button>
        <div className="skills">
          {character.skills.map((name) => <button type="button" className="skill" key={name}
            title={name} aria-pressed={selectedSkill === name}
            onClick={() => onSkillChange(selectedSkill === name ? null : name)}>
            {character.skillImages?.[name] ? <img src={imageUrl(character.skillImages[name])} alt={name} draggable={false} /> : name}
          </button>)}
        </div>
      </div>
      <div className="character-description">
        <div className="description-text">
          <header className="description-heading">
            <h3 title={selectedSkill ?? character.name}>{selectedSkill ?? character.name}</h3>
            {skill && <div className="selection-energy-cost" aria-label={energyLabels.cost}>
              <span>{energyLabels.resource}:</span><EnergyCost cost={skill.cost} />
            </div>}
          </header>
          <div className="description-body" tabIndex={0} aria-label="Descrição completa">
            <p>{description}</p>
            {skill && character.skillDefinitions?.filter((candidate) => candidate.replacement?.skillId === skill.id).map((candidate) =>
              <button key={candidate.id} className="alternative-skill-link" onClick={() => onSkillChange(candidate.name)}>
                Consultar habilidade alternativa: {candidate.name}
              </button>)}
            {skill?.replacement && <button className="alternative-skill-link"
              onClick={() => onSkillChange(character.skillDefinitions?.find((candidate) => candidate.id === skill.replacement?.skillId)?.name ?? null)}>
              Voltar à habilidade original
            </button>}
          </div>
          {skill && <dl className="skill-facts">
            <div className="selection-classes"><dt>Classes:</dt><dd><SkillClasses classes={skill.classes} /></dd></div>
            <div className="selection-cooldown"><dt>Recarga:</dt><dd>{formatCooldown(skill.cooldown)}</dd></div>
          </dl>}
        </div>
        <div className="description-image-slot">
          {image ? <img src={imageUrl(image)} alt={selectedSkill ?? character.name} width={120} height={120} draggable={false} /> : <span>{selectedSkill ?? character.name}</span>}
        </div>
      </div>
    </>}
  </section>
}
