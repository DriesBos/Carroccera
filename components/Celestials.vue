<template>
  <div class="celestials">
    <div
      ref="starsRef"
      :class="{ headerActive: headerState }"
      class="celestials-Stars stars landingInitDown"
    >
      <NuxtImg
        class="landscape"
        src="/f/264497/3840x2560/5762250b11/240209_stars_landscape.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onStarsLoad"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/2562x3840/55ca352121/240209_stars_portrait.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onStarsLoad"
      />
    </div>

    <div
      ref="cloudsRef"
      :class="{ headerActive: headerState }"
      class="celestials-Clouds clouds landingInitUp"
    >
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x1280/b175941644/240229_clouds_landscape.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onCloudsLoad"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1278x1810/fc3ddfd9d1/240229_clouds_portrait.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onCloudsLoad"
      />
    </div>

    <div
      ref="constellationRef"
      :class="{ headerActive: headerState }"
      class="celestials-Constellation constellation landingInit"
    >
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x1280/83d36c70c9/constellation_landscape.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="onConstellationLoad"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1287x1909/3c918ea99e/constellation_portrait.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="onConstellationLoad"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { gsap, ScrollTrigger } = useGsap();
const { requestRefresh } = useScrollRefresh();

const emit = defineEmits([
  'headerEmit',
  'starsLoadedEmit',
  'cloudsLoadedEmit',
  'constellationLoadedEmit',
]);

defineProps({
  headerState: Boolean,
});

// Template refs
const starsRef = ref(null);
const cloudsRef = ref(null);
const constellationRef = ref(null);

onMounted(() => {
  if (!starsRef.value || !cloudsRef.value || !constellationRef.value) return;

  gsap.to(starsRef.value, {
    y: '25vh',
    scrollTrigger: {
      trigger: starsRef.value,
      scrub: true,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });

  gsap.to(constellationRef.value, {
    y: '25vh',
    scrollTrigger: {
      trigger: constellationRef.value,
      scrub: true,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      start: 'top top',
      end: 'bottom -100%',
    },
    ease: 'none',
  });

  gsap.to(cloudsRef.value, {
    y: '0vh',
    scrollTrigger: {
      trigger: cloudsRef.value,
      scrub: true,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      start: 'top 60%',
      end: 'bottom 100%',
    },
    ease: 'none',
  });

  // Refresh ScrollTrigger measurements now that triggers are created
  // and images may still be loading; calling refresh ensures correct positions
  if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
    // small timeout allows browser to layout images that finish loading immediately
    setTimeout(() => ScrollTrigger.refresh(), 50);
  }
});

function onStarsLoad() {
  emit('starsLoadedEmit', true);
  requestRefresh(80);
}

function onCloudsLoad() {
  emit('cloudsLoadedEmit', true);
  requestRefresh(80);
}

function onConstellationLoad() {
  emit('constellationLoadedEmit', true);
  requestRefresh(80);
}
</script>

<style scoped lang="sass">
.celestials
  position: relative
  top: 0
  left: 0
  width: 100%
  height: 100vh
  height: 100lvh
  pointer-events: none
  .stars
    width: 100%
    height: 100%
    will-change: transform
    transition: opacity 1s ease
    opacity: 0
    &.headerActive
      opacity: .33 !important
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: cover
        object-position: center top
  .constellation
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    height: 100lvh
    transition: opacity .33s ease
    will-change: transform
    opacity: 0
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
        object-position: center center
    &.headerActive
      opacity: 0 !important
  .clouds
    position: absolute
    top: 60vh
    top: 60lvh
    left: 0
    width: 100%
    transition: opacity .33s ease
    will-change: transform
    z-index: 100
    opacity: 0
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: cover
        object-position: center center
    &.headerActive
      opacity: 0 !important
</style>
