<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

interface ComponentProps {
  invert: boolean;
  isActive: boolean;
}

const emit = defineEmits(['click']);

withDefaults(defineProps<ComponentProps>(), {
  invert: false,
  isActive: false,
})

const toggle = (isActive: boolean) => {
  emit('click', isActive)
}
</script>

<template>
  <button
      @click="toggle(isActive)"
      type="button"
      class="burger"
      :class="{
        'burger--active': isActive,
        'burger--invert': invert
      }"
  >
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped src="./burger.scss">

</style>