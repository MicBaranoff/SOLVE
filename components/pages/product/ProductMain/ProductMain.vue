<script setup lang="ts">
import Button from "~/components/ui/Button/Button.vue";
import ProductInfoButtons from "~/components/pages/product/ProductInfoButtons/ProductInfoButtons.vue";
import ProductDescription from "~/components/pages/product/ProductDescription/ProductDescription.vue";

import {defineEmits, defineProps} from "vue";

import {useCart} from "~/store/cart";
import {useEvent} from "~/composables/useEventBus";

const { addToCart, getProductCartCount } = useCart();

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

type Item = {
  id?: string;
  type?: string;
  name?: string;
  price?: string;
  description?: string;
  image?: string;
  featured?: boolean;
  is_new?: boolean;
  descriptionFull?: string;
}

interface ComponentProps {
  data: Item;
}

defineProps<ComponentProps>()

defineEmits(['click']);

const onButtonInfoClickHandler = () => {
  useEvent('popup:open', { name: 'ShopInfoPopup', zIndex: 2 });
}

</script>

<template>
  <div class="product-main">
    <div class="product-main__holder">
      <div class="product-main__image">
        <NuxtImg :src="data.image" alt="" />
      </div>

      <div class="product-main__info">
        <div class="product-main__title">
          <h2 class="product-main__font product-main__font--title">
            {{ data.name }}
          </h2>
        </div>
        <p class="product-main__font product-main__font--price">
          $ {{data.price}} USD
        </p>
        <p class="product-main__font product-main__font--desc">
          {{ data.description }}
        </p>

        <div class="product-main__buy">
          <span class="product-main__input" >
            {{ getProductCartCount(data.id) }}
          </span>

          <Button @click="addToCart(data)" filled color="black">
            Add to cart
          </Button>
        </div>

        <ProductInfoButtons
            @click="onButtonInfoClickHandler"
            :buttons="BUTTONS_DATA" class="product-main__info" />
      </div>
    </div>
    <ProductDescription :content="data.descriptionFull" />
  </div>
</template>

<style scoped lang="scss" src="./product-main.scss"></style>