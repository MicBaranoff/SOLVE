// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

const staticImagesBaseUrl = process.env.STATIC_IMAGES_URL || '/images/';
const staticFontsBaseUrl = process.env.STATIC_FONTS_URL || '/fonts/';

export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },
  app: {
    head: {
      title: 'A Better Nuxt 3 Starter',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }]
    }
  },
  css: ['~/assets/scss/app.scss'],

  modules: [
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icons'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
             $images-base-url: '${staticImagesBaseUrl}';
             $fonts-base-url: '${staticFontsBaseUrl}';
             @import '~/assets/scss/base/variables.scss';
             @import '~/assets/scss/base/functions.scss';
           `,
        }
      }
    },
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ]
  }
})
