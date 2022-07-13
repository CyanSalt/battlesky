import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  let isInCombat = $ref(false)
  let turn = $ref(0)

  return {
    isInCombat: $$(isInCombat),
    turn: $$(turn),
  }
})
