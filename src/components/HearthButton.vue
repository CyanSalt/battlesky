<template>
  <button class="hearth-button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.hearth-button {
  padding: 0.2em 0.5em;
  border: 0.2em solid lightblue;
  color: inherit;
  font-size: inherit;
  text-shadow: inherit;
  background-color: skyblue;
  border-radius: 20%;
  &:disabled {
    background-color: gray;
    border-color: lightgray;
  }
}
</style>
