import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  // Keep v3 folder structure (files in root, not in /app)
  srcDir: '.',
  dir: {
    app: 'app',
  },

  compatibilityDate: '2025-01-01',

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  ssr: false,

  app: {
    head: {
      viewport: 'viewport-fit=cover, width=device-width, initial-scale=1',
      title: 'Carroccera Collective',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
        },
        {
          name: 'thumbnail',
          content: '/thumbnail.png',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Carroccera' },
        {
          property: 'og:description',
          content:
            'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
        },
        {
          property: 'og:url',
          content: 'https://www.carroccera.com',
        },
        {
          property: 'og:image',
          content: '/thumbnail.png',
        },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
    },
  },

  image: {
    format: ['webp'],
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
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
    ['@storyblok/nuxt', { accessToken: process.env.PREVIEWKEY }],
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/robots',
  ],

  build: {
    transpile: ['gsap'],
  },
});
