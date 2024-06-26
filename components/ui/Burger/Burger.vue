<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(true)

function toggle() {
  isActive.value = !isActive.value
}
</script>

<template>
  <button
      @click="toggle"
      type="button"
      class="burger"
      :class="{'burger--active': isActive}"
  >
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped src="./burger.scss">

</style>