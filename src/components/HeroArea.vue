<script lang="ts" setup>
import type { Hero, HeroPower } from '../types/entity'
import HeroItem from './HeroItem.vue'
import HeroPowerItem from './HeroPowerItem.vue'

const { hero, heroPower } = defineProps<{
  hero: Hero,
  heroPower: HeroPower,
}>()
</script>

<template>
  <div class="hero-area">
    <HeroItem :model-value="hero" />
    <HeroPowerItem :model-value="heroPower" />
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
