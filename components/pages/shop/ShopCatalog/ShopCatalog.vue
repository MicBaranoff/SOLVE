<script setup lang="ts">
import productsData from "~/config/productsData";

import ProductCard from "~/components/blocks/ProductCard/ProductCard.vue";
import CatalogFilter from "~/components/pages/shop/CatalogFilter/CatalogFilter.vue";
import {FILTER_TYPES} from "~/config/catalogFiltersData";

const currentFilter = ref<string|null>(null);

const changeFilter = (type: string) => {
  currentFilter.value = type;
}

const filteredProducts = computed(() => {
  if (currentFilter.value === FILTER_TYPES.ALL) return productsData;

  return currentFilter.value ?
      productsData.filter(product => product.type === currentFilter.value) :
      productsData;
})

</script>

<template>
  <div class="shop-catalog">
    <CatalogFilter @change="changeFilter" />
    <div class="shop-catalog__holder">
      <transition-group name="list">
        <div  v-for="product in filteredProducts"
              :key="Date.now()+product.id">
          <ProductCard
              :id="product.id"
              :name="product.name"
              :price="product.price"
              :image="product.image"
              :is-new="product.is_new"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./shop-catalog.scss"></style>