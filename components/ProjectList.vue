<template>
  <div v-for="item in projectList" class="menuItem mouseInteract">
    <p @click="scrollToProject(item)">{{ item }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['closeAllEmit']);

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
  console.log('ProjectList — scrollToProject');
  const project = document.getElementById(el.replace(/\s/g, ''));
  const projectTop = project.getBoundingClientRect().top;
  window.scrollTo({
    top: projectTop,
    behavior: 'smooth',
  });
}

onMounted(() => {
  let arrayOfLandscapes = content.value
    .filter((innerArray) => innerArray.body && innerArray.body.length > 0)
    .map((innerArray) => {
      return { landscapes: innerArray.body };
    });
  // console.log('Array of Landscapes', arrayOfLandscapes);

  let arrayOfBuildings = arrayOfLandscapes.map((innerArray) => {
    return { buildings: innerArray.landscapes };
  });
  // console.log('Array of Buildings', arrayOfBuildings);

  let arrayOfTitles = arrayOfBuildings.map((innerArray) => {
    return innerArray.buildings[0].title;
  });
  // console.log('Array of titles', arrayOfTitles);
  projectList.value = arrayOfTitles;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
      console.log('ProjectList esc - closeAllEmit');
    }
  });
});
</script>
