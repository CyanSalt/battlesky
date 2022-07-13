<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useBobStore } from '../store/bob'
import { useDummyStore } from '../store/dummy'
import { useGameStore } from '../store/game'
import { usePlayerStore } from '../store/player'
import HeroArea from './HeroArea.vue'
import HeroSelect from './HeroSelect.vue'
import MinionList from './MinionList.vue'
import TavernArea from './TavernArea.vue'

const { isInCombat, selectRaces } = $(useGameStore())
const enemy = $(useDummyStore())
const player = $(usePlayerStore())
const bob = $(useBobStore())

watchEffect(() => {
  selectRaces()
})
</script>

<template>
  <div class="game-pane">
    <div class="player-area is-enemy">
      <template v-if="isInCombat">
        <HeroArea :hero="enemy.hero" :hero-power="enemy.heroPower" />
        <MinionList :model-value="enemy.minions" />
      </template>
      <template v-else>
        <TavernArea />
        <MinionList :model-value="bob.minions" />
      </template>
    </div>
    <div class="player-area is-player">
      <MinionList :model-value="player.minions" />
      <HeroArea v-if="player.hero" :hero="player.hero" :hero-power="player.heroPower" />
    </div>
    <HeroSelect v-if="!player.hero" :options="player.heroOptions" />
  </div>
</template>

<style lang="scss" scoped>
.game-pane {
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100vh;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-shadow:
    -2px -2px 0 black,
    0   -2px 0 black,
    2px -2px 0 black,
    2px  0   0 black,
    2px  2px 0 black,
    0    2px 0 black,
    -2px  2px 0 black,
    -2px  0   0 black;
  background-color: lightyellow;
}
.player-area {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1em;
  &.is-enemy {
    justify-content: flex-end;
  }
  &.is-player {
    justify-content: flex-start;
  }
}
</style>
