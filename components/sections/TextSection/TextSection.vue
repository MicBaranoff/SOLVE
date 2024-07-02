<script setup lang="ts">
import { defineProps, useSlots } from "vue";

interface ComponentProps {
  text: array<string>;
  title: string;
}

const props = defineProps<ComponentProps>()

const slots = useSlots();
</script>

<template>
  <div class="text-section">
    <div class="text-section__holder">
      <div class="text-section__title">
        <h2 class="text-section__font text-section__font--title">
          {{ title }}
        </h2>
      </div>

      <div class="text-section__content">
        <p v-for="(line, index) in text" :key="Date.now() + index" class="text-section__font text-section__font--text">
          {{ line }}
        </p>

        <div v-if="slots.bottom" class="text-section__bottom">
          <slot name="bottom"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./text-section.scss"></style>