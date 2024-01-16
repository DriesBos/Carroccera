<template>
  <div class="celestials">
    <div class="celestials-Sky sky">
      <img class="landscape" src="~/assets/img/Sky_Landscape.png" alt="" />
      <img class="portrait" src="~/assets/img/Sky_Portrait.png" alt="" />
    </div>

    <div class="celestials-Stars stars">
      <img class="landscape" src="~assets/img/Stars_Landscape.png" alt="" />
      <img class="portrait" src="~assets/img/Stars_Portrait.png" alt="" />
    </div>

    <div
      :class="{ headerActive: headerState }"
      class="celestials-Constellation constellation"
    >
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
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

defineProps({
  headerState: Boolean,
});

const main = ref();
let ctx;

onMounted(() => {
  const stars = document.querySelector('.stars');
  const constellation = document.querySelector('.constellation');
  gsap.to(stars, {
    y: '-25%',
    scrollTrigger: {
      trigger: stars,
      scrub: true,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });
  gsap.to(constellation, {
    y: '12.5%',
    scrollTrigger: {
      trigger: constellation,
      scrub: true,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style scoped lang="sass">
.celestials
  position: relative
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  pointer-events: none
  .sky
    position: fixed
    left: 0
    top: 0
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
        object-position: center top

  .constellation
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 1
    transition: opacity $transition-general
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
        object-position: center bottom
    &.headerActive
      opacity: 0
</style>
