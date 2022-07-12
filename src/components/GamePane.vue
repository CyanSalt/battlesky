<script lang="ts" setup>
import { useDummyStore } from '../store/dummy'
import { usePlayerStore } from '../store/player'
import MinionList from './MinionList.vue'

const { minions: enemies } = $(useDummyStore())
const { minions } = $(usePlayerStore())
</script>

<template>
  <div class="game-pane">
    <div class="battle-area">
      <MinionList :model-value="enemies" />
      <MinionList :model-value="minions" />
    </div>
  </div>
</template>
