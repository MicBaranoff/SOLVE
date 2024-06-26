<template>
  <div style="background: #000">
    <Header />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/layout/Header/Header.vue";

const { isMobile } = useDevice();

console.log(isMobile);

</script>

<style scoped></style>
