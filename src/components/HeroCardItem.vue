<script lang="ts" setup>
import type { HeroCard } from '../types/card'
import { getEntityImageURL } from '../utils/entity'

const { modelValue, withName, selected } = defineProps<{
  modelValue: HeroCard,
  withName?: boolean,
  selected?: boolean,
}>()

const imageURL = $computed(() => getEntityImageURL(modelValue.id))
const cssImageURL = $computed(() => `url('${imageURL}')`)
</script>

<template>
  <div :class="['hero-card-item', { 'is-selected': selected }]">
    <div class="hero-card-image" :style="{ 'background-image': cssImageURL }"></div>
    <div v-if="withName" class="hero-card-name">{{ modelValue.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hero-card-image {
  width: 8rem;
  height: 9rem;
  border: 4px solid brown;
  background-position: center;
  background-size: 130%;
  background-repeat: no-repeat;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 0 2px 2px black, 0 0 2px 2px black inset;
  .is-selected & {
    box-shadow: 0 0 0.5em 0.5em green, 0 0 2px 2px black inset;
  }
}
.hero-card-name {
  display: flex;
  justify-content: center;
  max-width: 8rem;
  margin: 0.5em auto;
  white-space: nowrap;
  text-align: center;
}
</style>
