<template>
  <header :class="{ active: headerState }" class="menu">
    <div class="menu-Background" />

    <div class="menu-Container">
      <template v-if="headerMenu && !contactState && !projectsState">
        <StoryblokComponent
          v-for="blok in headerMenu"
          :key="blok._uid"
          :blok="blok"
        />
        <div @click="emit('projectsEmit', true)" class="menuItem mouseInteract">
          <div class="dot" />
          <p>Projects</p>
        </div>
        <div @click="emit('contactEmit', true)" class="menuItem mouseInteract">
          <div class="dot" />
          <p>Contact</p>
        </div>
      </template>
      <template v-if="projectsState">
        <ProjectList @projectsEmit="projectsToggle" @closeAllEmit="allClose" />
      </template>
      <template v-if="contactState">
        <div class="menuItem header-Menu_Contact mouseInteract">
          <div class="dot" />
          <a href="mailto:info@carrocera.com">info@carrocera.com</a>
        </div>
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
  &.header-Menu_Contact, &.header-Menu_ProjectList
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
</style>
