import { uniq } from 'lodash-es'
import CARDS_DB from '../assets/cards.db.json'
import CARDS_EXT from '../assets/cards.ext.json'
import CARDS_RULE from '../assets/cards.rule.json'
import type { Card, HeroCard, MinionCard, Race } from '../types/card'

const ALL_CARDS: Card[] = (CARDS_DB as Card[]).map(card => {
  if (card.type === 'HERO' && card.set === 'BATTLEGROUNDS') {
    const data = CARDS_EXT.find(item => item.id === card.dbfId)
    if (data) {
      const children = data.childIds
        .map(id => (CARDS_DB as Card[]).find(item => item.dbfId === id)!)
      const heroPower = children.find(item => item.type === 'HERO_POWER')
      if (heroPower) {
        card.battlegroundsHeroPowerId = heroPower.dbfId
      }
    }
  }
  return card
})

export function getCard<T extends Card = Card>(id: number) {
  return ALL_CARDS.find(item => item.dbfId === id) as T
}

export function getSkinParentCard(card: HeroCard) {
  if (!card.battlegroundsSkinParentId) return card
  return getCard<HeroCard>(card.battlegroundsSkinParentId)
}

export const ALL_HERO_CARDS = ALL_CARDS.filter((item): item is HeroCard => {
  return item.type === 'HERO'
    && item.set === 'BATTLEGROUNDS'
    && !item.hideCost
    && !item.hideStats
    && Boolean(getSkinParentCard(item).battlegroundsHero)
})

export const ALL_BOB_CARDS = ALL_CARDS.filter((item): item is HeroCard => {
  return item.type === 'HERO'
    && item.set === 'BATTLEGROUNDS'
    && Boolean(item.hideStats)
})

export const ALL_MINION_CARDS = ALL_CARDS.filter((item): item is MinionCard => {
  return item.type === 'MINION' && Boolean(item.isBattlegroundsPoolMinion)
})

export const ALL_MINION_RACES = uniq(ALL_MINION_CARDS.map(card => card.race))

export function getRaceGroup(card: MinionCard) {
  const rule = (CARDS_RULE as { dbfId: number, battlegroundsRaceGroup: Exclude<Race, 'ALL'> }[])
    .find(item => item.dbfId === card.dbfId)
  if (rule) {
    return rule.battlegroundsRaceGroup
  }
  return card.race === 'ALL' ? undefined : card.race
}
