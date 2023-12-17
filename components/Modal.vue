<template>
  <div class="modal">
    <!-- <div class="modal-Background mouseInteract" @click="$emit('close')"></div> -->
    <div class="modal-Container mouseInvert">
      <div @click.native="$emit('close')" class="modal-Close mouseInteract">
        <h1>close x</h1>
      </div>
      <div class="modal-Content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.modal
  position: fixed
  display: flex
  justify-content: center
  align-items: flex-end
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  z-index: $z-modal

  // &-Background
  //   position: absolute
  //   width: 100%
  //   height: 100%
  //   background: hsla(0,0%,0%,.5 )
  //   z-index: -1

  &-Container
    position: relative
    width: 100%
    height: 100%
    background: white
    border-radius: 0

  &-Close
    position: absolute
    top: 1rem
    right: 2rem

  &-Content
    position: relative
    width: 100%
    height: 100%
    &_Horizontal
      position: relative
      width: 100%
      height: 100%
      padding: 3rem 2rem
      padding-top: 5rem
      display: flex
      flex-direction: row
      flex-wrap: nowrap
      & > div
        flex: 1
        flex-shrink: 0
    &_Vertical
      position: relative
      width: 100%
      height: 100%
      padding: 3rem 2rem
      padding-top: 5rem
      display: flex
      flex-direction: column
      align-items: center
      overflow-y: auto
      & > div
        max-width: 50rem


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
