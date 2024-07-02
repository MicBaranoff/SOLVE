<script setup lang="ts">
  import products from '~/config/productsData';

  const featuredProducts = computed(() => products.filter(product => product.featured))
</script>

<template>
  <div class="menu-popup">
    <div class="menu-popup__handler">
      <div class="menu-popup__col">
        <div class="menu-popup__title">
          <h3 class="menu-popup__font menu-popup__font--title">
            Sølve
          </h3>
        </div>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Home</span>
        </a>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Rooms</span>
        </a>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Journal</span>
        </a>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Contact</span>
        </a>
      </div>

      <div class="menu-popup__col">
        <div class="menu-popup__title">
          <h3 class="menu-popup__font menu-popup__font--title">
            Shop
          </h3>
        </div>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Home</span>
        </a>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Rooms</span>
        </a>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Journal</span>
        </a>
        <a href="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Contact</span>
        </a>
      </div>

      <div class="menu-popup__col">
        <div class="menu-popup__title">
          <h3 class="menu-popup__font menu-popup__font--title">
            Featured
          </h3>
        </div>

        <div class="menu-popup__row">
          <div v-for="item in featuredProducts"
               class="menu-popup__featured"
               :key="item.id"
          >
            <div class="menu-popup__featured-img">
              <img :src="item.image" alt="">
            </div>

            <div class="menu-popup__featured-content">
              <p class="menu-popup__font menu-popup__font--name">{{item.name}}</p>
              <p class="menu-popup__font menu-popup__font--price">{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./menu-popup.scss"></style>