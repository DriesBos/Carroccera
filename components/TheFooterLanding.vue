<template>
  <div
    class="footerlanding landingInitUp"
    :class="{ headerActive: headerState }"
  >
    <NuxtImg
      class="landscape"
      src="/f/264497/1920x429/935b217ea7/landingfooter-landscape.png"
      alt=""
      provider="storyblok"
      quality="75"
      format="webp"
      @load="emit('footerLandingLoadedEmit', true)"
    />
    <NuxtImg
      class="portrait"
      src="/f/264497/1281x746/2b8ad13ebe/landingfooter-portrait.png"
      alt=""
      provider="storyblok"
      quality="75"
      format="webp"
      @load="emit('footerLandingLoadedEmit', true)"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

defineProps({
  headerState: Boolean,
});

const emit = defineEmits(['footerLandingLoadedEmit']);

onMounted(() => {
  const footerlanding = document.querySelector('.footerlanding');

  gsap.to(footerlanding, {
    y: '100%',
    scrollTrigger: {
      trigger: footerlanding,
      scrub: true,
      start: 'top top',
      end: 'bottom 0%',
    },
    ease: 'none',
  });
});
</script>

<style scoped lang="sass">
.footerlanding
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100vh
  transition: top .5s ease
  pointer-events: none
  z-index: 900
  will-change: transform
  top: 0
  opacity: 1
  img, svg
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    max-width: 100%
    height: auto
  // &.footerActive
  //   top: 0
  &.headerActive
    top: 100%
</style>
