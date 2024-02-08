<template>
  <div
    v-for="item in projectList"
    class="menuItem header-Menu_ProjectList mouseInteract"
  >
    <p @click="scrollToProject(item.buildings[0].title)">
      {{ item.buildings[0].title }}
    </p>
    <p>{{ item.buildings[0].date }}</p>
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

  let reducedArray = arrayOfBuildings.map((building) => {
    return { date: building.date, title: building.title };
  });

  projectList.value = reducedArray;
  // let arrayOfLandscapes = content.value
  //   .filter((innerArray) => innerArray.body && innerArray.body.length > 0)
  //   .map((innerArray) => {
  //     return { landscapes: innerArray.body };
  //   });

  // let arrayOfBuildings = arrayOfLandscapes.map((innerArray) => {
  //   return { buildings: innerArray.landscapes };
  // });

  // let arrayOfBuildings = arrayOfLandscapes.reduce((acc, innerArray) => {
  //   return acc.concat(innerArray.buildings);
  // }, []);

  // let newArray = [].concat(...arrayOfBuildings);

  // let arrayOfBuildings = arrayOfLandscapes.reduce((acc, innerArray) => {
  //   return acc.concat(innerArray.landscapes);
  // });

  // projectList.value = arrayOfBuildings;

  // console.log('Landscapes', arrayOfLandscapes);
  // console.log('Buildings', arrayOfBuildings);
  // console.log('new array', newArray);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
    }
  });
});
</script>

<style scoped></style>
