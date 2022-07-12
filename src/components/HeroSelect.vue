<script lang="ts" setup>
import type { HeroCard } from '../types/card'
import HeroCardItem from './HeroCardItem.vue'

const { options } = defineProps<{
  options: HeroCard[],
}>()
</script>

<template>
  <div class="hero-select">
    <div class="hero-select-line">
      <HeroCardItem
        v-for="hero in options"
        :key="hero.id"
        :model-value="hero"
        with-name
      />
    </div>
    <div class="confirm-button-line"></div>
  </div>
</template>

<style lang="scss" scoped>
.hero-select {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0 0 0 / 0.8);
}
.hero-select-line {
  position: absolute;
  right: 0;
  bottom: 50%;
  left: 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
}
.confirm-button-line {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
}
</style>
