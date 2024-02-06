<template>
  <div v-editable="blok" id="top" class="page page-Home">
    <!-- <Mouse /> -->
    <div class="layerOne">
      <Sky />
      <Celestials
        @headerEmit="headerToggle"
        :headerState="headerState"
        :orientationState="orientationState"
      />
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
    <TheClouds
      :headerState="headerState"
      :orientationState="orientationState"
    />
    <lazyTheFooter class="layerThree" :orientationState="orientationState" />
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
      <TheFooterLanding
        :headerState="headerState"
        :orientationState="orientationState"
      />
      <!-- <TheLogo /> -->
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
  display: flex
  flex-direction: column
  justify-content: flex-start
</style>

<script setup>
import {
  ref,
  watch,
  onMounted,
  onBeforeMount,
  defineAsyncComponent,
} from 'vue';
import gsap from 'gsap';

defineProps({ blok: Object });

const lazyTheFooter = defineAsyncComponent(
  () => import('@/components/TheFooter.vue')
);

const headerState = ref(false);
const projectsState = ref(false);
const contactState = ref(false);
const orientationState = ref('landscape');

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

function setOrientationState() {
  if (window.innerHeight > window.innerWidth) {
    orientationState.value = 'portrait';
  } else {
    orientationState.value = 'landscape';
  }
}

watch(headerState, (newVal) => {
  if (newVal) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
});

onBeforeMount(() => {
  window.scrollTo(0, 0);
  setOrientationState();
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
