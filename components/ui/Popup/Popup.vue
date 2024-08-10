<script setup lang="ts">
import { ref } from 'vue';

import {useListen, useEvent, useDestroy} from "~/composables/useEventBus";

import MenuPopup from "~/components/popups/MenuPopup/MenuPopup.vue";
import ShopInfoPopup from "~/components/popups/ShopInfoPopup/ShopInfoPopup.vue";

const popups = {
  MenuPopup,
  ShopInfoPopup,
}

const route = useRoute();

const isActive = ref<boolean>(false);
const currentPopup = shallowRef<object|null>(null);
const zIndexValue = ref<number>(1);

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

const openPopup = ({ name, zIndex }: { name: string, zIndex: number }) => {
  currentPopup.value = popups[name];
  zIndexValue.value = zIndex;
  isActive.value = !isActive.value;
}

const openPopupHandler = ({ name, zIndex = 1 }: { name: string, zIndex: number }) => {
  openPopup({name, zIndex})
}
</script>

<template>
  <div :style="{'z-index': zIndexValue}" class="popup">
    <transition name="fade">
      <div @click="useEvent('popup:close')" v-if="isActive" class="popup__overlay"></div>
    </transition>

    <transition name="fade">
      <component :is="currentPopup" v-if="isActive"></component>
    </transition>
  </div>
</template>

<style scoped lang="scss" src="./popup.scss"></style>