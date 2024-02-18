<template>
  <div
    v-for="item in projectList"
    @click="scrollToProject(item.title)"
    class="menuItem header-Menu_ProjectList mouseInteract"
  >
    <div class="dot" />
    <p>
      {{ item.title }}
    </p>
    <p>{{ item.date }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['projectsEmit', 'closeAllEmit']);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/home', {
  version: 'draft',
  resolve_links: 'url',
});

const content = ref(null);
let projectList = ref(null);
content.value = data.story.content.body;

function scrollToProject(el) {
  emit('closeAllEmit', true);
  const project = document.getElementById(el.replace(/\s/g, ''));
  gsap.to(window, {
    duration: 0.66,
    scrollTo: { y: project, offsetY: 0.5 * innerHeight },
    ease: 'power4.out',
  });
}

onMounted(() => {
  let arrayOfLandscapes = content.value
    .filter((innerArray) => innerArray.body && innerArray.body.length > 0)
    .map((innerArray) => {
      return { landscapes: innerArray.body };
    });

  let arrayOfBuildings = arrayOfLandscapes.reduce((acc, innerArray) => {
    return acc.concat(innerArray.landscapes);
  }, []);

  projectList.value = arrayOfBuildings;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
    }
  });
});
</script>

<style scoped></style>
