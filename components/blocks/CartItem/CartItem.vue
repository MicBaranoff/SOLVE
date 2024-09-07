<script setup lang="ts">
  import {defineProps, defineEmits} from "vue";

  interface ItemData {
    id: string,
    image?: string,
    name?: string,
    price: number,
    quantity: number,
  }

  type ComponentProps = {
    data: ItemData;
  }

  defineProps<ComponentProps>();

  defineEmits(['onRemove']);
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__pic">
      <img :src="data.image" alt="picture">
    </div>
    <div class="cart-item__info">
      <div>
        <span class="cart-item__font cart-item__font--name">
          {{ data.name }}
        </span>
        <span class="cart-item__font cart-item__font--price">
          {{ data.price }}
        </span>
      </div>
      <button @click="$emit('onRemove', data.id)" class="cart-item__remove-btn">
          <span class="cart-item__font cart-item__font--remove">
            Remove
          </span>
      </button>
    </div>
    <span class="cart-item__input" >
      {{ data.quantity }}
    </span>
  </div>
</template>

<style scoped lang="scss" src="./cart-item.scss"></style>