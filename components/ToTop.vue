<template>
  <div @click="scrollTop" class="scrollUp mouseInteract">
    <div class="icon icon-ToTop">
      <img src="~assets/icons/arrow-totop.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

let ctx;

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

onUnmounted(() => {
  ctx.revert();
});
</script>

<style lang="sass">
.scrollUp
  position: fixed
  bottom: 0
  right: 0
  padding: var(--spacing-ver) var(--spacing-hor)
  display: flex
  align-items: flex-end
  gap: 1rem
  color: white
  // mix-blend-mode: difference
  transition: all $transition-general
</style>
