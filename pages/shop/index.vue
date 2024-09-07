<script setup lang="ts">
import PageHead from "~/components/blocks/PageHead/PageHead.vue";
import ShopCatalog from "~/components/pages/shop/ShopCatalog/ShopCatalog.vue";
import HelpSection from "~/components/sections/HelpSection/HelpSection.vue";
</script>

<template>
  <NuxtLayout name="default">
    <div class="shop-page">
      <PageHead title="Shop" />
      <ShopCatalog />
      <HelpSection />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>