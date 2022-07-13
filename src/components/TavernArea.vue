<script lang="ts" setup>
import { useBobStore } from '../store/bob'
import HeroItem from './HeroItem.vue'

const { hero } = $(useBobStore())
</script>

<template>
  <div class="tavern-area">
    <HeroItem :model-value="hero" />
  </div>
</template>

<style lang="scss" scoped>
.tavern-area {
  position: relative;
  display: flex;
  justify-content: center;
}
</style>
