<template>
  <div
    class="footerlanding landingInitUp"
    :class="{ headerActive: headerState }"
  >
    <template v-if="footerImage == 0">
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x429/935b217ea7/landingfooter-landscape.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1281x746/2b8ad13ebe/landingfooter-portrait.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 1">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/fb6f6eb4b2/landing-l-02.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/f5e35ca395/landing-p-02.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 2">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/3836242e44/landing-l-03.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/218f4346af/landing-p-03.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 3">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/cbbe72d176/landing-l-04.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/89f7ebce2b/landing-p-04.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 4">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/24b6f2171c/landing-l-05.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/8f6e30add9/landing-p-05.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 5">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/c7c2b97fca/landing-l-06.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/41bde2aa8f/landing-p-06.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 6">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/2728f4e04a/landing-l-07.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/2b823415c4/landing-p-07.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLandingLoadedEmit', true)"
      />
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const { gsap } = useGsap();

defineProps({ headerState: Boolean, footerImage: Number });

const emit = defineEmits(['footerLandingLoadedEmit']);

onMounted(() => {
  const footerlanding = document.querySelector('.footerlanding');

  gsap.to(footerlanding, {
    y: '100vh',
    scrollTrigger: {
      trigger: footerlanding,
      scrub: true,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });
});
</script>

<style scoped lang="sass">
.footerlanding
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100vh
  transition: top .5s ease
  pointer-events: none
  z-index: 900
  will-change: transform
  top: 0
  opacity: 1
  img, svg
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    max-width: 100%
    height: auto
  &.headerActive
    top: 100%
</style>
