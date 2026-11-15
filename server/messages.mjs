const record = value => value !== null && typeof value === 'object' && !Array.isArray(value)
const text = (value, max = 128) => typeof value === 'string' && value.length > 0 && value.length <= max
const index = value => Number.isInteger(value) && value >= 0 && value < 3
const pool = value => record(value) && Object.keys(value).length === 4 &&
  ['taijutsu', 'bloodline', 'ninjutsu', 'genjutsu'].every(key => Number.isSafeInteger(value[key]) && value[key] >= 0 && value[key] <= 1_000_000)

export function validCommand(command) {
  if (!record(command)) return false
  switch (command.type) {
    case 'select-skill': return text(command.characterInstanceId) && text(command.skillId)
    case 'select-target': return text(command.targetInstanceId)
    case 'remove-action': return text(command.characterInstanceId)
    case 'move-action': return index(command.from) && index(command.to)
    case 'allocate': return pool(command.value)
    case 'choose-exchange': return ['taijutsu', 'bloodline', 'ninjutsu', 'genjutsu'].includes(command.energyType)
    case 'open-confirmation': case 'confirm-turn': case 'close-dialog': case 'open-exchange':
    case 'apply-exchange': case 'open-surrender': case 'confirm-surrender': return true
    default: return false
  }
}

export function validMessage(message) {
  if (!record(message)) return false
  if (message.type === 'create' || message.type === 'join') {
    return text(message.name, 24) && message.name.trim().length > 0 && text(message.version, 80) &&
      (message.avatarId === undefined || text(message.avatarId, 80)) &&
      Array.isArray(message.team) && message.team.length === 3 && message.team.every(id => text(id, 80)) &&
      (message.type === 'create' || (typeof message.code === 'string' && /^[A-Z2-9]{6}$/.test(message.code)))
  }
  return message.type === 'command' && Number.isSafeInteger(message.seq) && message.seq > 0 &&
    Number.isSafeInteger(message.turn) && message.turn > 0 && validCommand(message.command)
}
