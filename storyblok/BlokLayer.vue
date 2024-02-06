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
        quality="75"
        v-if="blok.background.filename"
        class="landscape"
        :src="blok.background.filename"
        alt=""
      />
      <NuxtImg
        provider="storyblok"
        format="webp"
        quality="75"
        v-if="blok.backgroundVertical.filename"
        class="portrait"
        :src="blok.backgroundVertical.filename"
        alt=""
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
        object-fit: cover
        object-position: center top
</style>
