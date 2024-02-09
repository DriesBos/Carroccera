<template>
  <div class="celestials">
    <div class="celestials-Stars stars">
      <NuxtImg
        v-if="orientationState === 'landscape'"
        class="landscape"
        src="/Stars_Landscape.png"
        alt=""
        quality="80"
        loading="lazy"
      />
      <NuxtImg
        v-if="orientationState === 'portrait'"
        class="portrait"
        src="/Stars_Portrait.png"
        alt=""
        quality="80"
        loading="lazy"
      />
    </div>

    <div
      :class="{ headerActive: headerState }"
      class="celestials-Clouds clouds"
    >
      <NuxtImg
        v-if="orientationState === 'landscape'"
        class="landscape"
        src="/Clouds_Landscape.png"
        alt=""
        quality="80"
        loading="lazy"
      />
      <NuxtImg
        v-if="orientationState === 'portrait'"
        class="portrait"
        src="/Clouds_Portrait.png"
        alt=""
        quality="80"
        loading="lazy"
      />
    </div>

    <div
      @click="emit('headerEmit', true)"
      :class="{ headerActive: headerState }"
      class="celestials-Constellation constellation"
    >
      <NuxtImg
        v-if="orientationState === 'landscape'"
        class="landscape"
        src="/Constellation_Landscape_new.png"
        alt=""
        quality="80"
        loading="lazy"
      />
      <NuxtImg
        v-if="orientationState === 'portrait'"
        class="portrait"
        src="/Constellation_Portrait_new.png"
        alt=""
        quality="80"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['headerEmit']);

defineProps({
  headerState: Boolean,
  orientationState: String,
});

let ctx;

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
    y: '-250%',
    scrollTrigger: {
      trigger: clouds,
      scrub: true,
      start: 'top 60%',
      end: 'bottom -150%',
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
  width: 100vw
  height: 100vh
  height: 100svh
  pointer-events: none
  .stars
    width: 100%
    height: 100%
    will-change: transform
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: cover
        object-position: center bottom
  .constellation
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    height: 100svh
    opacity: 1
    transition: opacity .66s ease
    pointer-events: auto
    cursor: pointer
    will-change: transform
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
        object-position: center center
    &.headerActive
      opacity: 0
  .clouds
    position: fixed
    top: 60vh
    left: 0
    width: 100%
    opacity: 1
    transition: opacity .33s ease
    cursor: pointer
    will-change: transform
    z-index: 100
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
        object-position: center center
    &.headerActive
      opacity: 0
</style>
