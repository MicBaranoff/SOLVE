<script setup lang="ts">
  import products from '~/config/productsData';

  const featuredProducts = computed(() => products.filter(product => product.featured));

  const router = useRouter();

  const goToProductShop = (productID: string) => {
    router.push('/shop/' + productID)
  }
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
        <NuxtLink to="/" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Home</span>
        </NuxtLink>
        <NuxtLink to="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Rooms</span>
        </NuxtLink>
        <NuxtLink to="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Journal</span>
        </NuxtLink>
        <NuxtLink to="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Contact</span>
        </NuxtLink>
      </div>

      <div class="menu-popup__col">
        <div class="menu-popup__title">
          <h3 class="menu-popup__font menu-popup__font--title">
            Shop
          </h3>
        </div>
        <NuxtLink to="/" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Home</span>
        </NuxtLink>
        <NuxtLink to="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Rooms</span>
        </NuxtLink>
        <NuxtLink to="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Journal</span>
        </NuxtLink>
        <NuxtLink to="#" class="menu-popup__link">
          <span class="menu-popup__font menu-popup__font--text">Contact</span>
        </NuxtLink>
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
               @click="goToProductShop(item.id)"
          >
            <div class="menu-popup__featured-img">
              <img :src="item.image" alt="">
            </div>

            <div class="menu-popup__featured-content">
              <p class="menu-popup__font menu-popup__font--name">{{item.name}}</p>
              <p class="menu-popup__font menu-popup__font--price">$ {{item.price}} USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./menu-popup.scss"></style>