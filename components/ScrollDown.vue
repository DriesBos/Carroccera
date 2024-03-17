<template>
  <div class="scrollDown" :class="{ headerActive: headerState }">
    <div class="icon icon-ArrowDown">
      <img src="~assets/icons/iconblok-down.png" alt="" />
    </div>
    <div class="icon icon-ArrowDown">
      <img src="~assets/icons/iconblok-down.png" alt="" />
    </div>
    <div class="icon icon-ArrowDown">
      <img src="~assets/icons/iconblok-down.png" alt="" />
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

  gsap.to('.icon-ArrowDown', {
    opacity: 1,
    ease: 'power1.inOut',
    duration: 0.33,
    delay: 0,
    repeatDelay: 1.5,
    repeat: -1,
    stagger: {
      amount: 0.5,
    },
  });

  gsap.to('.icon-ArrowDown', {
    opacity: 0,
    ease: 'power1.inOut',
    duration: 0.33,
    delay: 1.5,
    repeatDelay: 1.5,
    repeat: -1,
    stagger: {
      amount: 0.5,
    },
  });
});
</script>

<style scoped lang="sass">
.scrollDown
  position: fixed
  top: 0
  left: 50%
  transform: translateX(-50%)
  height: 100svh
  display: flex
  flex-direction: column
  justify-content: flex-end
  gap: 0.66rem
  z-index: 999
  padding-bottom: .5rem
  &.headerActive
    opacity: 0 !important
  .icon
    opacity: 0
    &:first-child
      opacity: 0 !important
    &:nth-child(2)
      @media (hover: none)
        opacity: 0 !important
</style>
