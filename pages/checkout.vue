<script setup lang="ts">
import PageHead from "~/components/blocks/PageHead/PageHead.vue";
import CheckoutForm from "~/components/pages/checkout/CheckoutForm/CheckoutForm.vue";
</script>

<template>
  <NuxtLayout name="default">
    <div class="checkout-page">
      <PageHead title="Checkout" />

      <div class="checkout-page__holder">
        <CheckoutForm />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>