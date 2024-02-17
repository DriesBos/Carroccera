<template>
  <div v-if="loading" class="loading">
    <div class="loading-Indicator">Loading...</div>
  </div>
  <NuxtPage />
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook('page:start', () => {
  loading.value = true;
  console.log('loading start');
});
nuxtApp.hook('page:finish', () => {
  loading.value = false;
  console.log('loading finish');
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
</style>
