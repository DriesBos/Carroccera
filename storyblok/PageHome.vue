<template>
  <div v-editable="blok" id="top" class="page page-Home">
    <div class="layerOne">
      <Sky />
      <Celestials @headerEmit="headerToggle" :headerState="headerState" />
      <TheMenu
        @contactEmit="contactToggle"
        @headerEmit="headerToggle"
        @projectsEmit="projectsToggle"
        @backgroundEmit="backgroundClick"
        @closeAllEmit="allClose"
        :headerState="headerState"
        :projectsState="projectsState"
        :contactState="contactState"
      />
    </div>
    <div class="layerTwo theLandscape">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <TheFooter class="layerThree" />
    <div class="layerFour">
      <TheHeader
        @contactEmit="contactToggle"
        @headerEmit="headerToggle"
        @projectsEmit="projectsToggle"
        @closeAllEmit="allClose"
        :headerState="headerState"
        :projectsState="projectsState"
        :contactState="contactState"
      />
      <ToTop />
      <TheFooterLanding :headerState="headerState" />
      <!-- <TheLogo /> -->
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page-Home
  position: relative

.theLandscape
  position: relative
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start
  & > .blokLayer
    will-change: transform
</style>

<script setup>
import { ref, watch, onMounted, onBeforeMount } from 'vue';
import gsap from 'gsap';

defineProps({ blok: Object });

const headerState = ref(false);
const projectsState = ref(false);
const contactState = ref(false);

function headerToggle() {
  headerState.value = !headerState.value;
  if (headerState.value) {
    gsap.to(window, { duration: 0.5, scrollTo: 0, ease: 'power4.out' });
  }
}

function projectsToggle() {
  projectsState.value = !projectsState.value;
}

function contactToggle() {
  contactState.value = !contactState.value;
}

function backgroundClick() {
  if (projectsState.value) {
    projectsState.value = false;
  } else if (contactState.value) {
    contactState.value = false;
  } else {
    headerState.value = false;
  }
}

function allClose() {
  headerState.value = false;
  projectsState.value = false;
  contactState.value = false;
}

function preventTouchMove(e) {
  e.preventDefault();
}

function disableScroll() {
  document.documentElement.style.overflow = 'hidden';

  const page = document.querySelector('.page');
  page.addEventListener('touchmove', preventTouchMove, { passive: false });
}

function enableScroll() {
  document.documentElement.style.overflow = 'auto';

  const page = document.querySelector('.page');
  page.removeEventListener('touchmove', preventTouchMove, {
    passive: false,
  });
}

watch(headerState, (newVal) => {
  if (newVal) {
    disableScroll();
  } else {
    enableScroll();
  }
});

onBeforeMount(() => {
  window.scrollTo(0, 0);
});

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headerState.value = false;
    }
  });

  const layers = document.querySelectorAll('.blokLayer');
  const array = Array.from(layers);
  const layersArray = array.slice(1);

  array.forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: '0',
      },
      {
        y: '-25%',
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'top 0%',
          scrub: true,
        },
      }
    );
  });
});
</script>
