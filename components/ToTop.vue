<template>
  <div @click="scrollTop" class="scrollUp mouseInteract">
    <img src="~/assets/icons/arrow-long.png" alt="" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  const scrollUp = document.querySelector('.scrollUp');
  gsap.to(scrollUp, {
    opacity: 1,
    scrollTrigger: {
      trigger: scrollUp,
      scrub: true,
      start: 'top top',
      end: 'top top',
    },
    ease: 'none',
  });
});
</script>

<style lang="sass" scoped>
.scrollUp
  position: fixed
  bottom: 0
  right: 0
  padding: 5rem
  z-index: 100
  cursor: pointer
  transform: translateY(0)
  transition: .33s ease-in-out
  color: white
  opacity: 0
  img
    width: 2.5rem
    height: auto
    object-fit: contain
  &:hover
    transform: translateY(-10px)
</style>
