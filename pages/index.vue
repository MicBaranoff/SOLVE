<script setup lang="ts">
import MainBanner from "~/components/pages/main/MainBanner/MainBanner.vue";
import FeaturedProductsSection from "~/components/sections/FeaturedProductsSection/FeaturedProductsSection.vue";
import TextSection from "~/components/sections/TextSection/TextSection.vue";
import ImageBanner from "~/components/pages/main/ImageBanner/ImageBanner.vue";
import RoomsSection from "~/components/pages/main/RoomsSection/RoomsSection.vue";
import StoresSection from "~/components/sections/StoresSection/StoresSection.vue";

import Button from "~/components/ui/Button/Button.vue";

import PAGE_DATA from "~/config/mainPageData";
</script>

<template>
  <NuxtLayout name="default-invert">
    <div class="main-page">
      <MainBanner />
      <FeaturedProductsSection />
      <TextSection
          :title="PAGE_DATA.TEXT_SECTION.title"
          :text="PAGE_DATA.TEXT_SECTION.text"
      >
        <template #bottom>
          <Button>
            Shop now
          </Button>
        </template>
      </TextSection>
      <ImageBanner />
      <RoomsSection />
      <StoresSection />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
