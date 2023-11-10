<template>
  <main>
    <!-- <TheHeader /> -->
    <div class="cursor-outline"></div>
    <div class="cursor-dot"></div>
    <slot />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

gsap.set('.cursor-dot', { scale: 0.1 });
gsap.set('.cursor-outline', { scale: 0.5 });

let xCTo = gsap.quickTo('.cursor-outline', 'left', {
  duration: 0.2,
  ease: 'power3',
});
let yCTo = gsap.quickTo('.cursor-outline', 'top', {
  duration: 0.2,
  ease: 'power3',
});

let xDTo = gsap.quickTo('.cursor-dot', 'left', {
  duration: 0.6,
  ease: 'power3',
});
let yDTo = gsap.quickTo('.cursor-dot', 'top', {
  duration: 0.6,
  ease: 'power3',
});

let isVisible = false;

function mouseMove(e) {
  if (!isVisible) {
    gsap.set('.cursor-outline, .cursor-dot', { opacity: 1 });
    isVisible = true;
  }

  const cursorPosition = {
    left: e.clientX,
    top: e.clientY,
  };

  xCTo(cursorPosition.left);
  yCTo(cursorPosition.top);
  xDTo(cursorPosition.left);
  yDTo(cursorPosition.top);
}

let scaleAnim = gsap.timeline({ paused: true });

scaleAnim
  .to('.cursor-outline', {
    scale: 1,
  })
  .to(
    '.cursor-dot',
    {
      scale: 1,
      duration: 0.35,
    },
    0
  );

onMounted(() => {
  document.addEventListener('mousemove', mouseMove);
});
</script>

<style scoped lang="sass">
.cursor-outline, .cursor-dot
  opacity: 0

.cursor-outline
  border-radius: 50px
  position: absolute
  width: 80px
  height: 80px
  border: solid 1px #fff
  mix-blend-mode: difference
  pointer-events: none

/* Visible when running fancy.js */
.cursor-dot
  mix-blend-mode: difference
  border-radius: 50px
  position: absolute
    width: 80px
  height: 80px
  background-color: white
  border: solid 1px #fff
  pointer-events: none
</style>
