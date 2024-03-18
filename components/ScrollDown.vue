<template>
  <!-- <div class="scrollDown" :class="{ headerActive: headerState }">
    <div class="icon icon-ArrowDown">
      <img src="~assets/icons/iconblok-down.png" alt="" />
    </div>
    <div class="icon icon-ArrowDown">
      <img src="~assets/icons/iconblok-down.png" alt="" />
    </div>
    <div class="icon icon-ArrowDown">
      <img src="~assets/icons/iconblok-down.png" alt="" />
    </div>
  </div> -->
  <div class="scrollDown" :class="{ headerActive: headerState }">
    <div class="icon-ScrollDown">
      <img src="~assets/icons/iconblok-blockydown.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

defineProps({
  headerState: Boolean,
});

onMounted(() => {
  const scrollDown = document.querySelector('.scrollDown');
  const icon = document.querySelector('.icon-ScrollDown');

  gsap.to(scrollDown, {
    opacity: 0,
    scrollTrigger: {
      trigger: scrollDown,
      scrub: true,
      start: 'top top',
      end: 'bottom center',
    },
    ease: 'none',
  });

  gsap.to(icon, {
    y: '-50%',
    ease: 'power2.out',
    duration: 0.25,
    delay: 1,
    repeatDelay: 2,
    repeat: -1,
  });

  gsap.to(icon, {
    y: 0,
    ease: 'bounce',
    duration: 0.5,
    delay: 1.25,
    repeatDelay: 1.75,
    repeat: -1,
  });
});
</script>

<style scoped lang="sass">
.scrollDown
  position: fixed
  top: 0
  left: 50%
  transform: translateX(-50%)
  height: 100dvh
  display: flex
  flex-direction: column
  justify-content: flex-end
  gap: 0.66rem
  z-index: 901
  padding-bottom: .5rem
  pointer-events: none
  will-change: opacity
  &.headerActive
    opacity: 0 !important
  .icon-ScrollDown
    opacity: 1
    will-change: opacity
    img
      width: 1rem
      height: 2rem
</style>
