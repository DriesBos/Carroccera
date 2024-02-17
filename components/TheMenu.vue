<template>
  <header :class="{ active: headerState }" class="header">
    <div class="header-Background" />

    <div class="header-Menu">
      <template v-if="headerMenu && !contactState && !projectsState">
        <StoryblokComponent
          v-for="blok in headerMenu"
          :key="blok._uid"
          :blok="blok"
        />
        <div @click="emit('projectsEmit', true)" class="menuItem mouseInteract">
          <p>Projects</p>
        </div>
        <div @click="emit('contactEmit', true)" class="menuItem mouseInteract">
          <p>Contact</p>
        </div>
      </template>
      <template v-if="projectsState">
        <ProjectList @projectsEmit="projectsToggle" @closeAllEmit="allClose" />
      </template>
      <template v-if="contactState">
        <div class="menuItem header-Menu_Contact">
          <a href="mailto: info@carrocera.com">info@carrocera.com</a>
        </div>
        <!-- <div
          @click="emit('contactEmit', true)"
          class="header-Menu_ContactBackground"
        /> -->
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['contactEmit', 'projectsEmit', 'backgroundEmit']);

defineProps({
  headerState: Boolean,
  projectsState: Boolean,
  contactState: Boolean,
});

// let ctx;

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/header', {
  version: 'draft',
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

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
    }
  });
});

// onUnmounted(() => {
//   ctx.revert();
// });
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
      text-transform: uppercase
      h1, p
        color: currentColor
        line-height: 1
      @media (max-width: 768px)
        gap: .5rem
      & .dot
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
    gap: .75rem
    opacity: 0
    // &_ContactBackground, &_ProjectsBackground
    //   position: absolute
    //   top: 0
    //   left: 0
    //   width: 100%
    //   height: 100%
    //   z-index: -1
    // &_ProjectList
    //   z-index: 1
    &_Contact
      // z-index: 1
      a
        color: currentColor
        text-decoration: none
        &:hover
          text-decoration: underline
    & > div
      text-transform: uppercase
      &:first-child
        margin-bottom: 1.5rem
      &:last-child
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
    .header-Menu
      opacity: 1
      .menuItem
        pointer-events: auto
    .header-Background
      opacity: 1
      pointer-events: auto

.menuItem
  opacity: 1
  &.header-Menu_Contact, &.header-Menu_ProjectList
    margin-top: 0 !important // Negate main menu
    margin-bottom: 0 !important
    opacity: 1
  &.header-Menu_ProjectList
    text-transform: none
    display: flex
    justify-content: space-between
    width: 100%
    max-width: 20rem
    padding: 0 var(--spacing-hor)
    @media screen and (max-width: $breakpoint-mobile)
      max-width: 100%
    & > p:first-child
      padding-right: .5em
    &:hover
      text-decoration: underline
</style>
