<template>
  <div class="celestials">
    <div :class="{ headerActive: headerState }" class="celestials-Stars stars">
      <img
        v-if="orientationState === 'landscape'"
        class="landscape"
        src="/img/stars_landscape.png"
        alt=""
      />
      <img
        v-if="orientationState === 'portrait'"
        class="portrait"
        src="/img/stars_portrait.png"
        alt=""
      />
    </div>

    <div
      :class="{ headerActive: headerState }"
      class="celestials-Clouds clouds"
    >
      <img
        v-if="orientationState === 'landscape'"
        class="landscape"
        src="/img/clouds_landscape.png"
        alt=""
      />
      <img
        v-if="orientationState === 'portrait'"
        class="portrait"
        src="/img/clouds_portrait.png"
        alt=""
      />
    </div>

    <div
      :class="{ headerActive: headerState }"
      class="celestials-Constellation constellation"
    >
      <img
        v-if="orientationState === 'landscape'"
        class="landscape"
        src="/img/constellation_landscape.png"
        alt=""
      />
      <img
        v-if="orientationState === 'portrait'"
        class="portrait"
        src="/img/constellation_portrait.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['headerEmit']);

defineProps({
  headerState: Boolean,
  orientationState: String,
});

// const starShow = ref(false);
// const cloudShow = ref(false);

// function setStar() {
//   setTimeout(() => {
//     starShow.value = true;
//   }, 1200);
// }

// function setCloud() {
//   setTimeout(() => {
//     cloudShow.value = true;
//   }, 1200);
// }

// function setScroll() {
//   document.documentElement.style.overflow = 'hidden';
//   setTimeout(() => {
//     document.documentElement.style.overflow = 'auto';
//   }, 1200);
// }

onMounted(() => {
  // setStar();
  // setCloud();
  // setScroll();

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
  width: 100%
  height: 100vh
  height: 100svh
  pointer-events: none
  .stars
    width: 100%
    height: 100%
    // opacity: 0
    will-change: transform
    transition: opacity 1s ease
    // &.showActive
    //   opacity: 1
    &.headerActive
      opacity: .66
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
    height: 100svh
    transition: opacity .33s ease
    pointer-events: auto
    cursor: pointer
    will-change: transform
    opacity: 1
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
    transition: opacity .33s ease, top .5s ease
    cursor: pointer
    will-change: transform
    z-index: 100
    opacity: 1
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
        object-position: center center
    // &.showActive
    //   top: 60vh
    &.headerActive
      opacity: 0
</style>
