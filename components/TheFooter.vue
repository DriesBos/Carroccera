<template>
  <footer class="footer">
    <img class="landscape" src="/img/footer_landscape.png" alt="" />
    <img class="portrait" src="/img/footer_portrait.png" alt="" />
  </footer>
</template>

<style scoped lang="sass">
.footer
  position: relative
  width: 100%
  height: auto
  @media (orientation: landscape)
    margin-top: 10%
  @media (orientation: portrait)
    margin-top: -6%
  img, svg
    width: 100%
    max-width: 100%
</style>
