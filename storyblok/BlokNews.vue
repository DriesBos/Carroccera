<template>
  <div v-editable="blok" class="blok-news">
    <NuxtLink v-if="isInternal" :to="href" class="blok-news__link">{{
      text
    }}</NuxtLink>
    <a
      v-else
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      class="blok-news__link"
      >{{ text }}</a
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object }) as { blok: any };

const blok = props.blok || {};

const text = blok.text || blok.title || 'Read more';

let href = '#';
let isInternal = false;

if (blok.link) {
  const link = blok.link;
  if (typeof link === 'string') {
    href = link;
    isInternal = href.startsWith('/');
  } else if (link.cached_url) {
    href = link.cached_url;
    isInternal = href.startsWith('/');
  } else if (link.url) {
    href = link.url;
    isInternal = href.startsWith('/');
  } else if (link.linktype === 'story' && link.story && link.story.full_slug) {
    href = '/' + link.story.full_slug;
    isInternal = true;
  }
}
</script>

<style scoped>
.blok-news {
  display: inline-block;
}
.blok-news__link {
  color: inherit;
  text-decoration: underline;
}
</style>
