<template>
  <header class="header">
    <div @click="toggleActive" class="header-Logo mouseInteract">
      Carroccera Collective
    </div>
    <Transition name="fade">
      <div v-show="isActive" class="header-Nav">
        <ul>
          <li class="mouseInteract">About</li>
          <li class="mouseInteract">Rewild</li>
          <li class="mouseInteract">Build</li>
          <li class="mouseInteract">Inspire</li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

let isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<style lang="sass" scoped>
.header
  position: absolute
  top: 10vh
  left: 50%
  transform: translateX(-50%)
  display: flex
  flex-direction: column
  justify-content: space-between
  color: white
  font-size: 2rem
  font-family: Georgia, 'Times New Roman', Times, serif
  z-index: +1
  &-Logo
    padding: 0 1em
    margin-bottom: 1rem
    &::selection
      background: transparent
      color: white
  &-Nav
    ul
      display: flex
      flex-direction: column
      align-items: center
      li
        padding: 0 .5em
        margin-bottom: .5em
        color: white
        font-size: 1.8rem
        font-family: Georgia, 'Times New Roman', Times, serif
        &::selection
          background: transparent
          color: white
  a
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
