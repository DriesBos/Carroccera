<template>
  <div class="button mouseInteract">
    <slot />
  </div>
</template>

<style lang="sass">
.button
  position: relative
  backdrop-filter: blur(4px)
  background: rgba(255, 255, 255, 0.33)
  padding: .5rem 4rem
  height: 44px
  z-index: 888
  border-radius: 1000px
  color: white
  display: flex
  gap: 1rem
  align-items: center
  h1
    font-family: 'Signifier Medium', serif
    font-size: 1.5rem
    color: currentColor
  &-LogoNav
    position: fixed
    width: 44px
    height: 44px
    justify-content: center
    align-items: center
    padding: 0
    top: 1rem
    right: 1rem
  &-Menu
    position: fixed
    top: 1rem
    right: 1rem
  &-ScrollUp
    position: fixed
    bottom: 1rem
    right: 1rem
    padding: 4rem .5rem
    width: 44px
</style>
