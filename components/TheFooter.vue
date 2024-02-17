<template>
  <footer class="footer">
    <img
      v-if="orientationState === 'landscape'"
      class="landscape"
      src="~/assets/img/footer_landscape.png"
      alt=""
    />
    <img
      v-if="orientationState === 'portrait'"
      class="portrait"
      src="~/assets/img/footer_portrait.png"
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
  width: 100%
  height: 50%
  height: auto
  img, svg
    width: 100%
    max-width: 100%
</style>
