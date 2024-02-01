<template>
  <div v-editable="blok" class="blokLayer">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <NuxtImg
      provider="storyblok"
      format="webp"
      quality="80"
      v-if="blok.background.filename"
      class="landscape"
      :src="blok.background.filename"
      alt=""
    />
    <NuxtImg
      provider="storyblok"
      format="webp"
      quality="80"
      v-if="blok.backgroundVertical.filename"
      class="portrait"
      :src="blok.backgroundVertical.filename"
      alt=""
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass" scoped>
.blokLayer
  position: relative
  width: 100vw
  height: auto
  overflow: visible
  pointer-events: none
  // border: 2px solid blue
  @media (orientation: landscape)
    margin-bottom: -38%
  @media (orientation: portrait)
    margin-bottom: -54%
  img
      width: 100%
      max-width: 100%
      // border: 2px solid red
      // opacity: 0.66
      // @media (orientation: landscape)
      //   // margin-top: -25%
      // @media (orientation: portrait)
      //   // margin-top: -32%
</style>
