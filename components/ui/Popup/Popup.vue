<script setup lang="ts">
import { ref } from 'vue';

import {useListen, useEvent, useDestroy} from "~/composables/useEventBus";

import MenuPopup from "~/components/popups/MenuPopup/MenuPopup.vue";

const popups = {
  MenuPopup,
}

const route = useRoute();

const isActive = ref<boolean>(false);
const currentPopup = shallowRef<object|null>(null);

watch(() => route.fullPath, () => {
  useEvent('popup:close');
});

onMounted(() => {
  useListen('popup:open', openPopupHandler);
  useListen('popup:close', closePopup);
});

onBeforeUnmount(() => {
  useDestroy('popup:open', openPopupHandler);
  useDestroy('popup:close', closePopup);
})

const closePopup = () => {
  isActive.value = false;
  currentPopup.value = null;
}

const openPopup = (name: string) => {
  currentPopup.value = popups[name];
  isActive.value = !isActive.value;
}

const openPopupHandler = ({ name }: { name: string }) => {
  openPopup(name)
}
</script>

<template>
  <div class="popup">
    <transition name="fade">
      <div @click="useEvent('popup:close')" v-if="isActive" class="popup__overlay"></div>
    </transition>

    <transition name="fade">
      <component :is="currentPopup" v-if="isActive"></component>
    </transition>
  </div>
</template>

<style scoped lang="scss" src="./popup.scss"></style>