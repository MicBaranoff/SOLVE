<script setup lang="ts">
  import Input from "~/components/ui/Input/Input.vue"
  import Textarea from "~/components/ui/Textarea/Textarea.vue";
  import Button from "~/components/ui/Button/Button.vue";
</script>

<template>
  <form action="" class="checkout-form">
    <Input class="checkout-form__input" label="Name" placeholder="Name"/>
    <Input class="checkout-form__input" label="Surname" placeholder="Surname"/>
    <Input class="checkout-form__input" label="Email" placeholder="Your email"/>
    <Textarea class="checkout-form__input" label="Message" placeholder="Your message"/>
    <Button type="submit" filled>
      Submit Form
    </Button>
  </form>
</template>

<style scoped lang="scss" src="./checkout-form.scss"></style>