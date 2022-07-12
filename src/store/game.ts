import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  let isInBattle = $ref(false)
  let turn = $ref(0)

  return {
    isInBattle: $$(isInBattle),
    turn: $$(turn),
  }
})
