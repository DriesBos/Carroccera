<template>
  <header :class="{ active: headerState }" class="menu">
    <div class="menu-Background" />

    <div class="menu-Container">
      <template
        v-if="
          headerMenu &&
          !contactState &&
          !projectsState &&
          !teamState &&
          !mediaState
        "
      >
        <StoryblokComponent
          v-for="blok in headerMenu"
          :key="blok._uid"
          :blok="blok"
        />
        <div @click="emit('projectsEmit', true)" class="menuItem mouseInteract">
          <div class="dot" />
          <p>Projects</p>
        </div>
        <div @click="emit('mediaEmit', true)" class="menuItem mouseInteract">
          <div class="dot" />
          <p>News & Awards</p>
        </div>
        <div @click="emit('contactEmit', true)" class="menuItem mouseInteract">
          <div class="dot" />
          <p>Contact</p>
        </div>
      </template>
      <template v-if="projectsState">
        <ProjectList @projectsEmit="projectsToggle" @closeAllEmit="allClose" />
      </template>
      <template v-if="mediaState">
        <TheNewsList @mediaEmit="mediaToggle" @closeAllEmit="allClose" />
      </template>
      <template v-if="contactState">
        <div class="menuItem header-Menu_Contact mouseInteract">
          <div class="dot" />
          <a href="mailto:info@carrocera.com" target="_blank"
            >info@carrocera.com</a
          >
        </div>
        <div class="menuItem header-Menu_Contact mouseInteract">
          <div class="dot" />
          <a
            href="https://www.instagram.com/carroccera_collective/"
            target="_blank"
            >instagram</a
          >
        </div>
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits([
  'contactEmit',
  'mediaEmit',
  'projectsEmit',
  'teamEmit',
  'backgroundEmit',
  'closeAllEmit',
]);

defineProps({
  headerState: Boolean,
  projectsState: Boolean,
  teamState: Boolean,
  mediaState: Boolean,
  contactState: Boolean,
});

// let ctx;

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/header', {
  version: 'published',
  resolve_links: 'url',
});

const headerMenu = ref(null);
headerMenu.value = data.story.content.header;

function allClose() {
  emit('closeAllEmit', true);
}

function projectsToggle() {
  emit('projectsEmit', true);
}

function mediaToggle() {
  emit('mediaEmit', true);
}

function teamToggle() {
  emit('teamEmit', true);
}

// Handle Escape key with proper cleanup
useEscapeKey(() => {
  emit('closeAllEmit', true);
});
</script>

<style lang="sass">
.menu
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  color: white
  pointer-events: none
  & > div
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
      // pointer-events: auto
      text-transform: uppercase
      h1, p
        color: currentColor
        line-height: 1
      @media (max-width: 768px)
        gap: .5rem
      & .dot
        transition: all .33s ease
  &-Container
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: inline-flex
    flex-direction: column
    justify-content: center
    align-items: center
    opacity: 0
    &_Contact
      a
        color: currentColor
        text-decoration: none
    & > div
      text-transform: uppercase
      &:nth-child(2)
        margin-bottom: 1.5rem
      &:nth-last-child(2)
        margin-top: 1.5rem
  &-Background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: $color-bg
    transition: $transition-bg
    opacity: 0

  &.active
    pointer-events: auto
    .menu-Container
      opacity: 1
      // .menuItem
      //   pointer-events: auto
    .menu-Background
      opacity: 1

.menuItem
  position: relative
  opacity: 1
  padding: $btn-padding
  display: flex
  align-items: center
  // border: 1px solid red
  & .dot
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: -1.25rem
    opacity: 0
  @media (hover: hover)
    &:hover
      .dot
        opacity: 1
  &.header-Menu_Contact, &.header-Menu_ProjectList, &.header-Menu_TeamList
    margin-top: 0 !important // Negate main menu
    margin-bottom: 0 !important
    opacity: 1
    a
      text-decoration: none
  &.header-Menu_ProjectList
    display: flex
    justify-content: space-between
    width: 100%
    max-width: 20rem
    padding: $btn-padding
    @media screen and (max-width: $breakpoint-mobile)
      max-width: calc(100% - 1 * #{var(--spacing-hor)})
  &.header-Menu_MediaList
    display: flex
    align-items: flex-start
    justify-content: space-between
    gap: 2.5rem
    width: 100%
    padding: 0
    position: relative
    .dot
      top: 0.75rem
    .date
      white-space: nowrap
      text-transform: none
      user-select: none
    .text
      text-transform: none
      white-space: wrap
      text-decoration: none
      text-transform: none
  &.header-Menu_TeamList
    display: flex
    justify-content: center
    width: 100%
    padding: $btn-padding
    @media screen and (max-width: $breakpoint-mobile)
      max-width: calc(100% - 1 * #{var(--spacing-hor)})
</style>
