<script setup lang="ts">
import ButtonArrow from "~/components/ui/ButtonArrow/ButtonArrow.vue";
</script>

<template>
  <section class="help-section">
    <div class="help-section__holder">
      <div class="help-section__title">
        <h2 class="help-section__font help-section__font--title">
          Help?
        </h2>
      </div>

      <div class="help-section__wrapper">
        <div class="help-section__item">
          <div class="help-section__item-title">
            <h4 class="help-section__font help-section__font--subtitle">Local Stores</h4>
          </div>
          <p class="help-section__font help-section__font--text">
            Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies.
          </p>
          <ButtonArrow class="help-section__item-btn">Find a Store</ButtonArrow>
        </div>

        <div class="help-section__item">
          <div class="help-section__item-title">
            <h4 class="help-section__font help-section__font--subtitle">Questions?</h4>
          </div>
          <p class="help-section__font help-section__font--text">
            Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies.
          </p>
          <ButtonArrow class="help-section__item-btn">Read the FAQ</ButtonArrow>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss" src="./help-section.scss"></style>