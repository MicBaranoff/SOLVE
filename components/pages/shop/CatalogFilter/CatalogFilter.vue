<script setup lang="ts">
import {FILTERS} from "~/config/catalogFiltersData";

const emit = defineEmits<{
  change: [id: string]
}>()
</script>

<template>
  <div class="catalog-filter">
    <div class="catalog-filter__holder">
      <button
          @click="emit('change', filter.type)"
          v-for="filter in FILTERS"
          :key="filter.id"
          class="catalog-filter__item">
        <span class="catalog-filter__font catalog-filter__font--text">
          {{filter.text}}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./catalog-filter.scss"></style>