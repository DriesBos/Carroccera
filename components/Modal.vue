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
      <!-- <div class="modal-Tag">
        <p>Project</p>
      </div> -->
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
  // &-Tag
  //   position: absolute
  //   top: var(--spacing-ver)
  //   left: var(--spacing-hor)
  &-Content
    position: relative
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    @media screen and ( max-width: $breakpoint-tablet)
      flex-direction: column
      gap: var(--spacing-one)
    & > div
      flex: 1
  &-Column // Styling for columns
    position: relative
    width: 100%
    -ms-overflow-style: none // Prevents scrollbar
    scrollbar-width: none
    &::-webkit-scrollbar
      display: none
    & > div
      flex-shrink: 0
    &_Title
      display: flex
      flex-direction: column
      width: 100%
      max-width: 100%
      margin-bottom: var(--spacing-one)
      h1
        max-width: 50vw
        @media screen and ( max-width: $breakpoint-tablet)
          max-width: 100%
      p
        margin-top: .5rem
    &_One
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      overflow-y: auto
      padding: var(--spacing-ver) var(--spacing-hor)
      // padding-top: calc(#{var(--spacing-ver)} * 2 + 1rem)
      flex: 1
      & > div
        // margin-bottom: var(--spacing-two)
        &:first-child
          // margin-top: var(--spacing-two)
          // initial-letter: 4
          p, h1, h2, h3
            &::first-letter
              // initial-letter: 1.95
              // margin: 0 .25em .25em .25em
        &:last-child
          margin-bottom: var(--spacing-two)
    &_Two
      position: relative
      width: 100%
      height: 100%
      display: flex
      flex-direction: row
      flex-wrap: nowrap
      padding: var(--spacing-ver) var(--spacing-hor)
      // padding-top: calc(#{var(--spacing-ver)} * 2 + 1rem)
      flex: 1
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
