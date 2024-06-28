<script lang="ts">
import { defineComponent, defineEmits } from 'vue';
import type { PropType } from 'vue';

interface ComponentProps {
  invert: boolean;
  isActive: boolean;
}

export default defineComponent({
  name: 'Burger',
  props: {
    invert: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['click'],

  setup(props: ComponentProps, { emit }) {
    const { invert, isActive } = toRefs(props);

    const toggle = (isActive) => {
      emit('click', isActive)
    }

    return {
      invert, toggle, isActive
    };
  }

});
</script>

<template>
  <button
      @click="toggle(isActive)"
      type="button"
      class="burger"
      :class="{
        'burger--active': isActive,
        'burger--invert': invert
      }"
  >
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped src="./burger.scss">

</style>