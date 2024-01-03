<template>
  <div class="landingParallax">
    <div class="sky">
      <img class="landscape" src="~/assets/img/Sky_Landscape.png" alt="" />
      <img class="portrait" src="~/assets/img/Sky_Portrait.png" alt="" />
    </div>

    <div class="landingParallax_Stars stars panel box">
      <img class="landscape" src="~assets/img/Stars_Landscape.png" alt="" />
      <img class="portrait" src="~assets/img/Stars_Portrait.png" alt="" />
    </div>

    <div class="landingParallax_Constellation constellation panel box">
      <img
        class="landscape"
        src="~assets/img/Constellation_Landscape.png"
        alt=""
      />
      <img
        class="portrait"
        src="~assets/img/Constellation_Portrait.png"
        alt=""
      />
    </div>

    <!-- <div class="landingParallax_Sun sun panel box">
      <img src="~assets/img/sun.png" alt="" />
    </div> -->
    <!-- <div class="landingParallax_Sun sun panel box">
      <img src="~assets/img/logo.png" alt="" />
    </div> -->
    <!-- <div class="landingParallax_Moon moon panel box">
      <img src="~assets/img/moon.png" alt="" />
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const main = ref();
let ctx;

onMounted(() => {
  // const sun = document.querySelector('.sun');
  // const moon = document.querySelector('.moon');
  const stars = document.querySelector('.stars');
  // gsap.to(sun, {
  //   y: '-100%',
  //   scrollTrigger: {
  //     trigger: sun,
  //     scrub: true,
  //     start: 'top top',
  //     end: 'bottom -400%',
  //   },
  //   ease: 'none',
  // });
  // gsap.to(moon, {
  //   y: '-100%',
  //   scrollTrigger: {
  //     trigger: moon,
  //     scrub: true,
  //     start: 'top top',
  //     end: 'bottom -600%',
  //   },
  //   ease: 'none',
  // });
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
  position: relative
  width: 100vw
  height: 100vh
  pointer-events: none
  .panel
    position: fixed
    top: 0
    left: 0
    right: 0
    img
      width: 100%
      max-width: 100%
      height: auto
  .sky
    position: relative
    width: 100%
    height: 100%
    img
        width: 100%
        height: 100%
        object-fit: cover
        object-position: top

  .stars
    width: 100%
    height: 100%
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: cover
        object-position: top

  .constellation
    width: 100%
    height: 100%
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
</style>
