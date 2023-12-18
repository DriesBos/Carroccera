<template>
  <div class="modal">
    <!-- <div class="modal-Background mouseInteract" @click="$emit('close')"></div> -->
    <div class="modal-Container mouseInvert">
      <div class="modal-Content">
        <slot></slot>
      </div>
      <div @click.native="$emit('close')" class="modal-Close mouseInteract">
        <p>Close</p>
        <div class="icon icon-Close">
          <img src="~assets/icons/close.png" alt="" />
        </div>
      </div>
      <div class="modal-Tag mouseInteract">
        <p>Project</p>
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
  &-Container
    position: relative
    width: 100%
    height: 100%
    background: white
  &-Close
    position: absolute
    top: var(--spacing-ver)
    right: var(--spacing-hor)
    display: flex
    align-items: center
    gap: 1rem
    @media (max-width: 768px)
      gap: .5rem
    .icon
      width: 1rem
      height: 1rem
      img
        width: 100%
        height: 100%
        object-fit: contain
  &-Tag
    position: absolute
    top: var(--spacing-ver)
    left: var(--spacing-hor)
  &-Content
    position: relative
    width: 100%
    height: 100vh
    display: flex
    flex-direction: row
    @media screen and ( max-width: $breakpoint-tablet)
      flex-direction: column
      gap: var(--spacing-one)
    & > div
      flex: 1
  &-Column
    &_Title
      display: flex
      width: 100%
      max-width: 100vw
      h1
        max-width: 50vw
        @media screen and ( max-width: $breakpoint-tablet)
          max-width: 100%
    &_One
      position: relative
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      align-items: center
      overflow-y: auto
      padding: var(--spacing-ver) var(--spacing-hor)
      padding-top: calc(#{var(--spacing-ver)} * 2 + 1rem)
      flex: 1
      & > div
        flex-shrink: 0
        margin-bottom: var(--spacing-ver)
    &_Two
      position: relative
      width: 100%
      height: 100%
      display: flex
      flex-direction: row
      flex-wrap: nowrap
      padding: var(--spacing-ver) var(--spacing-hor)
      padding-top: calc(#{var(--spacing-ver)} * 2 + 1rem)
      flex: 1
      & > div
        flex-shrink: 0


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
