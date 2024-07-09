<script setup lang="ts">
import {defineProps} from 'vue';

const emit = defineEmits<{
  click: [id: string]
}>()

interface Button {
  id: string,
  type: string,
  text: string
}

interface ComponentProps {
  buttons?: array<Button>;
}

withDefaults(defineProps<ComponentProps>(), {
  buttons: [
    {
      id: 'filter-type-1',
      type: 'type-1',
      text: 'Type 1'
    },
  ]
})
</script>

<template>
  <div class="product-info-buttons">
    <div class="product-info-buttons__holder">
      <button
          @click="emit('click', button.type)"
          v-for="button in buttons"
          :key="button.id"
          class="product-info-buttons__item">
        <span class="product-info-buttons__font product-info-buttons__font--text">
          {{button.text}}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./product-info-buttons.scss"></style>