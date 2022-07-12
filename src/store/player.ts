import { sampleSize } from 'lodash-es'
import { defineStore } from 'pinia'
import type { HeroCard } from '../types/card'
import type { Hero, HeroPower, Minion } from '../types/entity'
import { allCards, getCard, getSkinParentCard } from '../utils/card'
import { createHero, createHeroPower } from '../utils/entity'

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
    sampleSize(allCards.filter((item): item is HeroCard => {
      return item.type === 'HERO'
        && item.set === 'BATTLEGROUNDS'
        && !item.hideCost
        && Boolean(getSkinParentCard(item).battlegroundsHero)
    }), 4),
  )

  function selectHero(selected: HeroCard) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hero = createHero(selected)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    heroPower = createHeroPower(getCard(getSkinParentCard(selected).battlegroundsHeroPowerId!))
  }

  return {
    hero: $$(hero),
    heroPower: $$(heroPower),
    minions: $$(minions),
    heroOptions: $$(heroOptions),
    selectHero,
  }
})
