<script setup lang="ts">
  const { isMobile } = useDevice();

  useHead({
    bodyAttrs: {
      class: isMobile ? 'is-mobile' : 'is-desktop'
    }
  })
</script>

<template>
  <div class="default-layout">
    <slot></slot>
  </div>
</template>

<style scoped></style>