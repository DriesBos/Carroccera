<template>
  <div
    v-editable="blok"
    class="blok blokText"
    :class="{ large: blok.size === 'large' }"
  >
    <div
      v-html="$mdRenderer.render(blok.content)"
      class="markdown"
      :class="{ large: blok.size === 'large' }"
    />
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

<style lang="sass" scoped>
.markdown
  p
    white-space: pre-line
</style>
