import type { HeroCard, HeroPowerCard, MinionCard } from './card'

export interface BaseEntity {
  entityId: number,
}

export interface Minion extends MinionCard, BaseEntity {
  isFrozen?: boolean,
  isDormant?: boolean,
}

export interface Hero extends HeroCard, BaseEntity {
}

export interface HeroPower extends HeroPowerCard, BaseEntity {
}
