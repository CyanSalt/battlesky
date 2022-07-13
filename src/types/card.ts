export type CardClass = 'NEUTRAL'
export type Mechanic = 'BATTLECRY'
export type Race = 'MURLOC'
export type Rarity = 'COMMON'
export type CardSet = 'BATTLEGROUNDS' | 'BLACK_TEMPLE'
export type TechLevel = 1 | 2 | 3 | 4 | 5 | 6
export type CardType = 'MINION' | 'HERO' | 'HERO_POWER' | 'ENCHANTMENT'

export interface BaseCard {
  cardClass: CardClass,
  dbfId: number,
  hideCost?: boolean,
  hideStats?: boolean,
  id: string,
  name: string,
  set: CardSet,
  type: CardType,
}

export interface MinionCard extends BaseCard {
  artist: string,
  attack: number,
  battlegroundsPremiumDbfId: number,
  collectible: boolean,
  cost: number,
  flavor: string,
  health: number,
  isBattlegroundsPoolMinion: true,
  mechanics: Mechanic[],
  race: Race,
  rarity: Rarity,
  techLevel: TechLevel,
  text: string,
  type: 'MINION',
}

export interface HeroCard extends BaseCard {
  artist: string,
  battlegroundsSkinParentId?: number,
  battlegroundsBuddyDbfId?: number,
  battlegroundsHeroPowerId?: number, // custom field
  battlegroundsHero?: boolean,
  health: number,
  type: 'HERO',
}

export interface HeroPowerCard extends BaseCard {
  cost: number,
  text: string,
  type: 'HERO_POWER',
}

export interface EnchantmentCard extends BaseCard {
  text: string,
  type: 'ENCHANTMENT',
}

export type Card = MinionCard | HeroCard | HeroPowerCard | EnchantmentCard
