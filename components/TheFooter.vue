<template>
  <footer class="footer">
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
    @media (orientation: landscape)
      margin-top: 0%
      // margin-bottom: -25%
    @media (orientation: portrait)
      margin-top: -4%
      // margin-bottom: -38%
  // &-Logo
  //   position: absolute
  //   left: 50%
  //   bottom: var(--spacing-ver)
  //   transform: translateX(-50%)
  //   width: 6rem
</style>
