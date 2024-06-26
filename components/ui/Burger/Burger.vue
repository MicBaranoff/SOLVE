<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';

interface ComponentProps {
  invert: boolean;
}

const isActive = ref<boolean>(false)

function toggle() {
  isActive.value = !isActive.value
}

export default defineComponent({
  name: 'Burger',
  props: {
    invert: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  setup(props: ComponentProps) {
    const { invert } = toRefs(props)

    return {
      invert, toggle, isActive
    };
  }

});
</script>

<template>
  <button
      @click="toggle"
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