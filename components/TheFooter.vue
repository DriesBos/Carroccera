<template>
  <footer class="footer">
    <NuxtImg
      class="landscape footer-Image"
      src="/f/264497/1920x859/b6a889b155/footer_landscape.png"
      alt=""
      provider="storyblok"
      quality="90"
      format="webp"
      sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
      @load="emit('footerLoadedEmit', true)"
    />
    <NuxtImg
      class="portrait footer-Image"
      src="/f/264497/1281x1543/15f2e26f40/footer_portrait.png"
      alt=""
      provider="storyblok"
      quality="90"
      format="webp"
      sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
      @load="emit('footerLoadedEmit', true)"
    />
  </footer>
</template>

<script setup>
const emit = defineEmits(['footerLoadedEmit']);
</script>

<style scoped lang="sass">
.footer
  position: relative
  width: 100%
  height: auto
  @media (orientation: landscape)
    margin-top: 10%
  @media (orientation: portrait)
    margin-top: -10%
  img, svg
    width: 100%
    max-width: 100%
</style>
