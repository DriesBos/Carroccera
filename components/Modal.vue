<template>
  <div class="modal">
    <div @click.native="$emit('close')" class="modal-Background" />

    <div class="modal-Container mouseInvert">
      <div class="modal-Header">
        <div v-if="data.title" class="modal-Header_Title">
          <h1>{{ data.title }}</h1>
          <p v-if="data.subtitle">{{ data.subtitle }}</p>
        </div>
        <div
          @click.native="$emit('close')"
          class="modal-Header_Close mouseInteract"
        >
          <div class="dot active" />
        </div>
      </div>

      <div class="modal-Content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = defineProps({
  title: String,
  subtitle: String,
});
</script>

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
  pointer-events: none
  .dot
    background: black
  &-Background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0
    background: $color-bg
    pointer-events: auto
    transition: opacity $transition-bg 1s
  &-Container
    position: relative
    width: calc(100% - 12.5vmin)
    height: calc(100% - 12.5vmin)
    background: white
    color: black
    pointer-events: auto
    overflow: hidden
    @media screen and (max-width: $breakpoint-mobile)
      display: flex
      flex-direction: column
      width: calc(100% - 6.25vmin)
      height: calc(100% - 6.25vmin)
  &-Header
    z-index: +1
    @media screen and ( min-width: $breakpoint-tablet)
      position: absolute
      left: 0
      top: 0
      width: 100%
      // border-right: 1px solid hsla(0, 0%, 0%, .1)
    @media screen and ( max-width: $breakpoint-tablet)
      background: white // Only if one column
      display: flex
      align-items: flex-start
    & > div
      padding: var(--spacing-ver) var(--spacing-hor)
      padding-bottom: 1rem
    &_Title
      display: flex
      flex-direction: column
      width: 100%
      max-width: 100%
      @media screen and ( min-width: $breakpoint-tablet)
        width: 100%
        max-width: 50%
      h1
        max-width: 50vw
        // font-family: 'Signifier', 'Times New Roman', Times, serif
        // font-size: 1.5rem
        // text-transform: uppercase
        @media screen and ( max-width: $breakpoint-tablet)
          max-width: 100%
      p
        margin-top: .5rem
        line-height: 1
        font-size: $font-small
    &_Close
      position: absolute
      top: 0
      right: 0
      display: flex
      align-items: center
      gap: .5rem
      .icon
        width: 1rem
        height: 1rem
        img
          width: 100%
          height: 100%
          object-fit: contain
  &-Content
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    flex: 1
    // padding-bottom: 2rem
    @media screen and ( max-width: $breakpoint-tablet)
      flex-direction: column
  &-Column
    position: relative
    width: 100%
    height: 100%
    -ms-overflow-style: none // Prevents scrollbar
    scrollbar-width: none


    &::-webkit-scrollbar
      display: none
    &_One
      display: flex
      flex-direction: column
      justify-content: flex-start
      padding: var(--spacing-ver) var(--spacing-hor)
      gap: 1rem
      @media screen and (min-width: $breakpoint-tablet)
        padding-top: calc(7rem + #{var(--spacing-ver)})
        // border-right: 1px solid hsla(0, 0%, 0%, .1)
    &_Two
      position: relative
      width: 100%
      height: 100%
      display: inline-flex
      flex-direction: row
      flex-wrap: nowrap
      padding: var(--spacing-ver) var(--spacing-hor)
      @media screen and (max-width: $breakpoint-tablet)
        padding-bottom: calc(3 * #{var(--spacing-ver)})
      // & > div
      //   @media screen and (max-width: $breakpoint-tablet)
      //     flex-direction: column
      //     align-items: center
      //     overflow-y: none

  &.isOneColumn
    .modal-Content
      overflow-y: auto
      & > div:last-child
        & > div:last-child
          padding-bottom: calc(3 * #{var(--spacing-ver)})
    .modal-Header
      background: white


  &.isTwoColumn
    .modal-Content
      @media screen and (max-width: $breakpoint-tablet)
        display: flex
        flex-direction: column
        justify-content: flex-start
        height: 100%
        overflow-y: auto
        & > div
          flex-shrink: 0
          height: auto
      @media screen and (min-width: $breakpoint-tablet)
        .modal-Column_One
          overflow-y: auto
          padding-bottom: calc(3 * #{var(--spacing-ver)})
          height: 100%
        .modal-Column_Two
          .blokSlider
            height: 100%
            &-Image
              height: 100%
    .modal-Header
      &_Title
        background: white
        h1
          font-weight: 500

  &.active
    .modal-Background
      opacity: 1
      transition: opacity $transition-bg 1s

// .modalSide
//   top: 0
//   right: 0
//   width: 66vw
//   height: 100vh

// .modalCenter
//   display: flex
//   flex-direction: column
//   align-items: center
//   top: 3vmax
//   right: 3vmin
//   bottom: 3vmax
//   left: 3vmin

// .modalContent
//   max-width: 50vw
//   padding-bottom: 3rem

// .twoColumn
//   display: flex
//   flex-direction: row
//   justify-content: space-between
//   width: 100%
//   height: 100%
//   &_Left
//     flex: 1
//     padding-right: 1rem
//     position: sticky
//   &_Right
//     flex: 1
//     padding-left: 1rem
</style>
