<template>
  <div class="modal">
    <div class="modal-Container">
      <div @click.native="$emit('close')" class="modal-Close mouseInteract">
        <h1>close x</h1>
      </div>
      <div class="modal-Content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal
  position: fixed
  display: flex
  justify-content: center
  align-items: center
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  background: hsla(0,0,0,.5 )
  z-index: +2

  &-Container
    position: relative
    width: 90vw
    height: 94vh
    background: white
    border-radius: .5rem

  &-Close
    position: absolute
    top: 1rem
    right: 2rem
    z-index: 999

  &-Content
    display: flex
    flex-direction: column
    padding: 3rem 2rem
    padding-top: 5rem
    overflow-y: auto
    height: 100%

.modalSide
  top: 0
  right: 0
  width: 66vw
  height: 100vh

.modalCenter
  display: flex
  flex-direction: column
  align-items: center
  top: 3vmax
  right: 3vmin
  bottom: 3vmax
  left: 3vmin
  border-radius: .5rem

.modalContent
  max-width: 50vw
  padding-bottom: 3rem

.twoColumn
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 100%
  height: 100%
  &_Left
    flex: 1
    padding-right: 1rem
    position: sticky
  &_Right
    flex: 1
    padding-left: 1rem
</style>
