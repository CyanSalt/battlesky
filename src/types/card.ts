export type CardClass = 'NEUTRAL'
export type Mechanic = 'BATTLECRY'
export type Race = 'MURLOC'
export type Rarity = 'COMMON'
export type CardSet = 'BLACK_TEMPLE'
export type TechLevel = 1 | 2 | 3 | 4 | 5 | 6
export type CardType = 'MINION' | 'ENCHANTMENT'

export interface BaseCard {
  cardClass: CardClass,
  dbfId: number,
  id: string,
  name: string,
  set: CardSet,
  text: string,
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
  type: 'MINION',
}

export interface EnchantmentCard extends BaseCard {
  type: 'ENCHANTMENT',
}

export type Card = MinionCard | EnchantmentCard
