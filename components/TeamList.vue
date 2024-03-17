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
import { ref, onMounted } from 'vue';

const emit = defineEmits(['teamEmit', 'closeAllEmit']);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/team', {
  version: 'draft',
  resolve_links: 'url',
});

const content = ref(null);
let teamList = ref(null);
content.value = data.story.content.teammembers;

onMounted(() => {
  console.log('teamList', data.story.content.teammembers);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
    }
  });
});
</script>

<style lang="sass" scoped>
.header-Menu_TeamList
  cursor: auto !important
</style>
