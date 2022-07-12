import { defineStore } from 'pinia'
import { getCard } from '../utils/card'
import { createMinion } from '../utils/entity'

export const useDummyStore = defineStore('dummy', () => {
  let minions = $ref(
    Array.from({ length: 7 }, () => createMinion(getCard('BT_010'))),
  )

  return {
    minions: $$(minions),
  }
})
