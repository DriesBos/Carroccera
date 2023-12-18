<template>
  <div v-editable="blok" class="page-Home">
    <Mouse />
    <Celestials />
    <div class="landscape">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <ToTop />
    <TheHeader />
    <TheFooter />
    <TheFooterNav />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

defineProps({ blok: Object });

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

<style lang="sass" scoped>

.page-Home
  position: relative
.landscape
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
