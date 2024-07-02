<script setup lang="ts">
import ButtonArrow from "~/components/ui/ButtonArrow/ButtonArrow.vue";

import roomsData from "~/config/roomsData";

const roomsTosShow = computed(() => roomsData.slice(0,3))
</script>

<template>
  <div class="rooms-section">
    <div class="rooms-section__holder">
      <div class="rooms-section__title">
        <h2 class="rooms-section__font rooms-section__font--title">Rooms</h2>
      </div>
      <div class="rooms-section__button">
        <ButtonArrow>See All</ButtonArrow>
      </div>

      <div class="rooms-section__row">
        <div v-for="room in roomsTosShow" :key="Date.now() + room.id" class="rooms-section__item">
          <img class="rooms-section__item-pic" :src="room.image" alt="">
          <span class="rooms-section__font rooms-section__font--name rooms-section__item-name">
            {{room.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./rooms-section.scss"></style>