<template>
  <footer class="footer">
    <NuxtImg
      class="landscape"
      src="/f/264497/1920x859/b6a889b155/footer_landscape.png"
      alt=""
      provider="storyblok"
      quality="75"
    />
    <NuxtImg
      class="portrait"
      src="/f/264497/1281x1543/15f2e26f40/footer_portrait.png"
      alt=""
      provider="storyblok"
      quality="75"
    />
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
