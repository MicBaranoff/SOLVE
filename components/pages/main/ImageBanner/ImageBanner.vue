<script setup lang="ts">
 import products from "~/config/productsData";

 const images = computed(() => products.slice(0,6).map(product => product.image))
</script>

<template>
  <div class="image-banner">
    <div class="image-banner__title">
      <h2 class="image-banner__font image-banner__font--title">sølve</h2>
    </div>
    <div class="image-banner__overlay">
      <div v-for="(image, index) in images" :key="image+index" class="image-banner__pic">
        <img :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./image-banner.scss"></style>