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

const { gsap, contextSafe, ScrollTrigger } = useGsap();
const { setLock } = useGlobalScrollLock();

defineProps({
  headerState: Boolean,
});

// Template refs
const scrollDownRef = ref(null);
const iconRef = ref(null);

const scrollToProject = contextSafe(() => {
  // Lock scrolling during animation
  setLock('scrollDown', true);

  // Target external element via selector (not in this component's template)
  const scrollTo = document.querySelector('.theLandscape');
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: scrollTo, offsetY: 0 * innerHeight },
    ease: 'power4.out',
  });

  // Unlock after 2000ms (matching animation duration)
  setTimeout(() => {
    setLock('scrollDown', false);
  }, 2000);
});

onMounted(() => {
  if (!scrollDownRef.value || !iconRef.value) return;

  gsap.to(scrollDownRef.value, {
    opacity: 0,
    scrollTrigger: {
      trigger: scrollDownRef.value,
      scrub: true,
      invalidateOnRefresh: true,
      refreshPriority: 1,
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

  if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
    setTimeout(() => ScrollTrigger.refresh(), 50);
  }

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
  bottom: env(safe-area-inset-bottom)
  right: 0
  padding: var(--spacing-ver) var(--spacing-hor)
  padding-left: calc(2*#{var(--spacing-hor)})
  padding-top: calc(2*#{var(--spacing-ver)})
  display: flex
  flex-direction: column
  justify-content: flex-end
  gap: 1rem
  z-index: 901
  pointer-events: none
  will-change: opacity
  @media (max-width: 768px)
    gap: .5rem
  &.headerActive
    opacity: 0 !important
  .icon-ScrollDown
    pointer-events: all
    cursor: pointer
    opacity: 1
    will-change: opacity
    img
      width: 1rem
      height: 2rem
</style>
