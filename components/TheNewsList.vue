<template>
  <div class="mediaList-Container">
    <div
      v-for="(item, i) in newsList"
      :key="item._uid || item.title || i"
      class="menuItem header-Menu_MediaList"
    >
      <div v-if="item.link?.cached_url" class="dot"></div>
      <NuxtLink
        v-if="item.link?.cached_url && isInternalLink(item.link.cached_url)"
        class="text"
        :to="item.link.cached_url"
        >{{ item.text }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="12"
          height="12"
          viewBox="0 0 25 25"
        >
          <path
            fill="currentColor"
            d="M12 1v2H3v19h19v-9h2v11H1V1h11Zm12 7h-2V4.414L9.374 17.04 7.96 15.626 20.585 3H17V1h7v7Z"
          />
        </svg>
      </NuxtLink>
      <a
        v-else-if="item.link?.cached_url"
        class="text"
        :href="getExternalUrl(item.link.cached_url)"
        :target="item.link.target || '_blank'"
        rel="noopener noreferrer"
        >{{ item.text }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="12"
          height="12"
          viewBox="0 0 25 25"
        >
          <path
            fill="currentColor"
            d="M12 1v2H3v19h19v-9h2v11H1V1h11Zm12 7h-2V4.414L9.374 17.04 7.96 15.626 20.585 3H17V1h7v7Z"
          />
        </svg>
      </a>
      <div v-else class="text">{{ item.text }}</div>
      <div v-if="item.date" class="date">{{ formatDate(item.date) }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['mediaEmit', 'closeAllEmit']);

const newsList = ref([]);

// Handle Escape key with proper cleanup
useEscapeKey(() => {
  emit('closeAllEmit', true);
});

try {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories/header', {
    version: 'published',
    resolve_links: 'url',
  });

  const content = data?.story?.content;
  if (content && content.news && Array.isArray(content.news)) {
    newsList.value = content.news;
  } else {
    newsList.value = [];
    console.warn('No news items found in header content');
  }
  // eslint-disable-next-line no-console
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Failed to load news for TheNewsList', err);
  newsList.value = [];
}

/**
 * Check if a URL is internal (starts with /) or external
 */
function isInternalLink(url) {
  if (!url) return false;
  return url.startsWith('/');
}

/**
 * Get external URL with protocol if missing
 * Handles URLs like "www.archdaily.com" -> "https://www.archdaily.com"
 */
function getExternalUrl(url) {
  if (!url) return '#';

  // If it already has a protocol, return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If it starts with //, add https:
  if (url.startsWith('//')) {
    return 'https:' + url;
  }

  // Otherwise, add https://
  return 'https://' + url;
}

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
  gap: 2.5rem
  overflow-y: auto
  overflow-x: visible
  width: 100%
  max-width: $breakpoint-mobile
  padding: 10rem 2.75rem
  @media screen and (max-width: $breakpoint-mobile)
    padding: 10rem 0
    max-width: calc(100% - 1rem)
    gap: 2rem

  /* Hide scrollbars but preserve scrolling */
  -ms-overflow-style: none /* IE and Edge */
  scrollbar-width: none /* Firefox */

  &::-webkit-scrollbar
    display: none /* Chrome, Safari, Opera */
</style>
