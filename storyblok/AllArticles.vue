<template>
  <h2>
    {{ blok.headline }}
  </h2>
  <div class="articles">
    <ArticleCard
      v-for="article in articles"
      :key="article.uuid"
      :article="article.content"
      :slug="article.full_slug"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const articles = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'blog',
  is_startpage: false,
});
articles.value = data.stories;
</script>
