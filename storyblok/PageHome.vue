<template>
  <div v-editable="blok" id="top" class="page page-Home">
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
      />
      <ScrollDown :headerState="headerState" />
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
        @imageLoaded="layerToggleLoaded"
      />
    </div>
    <TheFooter class="layerThree" @footerLoadedEmit="footerToggleLoaded" />
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
    height: .5rem
    width: 10rem
    max-width: calc(100% - 2rem)
    border: 1px solid white
    border-radius: 1000px
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
import { ref, watch, onMounted, onBeforeMount } from 'vue';
import gsap from 'gsap';

defineProps({ blok: Object });

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
const contactState = ref(false);

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
}

function footerLandingToggleLoaded() {
  footerLandingIsLoaded.value = true;
  checkLoadingState();
}

function starsToggleLoaded() {
  starsIsLoaded.value = true;
  checkLoadingState();
}

function cloudsToggleLoaded() {
  cloudsIsLoaded.value = true;
  checkLoadingState();
}

function constellationToggleLoaded() {
  constellationIsLoaded.value = true;
  checkLoadingState();
}

function layerToggleLoaded() {
  layerIsLoaded.value = true;
  checkLoadingState();
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
  }
}

function headerToggle() {
  headerState.value = !headerState.value;
  if (headerState.value) {
    gsap.to(window, { duration: 1, scrollTo: 0, ease: 'sine.out' });
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
  window.scrollTo(0, 0);
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
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'top 0%',
          scrub: true,
        },
      }
    );
  });

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
      y: '-10%',
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
      y: '100%',
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
