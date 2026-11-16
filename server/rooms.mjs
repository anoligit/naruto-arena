import { randomInt } from 'node:crypto'
import * as game from './dist/engine.mjs'
import { createRoomManager } from './room-manager.mjs'

export const PrivateRooms = createRoomManager(game, randomInt)
