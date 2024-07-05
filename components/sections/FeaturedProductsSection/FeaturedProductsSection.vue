<script setup lang="ts">
import { defineProps } from "vue";

import ProductCard from "~/components/blocks/ProductCard/ProductCard.vue";

import products from '~/config/productsData';

interface ComponentProps {
  title?: string;
}

const props = withDefaults(defineProps<ComponentProps>(), {
  title: 'Featured',
})

const featuredProducts = computed(() => products.filter(product => product.featured));
</script>

<template>
  <section class="featured-products-section">
    <div class="featured-products-section__holder">
      <div class="featured-products-section__title">
        <h2 class="featured-products-section__font featured-products-section__font--title">
          {{ props.title }}
        </h2>
      </div>

      <div class="featured-products-section__row">
        <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :name="product.name"
            :price="product.price"
            :image="product.image"
            :is-new="product.is_new"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss" src="./featured-products-section.scss"></style>