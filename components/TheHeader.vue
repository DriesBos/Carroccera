<template>
  <header v-editable="blok" class="header">
    <div class="header-TopContainer blend">
      <div class="header-Logo mouseInteract">
        <NuxtLink to="/"><p>Carroccera Collective</p></NuxtLink>
      </div>
      <div @click="toggleActive" class="header-Menu mouseInteract">
        <p>Menu</p>
        <div class="dot" />
      </div>
    </div>

    <Transition name="slideDown">
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
              <img src="~assets/icons/close-white.png" alt="" />
            </div>
          </div>
          <div class="header-Modal_List">
            <ul>
              <li class="mouseInteract">
                <NuxtLink to="/"><p>Carroccera Collective</p></NuxtLink>
              </li>
              <li></li>

              <template v-if="headerMenu">
                <StoryblokComponent
                  v-for="blok in headerMenu"
                  :key="blok._uid"
                  :blok="blok"
                />
              </template>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
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

// console.log('headerMenu', headerMenu.value);
</script>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none
  mix-blend-mode: difference
  color: white
  & > div
    h1, p
      color: currentColor
      line-height: 1.2em
  &-Modal
    position: fixed
    mix-blend-mode: unset
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    left: 0
    top: 0
    width: 100%
    pointer-events: auto
    &_Container
      position: relative
      display: flex
      width: 100%
      height: 100%
      color: white
      background: grey
    &_List
      position: relative
      padding: var(--spacing-ver) var(--spacing-hor)
      ul
        display: flex
        flex-direction: column
        align-items: flex-start
        gap: 1rem
        li
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
  &-TopContainer
    position: relative
    display: flex
    justify-content: space-between
  &-Logo
    padding: var(--spacing-ver) var(--spacing-hor)
    pointer-events: auto
    @media (max-width: 768px)
      width: 10em
  &-Menu
    padding: var(--spacing-ver) var(--spacing-hor)
    display: flex
    align-items: center
    gap: 1rem
    pointer-events: auto
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
