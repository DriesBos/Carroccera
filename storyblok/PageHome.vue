<template>
  <div v-editable="blok" id="top" class="page page-Home">
    <!-- <Mouse /> -->
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
    <TheClouds :headerState="headerState" />
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
      <TheLogo />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page-Home
  position: relative

.theLandscape
  position: relative
  width: 100vw
  height: 100%
  overflow: visible
  display: flex
  flex-direction: column
  justify-content: flex-start
  // & > div:first-child
  //   @media (orientation: landscape)
  //     margin-top: 23%
  //   @media (orientation: portrait)
  //     margin-top: 30%
</style>

<script setup>
import { ref, watch } from 'vue';
import gsap from 'gsap';

defineProps({ blok: Object });

const headerState = ref(false);
const projectsState = ref(false);
const contactState = ref(false);

// let ctx;

function headerToggle() {
  headerState.value = !headerState.value;
}

function projectsToggle() {
  projectsState.value = !projectsState.value;
}

function contactToggle() {
  contactState.value = !contactState.value;
}

function backgroundClick() {
  console.log('hit it');
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

watch(headerState, (newVal) => {
  if (newVal) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
});

onMounted(() => {
  const layers = document.querySelectorAll('.blokLayer');
  const array = Array.from(layers);
  // const layersArray = array.slice(1);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headerState.value = false;
    }
  });

  array.forEach((el) => {
    gsap.to(el, {
      y: '-25%',
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'top 50%',
        scrub: true,
      },
    });
  });

  // const footer = document.querySelectorAll('.footer');

  // gsap.to(footer, {
  //   y: '-25%',
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: footer,
  //     start: 'top bottom',
  //     end: 'top 50%',
  //     scrub: true,
  //   },
  // });
});

// onUnmounted(() => {
//   ctx.revert();
// });
</script>
