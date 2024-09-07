<script setup lang="ts">
  import {defineProps} from "vue";

  interface ComponentProps {
    title: string;
  }

  defineProps<ComponentProps>()
</script>

<template>
  <div class="page-head">
    <div class="page-head__title">
      <h1 class="page-head__font page-head__font--title">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./page-head.scss"></style>