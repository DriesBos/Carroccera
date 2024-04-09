<template>
  <div @click="scrollTop" class="scrollUp mouseInteract">
    <p>Up</p>
    <div class="icon icon-ToTop">
      <img src="~assets/icons/iconblok-up.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

function preventTouchMove(e) {
  e.preventDefault();
}

function scrollTop() {
  gsap.to(window, { duration: 2, scrollTo: 0, ease: 'power4.out' });
  // Temp disable touch
  const page = document.querySelector('.page');
  page.addEventListener('touchmove', preventTouchMove, { passive: false });
  setTimeout(() => {
    page.removeEventListener('touchmove', preventTouchMove, {
      passive: false,
    });
  }, 2500);
}

onMounted(() => {
  const scrollUp = document.querySelector('.scrollUp');
  gsap.set(scrollUp, {
    opacity: 0,
    zIndex: 0,
  });
  gsap.to(scrollUp, {
    opacity: 1,
    zIndex: 999,
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
  bottom: env(safe-area-inset-bottom)
  right: 0
  padding: var(--spacing-ver) var(--spacing-hor)
  padding-left: calc(2*#{var(--spacing-hor)})
  padding-top: calc(2*#{var(--spacing-ver)})
  display: flex
  align-items: flex-end
  gap: 1rem
  color: white
  opacity: 0
  transition: opacity $transition-general
  text-transform: uppercase
  @media (max-width: 768px)
    gap: .5rem
  p
    line-height: 1.15em
</style>
