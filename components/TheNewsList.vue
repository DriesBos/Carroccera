<template>
  <div class="mediaList-Container">
    <div
      v-for="(item, i) in newsList"
      :key="item._uid || item.title || i"
      class="menuItem header-Menu_MediaList mouseInteract"
    >
      <div v-if="item.link.cached_url" class="dot"></div>
      <div v-if="item.date" class="date">{{ formatDate(item.date) }}</div>
      <NuxtLink
        class="text"
        v-if="item.link && item.link.cached_url"
        :target="item.link.target"
        :to="item.link.cached_url"
        >{{ item.text }}</NuxtLink
      >
      <div v-else class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['mediaEmit', 'closeAllEmit']);

const newsList = ref([]);

try {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories/header', {
    version: 'draft',
    resolve_links: 'url',
  });

  const content = data?.story?.content;
  if (content && content.news && Array.isArray(content.news)) {
    newsList.value = content.news;
    console.log('newsList', newsList.value);
  } else {
    newsList.value = [];
    console.warn('No news items found in header content');
  }
  // eslint-disable-next-line no-console
  console.log('TheNewsList loaded', newsList.value.length);
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Failed to load news for TheNewsList', err);
  newsList.value = [];
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
    }
  });
});

/**
 * Format a date string to "01 MAY '25"
 */
function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  const day = String(date.getDate()).padStart(2, '0');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const mon = months[date.getMonth()];
  const year = String(date.getFullYear()).slice(-2);
  return `${day} ${mon} '${year}`;
}
</script>

<style lang="sass">
.mediaList-Container
  display: flex
  flex-direction: column
  gap: 2rem
  overflow-y: auto
  overflow-x: visible
  width: 100%
  max-width: 33rem
  padding: 10rem 2.75rem

  /* Hide scrollbars but preserve scrolling */
  -ms-overflow-style: none /* IE and Edge */
  scrollbar-width: none /* Firefox */

  &::-webkit-scrollbar
    display: none /* Chrome, Safari, Opera */
</style>
