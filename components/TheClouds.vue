<template>
  <div class="celestials">
    <div
      :class="{ headerActive: headerState }"
      class="celestials-Clouds clouds"
    >
      <img class="landscape" src="~/assets/img/Clouds_Landscape.png" alt="" />
      <img class="portrait" src="~/assets/img/Clouds_Portrait.png" alt="" />
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
  const trigger = document.querySelector('.celestials');
  const clouds = document.querySelector('.clouds');
  const footer = document.querySelector('.footer');
  gsap.to(clouds, {
    y: '-200%',
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: 'top top',
      endTrigger: footer,
      end: 'bottom bottom',
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
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  pointer-events: none
  overflow: visible
  .clouds
    position: fixed
    left: 0
    top: 50vh
    width: 100%
    height: auto
    opacity: .85
    transition: opacity .66s ease
    overflow: visible
    img
      width: 100%
      height: auto
      object-fit: cover
      object-position: top
      overflow: visible
    &.headerActive
      opacity: 0
</style>
