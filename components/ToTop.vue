<template>
  <div @click="scrollTop" class="scrollUp mouseInteract">
    <div class="icon icon-ToTop">
      <img src="~assets/icons/iconblok-up.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

let ctx;

function scrollTop() {
  gsap.to(window, { duration: 1.5, scrollTo: 0, ease: 'power4.out' });
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
  bottom: 0
  right: 0
  padding: var(--spacing-ver) var(--spacing-hor)
  padding-left: calc(2*#{var(--spacing-hor)})
  padding-top: calc(2*#{var(--spacing-ver)})
  display: flex
  align-items: flex-end
  gap: 1rem
  color: white
  opacity: 0
  transition: all $transition-general
</style>
