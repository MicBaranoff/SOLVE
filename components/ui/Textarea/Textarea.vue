<script setup lang="ts">
import {defineProps} from "vue";

interface ComponentProps {
  label: string;
  placeholder: string;
}

defineProps<ComponentProps>()
</script>

<template>
  <label class="c-textarea">
    <span class="c-textarea__font c-textarea__font--label c-textarea__label">
      {{ label || 'Label' }}
    </span>
    <textarea type="text" class="c-textarea__field" :placeholder="placeholder"></textarea>
  </label>
</template>

<style scoped lang="scss" src="./c-textarea.scss"></style>