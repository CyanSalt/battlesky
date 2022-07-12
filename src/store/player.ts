import { sampleSize } from 'lodash-es'
import { defineStore } from 'pinia'
import cards from '../assets/cards.json'
import type { Card, HeroCard } from '../types/card'
import type { Hero, HeroPower, Minion } from '../types/entity'

export interface Player {
  hero: Hero,
  heroPower: HeroPower,
  minions: Minion[],
}

export const usePlayerStore = defineStore('player', () => {
  let hero = $ref<Hero | undefined>()
  let heroPower = $ref<HeroPower | undefined>()
  let minions = $ref<Minion[]>([])
  let heroOptions = $ref<HeroCard[]>(
    sampleSize((cards as Card[]).filter((item): item is HeroCard => {
      return item.type === 'HERO' && item.set === 'BATTLEGROUNDS' && !item.hideCost
    }), 4),
  )

  return {
    hero: $$(hero),
    heroPower: $$(heroPower),
    minions: $$(minions),
    heroOptions: $$(heroOptions),
  }
})
