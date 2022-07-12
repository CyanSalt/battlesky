import cards from '../assets/cards.db.json'
import extra from '../assets/cards.ext.json'
import type { Card, HeroCard } from '../types/card'

export const allCards: Card[] = (cards as Card[]).map(card => {
  if (card.type === 'HERO' && card.set === 'BATTLEGROUNDS') {
    const data = extra.find(item => item.id === card.dbfId)
    if (data) {
      const children = data.childIds
        .map(id => (cards as Card[]).find(item => item.dbfId === id)!)
      const heroPower = children.find(item => item.type === 'HERO_POWER')
      if (heroPower) {
        card.battlegroundsHeroPowerId = heroPower.dbfId
      }
    }
  }
  return card
})

export function getCard<T extends Card = Card>(id: number) {
  return allCards.find(item => item.dbfId === id) as T
}

export function getSkinParentCard(card: HeroCard) {
  if (!card.battlegroundsSkinParentId) return card
  return getCard<HeroCard>(card.battlegroundsSkinParentId)
}
