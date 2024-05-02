import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  ssr: false,
  // spaLoadingTemplate: './spa-loading-template.html',
  app: {
    head: {
      viewport: 'viewport-fit=cover, width=device-width, initial-scale=1',
      title: 'Carroccera Collective',
      description:
        'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
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
      ],
      meta: [
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Carroccera' },
        {
          hid: 'og-description',
          property: 'og:description',
          content:
            'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://www.carroccera.com',
        },

        {
          hid: 'og-image',
          property: 'og:image',
          content: '/thumbnail.png',
        },
      ],
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
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.PREVIEWKEY,
      },
    ],
    ['@vueuse/nuxt'],
    ['@nuxt/image'],
    ['@nuxtjs/robots'],
  ],

  build: {
    transpile: ['gsap'],
  },
});
