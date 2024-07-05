<script setup lang="ts">
import { defineProps, ref} from 'vue';

import Burger from '~/components/ui/Burger/Burger.vue';

import { useEvent, useListen } from '~/composables/useEventBus';

interface ComponentProps {
  invert?: boolean;
}

const isActiveBurger = ref(false);

const callPopup = (isActiveStatus) => {
  isActiveBurger.value = !isActiveStatus;

  isActiveBurger.value ?
      useEvent('popup:open', { name: 'MenuPopup' }) :
      useEvent('popup:close');
}

withDefaults(defineProps<ComponentProps>(), {
  invert: false,
})

onMounted(() => {
  useListen('popup:close', () => {
    isActiveBurger.value = false;
  })
})
</script>

<template>
  <header :class="{'header--invert': invert}" class="header">
    <div class="header__wrapper">
      <span class="header__font header__font-text">Lookbook</span>
      <a href="" class="header__logo">
        <nuxt-icon class="header__logo-pic" name="logo" />
      </a>
      <div class="header__wrap">
        <NuxtLink class="header__link" to="/shop">
          <span class="header__font header__font-text">Shop</span>
        </NuxtLink>
        <NuxtLink class="header__link" href="/cart">
          <span class="header__font header__font-text">Cart</span>
          <span class="header__counter">
            <span class="header__font header__font-count">0</span>
          </span>
        </NuxtLink>

        <Burger @click="callPopup" :is-active="isActiveBurger" :invert="invert" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" scoped></style>