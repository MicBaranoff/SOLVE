<script setup lang="ts">
interface ComponentProps {
  content: string | undefined;
}

defineProps<ComponentProps>()
</script>

<template>
  <div class="product-description">
    <div class="product-description__holder">
      <div class="product-description__title">
        <h3 class="product-description__font product-description__font--title">
          Description
        </h3>
      </div>
      <div
          class="product-description__content product-description__font
                 product-description__font--content"
          v-html="content"></div>
    </div>
  </div>å
</template>

<style scoped lang="scss" src="./product-description.scss"></style>