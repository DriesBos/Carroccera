<template>
  <div v-html="resolvedRichText" class="markdown"></div>
  <h1>MARKDOWN {{ props }}</h1>
</template>

<script setup>
const props = defineProps({ content: String });

const resolvedRichText = computed(() => renderRichText(props.content));
</script>

<style lang="sass" scoped>
// Prefer style handling by cascading css (typography.sass) as much as possible.
.markdown
  p
    white-space: pre-line
</style>
