<template>
  <div :class="{ active: isVisible }" class="theLogo">
    <img src="~assets/img/logo.png" alt="" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

function offDocument() {
  isVisible.value = true;
  console.log('hidden');
}

function onDocument() {
  isVisible.value = false;
  console.log('visible');
}

onMounted(() => {
  document.addEventListener('mouseleave', offDocument);
  document.addEventListener('mouseenter', onDocument);
});
</script>

<style scoped lang="sass">
.theLogo
  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100%
  pointer-events: none
  opacity: 0
  transition: opacity .165s ease-in-out
  &.active
    opacity: 1
  img, svg
    width: 100%
    max-width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
</style>
