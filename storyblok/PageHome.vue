<template>
  <div v-editable="blok" class="page-Home">
    <div class="cursor" :style="{ left: `${x}px`, top: `${y}px` }"></div>
    <Celestials />
    <div class="sky">
      <img src="~/assets/img/layer1.png" alt="" />
    </div>
    <div class="landscape">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useMouse } from '@vueuse/core';
import gsap from 'gsap';

defineProps({ blok: Object });

const { x, y } = useMouse();

console.log(x, y);

onMounted(() => {
  // Move the layers onScroll
  const layers = document.querySelectorAll('.blokLayer');
  layers.forEach((box) => {
    gsap.to(box, {
      y: '-6%',
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });
});
</script>

<style lang="sass" scoped>
.cursor
  position: absolute
  left: 0
  right: 0
  background: white
  width: 2rem
  height: 2rem
  z-index: 999
  border-radius: 50%
  transform: translate(-50%, -50%)
  pointer-events: none

.page-Home
  position: relative
  padding-bottom: 52.5vw
.landscape
  width:100vw
  display: flex
  flex-direction: column
  justify-content: flex-start
  z-index: -1
  & > div
    &:nth-child(2)
      margin-top: -10%
    &:nth-child(3)
      margin-top: -12%
    &:nth-child(4)
      margin-top: -15%
    &:nth-child(5)
      margin-top: -14%
    &:nth-child(6)
      margin-top: -16%
    &:nth-child(7)
      margin-top: -29%
    &:nth-child(8)
      margin-top: -30%

.sky
  position: relative
  width: 100vw
  height: 100vh
  img
      width: 100%
      max-width: 100%
      height: 100%
      object-fit: cover
</style>
