<template>
  <div class="clouds" :class="{ headerActive: headerState }">
    <img class="landscape" src="~/assets/img/Clouds_Landscape.png" alt="" />
    <img class="portrait" src="~/assets/img/Clouds_Portrait.png" alt="" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

defineProps({
  headerState: Boolean,
});

onMounted(() => {
  const trigger = document.querySelector('.page');
  const clouds = document.querySelector('.clouds');
  gsap.to(clouds, {
    y: '100%',
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
    },
  });
});
</script>

<style scoped lang="sass">
.clouds
  position: absolute
  top: 66vh
  left: 0
  width: 100vw
  height: 100vh
  height: 100lvh
  pointer-events: none
  overflow: visible
  opacity: 1
  transition: opacity .66s ease
  img
    width: 100%
    height: auto
    object-fit: cover
    object-position: center top
    overflow: visible
  &.headerActive
    opacity: 0
</style>
