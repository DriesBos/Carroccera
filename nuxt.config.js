import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'viewport-fit=cover, width=device-width, initial-scale=1',
      title: 'Carroccera Collective',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'description', content: 'content' }],
      meta: [{ name: 'mobile-web-app-capable', content: 'yes' }],
      meta: [{ name: 'apple-mobile-web-app-capable', content: 'yes' }],
      meta: [{ name: 'apple-touch-fullscreen', content: 'yes' }],
      meta: [
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
    },
  },

  image: {
    inject: true,
    quality: 80,
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/vars/variables.sass"',
        },
      },
    },
  },

  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/form-reset.css',
    '~/assets/styles/typography.sass',
    '~/assets/styles/transitions.sass',
    '~/assets/styles/main.sass',
  ],

  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.PREVIEWKEY,
      },
    ],
    ['@vueuse/nuxt'],
    ['@nuxt/image'],
  ],

  build: {
    transpile: ['gsap'],
  },
});
