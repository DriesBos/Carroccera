<template>
  <div @click="scrollTop" class="scrollUp mouseInteract">
    <p>To Top</p>
    <div class="dot dot-Up" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

function scrollTop() {
  gsap.to(window, { duration: 0.66, scrollTo: 0, ease: 'power4.out' });
}

onMounted(() => {
  const scrollUp = document.querySelector('.scrollUp');
  gsap.set(scrollUp, {
    opacity: 0,
  });
  gsap.to(scrollUp, {
    opacity: 1,
    scrollTrigger: {
      trigger: scrollUp,
      scrub: true,
      start: 'top top',
      end: 'top top',
    },
    ease: 'none',
  });
});
</script>

<style lang="sass">
.scrollUp
  position: fixed
  bottom: var(--spacing-ver)
  right: var(--spacing-hor)
  display: flex
  align-items: flex-end
  gap: 1rem
  color: white
  // mix-blend-mode: difference
  transition: all $transition-general
  h1, p
    color: currentColor
    line-height: 1
    @media (hover: hover)
      opacity: 0
      transition: opacity $transition-hover
  @media (max-width: 768px)
    gap: .5rem
  & .dot-Up
    width: 1rem
    height: 2rem
    border-radius: 1000px
    background: white
    pointer-events: all
    transition: all .33s ease
  &:hover
    p
      opacity: 1
</style>
