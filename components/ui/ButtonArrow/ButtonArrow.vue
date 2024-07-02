<script setup lang="ts">
</script>

<template>
  <button
      type="button"
      class="button-arrow"
  >
    <span class="button-arrow__font button-arrow__font-text">
      <slot></slot>
    </span>
    <nuxt-icon class="button-arrow__ico" name="arrow" />
  </button>
</template>

<style scoped lang="scss" src="./button-arrow.scss"></style>