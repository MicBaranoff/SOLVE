<script setup lang="ts">
import ButtonArrow from "~/components/ui/ButtonArrow/ButtonArrow.vue";

import storesData from "~/config/storesData";

const goToLink = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <section class="stores-section">
    <div class="stores-section__holder">
      <div class="stores-section__title">
        <h2 class="stores-section__font stores-section__font--title">Our Stores</h2>
      </div>
      <div class="stores-section__row">
        <div v-for="store in storesData" :key="Date.now() + store.id" class="stores-section__item">
          <div class="stores-section__item-pic">
            <img :src="store.image" alt="Placeholder" />
          </div>
          <div class="stores-section__item-content">
            <p class="stores-section__font stores-section__font--name">
              {{store.city}}
            </p>
            <p class="stores-section__font stores-section__font--text" v-html="store.address"></p>
            <ButtonArrow
                class="stores-section__item-btn"
                @click="goToLink(store.link)">
              Get Directions
            </ButtonArrow>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss" src="./stores-section.scss"></style>