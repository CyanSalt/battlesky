import type { HeroCard, HeroPowerCard, MinionCard } from '../types/card'
import type { Hero, HeroPower, Minion } from '../types/entity'

let counter = 0
const generateEntityID = () => ++counter

export interface EntityImageURLOptions {
  size?: 'orig' | '256x' | '512x',
  format?: 'jpg' | 'webp',
}

export function getEntityImageURL(id: string, {
  size = '256x',
  format = 'webp',
}: EntityImageURLOptions = {}) {
  return `https://art.hearthstonejson.com/v1/${size}/${id}.${format}`
}

export function createMinion(card: MinionCard): Minion {
  return {
    ...card,
    entityId: generateEntityID(),
  }
}

export function createHero(card: HeroCard): Hero {
  return {
    ...card,
    entityId: generateEntityID(),
    attack: 0,
  }
}

export function createHeroPower(card: HeroPowerCard): HeroPower {
  return {
    ...card,
    entityId: generateEntityID(),
  }
}
