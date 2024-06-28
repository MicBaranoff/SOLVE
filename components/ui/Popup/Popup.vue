<script lang="ts">
import MenuPopup from "~/components/popups/MenuPopup/MenuPopup.vue";

import { defineComponent, ref } from 'vue';

import {useListen, useEvent} from "~/composables/useEventBus";

const isActive = ref<boolean>(false)
const currentPopup = ref<string>(null)


function closePopup() {
  isActive.value = false;
  currentPopup.value = null;
}

function openPopup(name) {
  currentPopup.value = name;
  isActive.value = !isActive.value;
}

export default defineComponent({
  components: {
    MenuPopup,
  },

  mounted() {
    useListen('popup:open', ({ name }) => {
      openPopup(name)
    });

    useListen('popup:close', closePopup);
  },

  setup() {
    return {
      isActive,
      currentPopup,
      closePopup,
    }
  }
})
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