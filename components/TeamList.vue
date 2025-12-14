<template>
  <div
    v-for="item in content"
    class="menuItem header-Menu_TeamList mouseInteract"
  >
    <!-- <div class="dot" /> -->
    <p>
      {{ item.teammember }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['teamEmit', 'closeAllEmit']);

// Handle Escape key with proper cleanup
useEscapeKey(() => {
  emit('closeAllEmit', true);
});

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/team', {
  version: 'published',
  resolve_links: 'url',
});

const content = ref(null);
let teamList = ref(null);
content.value = data.story.content.teammembers;
</script>

<style lang="sass" scoped>
.header-Menu_TeamList
  cursor: auto !important
</style>
