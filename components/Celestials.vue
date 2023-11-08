<template>
  <div class="landingParallax">
    <div class="landingParallax_Sunmoon sunmoon panel box">
      <img src="~assets/img/sunmoon.png" alt="" />
    </div>
    <div class="landingParallax_Stars stars panel box">
      <img src="~assets/img/stars.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const main = ref();
let ctx;

onMounted(() => {
  const sunmoon = document.querySelector('.sunmoon');
  const stars = document.querySelector('.stars');
  gsap.set(sunmoon, {
    y: 500,
  });
  gsap.to(sunmoon, {
    y: '-100%',
    scrollTrigger: {
      trigger: sunmoon,
      scrub: true,
      start: 'bottom bottom',
      end: 'bottom top',
      // markers: true,
    },
    ease: 'none',
  });
  gsap.set(stars, {
    y: 300,
  });
  gsap.to(stars, {
    y: '-100%',
    scrollTrigger: {
      trigger: stars,
      scrub: true,
      start: 'bottom bottom',
      end: 'bottom top',
      // markers: true,
    },
    ease: 'none',
  });
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped lang="sass">
.landingParallax
  position: fixed
  top: 0
  left: 0
  right: 0
  height: 100vh
  z-index: +1
  pointer-events: none
  .panel
    position: absolute
    top: 0
    left: 0
    img
      width: 100%
      max-width: 100%
      height: auto
</style>
