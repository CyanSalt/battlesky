import { sampleSize } from 'lodash'
import { defineStore } from 'pinia'
import type { Race } from '../types/card'
import { ALL_MINION_RACES } from '../utils/card'
import { useBobStore } from './bob'

export const useGameStore = defineStore('game', () => {
  let isInCombat = $ref(false)
  let turn = $ref(0)
  let races = $ref<Exclude<Race, 'ALL'>[]>([])

  function selectRaces() {
    races = sampleSize(ALL_MINION_RACES.filter((item): item is Exclude<Race, 'ALL'> => {
      return item !== 'ALL' && Boolean(item)
    }), 5)
  }

  function startGame() {
    startTurn()
  }

  function startTurn() {
    const { refreshUnfrozenTavern } = $(useBobStore())
    isInCombat = false
    turn += 1
    refreshUnfrozenTavern()
  }

  return {
    isInCombat: $$(isInCombat),
    turn: $$(turn),
    races: $$(races),
    selectRaces,
    startGame,
    startTurn,
  }
})
