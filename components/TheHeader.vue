<template>
  <header :class="{ active: props.headerState }" class="header">
    <div :class="{ activeShow: headerShow }" class="header-Toggle">
      <div
        v-if="!props.contactState && !props.projectsState && !props.teamState"
        @click="emit('headerEmit')"
        :class="{ active: props.headerState }"
        class="header-Toggle_Item mouseInteract"
      >
        <p v-if="!props.headerState">Menu</p>
        <p v-if="props.headerState">Close</p>
        <div :class="{ active: props.headerState }" class="dot" />
      </div>
      <!-- <div
        v-show="
          props.headerState && !props.contactState && !props.projectsState
        "
        @click="headerToggle"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.headerState }"
      >
        <div class="icon icon-Close">
          <img src="~assets/icons/close-white.png" alt="" />
        </div>
      </div> -->
      <div
        v-if="props.contactState"
        @click="emit('contactEmit', true)"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.contactState }"
      >
        <p>Back</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/iconblok-back.png" alt="" />
        </div>
      </div>
      <div
        v-if="props.projectsState"
        @click="emit('projectsEmit', true)"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.projectsState }"
      >
        <p>Back</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/iconblok-back.png" alt="" />
        </div>
      </div>
      <div
        v-if="props.teamState"
        @click="emit('teamEmit', true)"
        class="header-Toggle_Item mouseInteract"
        :class="{ active: props.teamState }"
      >
        <p>Back</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/iconblok-back.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

const emit = defineEmits([
  'headerEmit',
  'contactEmit',
  'projectsEmit',
  'teamEmit',
]);

const props = defineProps({
  headerState: Boolean,
  projectsState: Boolean,
  teamState: Boolean,
  contactState: Boolean,
});

const headerShow = ref(true);

// function setHeader() {
//   setTimeout(() => {
//     headerShow.value = true;
//   }, 500);
// }

onMounted(() => {
  // setHeader();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('closeAllEmit', true);
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
    opacity: 0
    transition: opacity 1s ease
    &.activeShow
      opacity: 1
    p
      line-height: 1.15em
    //   @media (hover: hover)
    //     opacity: 0
    //     transition: opacity $transition-hover
    // &:hover
    //   p
    //     opacity: 1
    &_Item
      padding: var(--spacing-ver) var(--spacing-hor)
      display: flex
      gap: 1rem
      text-transform: uppercase
      pointer-events: auto
      &.active
        p
          opacity: 1
</style>
