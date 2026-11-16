import { progressionRules } from '../missions/progression'
import { characters } from '../characters/registry'
import { statuses } from '../game/effects'
import { energyRules } from '../game/energy'
import { TURN_DURATION_MS } from '../game/rules'

// Detecta front-end e servidor compilados com regras/cadastros diferentes.
// Não é uma credencial; o servidor sempre usa os seus próprios dados.
const data = JSON.stringify({ protocol: 4, progressionRules, characters, statuses, energyRules, turn: TURN_DURATION_MS },
  (key, value) => key === 'image' ? undefined : value)
let hash = 2166136261
for (let index = 0; index < data.length; index++) hash = Math.imul(hash ^ data.charCodeAt(index), 16777619)
export const multiplayerVersion = `arena-4-${(hash >>> 0).toString(16)}`
