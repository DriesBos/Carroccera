<template>
  <footer>
    <FooterImage />
  </footer>
</template>

<style scoped lang="sass">
footer
  position: absolute
  bottom: 0
  width: 100vw
  z-index: +1
  img, svg
    width: 100%
    max-width: 100%
    height: auto
</style>

<script setup>
import FooterImage from '../assets/img/svgfooter.svg?component';
</script>
