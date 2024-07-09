<script setup lang="ts">
import Button from "~/components/ui/Button/Button.vue";
import ProductInfoButtons from "~/components/pages/product/ProductInfoButtons/ProductInfoButtons.vue";

const BUTTONS_DATA = [
  {
    id: 'Details',
    type: 'DetailsPopup',
    text: 'Details',
  },
  {
    id: 'Delivery',
    type: 'DeliveryPopup',
    text: 'Delivery',
  },
  {
    id: 'Returns',
    type: 'ReturnsPopup',
    text: 'Returns',
  },
]
</script>

<template>
  <div class="product-main">
    <div class="product-main__image">
      <NuxtImg src="/images/rooms/room1.jpg" alt="" />
    </div>

    <div class="product-main__info">
      <div class="product-main__title">
        <h2 class="product-main__font product-main__font--title">
          Elegant
          Lamp
        </h2>
      </div>
      <p class="product-main__font product-main__font--price">
        $ 129.00 USD
      </p>
      <p class="product-main__font product-main__font--desc">
        Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.
      </p>

      <div class="product-main__buy">
        <span class="product-main__input" >0</span>

        <Button filled color="black">
          Add to cart
        </Button>
      </div>

      <ProductInfoButtons :buttons="BUTTONS_DATA" class="product-main__info" />
    </div>
  </div>
</template>

<style scoped lang="scss" src="./product-main.scss"></style>