import { energyLabels } from '../game/energy/index'
import { energyTypes, energyDefinitions, randomEnergy, formatEnergyCost } from '../game/energy/index'
import type { EnergyCost as Cost, EnergyType } from '../game/energy/index'
import EnergyToken from './EnergyToken'
import './EnergyCost.css'

export default function EnergyCost({ cost }: { cost: Cost }) {
  const units: (EnergyType | 'random')[] = []
  for (const type of energyTypes) {
    for (let index = 0; index < (cost.specific?.[type] ?? 0); index++) units.push(type)
  }
  for (let index = 0; index < (cost.random ?? 0); index++) units.push('random')

  if (!units.length) return <span>{energyLabels.noCost}</span>

  return <span className="energy-cost" role="img" aria-label={formatEnergyCost(cost)}>
    {units.map((type, index) => {
      const name = type === 'random' ? randomEnergy.name : energyDefinitions[type].name
      return <span key={`${type}:${index}`} title={`1 ${name}`} aria-hidden="true"><EnergyToken type={type} /></span>
    })}
  </span>
}
