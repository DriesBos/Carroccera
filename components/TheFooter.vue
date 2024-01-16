<template>
  <footer class="footer">
    <div class="footer-Logo">
      <img src="~assets/img/logo.png" alt="" />
    </div>
    <img class="landscape" src="~assets/img/Footer_Landscape.png" alt="" />
    <img class="portrait" src="~assets/img/Footer_Portrait.png" alt="" />
    <!-- <TheFooterNav /> -->
  </footer>
</template>

<style scoped lang="sass">
.footer
  position: relative
  width: 100vw
  height: 100%
  img, svg
    width: 100%
    max-width: 100%
    @media (orientation: landscape)
      margin-top: -11%
    @media (orientation: portrait)
      margin-top: -20%
  &-Logo
    position: absolute
    left: 50%
    bottom: var(--spacing-ver)
    transform: translateX(-50%)
    width: 4rem
    img, svg
      margin-top: 0
</style>
