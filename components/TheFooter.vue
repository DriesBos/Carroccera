<template>
  <footer class="footer">
    <template v-if="randomNumber === 1">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/121c5f4cdf/footer-d-01.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/2ae2293b9f/footer-p-01.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="randomNumber === 2">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/f4cdcafc15/footer-d-03.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/7d0e02631b/footer-p-03.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="randomNumber === 3">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/9b83cda584/footer-d-04.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/c3bfe9ee79/footer-p-04.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="randomNumber === 4">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/f66b9dc0d6/footer-d-05.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/fde3bb9142/footer-p-05.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="randomNumber === 5">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/69c39cc25c/footer-d-06.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/59b4b088ef/footer-p-06.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="randomNumber === 6">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/1bc51c00b1/footer-d-07.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/482c09f4ea/footer-p-07.png"
        alt=""
        provider="storyblok"
        quality="90"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
  </footer>
</template>

<script setup>
const emit = defineEmits(['footerLoadedEmit']);
const randomNumber = Math.floor(Math.random() * 6) + 1;
</script>

<style scoped lang="sass">
.footer
  position: relative
  width: 100%
  img
    width: 100%
    max-width: 100%
    margin-top: -10%
    @media (hover: hover)
      @media (orientation: portrait)
        margin-top: -25%
    @media (hover: none)
      margin-top: -10%
</style>
