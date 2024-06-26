<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface ComponentProps {
  color: string;
  filled: boolean;
}

export default defineComponent({
  name: 'MyComponent',
  props: {
    color: {
      type: String as PropType<string>,
      default: 'black',
    },
    filled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  setup(props: ComponentProps) {
    const { text, color, filled } = toRefs(props)

    return {
      text, color, filled
    };
  }

});
</script>

<template>
  <button
    type="button"
    class="button"
    :class="{
    [`button--color-${color}`]: color,
    [`button--filled-${color}`]: filled && color
  }"
  >
    <span class="button__font button__font-text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss" src="./button.scss"></style>