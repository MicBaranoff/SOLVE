<script setup lang="ts">
import { defineProps } from "vue";

interface ComponentProps {
  name: string;
  image: string;
  price: string;
  isNew: boolean|undefined;
}

const props = defineProps<ComponentProps>()

</script>

<template>
  <div class="product-card">
    <div v-if="isNew" class="product-card__badge">
      <span class="product-card__font product-card__font--badge">NEW</span>
    </div>
    <div class="product-card__image">
      <img :src="image" alt="">
    </div>
    <div class="product-card__content">
      <p class="product-card__font product-card__font--name">{{name}}</p>
      <p class="product-card__font product-card__font--price">{{price}}</p>
    </div>

  </div>
</template>

<style scoped lang="scss" src="./product-card.scss"></style>