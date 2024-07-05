<script setup lang="ts">
import ShopHead from "~/components/pages/shop/ShopHead/ShopHead.vue";
import ShopCatalog from "~/components/pages/shop/ShopCatalog/ShopCatalog.vue";
import HelpSection from "~/components/sections/HelpSection/HelpSection.vue";
</script>

<template>
  <NuxtLayout name="default">
    <div class="shop-page">
      <ShopHead />
      <ShopCatalog />
      <HelpSection />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>