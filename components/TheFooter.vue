<template>
  <footer class="footer">
    <NuxtImg
      v-if="orientationState === 'landscape'"
      class="landscape"
      src="/f/264497/1920x886/fc2e3b453e/footer_landscape.png"
      alt=""
      provider="storyblok"
      quality="80"
    />
    <NuxtImg
      v-if="orientationState === 'portrait'"
      class="portrait"
      src="/f/264497/1281x1644/cd709a0beb/footer_portrait.png"
      alt=""
      provider="storyblok"
      quality="80"
    />
  </footer>
</template>

<script setup>
defineProps({
  orientationState: String,
});
</script>

<style scoped lang="sass">
.footer
  position: relative
  width: 100vw
  height: 50%
  height: auto
  img, svg
    width: 100%
    max-width: 100%
</style>
