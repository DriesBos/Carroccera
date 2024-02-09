<template>
  <footer class="footer">
    <NuxtImg
      v-if="orientationState === 'landscape'"
      class="landscape"
      src="/Footer_Landscape.png"
      alt=""
      quality="80"
      loading="lazy"
    />
    <NuxtImg
      v-if="orientationState === 'portrait'"
      class="portrait"
      src="/Footer_Portrait.png"
      alt=""
      quality="80"
      loading="lazy"
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
