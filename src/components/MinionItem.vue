<script lang="ts" setup>
import type { Minion } from '../types/entity'
import { getEntityImageURL } from '../utils/entity'

const { modelValue } = defineProps<{
  modelValue: Minion,
}>()

const imageURL = $computed(() => getEntityImageURL(modelValue.id))
const cssImageURL = $computed(() => `url('${imageURL}')`)
</script>

<template>
  <div class="minion-item" :style="{ 'background-image': cssImageURL }">
    <div class="minion-attack">{{ modelValue.attack }}</div>
    <div class="minion-health">{{ modelValue.health }}</div>
  </div>
</template>

<style lang="scss" scoped>
.minion-item {
  position: relative;
  box-sizing: border-box;
  width: 6rem;
  height: 8rem;
  border: 4px solid gray;
  background-position: center;
  background-size: 140%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 0 2px 2px black, 0 0 2px 2px black inset;
}
.minion-attack {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1em;
  height: 1em;
  border: 2px solid black;
  line-height: 1em;
  text-align: center;
  background-color: yellow;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 black, 0 0 2px 0 white inset;
}
.minion-health {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1em;
  height: 1em;
  border: 2px solid black;
  line-height: 1em;
  text-align: center;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 black, 0 0 2px 0 white inset;
}
</style>
