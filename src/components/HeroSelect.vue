<script lang="ts" setup>
import type { HeroCard } from '../types/card'
import HeroCardItem from './HeroCardItem.vue'

const { options } = defineProps<{
  options: HeroCard[],
}>()
</script>

<template>
  <div class="hero-select">
    <HeroCardItem
      v-for="hero in options"
      :key="hero.id"
      :model-value="hero"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero-area {
  position: relative;
  display: flex;
  justify-content: center;
}
:deep(.hero-power-item) {
  position: absolute;
  bottom: 0;
  left: calc(50% + 5rem);
}
</style>
