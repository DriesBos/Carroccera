<template>
  <footer class="footer">
    <img class="landscape" src="~assets/img/Footer_Landscape.png" alt="" />
    <img class="portrait" src="~assets/img/Footer_Portrait.png" alt="" />
    <!-- <TheFooterNav /> -->
  </footer>
</template>

<style scoped lang="sass">
footer
  position: relative
  width: 100vw
  height: 100%
  overflow: visible
  img, svg
    width: 100%
    max-width: 100%
    @media (orientation: landscape)
      margin-top: -10%
    @media (orientation: portrait)
      margin-top: -20%
</style>
