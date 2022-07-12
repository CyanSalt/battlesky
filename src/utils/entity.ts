import type { MinionCard } from '../types/card'
import type { Minion } from '../types/entity'

let counter = 0
const generateEntityID = () => ++counter

export function createMinion(card: MinionCard): Minion {
  return {
    ...card,
    entityId: generateEntityID(),
  }
}
