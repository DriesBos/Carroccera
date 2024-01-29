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
        <ProjectList @closeAllEmit="allClose" />
      </template>
      <template v-if="contactState">
        <div class="menuItem header-Menu_Contact">
          <a href="mailto: info@carrocera.com">info@carrocera.com</a>
        </div>
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['contactEmit', 'projectsEmit']);

defineProps({
  headerState: Boolean,
  projectsState: Boolean,
  contactState: Boolean,
});

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/header', {
  version: 'draft',
  resolve_links: 'url',
});

const headerMenu = ref(null);
headerMenu.value = data.story.content.header;

function allClose() {
  emit('closeAllEmit', true);
  console.log('TheMenu - closeAllEmit');
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
      console.log('TheMenu esc - closeAllEmit');
    }
  });
});
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
      h1, p
        color: currentColor
        line-height: 1
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
    &_Contact
      a
        color: currentColor
        text-decoration: none
        &:hover
          text-decoration: underline
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
