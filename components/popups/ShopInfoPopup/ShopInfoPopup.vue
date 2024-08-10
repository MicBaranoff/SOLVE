<script setup lang="ts">
import {useEvent} from "~/composables/useEventBus";

const closeHandler = () => {
  useEvent('popup:close')
}
</script>

<template>
  <div class="shop-info-popup">
    <div class="shop-info-popup__holder">
      <button
          @click="closeHandler"
          class="shop-info-popup__button">
        <span class="shop-info-popup__font shop-info-popup__font--button">
          CLOSE
        </span>
      </button>

      <div>
        <div class="shop-info-popup__block">
          <div class="shop-info-popup__block-title">
            <h3 class="shop-info-popup__font shop-info-popup__font--title">Details</h3>
          </div>
          <p class="shop-info-popup__font shop-info-popup__font--text">
            Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas.
          </p>

          <ul class="shop-info-popup__font shop-info-popup__font--text">
            <li>Proin fermentum leo vel orci porta non pulvinar</li>
            <li>Diam phasellus vestibulum</li>
            <li>Quisque egestas diam in arcu cursus</li>
          </ul>
        </div>

        <div class="shop-info-popup__block">
          <div class="shop-info-popup__block-title">
            <h3 class="shop-info-popup__font shop-info-popup__font--title">Delivery</h3>
          </div>
          <p class="shop-info-popup__font shop-info-popup__font--text">
            Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam.
          </p>
        </div>

        <div class="shop-info-popup__block">
          <div class="shop-info-popup__block-title">
            <h3 class="shop-info-popup__font shop-info-popup__font--title">Returns</h3>
          </div>
          <p class="shop-info-popup__font shop-info-popup__font--text">
            Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./shop-info-popup.scss"></style>