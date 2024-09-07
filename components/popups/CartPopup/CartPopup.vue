<script setup lang="ts">
  import Button from "~/components/ui/Button/Button.vue";
  import CartItem from "~/components/blocks/CartItem/CartItem.vue";

  import {useCart} from "~/store/cart";
  import {useEvent} from "~/composables/useEventBus";

  const store = useCart();

  const closeHandler = () => {
    useEvent('popup:close')
  }
</script>

<template>
  <div class="cart-popup">
    <div class="cart-popup__header">
      <div class="cart-popup__title">
        <h3 class="cart-popup__font cart-popup__font--title">
          Cart
        </h3>
      </div>
      <button @click="closeHandler" class="cart-popup__close">
        <span class="cart-popup__font cart-popup__font--button">
          CLOSE
        </span>
      </button>
    </div>

    <div class="cart-popup__list">
      <CartItem
          v-for="item in store.cart"
          :key="item.id"
          :data="item"
          @onRemove="store.removeFromCart"
      />

      <div v-for="item in store.cart"
           :key="item.id"
           class="cart-popup__item">
        <div class="cart-popup__item-pic">
          <img :src="item.image" alt="picture">
        </div>
        <div class="cart-popup__item-info">
          <div>
            <span class="cart-popup__font cart-popup__font--name">
              {{item.name}}
            </span>
            <span class="cart-popup__font cart-popup__font--price">
              {{item.price}}
            </span>
          </div>
          <button @click="store.removeFromCart(item.id)" class="cart-popup__remove-btn">
            <span class="cart-popup__font cart-popup__font--remove">
              Remove
            </span>
          </button>
        </div>
        <span class="cart-popup__input" >
            {{item.quantity}}
        </span>
      </div>
    </div>

    <div class="cart-popup__footer">
      <div class="cart-popup__footer-head">
        <span class="cart-popup__font cart-popup__font--text">Subtotal</span>
        <span class="cart-popup__font cart-popup__font--text">$ {{store.getCartTotalPrice}} USD</span>
      </div>

      <Button :disabled="!store.getCartTotalPrice" class="cart-popup__button" filled>
        continue to checkout
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./cart-popup.scss"></style>