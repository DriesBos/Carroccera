<template>
  <div>
    <Celestials />
    <ul class="landscape">
      <li class="panel">
        <img src="~assets/img/layer1.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer2.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer3.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer4.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer5.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer6.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer7.png" alt="" />
      </li>
      <li class="panel landpanel">
        <img src="~assets/img/layer8.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

definePageMeta({
  title: 'On Scroll',
});

const main = ref();
let ctx;

onMounted(() => {
  const boxes = document.querySelectorAll('.landpanel');
  console.log(boxes);
  boxes.forEach((box) => {
    gsap.to(box, {
      y: '-6%',
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });
});

onUnmounted(() => {
  // ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped lang="sass">
.landscape
  position: relative
  width: 100vw
  display: flex
  flex-direction: column
  justify-content: flex-start
  li
    width: 100vw
    &.landpanel
      margin-top: -25%
    img
      width: 100%
      max-width: 100%
      height: auto

.panel
  width: 100vw
  img
    width: 100%
    max-width: 100%
    height: auto
</style>
