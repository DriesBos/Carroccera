<template>
  <footer class="footerlanding">
    <img class="landscape" src="~assets/img/landing-footer-l.png" alt="" />
    <img class="portrait" src="~assets/img/landing-footer-p.png" alt="" />
  </footer>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const main = ref();
let ctx;

onMounted(() => {
  const footerlanding = document.querySelector('.footerlanding');

  gsap.to(footerlanding, {
    y: '100%',
    scrollTrigger: {
      trigger: footerlanding,
      scrub: true,
      start: 'top 50%',
      end: 'bottom -5%',
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
  bottom: 0
  width: 100%
  z-index: $z-footer
  img, svg
    width: 100%
    max-width: 100%
    height: auto
</style>
