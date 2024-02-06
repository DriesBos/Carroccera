<template>
  <footer class="footer">
    <img
      v-if="orientationState === 'landscape'"
      class="landscape"
      src="~assets/img/Footer_Landscape.png"
      alt=""
    />
    <img
      v-if="orientationState === 'portrait'"
      class="portrait"
      src="~assets/img/Footer_Portrait.png"
      alt=""
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
