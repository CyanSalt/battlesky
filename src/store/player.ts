import { sampleSize } from 'lodash-es'
import { defineStore } from 'pinia'
import type { HeroCard } from '../types/card'
import type { Hero, HeroPower, Minion } from '../types/entity'
import { ALL_HERO_CARDS, getCard, getSkinParentCard } from '../utils/card'
import { createHero, createHeroPower } from '../utils/entity'
import { useGameStore } from './game'

export interface Player {
  hero: Hero,
  heroPower: HeroPower,
  minions: Minion[],
}

export const usePlayerStore = defineStore('player', () => {
  let techLevel = $ref(1)
  let hero = $ref<Hero | undefined>()
  let heroPower = $ref<HeroPower | undefined>()
  let minions = $ref<Minion[]>([])
  let heroOptions = $ref<HeroCard[]>(
    sampleSize(ALL_HERO_CARDS, 4),
  )

  function selectHero(selected: HeroCard) {
    const { startGame } = $(useGameStore())
    hero = createHero(selected)
    heroPower = createHeroPower(getCard(getSkinParentCard(selected).battlegroundsHeroPowerId!))
    startGame()
  }

  return {
    techLevel: $$(techLevel),
    hero: $$(hero),
    heroPower: $$(heroPower),
    minions: $$(minions),
    heroOptions: $$(heroOptions),
    selectHero,
  }
})
