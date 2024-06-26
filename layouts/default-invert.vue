<script setup lang="ts">
import Header from "~/components/layout/Header/Header.vue";

const { isMobile } = useDevice();

useHead({
  bodyAttrs: {
    class: isMobile ? 'is-mobile' : 'is-desktop'
  }
})
</script>

<template>
  <div class="default-layout">
    <Header invert />
    <slot></slot>
  </div>
</template>

<style scoped></style>