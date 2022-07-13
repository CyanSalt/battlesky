import { sample, sampleSize } from 'lodash-es'
import { defineStore } from 'pinia'
import { watchEffect } from 'vue'
import type { Minion } from '../types/entity'
import { ALL_BOB_CARDS, ALL_MINION_CARDS, getRaceGroup } from '../utils/card'
import { createHero, createMinion } from '../utils/entity'
import { useGameStore } from './game'
import { usePlayerStore } from './player'

const MINION_SEAT_COUNT = [3, 4, 4, 5, 5, 6]
const MINION_COUNT = [15, 15, 13, 11, 9, 7]

export const useBobStore = defineStore('bob', () => {
  let hero = $ref(
    createHero(
      sample(ALL_BOB_CARDS)!,
    ),
  )
  let minions = $ref<Minion[]>([])

  let pool = $ref<Minion[]>([])

  watchEffect(() => {
    const { races } = $(useGameStore())
    pool = ALL_MINION_CARDS.filter(card => {
      const group = getRaceGroup(card)
      return !group || races.includes(group)
    }).flatMap(card => {
      return Array.from({ length: MINION_COUNT[card.techLevel - 1] }, () => createMinion(card))
    })
  })

  function refreshTavern() {
    const { techLevel } = $(usePlayerStore())
    let newValue = minions.filter(minion => !minion.isDormant)
    const count = MINION_SEAT_COUNT[techLevel - 1]
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

  function refreshUnfrozenTavern() {
    const { techLevel } = $(usePlayerStore())
    let newValue = minions.filter(minion => !minion.isFrozen && !minion.isDormant)
    const count = MINION_SEAT_COUNT[techLevel - 1]
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
