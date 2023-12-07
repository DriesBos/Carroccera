<template>
  <div
    class="mouse"
    ref="mouse"
    :style="{ left: `${x}px`, top: `${y}px` }"
  ></div>
</template>

<script setup>
// import { onMounted, ref } from 'vue';
import { useMouse } from '@vueuse/core';
// import gsap from 'gsap';

const { x, y } = useMouse();

const mouse = ref();

onMounted(() => {
  init();
});

onUnmounted(() => destroy());

function init() {
  setTimeout(() => {
    const interactList = document.getElementsByClassName('mouseInteract');
    document.getElementsByTagName('a');
    const array = Array.from(interactList);
    console.log('INIT', array);
    array.forEach((element) => {
      element.addEventListener('mouseover', onMouseHover);
      element.addEventListener('mouseout', onMouseHoverOut);
    });
  }, 100);
}

function destroy() {
  const interactList = document.getElementsByClassName('mouseInteract');
  const array = Array.from(interactList);
  array.forEach((element) => {
    element.removeEventListener('mouseover', onMouseHover);
    element.removeEventListener('mouseout', onMouseHoverOut);
  });
}

function onMouseHover(e) {
  mouse.value.classList.add('active');
}

function onMouseHoverOut(e) {
  mouse.value.classList.remove('active');
}
</script>

<style lang="sass" scoped>
.mouse
  position: absolute
  left: 0
  right: 0
  background: grey
  width: 1.5rem
  height: 1.5rem
  z-index: 999
  border-radius: 50%
  transform: translate(-50%, -50%)
  pointer-events: none
  &.active
    width: 3rem
    height: 3rem
    transition: width .3s ease, height .3s ease
</style>
