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
    routeRules: {
      // Cache built static assets aggressively in production
      '/_nuxt/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },
      '/assets/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },
    },
  },

  ssr: false,

  app: {
    head: {
      viewport:
        'viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
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
      link: [
        // Preload key local fonts (woff2)
        {
          rel: 'preload',
          href: '/fonts/ss/ss-regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/ss/ss-semibold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
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
    optimizeDeps: {
      include: ['gsap'],
    },
    build: {
      cssCodeSplit: true,
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/styles/vars/variables.sass" as *\n',
          silenceDeprecations: ['import'],
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
