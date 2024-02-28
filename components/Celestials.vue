<template>
  <div class="celestials">
    <div
      :class="{ headerActive: headerState }"
      class="celestials-Stars stars landingInitDown"
    >
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x2024/c169975dc3/stars_landscape.png"
        alt=""
        provider="storyblok"
        quality="85"
        format="webp"
        @load="emit('starsLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1281x1920/494333f935/stars_portrait.png"
        alt=""
        provider="storyblok"
        quality="85"
        format="webp"
        @load="emit('starsLoadedEmit', true)"
      />
    </div>

    <div
      :class="{ headerActive: headerState }"
      class="celestials-Clouds clouds landingInitUp"
    >
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x1280/204c93607e/clouds_landscape.png"
        alt=""
        provider="storyblok"
        quality="85"
        format="webp"
        @load="emit('cloudsLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1281x1920/2dbd14f6e7/clouds_portrait.png"
        alt=""
        provider="storyblok"
        quality="85"
        format="webp"
        @load="emit('cloudsLoadedEmit', true)"
      />
    </div>

    <div
      :class="{ headerActive: headerState }"
      class="celestials-Constellation constellation landingInit"
    >
      <NuxtImg
        class="landscape"
        src="/f/264497/1920x1280/83d36c70c9/constellation_landscape.png"
        alt=""
        provider="storyblok"
        quality="85"
        format="webp"
        @load="emit('constellationLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait"
        src="/f/264497/1287x1909/3c918ea99e/constellation_portrait.png"
        alt=""
        provider="storyblok"
        quality="85"
        format="webp"
        @load="emit('constellationLoadedEmit', true)"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits([
  'headerEmit',
  'starsLoadedEmit',
  'cloudsLoadedEmit',
  'constellationLoadedEmit',
]);

defineProps({
  headerState: Boolean,
});

onMounted(() => {
  const stars = document.querySelector('.stars');

  gsap.to(stars, {
    y: '25%',
    scrollTrigger: {
      trigger: stars,
      scrub: true,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });

  const constellation = document.querySelector('.constellation');

  gsap.to(constellation, {
    y: '25%',
    scrollTrigger: {
      trigger: constellation,
      scrub: true,
      start: 'top top',
      end: 'bottom -100%',
    },
    ease: 'none',
  });

  const clouds = document.querySelector('.clouds');

  gsap.to(clouds, {
    y: '-325%',
    scrollTrigger: {
      trigger: clouds,
      scrub: true,
      start: 'top 60%',
      end: 'bottom -100%',
    },
    ease: 'none',
  });
});
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
    position: fixed
    top: 60vh
    top: 60lvh
    left: 0
    width: 100%
    transition: opacity .33s ease, top .5s ease
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
