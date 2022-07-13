import { defineStore } from 'pinia'
import { getCard } from '../utils/card'
import { createHero, createHeroPower, createMinion } from '../utils/entity'

export const useDummyStore = defineStore('dummy', () => {
  let techLevel = $ref(1)
  let hero = $ref(
    createHero(getCard(60212)),
  )
  let heroPower = $ref(
    createHeroPower(getCard(60216)),
  )
  let minions = $ref(
    Array.from({ length: 7 }, () => createMinion(getCard(56393))),
  )

  return {
    techLevel: $$(techLevel),
    hero: $$(hero),
    heroPower: $$(heroPower),
    minions: $$(minions),
  }
})
