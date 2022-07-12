import type { HeroCard, HeroPowerCard, MinionCard } from './card'

export interface BaseEntity {
  entityId: number,
}

export interface Minion extends MinionCard, BaseEntity {
}

export interface Hero extends HeroCard, BaseEntity {
  attack: number,
}

export interface HeroPower extends HeroPowerCard, BaseEntity {
}
