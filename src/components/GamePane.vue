<script lang="ts" setup>
import { useDummyStore } from '../store/dummy'
import { usePlayerStore } from '../store/player'
import HeroArea from './HeroArea.vue'
import MinionList from './MinionList.vue'

const enemy = $(useDummyStore())
const player = $(usePlayerStore())
</script>

<template>
  <div class="game-pane">
    <HeroArea :hero="enemy.hero" :hero-power="enemy.heroPower" />
    <MinionList :model-value="enemy.minions" />
    <MinionList :model-value="player.minions" />
    <HeroArea v-if="player.hero && player.heroPower" :hero="player.hero" :hero-power="player.heroPower" />
  </div>
</template>

<style lang="scss" scoped>
.game-pane {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>
