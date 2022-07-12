import { defineStore } from 'pinia'
import { getCard } from '../utils/card'
import { createHero, createHeroPower, createMinion } from '../utils/entity'

export const useDummyStore = defineStore('dummy', () => {
  let hero = $ref(
    createHero(getCard('TB_BaconShop_HERO_41')),
  )
  let heroPower = $ref(
    createHeroPower(getCard('TB_BaconShop_HP_046')),
  )
  let minions = $ref(
    Array.from({ length: 7 }, () => createMinion(getCard('BT_010'))),
  )

  return {
    hero: $$(hero),
    heroPower: $$(heroPower),
    minions: $$(minions),
  }
})
