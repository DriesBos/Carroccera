<template>
  <div v-editable="blok" id="top" class="page page-Home">
    <!-- <Mouse /> -->
    <div class="layerOne">
      <Celestials :headerState="headerActive" />
      <TheMenu
        @contactEmitActive="contactToggle"
        :headerState="headerActive"
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
    <TheClouds :headerState="headerActive" />
    <TheFooter class="layerThree" />
    <div class="layerFour">
      <TheHeader
        @headerActive="headerIsActive"
        @contactEmitInactive="contactToggle"
        :contactState="contactState"
      />
      <ToTop />
      <TheFooterLanding :headerState="headerActive" />
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
  & > div:first-child
    @media (orientation: landscape)
      margin-top: 23%
    @media (orientation: portrait)
      margin-top: 30%
</style>

<script setup>
import { ref, watch } from 'vue';
import gsap from 'gsap';

defineProps({ blok: Object });

const headerActive = ref(false);
const contactState = ref(false);

let ctx;

function headerIsActive() {
  headerActive.value = !headerActive.value;
}

function contactToggle() {
  contactState.value = !contactState.value;
}

watch(headerActive, (newVal) => {
  if (newVal) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
});

onMounted(() => {
  const layers = document.querySelectorAll('.blokLayer');
  const array = Array.from(layers);
  const layersArray = array.slice(1);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headerActive.value = false;
    }
  });

  layersArray.forEach((el) => {
    gsap.to(el, {
      y: '-5%',
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'top 75%',
        scrub: true,
      },
    });
  });
});
</script>
