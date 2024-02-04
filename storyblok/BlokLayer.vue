<template>
  <div v-editable="blok" class="blokLayer">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <div class="blokLayer-ImageContainer">
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
    <!-- <div class="landscape test-Portrait"></div>
    <div class="portrait test-Portrait"></div> -->
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass" scoped>
.blokLayer
  position: relative
  width: 100vw
  pointer-events: none
  display: inline-block
  @media (orientation: landscape)
    aspect-ratio: 16 / 9
  @media (orientation: portrait)
    aspect-ratio: 9 / 16
  .blokLayer-ImageContainer
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 0
    @media (orientation: landscape)
      padding-top: calc(56.25% * 1.5)
    @media (orientation: portrait)
      padding-top: calc(177.77% * 1.5)
    img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        // opacity: .33
        // border: 1px solid red
        // opacity: 1
        // background: red
        // border: 2px solid yellow
        object-fit: cover
        object-position: center top
        // @media (orientation: landscape)
        //   border: 1px solid red
        //   padding-top: calc(56.25% * 1.33)
        // @media (orientation: portrait)
        //   border: 1px solid blue
        //   padding-top: calc(177.77% * 1.33)

  // Testing Blocks
  .test-Portrait
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 0
    &.landscape
      // aspect-ratio: 16 / 9
      background: hsla(5, 90%, 51%, .33)
      border: 1px solid red
      padding-top: 56.25% // 16/9
      padding-top: calc(56.25% * 1.33)
    &.portrait
      // aspect-ratio: 9 / 16
      background: hsla(241, 91%, 45%, .33)
      border: 1px solid blue
      padding-top: 177.77% // 9/16
      padding-top: calc(177.77% * 1.33)
</style>
