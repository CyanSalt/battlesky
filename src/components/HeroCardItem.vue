<script lang="ts" setup>
import type { HeroCard } from '../types/card'
import { getEntityImageURL } from '../utils/entity'

const { modelValue } = defineProps<{
  modelValue: HeroCard,
}>()

const imageURL = $computed(() => getEntityImageURL(modelValue.id))
const cssImageURL = $computed(() => `url('${imageURL}')`)
</script>

<template>
  <div class="hero-card-item"></div>
</template>

<style lang="scss" scoped>
.hero-card-item {
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
</style>
