<template>
  <div
    ref="scrollDownRef"
    class="scrollDown"
    :class="{ headerActive: headerState }"
  >
    <div ref="iconRef" @click="scrollToProject()" class="icon-ScrollDown">
      <img src="~assets/icons/iconblok-blockydown.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { gsap, contextSafe } = useGsap();

defineProps({
  headerState: Boolean,
});

// Template refs
const scrollDownRef = ref<HTMLElement | null>(null);
const iconRef = ref<HTMLElement | null>(null);

const scrollToProject = contextSafe(() => {
  // Target external element via selector (not in this component's template)
  const scrollTo = document.querySelector('.theLandscape');
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: scrollTo, offsetY: 0 * innerHeight },
    ease: 'power4.out',
  });
});

onMounted(() => {
  if (!scrollDownRef.value || !iconRef.value) return;

  gsap.to(scrollDownRef.value, {
    opacity: 0,
    scrollTrigger: {
      trigger: scrollDownRef.value,
      scrub: true,
      start: 'top top',
      end: 'bottom center',
    },
    ease: 'none',
  });

  gsap.to(iconRef.value, {
    y: '-50%',
    ease: 'power2.out',
    duration: 0.25,
    delay: 1,
    repeatDelay: 2,
    repeat: -1,
  });

  gsap.to(iconRef.value, {
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
  // left: 50%
  right: 0
  // transform: translateX(-50%)
  height: 100dvh
  display: flex
  flex-direction: column
  justify-content: flex-end
  gap: 0.66rem
  z-index: 901
  pointer-events: none
  will-change: opacity
  &.headerActive
    opacity: 0 !important
  .icon-ScrollDown
    pointer-events: all
    cursor: pointer
    opacity: 1
    will-change: opacity
    padding: var(--spacing-ver) var(--spacing-hor)
    // padding-bottom: 0.25rem
    img
      width: 1rem
      height: 2rem
</style>
