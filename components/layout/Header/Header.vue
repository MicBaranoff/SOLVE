<script setup lang="ts">
import Burger from "~/components/ui/Burger/Burger.vue";
</script>

<template>
  <header class="header">
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

        <Burger />
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" scoped></style>