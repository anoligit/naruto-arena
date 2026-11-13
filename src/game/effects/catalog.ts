import { characterStatuses } from '../../characters/registry'
import { commonStatuses } from './common'
import type { StatusDefinition } from './types'

// Os efeitos específicos são descobertos junto com as pastas dos personagens.
export const statuses: StatusDefinition[] = [...characterStatuses, ...commonStatuses]
