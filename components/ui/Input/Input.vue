<script setup lang="ts">
import {defineProps} from "vue";

interface ComponentProps {
  label: string;
  placeholder: string;
}

defineProps<ComponentProps>()
</script>

<template>
  <label class="c-input">
    <span class="c-input__font c-input__font--label c-input__label">
      {{ label || 'Label' }}
    </span>
    <input type="text" class="c-input__field" :placeholder="placeholder">
  </label>
</template>

<style scoped lang="scss" src="./c-input.scss"></style>