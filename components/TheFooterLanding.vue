<template>
  <div
    ref="footerRef"
    class="footerlanding landingInitUp"
    :class="{ headerActive: headerState }"
  >
    <template v-if="footerImage == 0">
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x429/935b217ea7/landingfooter-landscape.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1281x746/2b8ad13ebe/landingfooter-portrait.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
    <template v-if="footerImage == 1">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/fb6f6eb4b2/landing-l-02.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/f5e35ca395/landing-p-02.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
    <template v-if="footerImage == 2">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/3836242e44/landing-l-03.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/218f4346af/landing-p-03.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
    <template v-if="footerImage == 3">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/cbbe72d176/landing-l-04.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/89f7ebce2b/landing-p-04.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
    <template v-if="footerImage == 4">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/24b6f2171c/landing-l-05.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/8f6e30add9/landing-p-05.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
    <template v-if="footerImage == 5">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/c7c2b97fca/landing-l-06.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/41bde2aa8f/landing-p-06.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
    <template v-if="footerImage == 6">
      <!-- DONE -->
      <NuxtImg
        class="landscape"
        src="https://a.storyblok.com/f/264497/1920x429/2728f4e04a/landing-l-07.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onFooterLoad"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait"
        src="https://a.storyblok.com/f/264497/1281x746/2b823415c4/landing-p-07.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onFooterLoad"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { gsap, ScrollTrigger } = useGsap();

defineProps({ headerState: Boolean, footerImage: Number });

const emit = defineEmits(['footerLandingLoadedEmit']);

// Template ref for the footer element
const footerRef = ref(null);

onMounted(() => {
  if (!footerRef.value) return;

  gsap.to(footerRef.value, {
    y: '100vh',
    scrollTrigger: {
      trigger: footerRef.value,
      scrub: true,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });

  if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
    setTimeout(() => ScrollTrigger.refresh(), 50);
  }
});

// Debounced local refresh helper
let _localRefreshTimer = null;
function localRequestRefresh(ms = 80) {
  if (!ScrollTrigger || typeof ScrollTrigger.refresh !== 'function') return;
  if (_localRefreshTimer) clearTimeout(_localRefreshTimer);
  _localRefreshTimer = setTimeout(() => ScrollTrigger.refresh(), ms);
}

function onFooterLoad() {
  emit('footerLandingLoadedEmit', true);
  localRequestRefresh();
}
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
