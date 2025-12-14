<template>
  <div ref="pageRef" v-editable="blok" id="top" class="page page-Home">
    <div v-if="loading" class="loading">
      <div class="loading-Indicator">
        <div class="loading-Indicator_Fill" />
      </div>
    </div>
    <div class="layerOne">
      <Sky />
      <Celestials
        @headerEmit="headerToggle"
        @starsLoadedEmit="starsToggleLoaded"
        @cloudsLoadedEmit="cloudsToggleLoaded"
        @constellationLoadedEmit="constellationToggleLoaded"
        :headerState="headerState"
      />
      <TheFooterLanding
        @footerLandingLoadedEmit="footerLandingToggleLoaded"
        :headerState="headerState"
        :footerImage="randomNumber"
      />
      <ScrollDown :headerState="headerState" />
      <TheMenu
        @contactEmit="contactToggle"
        @mediaEmit="mediaToggle"
        @headerEmit="headerToggle"
        @projectsEmit="projectsToggle"
        @teamEmit="teamToggle"
        @backgroundEmit="backgroundClick"
        @closeAllEmit="allClose"
        :headerState="headerState"
        :projectsState="projectsState"
        :teamState="teamState"
        :mediaState="mediaState"
        :contactState="contactState"
      />
    </div>
    <div class="layerTwo theLandscape">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
        @imageLoaded="layerToggleLoaded"
      />
    </div>
    <TheFooter
      class="layerThree"
      @footerLoadedEmit="footerToggleLoaded"
      :footerImage="randomNumber"
    />
    <div class="layerFour">
      <TheHeader
        @contactEmit="contactToggle"
        @mediaEmit="mediaToggle"
        @headerEmit="headerToggle"
        @projectsEmit="projectsToggle"
        @teamEmit="teamToggle"
        @closeAllEmit="allClose"
        :headerState="headerState"
        :projectsState="projectsState"
        :teamState="teamState"
        :mediaState="mediaState"
        :contactState="contactState"
      />
      <ToTop />
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

.loading
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: linear-gradient(180deg, rgba(69,80,81,1) 0%, rgba(197,199,199,1) 100%)
  display: flex
  justify-content: center
  align-items: center
  font-size: 1rem
  z-index: 999
  color: white
  padding: 1rem
  &-Indicator
    position: relative
    height: 1rem
    width: 10rem
    max-width: calc(100% - 2rem)
    border: 2px solid white
    // border-radius: 1000px
    overflow: hidden
    &_Fill
      position: absolute
      top: 0
      left: 0
      bottom: 0
      width: 0%
      animation: widthAnimation 10s linear forwards
      background: white

@keyframes widthAnimation
  0%
    width: 0%
  20%
    width: 30%
  40%
    width: 60%
  60%
    width: 85%
  75%
    width: 90%
  100%
    width: 95%
</style>

<script setup>
import { ref, watch, onMounted, onBeforeMount, useTemplateRef } from 'vue';

const { gsap, contextSafe, ScrollTrigger } = useGsap();
const { setLock } = useGlobalScrollLock();

defineProps({ blok: Object });

// Template ref
const pageRef = ref(null);

const { requestRefresh, refreshNow } = useScrollRefresh();

// Loading
const nuxtApp = useNuxtApp();
const loading = ref(true);
const footerLandingIsLoaded = ref(false);
const footerIsLoaded = ref(false);
const pageIsLoaded = ref(false);
const starsIsLoaded = ref(false);
const cloudsIsLoaded = ref(false);
const constellationIsLoaded = ref(false);
const layerIsLoaded = ref(false);

// States
const headerState = ref(false);
const projectsState = ref(false);
const teamState = ref(false);
const contactState = ref(false);
const mediaState = ref(false);

// Image Number
const randomNumber = ref(null);

nuxtApp.hook('page:start', () => {
  loading.value = true;
});
nuxtApp.hook('page:loading:start', () => {
  loading.value = true;
});
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
  checkLoadingState();
});

nuxtApp.hook('page:loading:end', () => {
  pageIsLoaded.value = true;
  checkLoadingState();
});

function footerToggleLoaded() {
  footerIsLoaded.value = true;
  checkLoadingState();
  requestRefresh();
}

