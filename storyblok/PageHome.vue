<template>
  <div v-editable="blok" id="top" class="page page-Home">
    <!-- <Mouse /> -->
    <div class="layerOne">
      <Celestials :headerState="headerActive" />
      <TheMenu :headerState="headerActive" />
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
      <TheHeader @headerActive="headerIsActive" />
      <ToTop />
      <TheFooterLanding :headerState="headerActive" />
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

defineProps({ blok: Object });

const headerActive = ref(false);

function headerIsActive() {
  headerActive.value = !headerActive.value;
  console.log('headerActive', headerActive.value);
}

watch(headerActive, (newVal) => {
  if (newVal) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
});
//   const layers = document.querySelectorAll('.blokLayer');
//   const footer = document.querySelectorAll('footer');
//   const firstLayer = layers[0];
//   const array = Array.from(layers);
//   const layersArray = array.slice(1);

//   gsap.fromTo(
//     firstLayer,
//     {
//       marginTop: '-15%',
//     },
//     {
//       marginTop: '-25%',
//       scrollTrigger: {
//         trigger: firstLayer,
//         start: 'top 80%',
//         end: 'top 50%',
//         scrub: true,
//       },
//     }
//   );

//   gsap.fromTo(
//     footer,
//     {
//       marginTop: '-25%',
//     },
//     {
//       marginTop: '-35%',
//       scrollTrigger: {
//         trigger: footer,
//         start: 'top 80%',
//         end: 'top 50%',
//         scrub: true,
//       },
//     }
//   );

//   layersArray.forEach((el) => {
//     gsap.fromTo(
//       el,
//       {
//         marginTop: '-33%',
//       },
//       {
//         marginTop: '-43%',
//         scrollTrigger: {
//           trigger: el,
//           start: 'top 5%',
//           end: 'top 10%',
//           scrub: true,
//         },
//       }
//     );
//   });
// });
</script>
