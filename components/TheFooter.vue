<template>
  <footer class="footer">
    <NuxtImg
      class="landscape footer-Image"
      src="/f/264497/1920x859/b6a889b155/footer_landscape.png"
      alt=""
      provider="storyblok"
      quality="85"
      format="webp"
    />
    <NuxtImg
      class="portrait footer-Image"
      src="/f/264497/1281x1543/15f2e26f40/footer_portrait.png"
      alt=""
      provider="storyblok"
      quality="85"
      format="webp"
    />
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const footer = document.querySelector('.footer-Image');

  gsap.fromTo(
    footer,
    {
      y: '-25%',
    },
    {
      y: '0',
      scrollTrigger: {
        trigger: footer,
        scrub: true,
        start: 'top bottom',
        end: 'bottom bottom',
      },
      ease: 'none',
    }
  );
});
</script>

<style scoped lang="sass">
.footer
  position: relative
  width: 100%
  height: auto
  @media (orientation: landscape)
    margin-top: 10%
  @media (orientation: portrait)
    margin-top: -6%
  img, svg
    width: 100%
    max-width: 100%
</style>
