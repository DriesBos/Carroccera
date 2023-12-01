<template>
  <div class="modal">
    <div @click.native="$emit('close')" class="modal-Close">
      <h1>close</h1>
    </div>
    <div class="modal-Content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal
  position: fixed
  left: 50%
  top: 50%
  translate: -50% -50%
  width: 90vw
  height: 94vh
  background: white
  z-index: +2

  &-Close
    position: absolute
    top: 1rem
    left: 1rem
    z-index: 999
    cursor: pointer

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
