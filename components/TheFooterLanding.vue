<template>
  <div class="footerlanding" :class="{ headerActive: headerState }">
    <img class="landscape" src="~assets/img/landing-footer-l.png" alt="" />
    <img class="portrait" src="~assets/img/landing-footer-p.png" alt="" />
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
  const footerlanding = document.querySelector('.footerlanding');

  gsap.to(footerlanding, {
    y: '100%',
    scrollTrigger: {
      trigger: footerlanding,
      scrub: true,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped lang="sass">
.footerlanding
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100vh
  height: 100svh
  transition: top .5s ease
  pointer-events: none
  img, svg
    position: absolute
    left: 0
    bottom: 0
    bottom: env(safe-area-inset-bottom)
    width: 100%
    max-width: 100%
    height: auto
  &.headerActive
    top: 100%
</style>
