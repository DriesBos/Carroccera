<template>
  <div
    v-for="item in projectList"
    class="menuItem header-Menu_ProjectList mouseInteract"
  >
    <p @click="scrollToProject(item)">{{ item }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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

// let ctx;

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

  let arrayOfBuildings = arrayOfLandscapes.map((innerArray) => {
    return { buildings: innerArray.landscapes };
  });

  let arrayOfTitles = arrayOfBuildings.map((innerArray) => {
    return innerArray.buildings[0].title;
  });
  projectList.value = arrayOfTitles;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
    }
  });
});

// onUnmounted(() => {
//   ctx.revert();
// });
</script>

<style scoped></style>
