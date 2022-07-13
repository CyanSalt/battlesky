<script lang="ts" setup>
import { usePlayerStore } from '../store/player'
import type { HeroCard } from '../types/card'
import HearthButton from './HearthButton.vue'
import HeroCardItem from './HeroCardItem.vue'

const { options } = defineProps<{
  options: HeroCard[],
}>()

let { selectHero } = $(usePlayerStore())

let selected = $ref<HeroCard | undefined>()

function select(card: HeroCard) {
  if (card.id === selected?.id) {
    selected = undefined
  } else {
    selected = card
  }
}

function confirm() {
  if (!selected) return
  selectHero(selected)
}
</script>

<template>
  <div class="hero-select">
    <div class="hero-select-line">
      <HeroCardItem
        v-for="card in options"
        :key="card.id"
        :model-value="card"
        with-name
        :selected="card.id === selected?.id"
        @click="select(card)"
      />
    </div>
    <div class="confirm-button-line">
      <HearthButton :disabled="!selected" @click="confirm">确认</HearthButton>
    </div>
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
  margin-top: 1em;
}
</style>
