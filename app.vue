<template>
  <NuxtPage />
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

useSeoMeta({
  title: 'Carroccera Collective',
  ogTitle: 'Carroccera Collective',
  description:
    'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
  ogDescription:
    'Carroccera explores the imposed boundaries between the human and the natural world, offers residency and rewilds neglected plots of land.',
  ogImage: 'https://a.storyblok.com/f/264497/1200x630/5ffdfc64d1/ogimage.png',
});
</script>
