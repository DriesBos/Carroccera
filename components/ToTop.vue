<template>
  <div ref="scrollUpRef" @click="scrollTop" class="scrollUp mouseInteract">
    <p>Up</p>
    <div class="icon icon-ToTop">
      <img src="~assets/icons/iconblok-up.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { gsap, contextSafe, ScrollTrigger } = useGsap();
const { setLock } = useGlobalScrollLock();

// Template ref
const scrollUpRef = ref(null);

function preventTouchMove(e) {
  e.preventDefault();
}

const scrollTop = contextSafe(() => {
  // Lock scrolling during animation
  setLock('scrollTop', true);

  gsap.to(window, { duration: 2, scrollTo: 0, ease: 'power4.out' });

  // Temp disable touch
  const page = document.querySelector('.page');
  page.addEventListener('touchmove', preventTouchMove, { passive: false });

  // Unlock after 2500ms (matching touch disable duration)
  setTimeout(() => {
    page.removeEventListener('touchmove', preventTouchMove, {
      passive: false,
    });
    setLock('scrollTop', false);
  }, 2500);
});

onMounted(() => {
  if (!scrollUpRef.value) return;

  gsap.set(scrollUpRef.value, {
    opacity: 0,
    zIndex: 0,
  });
  gsap.to(scrollUpRef.value, {
    opacity: 1,
    zIndex: 999,
    scrollTrigger: {
      trigger: scrollUpRef.value,
      scrub: true,
      invalidateOnRefresh: true,
      refreshPriority: 1,
      start: 'top top',
      end: 'top top',
    },
    ease: 'none',
  });

  if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
    setTimeout(() => ScrollTrigger.refresh(), 50);
  }
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
  will-change: opacity, z-index
  @media (max-width: 768px)
    gap: .5rem
  p
    line-height: 1.15em
</style>
