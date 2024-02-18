<template>
  <div v-editable="blok" class="blokLayer">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <div class="blokLayer-ImageContainer">
      <NuxtImg
        v-if="blok.background.filename"
        class="landscape"
        :src="blok.background.filename"
        alt=""
        provider="storyblok"
        quality="75"
      />
      <NuxtImg
        v-if="blok.backgroundVertical.filename"
        class="portrait"
        :src="blok.backgroundVertical.filename"
        alt=""
        provider="storyblok"
        quality="75"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass" scoped>
.blokLayer
  position: relative
  width: 100%
  pointer-events: none
  display: inline-block
  // border: 1px solid red
  @media (orientation: landscape)
    aspect-ratio: 16 / 9
  @media (orientation: portrait)
    aspect-ratio: 9 / 16
  &:nth-child(1)
    @media (orientation: landscape)
      aspect-ratio: 16 / 4.5
    @media (orientation: portrait)
      aspect-ratio: 9 / 8
  .blokLayer-ImageContainer
    position: absolute
    top: 0
    left: 0
    width: 100%
    // height: 0
    // @media (orientation: landscape)
    //   padding-top: calc(56.25% * 1.5)
    // @media (orientation: portrait)
    //   padding-top: calc(177.77% * 1.5)
    overflow: hidden
    // border: 1px solid blue
    @media (orientation: landscape)
      aspect-ratio: 16 / 14.4
    @media (orientation: portrait)
      aspect-ratio: 9 / 25.6
    &:nth-child(1)
      @media (orientation: landscape)
        aspect-ratio: 16 / 7.2
      @media (orientation: portrait)
        aspect-ratio: 9 / 12.8
    img
        position: absolute
        top: 0
        left: 0
        width: 100%
        // opacity: .5
</style>
