import { describeSkillClasses, formatSkillClasses } from '../game/classes'
import type { SkillClass } from '../game/classes'

export default function SkillClasses({ classes }: { classes: readonly SkillClass[] }) {
  return <span title={describeSkillClasses(classes)}>{formatSkillClasses(classes)}</span>
}
