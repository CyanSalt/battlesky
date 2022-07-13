import { sample, sampleSize } from 'lodash-es'
import { defineStore } from 'pinia'
import type { HeroCard } from '../types/card'
import type { Minion } from '../types/entity'
import { allCards } from '../utils/card'
import { createHero } from '../utils/entity'

const MINION_COUNT = [3, 4, 4, 5, 5, 6]

export const useBobStore = defineStore('bob', () => {
  let hero = $ref(
    createHero(
      sample(allCards.filter((item): item is HeroCard => {
        return item.type === 'HERO'
          && item.set === 'BATTLEGROUNDS'
          && Boolean(item.hideStats)
      })),
    ),
  )
  let minions = $ref<Minion[]>([])

  let pool = $ref<Minion[]>([])

  function refreshTavern(techLevel: number) {
    let newValue = minions.filter(minion => !minion.isDormant)
    const count = MINION_COUNT[techLevel - 1]
    if (newValue.length < count) {
      newValue = newValue.concat(
        sampleSize(
          pool.filter(item => item.techLevel <= techLevel),
          count - newValue.length,
        ),
      )
    }
    minions = newValue
  }

  function refreshUnfrozenTavern(techLevel: number) {
    let newValue = minions.filter(minion => !minion.isFrozen && !minion.isDormant)
    const count = MINION_COUNT[techLevel - 1]
    if (newValue.length < count) {
      newValue = newValue.concat(
        sampleSize(
          pool.filter(item => item.techLevel <= techLevel),
          count - newValue.length,
        ),
      )
    }
    minions = newValue
  }

  return {
    hero: $$(hero),
    minions: $$(minions),
    refreshTavern,
    refreshUnfrozenTavern,
  }
})
