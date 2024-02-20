<template>
  <div v-if="loading" class="loading">
    <div class="loading-Indicator">
      <div class="loading-Indicator_Fill" />
    </div>
  </div>
  <NuxtPage />
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook('page:start', () => {
  loading.value = true;
});
nuxtApp.hook('page:loading:start', () => {
  loading.value = true;
});
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});

nuxtApp.hook('page:loading:end', () => {
  loading.value = false;
});
</script>

<style lang="sass" scoped>
.loading
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: linear-gradient(180deg, rgba(69,80,81,1) 0%, rgba(197,199,199,1) 100%)
  display: flex
  justify-content: center
  align-items: center
  font-size: 1rem
  z-index: 999
  color: white
  padding: 1rem
  &-Indicator
    position: relative
    height: .5rem
    width: 10rem
    max-width: calc(100% - 2rem)
    border: 1px solid white
    border-radius: 1000px
    overflow: hidden
    &_Fill
      position: absolute
      top: 0
      left: 0
      bottom: 0
      width: 0%
      animation: widthAnimation 2s ease-in-out forwards
      background: white

@keyframes widthAnimation
  0%
    width: 0%
  100%
    width: 100%
</style>
