<template>
  <header :class="{ active: headerState }" class="header">
    <div class="header-Background" />

    <div class="header-Menu">
      <template v-if="headerMenu && !contactActive">
        <StoryblokComponent
          v-for="blok in headerMenu"
          :key="blok._uid"
          :blok="blok"
        />
        <div @click="toggleContact" class="menuItem">
          <p>Contact</p>
        </div>
      </template>
      <template v-if="contactActive">
        <div class="menuItem">
          <p>Contact</p>
        </div>
        <div class="menuItem">
          <p>info@carrocera.com</p>
        </div>
        <div @click="toggleContact" class="menuItem">
          <p>Close</p>
        </div>
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  headerState: Boolean,
});

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/header', {
  version: 'draft',
  resolve_links: 'url',
});

const headerMenu = ref(null);
const contactActive = ref(false);
headerMenu.value = data.story.content.header;

function toggleContact() {
  contactActive.value = !contactActive.value;
}
</script>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  color: white
  pointer-events: none
  & > div
    color: currentColor
    h1, p
      color: currentColor
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
  &-Background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: hsla(0, 0%, 0%, .165)
    transition: opacity .33s ease
    opacity: 0

  &.active
    .header-Menu
      opacity: 1
      transition: opacity .33s ease-in .66s
    .header-Background
      opacity: 1
      transition: opacity .33s ease-in .66s
</style>
