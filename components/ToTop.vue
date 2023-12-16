<template>
  <Button @click="scrollTop" class="button-ScrollUp scrollUp">
    <div class="icon icon-Vertical">
      <img src="~/assets/icons/arrow-long.png" alt="" />
    </div>
  </Button>
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
  gsap.set(scrollUp, {
    opacity: 0,
  });
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
