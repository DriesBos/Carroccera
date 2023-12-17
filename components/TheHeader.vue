<template>
  <header class="header">
    <div class="header-Logo mouseInteract">
      <h1>Carroccera Collective</h1>
    </div>
    <div @click="toggleActive" class="header-Menu mouseInteract">
      <h1>Menu</h1>
      <div class="dot" />
    </div>
    <Transition name="fade">
      <div v-show="isActive" class="header-List">
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
  position: fixed
  top: 0
  right: 0
  width: 100%
  height: 100%
  z-index: $z-header
  pointer-events: none
  color: white
  mix-blend-mode: difference
  & > div
    pointer-events: all
    h1, p
      color: currentColor
      line-height: 1.2em
  &-Logo
    position: absolute
    top: var(--spacing-ver)
    left: var(--spacing-hor)
    @media (max-width: 768px)
      width: 10em
  &-Menu
    position: absolute
    top: var(--spacing-ver)
    right: var(--spacing-hor)
    display: flex
    align-items: center
    gap: 1rem
    @media (max-width: 768px)
      gap: .5rem
    &::selection
      background: transparent
      color: transparent
    & .dot
      width: 1rem
      height: 1rem
      border-radius: 1000px
      background: white
      pointer-events: all
      cursor: pointer
      transition: all .33s ease
      &:hover
        transform: scale(1.1)

  &-List
    position: absolute
    top: 1rem
    right: 1rem
    background: rgba(255, 255, 255, 0.33)
    padding-right: 44px
    @media (max-width: 768px)
      left: 1rem
    ul
      padding: 2rem
      display: flex
      flex-direction: column
      align-items: flex-start
      gap: .33rem
      li
        color: white
        &::selection
          background: transparent
          color: white
  a
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
