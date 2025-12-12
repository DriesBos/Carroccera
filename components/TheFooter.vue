<template>
  <footer class="footer">
    <template v-if="footerImage == 0">
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x859/b6a889b155/footer_landscape.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/15f2e26f40/footer_portrait.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 1">
      <!-- DONE -->
      <NuxtImg
        class="landscape footer-Image"
        src="https://a.storyblok.com/f/264497/1920x976/05a5af9602/240404_footers-desktop-2-min.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait footer-Image"
        src="https://a.storyblok.com/f/264497/1281x1543/2f4ec7b458/240404_footers-phone-2-min.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 2">
      <!-- DONE -->
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/f4cdcafc15/footer-d-03.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/7d0e02631b/footer-p-03.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 3">
      <!-- DONE -->
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/9b83cda584/footer-d-04.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/c3bfe9ee79/footer-p-04.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 4">
      <!-- DONE -->
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/f66b9dc0d6/footer-d-05.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)" />
      <!-- DONE -->
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/fde3bb9142/footer-p-05.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
    /></template>
    <template v-if="footerImage == 5">
      <!-- DONE -->
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/69c39cc25c/footer-d-06.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/59b4b088ef/footer-p-06.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
    <template v-if="footerImage == 6">
      <!-- DONE -->
      <NuxtImg
        class="landscape footer-Image"
        src="/f/264497/1920x976/1bc51c00b1/footer-d-07.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:1280px sm:1366px md:1440px lg:1536px xl:1920px"
        @load="emit('footerLoadedEmit', true)"
      />
      <!-- DONE -->
      <NuxtImg
        class="portrait footer-Image"
        src="/f/264497/1281x1543/482c09f4ea/footer-p-07.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="xsm:360px sm:390px md:768px lg:1024px xl:1280px"
        @load="emit('footerLoadedEmit', true)"
      />
    </template>
  </footer>
</template>

<script setup>
defineProps({ footerImage: Number });

const emit = defineEmits(['footerLoadedEmit']);
</script>

<style scoped lang="sass">
.footer
  position: relative
  width: 100%
  @media (hover: none)
    margin-top: 0
  img
    margin-top: -25vh
    width: 100%
    max-width: 100%
    filter: $drop-shadow
    @media (hover: none)
      margin-top: -20%
</style>
