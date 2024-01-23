<template>
  <div class="modal">
    <div @click.native="$emit('close')" class="modal-Background" />
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
    </div>
  </div>
</template>

<style lang="sass">
.modal
  position: fixed
  display: flex
  justify-content: center
  align-items: center
  left: 0
  top: 0
  width: 100%
  height: 100%
  z-index: 9999
  &-Background
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    background: hsla(0, 0%, 0%, .165)
  &-Container
    position: relative
    width: calc(100% - 10vmin)
    height: calc(100% - 10vmin)
    background: white
    color: black
    pointer-events: auto
    overflow: hidden
  &-Close
    position: absolute
    top: var(--spacing-ver)
    right: var(--spacing-hor)
    display: flex
    align-items: center
    gap: 1rem
    @media screen and (max-width: $breakpoint-mobile)
      gap: .5rem
    .icon
      width: 1rem
      height: 1rem
      img
        width: 100%
        height: 100%
        object-fit: contain
  &-Content
    position: relative
    width: 100%
    height: 100%
    display: inline-flex
    flex-direction: row
    @media screen and ( max-width: $breakpoint-tablet)
      flex-direction: column
      gap: var(--spacing-one)
    & > div
      @media screen and ( min-width: $breakpoint-tablet)
        flex: 1
  &-Column // Styling for columns
    position: relative
    width: 100%
    -ms-overflow-style: none // Prevents scrollbar
    scrollbar-width: none
    &::-webkit-scrollbar
      display: none
    & > div
      @media screen and ( min-width: $breakpoint-tablet)
        flex-shrink: 0
    &_Title
      display: flex
      flex-direction: column
      width: 100%
      max-width: 100%
      margin-bottom: var(--spacing-one)
      h1
        max-width: 50vw
        text-transform: uppercase
        @media screen and ( max-width: $breakpoint-tablet)
          max-width: 100%
      p
        margin-top: .5rem
    &_One
      display: inline-flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      overflow-y: auto
      padding: var(--spacing-ver) var(--spacing-hor)
      & > div:last-child
        margin-bottom: var(--spacing-two)
    &_Two
      position: relative
      width: 100%
      height: 100%
      display: inline-flex
      flex-direction: row
      flex-wrap: nowrap
      padding: var(--spacing-ver) var(--spacing-hor)
      & > div
        @media screen and (max-width: $breakpoint-tablet)
          flex-direction: column
          align-items: center
          overflow-y: none

  &.isTwoColumn
    .modal-Content // When two columns AND mobile-tablet
      @media screen and (max-width: $breakpoint-tablet)
        display: flex
        flex-direction: column
        justify-content: flex-start
        height: 100%
        overflow-y: auto
        & > div
          flex-shrink: 0
          justify-content: flex-start
          height: auto
          overflow-y: unset

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
