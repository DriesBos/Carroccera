<template>
  <header :class="{ active: isActive }" class="header">
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
        :class="{ active: isActive }"
      >
        <p>Close</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/close-white.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, onMounted, ref } from 'vue';

const emit = defineEmits(['headerActive']);

let isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
  if (isActive.value) {
    emit('headerActive', true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    emit('headerActive', false);
  }
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isActive.value = false;
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
