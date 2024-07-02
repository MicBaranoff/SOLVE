<script setup lang="ts">
import {defineProps} from 'vue';

interface ComponentProps {
  color: string;
  filled: boolean;
}

const props = withDefaults(defineProps<ComponentProps>(), {
  color: 'black',
  filled: false,
})
</script>

<template>
  <button
    type="button"
    class="button"
    :class="{
    [`button--color-${color}`]: color,
    [`button--filled-${color}`]: filled && color
  }"
  >
    <span class="button__font button__font-text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss" src="./button.scss"></style>