<template>
  <div v-editable="blok" class="blok blokText">
    <div v-html="$mdRenderer.render(blok.content)" class="markdown" />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';

const props = defineProps({ blok: Object });
onBeforeMount(() => {
  !['content'].every((propName) => props.blok.hasOwnProperty(propName))
    ? console.error(`RichText.vue has not pass the blok property validation`)
    : null;
});
</script>

<style lang="sass">
.blokText
  width: 100%
  h1, h2
    margin-bottom: 1rem
</style>
