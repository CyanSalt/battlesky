import cards from '../assets/cards.json'
import type { Card } from '../types/card'

export function getCard<T extends Card = Card>(id: string) {
  return (cards as Card[]).find(item => item.id === id) as T
}
