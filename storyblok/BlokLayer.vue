<template>
  <div v-editable="blok" class="blokLayer">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <img
      v-if="blok.background.filename"
      class="landscape"
      :src="blok.background.filename"
      alt=""
    />
    <img
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
  overflow-x: hidden
  pointer-events: none
  img
      width: 100%
      max-width: 100%
      height: auto
</style>
