<script lang="ts" setup>
import type { Minion } from '../types/entity'
import MinionItem from './MinionItem.vue'

const { modelValue } = defineProps<{
  modelValue: Minion[],
}>()
</script>

<template>
  <div class="minion-list">
    <MinionItem
      v-for="minion in modelValue"
      :key="minion.entityId"
      :model-value="minion"
    />
  </div>
</template>

<style lang="scss" scoped>
.minion-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  height: 8rem;
}
</style>
