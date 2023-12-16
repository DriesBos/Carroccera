<template>
  <div class="button mouseInteract">
    <slot />
  </div>
</template>

<style lang="sass">
.button
  position: relative
  backdrop-filter: blur(4px)
  background: rgba(255, 255, 255, 0.2)
  padding: .5rem 4rem
  font-family: 'Signifier Medium', serif
  font-size: 1.5rem
  z-index: 999
  border-radius: 1000px
  color: white
  &-Logo
    position: fixed
    top: 1rem
    left: 1rem
  &-Menu
    position: fixed
    top: 1rem
    right: 1rem
  &-ScrollUp
    position: fixed
    bottom: 1rem
    right: 1rem
    padding: 4rem .5rem
</style>
