<script lang="ts">
import Burger from "~/components/ui/Burger/Burger.vue";

import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface ComponentProps {
  invert: boolean;
}

export default defineComponent({
  name: 'Header',
  components: { Burger },
  props: {
    invert: {
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
  <header :class="{'header--invert': invert}" class="header">
    <div class="header__wrapper">
      <span class="header__font header__font-text">Lookbook</span>
      <a href="" class="header__logo">
        <nuxt-icon class="header__logo-pic" name="logo" />
      </a>
      <div class="header__wrap">
        <a class="header__link" href="">
          <span class="header__font header__font-text">Shop</span>
        </a>
        <a class="header__link" href="">
          <span class="header__font header__font-text">Cart</span>
          <span class="header__counter">
            <span class="header__font header__font-count">4</span>
          </span>
        </a>

        <Burger :invert="invert" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" scoped></style>