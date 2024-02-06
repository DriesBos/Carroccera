<template>
  <div :class="{ headerActive: headerState }" class="celestials-Clouds clouds">
    <img class="landscape" src="~/assets/img/Clouds_Landscape.png" alt="" />
    <img class="portrait" src="~/assets/img/Clouds_Portrait.png" alt="" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

defineProps({
  headerState: Boolean,
});

onMounted(() => {
  const trigger = document.querySelector('.page');
  const clouds = document.querySelector('.clouds');
  const footer = document.querySelector('.footer');
  gsap.to(clouds, {
    y: '-400%',
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: 'top top',
      endTrigger: footer,
      end: 'bottom bottom',
    },
  });
});
</script>

<style scoped lang="sass">
.clouds
  position: fixed
  left: 0
  top: 50vh
  width: 100%
  height: auto
  opacity: .85
  transition: opacity .66s ease
  pointer-events: none
  img
    width: 100%
    height: auto
    object-fit: cover
    object-position: top
  &.headerActive
    opacity: 0
</style>
