<script lang="ts" setup>
import type { HeroCard } from '../types/card'
import { getEntityImageURL } from '../utils/entity'

const { modelValue, withName } = defineProps<{
  modelValue: HeroCard,
  withName?: boolean,
}>()

const imageURL = $computed(() => getEntityImageURL(modelValue.id))
const cssImageURL = $computed(() => `url('${imageURL}')`)
</script>

<template>
  <div class="hero-card-item">
    <div v-if="withName" class="hero-card-name">{{ modelValue.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hero-card-item {
  position: relative;
  width: 8rem;
  height: 9rem;
  border: 4px solid brown;
  /* stylelint-disable-next-line value-keyword-case */
  background-image: v-bind(cssImageURL);
  background-position: center;
  background-size: 130%;
  background-repeat: no-repeat;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 0 2px 2px black, 0 0 2px 2px black inset;
}
.hero-card-name {
  position: absolute;
  right: 0;
  bottom: -2em;
  left: 0;
  color: white;
  font-weight: bold;
  font-size: 24px;
  white-space: nowrap;
  text-align: center;
  text-shadow:
    -2px -2px 0 black,
    0   -2px 0 black,
    2px -2px 0 black,
    2px  0   0 black,
    2px  2px 0 black,
    0    2px 0 black,
    -2px  2px 0 black,
    -2px  0   0 black;
}
</style>
