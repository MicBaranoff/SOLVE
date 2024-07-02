<script setup lang="ts">
  import Header from "~/components/layout/Header/Header.vue";
  import Footer from "~/components/layout/Footer/Footer.vue"
  import Popup from "~/components/ui/Popup/Popup.vue";

  const { isMobile } = useDevice();

  useHead({
    bodyAttrs: {
      class: isMobile ? 'is-mobile' : 'is-desktop'
    }
  })
</script>

<template>
  <div class="default-layout">
    <Header />
    <slot></slot>
    <Footer />
    <Popup></Popup>
  </div>
</template>

<style scoped></style>