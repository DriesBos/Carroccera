<template>
  <header class="header">
    <div class="header-Container">
      <div class="header-Logo mouseInteract">
        <p>Carroccera Collective</p>
      </div>
      <div @click="toggleActive" class="header-Menu mouseInteract">
        <p>Menu</p>
        <div class="dot" />
      </div>
    </div>
    <Transition name="slideUp">
      <div
        class="header-Modal"
        v-show="isActive"
        :class="{ active: isModalActive }"
      >
        <div class="header-Modal_Container">
          <div
            @click.native="toggleActive"
            class="header-Modal_Close mouseInteract"
          >
            <p>Close</p>
            <div class="icon icon-Close">
              <img src="~assets/icons/close.png" alt="" />
            </div>
          </div>
          <!-- <div class="header-Modal_List">
              <ul>
                <li class="mouseInteract">About</li>
                <li class="mouseInteract">Rewild</li>
                <li class="mouseInteract">Build</li>
                <li class="mouseInteract">Inspire</li>
              </ul>
            </div> -->
        </div>
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

<style lang="sass">
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
  &-Modal
    position: fixed
    mix-blend-mode: unset
    display: flex
    justify-content: center
    align-items: flex-end
    left: 0
    top: 0
    width: 100vw
    height: 100vh
    z-index: +1
    isolation: isolate
    &_Container
      position: relative
      width: 100%
      height: 100%
      background: black
      border: 2px solid red
      color: white
      isolation: isolate
    &_List
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
    &_Close
      position: absolute
      top: var(--spacing-ver)
      right: var(--spacing-hor)
      display: flex
      align-items: center
      gap: 1rem
      @media screen and (max-width: $breakpoint-mobile)
        gap: .5rem
      .icon
        width: 1rem
        height: 1rem
        img
          width: 100%
          height: 100%
          object-fit: contain
  &-Container
    position: relative
    width: 100%
    height: 100%
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
      background: white
      pointer-events: all
      transition: all .33s ease
  a
    text-decoration: none
</style>
