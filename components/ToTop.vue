<template>
  <div @click="scrollTop" class="scrollUp">
    <p>To Top</p>
    <div class="dot dot-Up" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

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
  mix-blend-mode: difference
  z-index: $z-scrollUp
  transition: $transition-general
  h1, p
    color: currentColor
    line-height: 1.2em
  @media (max-width: 768px)
    gap: .5rem
  & .dot-Up
    width: 1rem
    height: 2rem
    border-radius: 1000px
    background: white
    pointer-events: all
    cursor: pointer
    transition: all .33s ease
</style>
