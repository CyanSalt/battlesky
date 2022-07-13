<script lang="ts" setup>
import type { Hero } from '../types/entity'
import HeroCardItem from './HeroCardItem.vue'

const { modelValue } = defineProps<{
  modelValue: Hero,
}>()
</script>

<template>
  <div class="hero-item">
    <HeroCardItem :model-value="modelValue" />
    <div v-if="!modelValue.hideStats" class="hero-attack">{{ 0 }}</div>
    <div v-if="!modelValue.hideStats" class="hero-health">{{ modelValue.health }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hero-item {
  position: relative;
}
.hero-attack {
  position: absolute;
  bottom: -0.6em;
  left: -0.6em;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid black;
  line-height: 1.2em;
  text-align: center;
  background-color: yellow;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 black, 0 0 2px 0 white inset;
}
.hero-health {
  position: absolute;
  right: -0.6em;
  bottom: -0.6em;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid black;
  line-height: 1.2em;
  text-align: center;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 black, 0 0 2px 0 white inset;
}
</style>
