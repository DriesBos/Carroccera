<template>
  <header class="header">
    <div @click="toggleActive" class="header-Menu mouseInteract">
      <div class="icon">
        <img src="~/assets/icons/menu.png" alt="" />
      </div>
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
  z-index: 777
  &-Menu
    position: absolute
    top: 1rem
    right: 1rem
    width: 44px
    height: 44px
    background: rgba(255, 255, 255, 0.33)
    border-radius: 1000px
    display: flex
    justify-content: center
    align-items: center
    z-index: +1
    &::selection
      background: transparent
      color: transparent
  &-List
    position: absolute
    top: 1rem
    right: 1rem
    background: rgba(255, 255, 255, 0.33)
    padding-right: 44px
    border-radius: 20px
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
        font-size: 1rem
        font-family: 'Sohne Buch', sans-serif
        &::selection
          background: transparent
          color: white
  a
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
