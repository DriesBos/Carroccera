<template>
  <div class="footerlanding" :class="{ headerActive: headerState }">
    <img class="landscape" src="~assets/img/landing-footer-l.png" alt="" />
    <img class="portrait" src="~assets/img/landing-footer-p.png" alt="" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

defineProps({
  headerState: Boolean,
  orientationState: String,
});

// const footerState = ref(false);

// function setFooter() {
//   setTimeout(() => {
//     footerState.value = true;
//   }, 1200);
// }

onMounted(() => {
  // setFooter();

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
</script>

<style scoped lang="sass">
.footerlanding
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100vh
  transition: top .5s ease
  pointer-events: none
  z-index: 900
  will-change: transform
  // top: 100%
  top: 0
  img, svg
    position: absolute
    left: 0
    bottom: 0
    // bottom: env(safe-area-inset-bottom)
    width: 100%
    max-width: 100%
    height: auto
  // &.footerActive
  //   top: 0
  &.headerActive
    top: 100%
</style>
