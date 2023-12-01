<template>
  <div class="landingParallax">
    <div class="landingParallax_Stars stars panel box">
      <img src="~assets/img/stars.png" alt="" />
    </div>
    <div class="landingParallax_Sun sun panel box">
      <img src="~assets/img/sun.png" alt="" />
    </div>
    <div class="landingParallax_Moon moon panel box">
      <img src="~assets/img/moon.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const main = ref();
let ctx;

onMounted(() => {
  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');
  const stars = document.querySelector('.stars');
  gsap.to(sun, {
    y: '-100%',
    scrollTrigger: {
      trigger: sun,
      scrub: true,
      start: 'top top',
      end: 'bottom -400%',
    },
    ease: 'none',
  });
  gsap.to(moon, {
    y: '-100%',
    scrollTrigger: {
      trigger: moon,
      scrub: true,
      start: 'top top',
      end: 'bottom -600%',
    },
    ease: 'none',
  });
  gsap.to(stars, {
    y: '-100%',
    scrollTrigger: {
      trigger: stars,
      scrub: true,
      start: 'top top',
      end: 'bottom -50%',
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
    right: 0
    img
      width: 100%
      max-width: 100%
      height: auto
  .sun
    left: auto
    width: 50vw
  .moon
    right: auto
    width: 50vw
</style>
