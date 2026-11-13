import { naruto } from '../characters/naruto'
import { sasuke } from '../characters/sasuke'
import { sakura } from '../characters/sakura'
import { kakashi } from '../characters/kakashi'
import type { Character } from '../characters/definition'

export type { Character } from '../characters/definition'

export const characters: Character[] = [naruto, sasuke, sakura, kakashi]
