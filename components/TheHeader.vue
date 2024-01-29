<template>
  <header :class="{ active: props.headerState }" class="header">
    <div class="header-Toggle">
      <div
        v-show="
          !props.headerState && !props.contactState && !props.projectsState
        "
        @click="headerToggle"
        class="header-Toggle_Item mouseInteract"
      >
        <p>Menu</p>
        <div class="dot" />
      </div>
      <div
        v-show="
          props.headerState && !props.contactState && !props.projectsState
        "
        @click="headerToggle"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.headerState }"
      >
        <p>Close</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/close-white.png" alt="" />
        </div>
      </div>
      <div
        v-show="props.contactState"
        @click="emit('contactEmit', true)"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.contactState }"
      >
        <p>Back</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/arrow-back-white.png" alt="" />
        </div>
      </div>
      <div
        v-show="props.projectsState"
        @click="emit('projectsEmit', true)"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.projectsState }"
      >
        <p>Back</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/arrow-back-white.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['headerEmit', 'contactEmit', 'projectsEmit']);

const props = defineProps({
  headerState: Boolean,
  projectsState: Boolean,
  contactState: Boolean,
});

// let ctx;

function headerToggle() {
  emit('headerEmit');
  if (!props.headerState) {
    gsap.to(window, { duration: 0.66, scrollTo: 0, ease: 'power4.out' });
  }
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
  pointer-events: none
  color: white
  & > div
    color: currentColor
    h1, p
      color: currentColor
  &-Toggle
    position: absolute
    top: 0
    right: 0
    display: inline-flex
    p
      @media (hover: hover)
        opacity: 0
        transition: opacity $transition-hover
    &:hover
      p
        opacity: 1
    &_Item
      padding: var(--spacing-ver) var(--spacing-hor)
      display: flex
      gap: .5rem
      pointer-events: auto
      &.active
        p
          opacity: 1
      & .dot
        background: white
        transition: all .33s ease
</style>
