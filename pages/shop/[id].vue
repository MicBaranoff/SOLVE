<script setup lang="ts">
import ProductMain from "~/components/pages/product/ProductMain/ProductMain.vue";
import FeaturedProductsSection from "~/components/sections/FeaturedProductsSection/FeaturedProductsSection.vue";


import productsData from "~/config/productsData";

const { params } = useRoute();
const productID = params.id;
const productData = productsData.find(pr => pr.id === productID) || {};

console.log();
</script>

<template>
  <NuxtLayout name="default">
    <div class="product-page">
      <ProductMain :data="productData" />
      <FeaturedProductsSection title="Related" />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>