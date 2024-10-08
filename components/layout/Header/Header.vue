<script setup lang="ts">
import { defineProps, ref} from 'vue';

import Burger from '~/components/ui/Burger/Burger.vue';

import { useEvent, useListen } from '~/composables/useEventBus';

import { storeToRefs } from 'pinia';

import {useCart} from "~/store/cart";

const cart = useCart();

const { getCartLength } = storeToRefs(cart);

interface ComponentProps {
  invert?: boolean;
}

withDefaults(defineProps<ComponentProps>(), {
  invert: false,
})

onMounted(() => {
  useListen('popup:close', () => {
    isActiveBurger.value = false;
  })
})

const isActiveBurger = ref<boolean>(false);

const callPopup = (isActiveStatus: boolean) => {
  isActiveBurger.value = !isActiveStatus;

  isActiveBurger.value && useEvent('popup:open', { name: 'MenuPopup' });
  !isActiveBurger.value && useEvent('popup:close');
}

const callCartPopup = () => {
  useEvent('popup:open', { name: 'CartPopup', zIndex: 2 })
}
</script>

<template>
  <header :class="{'header--invert': invert}" class="header">
    <div class="header__wrapper">
      <span class="header__font header__font-text">Lookbook</span>
      <a href="/" class="header__logo">
        <nuxt-icon class="header__logo-pic" name="logo" />
      </a>
      <div class="header__wrap">
        <NuxtLink class="header__link" to="/shop">
          <span class="header__font header__font-text">Shop</span>
        </NuxtLink>
        <span @click="callCartPopup" class="header__link">
          <span class="header__font header__font-text">Cart</span>
          <span class="header__counter">
            <span class="header__font header__font-count">
              {{getCartLength}}
            </span>
          </span>
        </span>

        <Burger @click="callPopup" :is-active="isActiveBurger" :invert="invert" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" scoped></style>