import { defineStore } from 'pinia'
import type { Minion } from '../types/entity'

export const usePlayerStore = defineStore('player', () => {
  let minions = $ref<Minion[]>([])

  return {
    minions: $$(minions),
  }
})
