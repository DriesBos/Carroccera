<template>
  <main>
    <!-- <TheHeader /> -->
    <!-- <div class="cursor" ref="cursor" />
    Mouse position is at: {{ x }}, {{ y }} -->
    <slot />
    <TheFooter />
  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMouse } from '../hooks/mouse';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { x, y } = useMouse();

function moveCursor(props) {
  gsap.to('.cursor', 0.1, {
    opacity: 1,
    left: props.clientX,
    top: props.clientY,
    ease: 'ease',
  });
}

onMounted(() => window.addEventListener('mousemove', moveCursor));
onUnmounted(() => window.removeEventListener('mousemove', moveCursor));
</script>
