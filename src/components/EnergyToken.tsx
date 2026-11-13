import { energyDefinitions, randomEnergy } from '../game/energy/index'
import type { EnergyType } from '../game/energy/index'
import './EnergyToken.css'

export default function EnergyToken({ type }: { type: EnergyType | 'random' }) {
  const definition = type === 'random' ? randomEnergy : energyDefinitions[type]
  return <i className={`energy-token ${type}`} style={{ backgroundColor: definition.color }} title={definition.name} aria-hidden="true" />
}
