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
      viewport: 'width=device-width, initial-scale=1',
      title: 'Carroccera Collective',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'description', content: 'content' }],
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
  ],

  build: {
    transpile: ['gsap'],
  },
});
