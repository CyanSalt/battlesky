import { defineStore } from 'pinia'
import type { Hero, HeroPower, Minion } from '../types/entity'

export interface Player {
  hero: Hero,
  heroPower: HeroPower,
  minions: Minion[],
}

export const usePlayerStore = defineStore('player', () => {
  let hero = $ref<Hero | undefined>()
  let heroPower = $ref<HeroPower | undefined>()
  let minions = $ref<Minion[]>([])

  return {
    hero: $$(hero),
    heroPower: $$(heroPower),
    minions: $$(minions),
  }
})
