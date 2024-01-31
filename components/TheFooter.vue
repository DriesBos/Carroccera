<template>
  <footer class="footer">
    <!-- <div class="footer-Logo">
      <img src="~assets/img/logo.png" alt="" />
    </div> -->
    <img class="landscape" src="~assets/img/Footer_Landscape.png" alt="" />
    <img class="portrait" src="~assets/img/Footer_Portrait.png" alt="" />
  </footer>
</template>

<style scoped lang="sass">
.footer
  position: relative
  width: 100vw
  height: 50%
  height: auto
  // border: 2px solid red
  img, svg
    width: 100%
    max-width: 100%
    overflow: visible
    // border: 2px solid blue
    // opacity: 0.5
    margin-bottom: -25%
    @media (orientation: landscape)
      margin-top: -13%
    @media (orientation: portrait)
      margin-top: -26%
  // &-Logo
  //   position: absolute
  //   left: 50%
  //   bottom: var(--spacing-ver)
  //   transform: translateX(-50%)
  //   width: 6rem
</style>