function footerLandingToggleLoaded() {
  footerLandingIsLoaded.value = true;
  checkLoadingState();
  requestRefresh();
}

function starsToggleLoaded() {
  starsIsLoaded.value = true;
  checkLoadingState();
  requestRefresh();
}

function cloudsToggleLoaded() {
  cloudsIsLoaded.value = true;
  checkLoadingState();
  requestRefresh();
}

function constellationToggleLoaded() {
  constellationIsLoaded.value = true;
  checkLoadingState();
  requestRefresh();
}

function layerToggleLoaded() {
  layerIsLoaded.value = true;
  checkLoadingState();
  requestRefresh();
}

// Helper to check if any overlay is active
function isAnyOverlayActive() {
  return (
    headerState.value ||
    projectsState.value ||
    teamState.value ||
    contactState.value ||
    mediaState.value
  );
}

function checkLoadingState() {
  if (
    pageIsLoaded.value &&
    starsIsLoaded.value &&
    cloudsIsLoaded.value &&
    constellationIsLoaded.value &&
    footerIsLoaded.value &&
    footerLandingIsLoaded.value &&
    layerIsLoaded.value
  ) {
    loading.value = false;
    setTimeout(() => {
      // Only unlock if no overlay is currently active
      if (!isAnyOverlayActive()) {
        setLock('loading', false);
      }
    }, 660);
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 7);
}

const headerToggle = contextSafe(() => {
  headerState.value = !headerState.value;
  if (headerState.value) {
    // Scroll lock is handled by the watcher
    gsap.to(window, {
      duration: 2,
      scrollTo: 0,
      ease: 'power4.out',
    });
  }
});

function projectsToggle() {
  projectsState.value = !projectsState.value;
}

function teamToggle() {
  teamState.value = !teamState.value;
}

function contactToggle() {
  contactState.value = !contactState.value;
}

function mediaToggle() {
  mediaState.value = !mediaState.value;
}

function backgroundClick() {
  if (projectsState.value) {
    projectsState.value = false;
  } else if (contactState.value) {
    contactState.value = false;
  } else if (mediaState.value) {
    mediaState.value = false;
  } else {
    headerState.value = false;
  }
}

function allClose() {
  headerState.value = false;
  projectsState.value = false;
  teamState.value = false;
  mediaState.value = false;
  contactState.value = false;
}

// Scroll lock is handled by useGlobalScrollLock composable
// Lock scrolling when any overlay/panel state is active
watch(
  [headerState, projectsState, teamState, contactState, mediaState],
  ([header, projects, team, contact, media]) => {
    setLock('overlay', header || projects || team || contact || media);
  },
  { immediate: true }
);

onBeforeMount(() => {
  window.scrollTo(0, 0);
});

// Handle Escape key with proper cleanup
useEscapeKey(() => {
  headerState.value = false;
});

onMounted(() => {
  window.scrollTo(0, 0);
  // keep scroll locked until initial load completes
  setLock('loading', true);
  randomNumber.value = getRandomNumber();

  const layers = document.querySelectorAll('.blokLayer');
  const array = Array.from(layers);
  const layersArray = array.slice(1);

  array.forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: '0vh',
      },
      {
        y: '-25vh',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'top 0%',
          scrub: true,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      }
    );
  });

  // Refresh ScrollTrigger now that layer triggers are created
  if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
    setTimeout(() => ScrollTrigger.refresh(), 50);
  }

  gsap.fromTo(
    '.landingInit',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: 'power1.inOut',
      duration: 0.66,
      stagger: {
        amount: 0.165,
      },
    }
  );

  gsap.fromTo(
    '.landingInitDown',
    {
      opacity: 0,
      y: '-10vh',
    },
    {
      opacity: 1,
      y: 0,
      ease: 'power1.inOut',
      duration: 0.33,
      stagger: {
        amount: 0.165,
      },
    }
  );

  gsap.fromTo(
    '.landingInitUp',
    {
      y: '100vh',
    },
    {
      y: 0,
      opacity: 1,
      ease: 'power1.inOut',
      duration: 0.66,
      stagger: {
        amount: 0.165,
      },
    }
  );
});
</script>
