<script lang="ts" setup>
import type { HeroPower } from '../types/entity'
import { getEntityImageURL } from '../utils/entity'

const { modelValue } = defineProps<{
  modelValue: HeroPower,
}>()

const imageURL = $computed(() => getEntityImageURL(modelValue.id))
const cssImageURL = $computed(() => `url('${imageURL}')`)
</script>

<template>
  <div class="hero-power-item" :style="{ 'background-image': cssImageURL }">
    <div class="hero-power-cost">{{ modelValue.hideCost ? '' : modelValue.cost }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hero-power-item {
  position: relative;
  box-sizing: border-box;
  width: 6rem;
  height: 6rem;
  border: 0.5em solid chocolate;
  background-position: center;
  background-size: 130%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 0 4px 4px black, 0 0 4px 4px black inset;
}
.hero-power-cost {
  position: absolute;
  top: -0.8em;
  left: calc(50% - 0.6em - 1px);
  width: 1.2em;
  height: 1.2em;
  border: 2px solid black;
  line-height: 1.2em;
  text-align: center;
  background-color: gold;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 black, 0 0 2px 0 white inset;
}
</style>
