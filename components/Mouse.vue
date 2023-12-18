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
    array.forEach((element) => {
      element.addEventListener('mouseover', onMouseHover);
      element.addEventListener('mouseout', onMouseHoverOut);
    });
  }, 100);
  setTimeout(() => {
    const interactListModal = document.getElementsByClassName('mouseInvert');
    const arrayModal = Array.from(interactListModal);
    arrayModal.forEach((element) => {
      element.addEventListener('mouseover', onMouseHoverModal);
      element.addEventListener('mouseout', onMouseHoverModalOut);
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
  const interactListModal = document.getElementsByClassName('mouseInvert');
  const arrayModal = Array.from(interactListModal);
  arrayModal.forEach((element) => {
    element.removeEventListener('mouseover', onMouseHoverModal);
    element.removeEventListener('mouseout', onMouseHoverModalOut);
  });
}

function onMouseHover(e) {
  mouse.value.classList.add('active');
}

function onMouseHoverOut(e) {
  mouse.value.classList.remove('active');
}

function onMouseHoverModal(e) {
  mouse.value.classList.add('invert');
}

function onMouseHoverModalOut(e) {
  mouse.value.classList.remove('invert');
}
</script>

<style lang="sass" scoped>
.mouse
  position: absolute
  left: 0
  right: 0
  background: white
  display: none
  width: 1.5rem
  height: 1.5rem
  z-index: $z-mouse
  border-radius: 50%
  transform: translate(-50%, -50%)
  pointer-events: none
  @media (pointer: fine)
    display: inline-block
  &.active
    width: 3rem
    height: 3rem
    transition: width .3s ease, height .3s ease
  &.invert
    background: black
</style>
