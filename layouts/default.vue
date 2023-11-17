<template>
  <main>
    <div class="cursor cursor-One">
      <div class="cursor-Small" />
    </div>
    <div class="cursor cursor-Two">
      <div class="cursor-Small" />
    </div>
    <slot />
  </main>
</template>

<script>
import gsap from 'gsap';

export default {
  mounted() {
    this.customCursor();
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) => item.addEventListener('mouseover', this.changeCursor));
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.removeChangeCursor)
      );
  },
  updated() {
    this.removeChangeCursor();
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) => item.addEventListener('mouseover', this.changeCursor));
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.addEventListener('mouseleave', this.removeChangeCursor)
      );
  },
  destroyed() {
    this.removeChangeCursor();
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.removeEventListener('mouseover', this.changeCursor)
      );
    document
      .querySelectorAll('.cursorInteract')
      .forEach((item) =>
        item.removeEventListener('mouseleave', this.removeChangeCursor)
      );
  },
  methods: {
    customCursor() {
      let cursorOne = document.querySelector('.cursor-One');
      let cursorTwo = document.querySelector('.cursor-Two');
      function moveCursorOne(e) {
        gsap.to(cursorOne, 0.165, {
          opacity: 1,
          left: e.clientX,
          top: e.clientY,
          ease: 'ease',
        });
      }
      function moveCursorTwo(e) {
        gsap.to(cursorTwo, 0.165, {
          opacity: 1,
          left: e.clientX,
          top: e.clientY,
          ease: 'ease',
          delay: 0.165,
        });
      }
      document.addEventListener('mousemove', moveCursorOne);
      document.addEventListener('mousemove', moveCursorTwo);
    },
    changeCursor() {
      document.querySelector('.cursor').classList.add('active');
    },
    removeChangeCursor() {
      document.querySelector('.cursor').classList.remove('active');
    },
  },
};
</script>

<style lang="sass">
.cursor
  position: fixed
  width: 3rem
  height: 3rem
  transform: translate(-50%, -50%)
  border-radius: 50%
  z-index: 999
  pointer-events: none
  // opacity: 0
  &-Small, &-Large
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    border-radius: 50%
    transition: all .165s ease
  &-Small
    width: 1rem
    height: 1rem
    border: 2px solid var(--color)
  &.active
    .cursor-Small
      width: 2rem
      height: 2rem
  @media ( hover: none )
    opacity: 0 !important
    display: none !important

.cursorInteract
  pointer-events: auto
</style>
