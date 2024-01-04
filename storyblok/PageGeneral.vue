<template>
  <div v-editable="blok" id="top" class="page page-General mouseInvert">
    <Mouse />
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <TheHeader />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass" scoped>
.page
  &-General
    position: relative
    background: green
    min-height: 100vh
</style>
