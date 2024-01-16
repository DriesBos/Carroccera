<template>
  <div v-editable="blok" id="top" class="page page-Home">
    <Mouse />
    <TheHeader @headerActive="headerIsActive" />
    <Celestials :headerState="headerActive" />
    <TheFooterLanding :headerState="headerActive" />
    <div class="theLandscape">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <ToTop />
    <TheFooter />
  </div>
</template>

<style lang="sass" scoped>
.page-Home
  position: relative
.theSky
  position: relative
  width: 100vw
  height: 100vh
  overflow: hidden

.theLandscape
  position: relative
  width: 100vw
  display: flex
  flex-direction: column
  justify-content: flex-start
  & > div
    &:first-child
      margin-top: -15%
    &:nth-child(n+2)
      margin-top: -33%
.footer
  margin-top: -16%
</style>

<script setup>
defineProps({ blok: Object });

const headerActive = ref(false);

function headerIsActive() {
  headerActive.value = !headerActive.value;
  console.log('headerActive', headerActive.value);
}

// onMounted(() => {
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
