import './BattleHealthBar.css'

type Props = {
  health: number
  maxHealth: number
  projectedHealth?: number
  label: string
}

// A vida restante usa a cor atual; só a diferença prevista recebe o tom claro.
const healthColors = {
  red: { confirmed: '#f87171', provisional: '#fecaca' },
  orange: { confirmed: '#fb923c', provisional: '#fed7aa' },
  yellow: { confirmed: '#facc15', provisional: '#fef08a' },
  green: { confirmed: '#4ade80', provisional: '#bbf7d0' },
}

export default function BattleHealthBar({ health, maxHealth, projectedHealth, label }: Props) {
  const changed = projectedHealth !== undefined && projectedHealth !== health
  const expected = projectedHealth ?? health
  const percentage = Math.min(health, expected) / maxHealth * 100
  const tone = health <= 25 ? 'red' : health <= 50 ? 'orange' : health <= 75 ? 'yellow' : 'green'
  const colors = healthColors[tone]
  const text = `${expected}/${maxHealth}`
  const description = changed
    ? `Vida atual: ${health}/${maxHealth}. Previsão após as ações planejadas: ${expected}/${maxHealth}. Considera apenas informações visíveis.`
    : `Vida atual: ${health}/${maxHealth}.`
  return <div className="combat-health" role="progressbar" aria-label={label}
    aria-valuenow={expected} aria-valuemin={0} aria-valuemax={maxHealth}
    aria-valuetext={description} title={description}>
    <span style={{ width: `${percentage}%`, background: colors.confirmed }} />
    {changed && <i className="health-preview-segment" aria-hidden="true"
      style={{ left: `${percentage}%`, width: `${Math.abs(health - expected) / maxHealth * 100}%`, background: colors.provisional }} />}
    <b>{text}</b>
  </div>
}
