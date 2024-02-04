<template>
  <div class="celestials">
    <div class="celestials-Stars stars">
      <img class="landscape" src="~assets/img/Stars_Landscape.png" alt="" />
      <img class="portrait" src="~assets/img/Stars_Portrait.png" alt="" />
    </div>

    <div
      @click="emit('headerEmit', true)"
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

const emit = defineEmits(['headerEmit']);

defineProps({
  headerState: Boolean,
});

const main = ref();
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
  height: 100svh
  pointer-events: none
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
    height: 100vh
    height: 100svh
    opacity: 1
    transition: opacity .66s ease
    pointer-events: auto
    cursor: pointer
    img
        width: 100%
        max-width: 100%
        height: 100%
        object-fit: contain
        object-position: center center
    &.headerActive
      opacity: 0
</style>
