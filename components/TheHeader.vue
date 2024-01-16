<template>
  <header v-editable="blok" class="header" :class="{ active: isActive }">
    <div class="header-Toggle">
      <div
        v-show="!isActive"
        @click="toggleActive"
        class="header-Toggle_Item mouseInteract"
      >
        <p>Menu</p>
        <div class="dot" />
      </div>
      <div
        v-show="isActive"
        @click="toggleActive"
        class="header-Toggle_Item mouseInteract"
      >
        <p>Close</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/close-white.png" alt="" />
        </div>
      </div>
    </div>

    <div class="header-Menu">
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

const emit = defineEmits(['headerActive']);

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
  if (isActive.value) {
    emit('headerActive', true);
  } else {
    emit('headerActive', false);
  }
}
</script>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none
  color: white
  // mix-blend-mode: difference
  & > div
    color: currentColor
    line-height: 1.2em
    h1, p
      color: currentColor
      line-height: 1.2em
  &-Toggle
    position: absolute
    top: 0
    right: 0
    display: inline-flex
    &_Item
      padding: var(--spacing-ver) var(--spacing-hor)
      display: flex
      gap: 1rem
      pointer-events: auto
      @media (max-width: 768px)
        gap: .5rem
      & .dot
        background: white
        transition: all .33s ease
  &-Menu
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: inline-flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 1rem
    opacity: 0
    transition: opacity .33s ease
    & > div
      pointer-events: auto
  &.active
    .header-Menu
      opacity: 1
</style>
