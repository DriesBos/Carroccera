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

const { gsap, contextSafe } = useGsap();

const emit = defineEmits(['projectsEmit', 'closeAllEmit']);

// Handle Escape key with proper cleanup
useEscapeKey(() => {
  emit('closeAllEmit', true);
});

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/home', {
  version: 'published',
  resolve_links: 'url',
});

const content = ref(null);
let projectList = ref(null);
content.value = data.story.content.body;

function preventTouchMove(e) {
  e.preventDefault();
}

const scrollToProject = contextSafe((el) => {
  emit('closeAllEmit', true);

  const project = document.getElementById(el.replace(/\s/g, ''));
  const page = document.querySelector('.page');

  // Temp disable touch during scroll animation
  page.addEventListener('touchmove', preventTouchMove, { passive: false });

  // Use requestAnimationFrame for smoother timing sync with browser render
  requestAnimationFrame(() => {
    gsap.to(window, {
      duration: 1.8,
      scrollTo: {
        y: project,
        offsetY: 0.5 * innerHeight,
        autoKill: false, // Prevent user scroll from interrupting
      },
      ease: 'power3.inOut',
      onComplete: () => {
        page.removeEventListener('touchmove', preventTouchMove, {
          passive: false,
        });
      },
    });
  });
});

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
});
</script>

<style scoped></style>
