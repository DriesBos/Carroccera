<template>
  <header v-editable="blok" class="header" :class="{ active: isActive }">
    <div class="header-Background" />
    <div class="header-TopContainer">
      <div class="header-Logo mouseInteract">
        <NuxtLink :to="{ path: '/', hash: '#top' }">
          Carroccera Collective</NuxtLink
        >
      </div>
      <div
        v-show="!isActive"
        @click="toggleActive"
        class="header-Menu mouseInteract"
      >
        <p>Menu</p>
        <div class="dot" />
      </div>
      <div
        v-show="isActive"
        @click="toggleActive"
        class="header-Menu mouseInteract"
      >
        <p>Close</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/close-white.png" alt="" />
        </div>
      </div>
    </div>

    <div class="header-BottomContainer">
      <template v-if="headerMenu">
        <StoryblokComponent
          v-for="blok in headerMenu"
          :key="blok._uid"
          :blok="blok"
        />
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/header', {
  version: 'draft',
  resolve_links: 'url',
});

const headerMenu = ref(null);
headerMenu.value = data.story.content.header;

let isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  // pointer-events: none
  color: white
  // mix-blend-mode: difference
  & > div
    color: currentColor
    line-height: 1.2em
    h1, p
      color: currentColor
      line-height: 1.2em
  &-Background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: black
    opacity: 0
    transition: opacity .33s ease
  &-TopContainer
    position: relative
    display: flex
    justify-content: space-between
  &-Logo
    padding: var(--spacing-ver) var(--spacing-hor)
    // pointer-events: auto
    @media (max-width: 768px)
      width: 10em
  &-Menu
    padding: var(--spacing-ver) var(--spacing-hor)
    display: flex
    align-items: center
    gap: 1rem
    // pointer-events: auto
    @media (max-width: 768px)
      gap: .5rem
    &::selection
      background: transparent
      color: transparent
    & .dot
      background: white
      // pointer-events: all
      transition: all .33s ease
  &-BottomContainer
    position: relative
    padding: var(--spacing-ver) var(--spacing-hor)
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 1rem
    opacity: 0
    transition: opacity .33s ease
    & > div
      border-bottom: 1px solid currentColor
  &-Modal
    position: absolute
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    left: 0
    top: 0
    width: 100%
    // pointer-events: auto
    &_Container
      position: relative
      display: flex
      width: 100%
      height: 100%
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
  a
    text-decoration: none
  &.active
    .header-BottomContainer
      opacity: 1
    .header-Background
      opacity: .5
</style>
