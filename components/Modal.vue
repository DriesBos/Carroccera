<template>
  <div class="modal">
    <div @click.native="$emit('close')" class="modal-Background" />

    <div class="modal-Container mouseInvert">
      <div @click.native="$emit('close')" class="modal-Close mouseInteract">
        <div class="dot active" />
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
    cursor: pointer
    transition: opacity $transition-bg
  &-Container
    position: relative
    width: calc(100% - 2 * #{var(--spacing-hor)})
    height: calc(100% - 2 * #{var(--spacing-ver)})
    background: white
    color: black
    pointer-events: auto
    overflow: hidden
    @media screen and (max-width: $breakpoint-mobile)
      display: flex
      flex-direction: column
      width: calc(100% - 6.25vmin)
      height: calc(100% - 6.25vmin)
  &-Close
    position: absolute
    top: 0
    right: 0
    padding: var(--spacing-ver) var(--spacing-hor)
    z-index: +2
  &-Header
    width: 100%
    background: white
    pointer-events: none
    z-index: +1
    h1
      font-weight: 500
    p
      margin-top: .5rem
      line-height: 1
      font-size: $font-small
    @media screen and (max-width: $breakpoint-mobile)
      position: absolute
      top: 0
      left: 0
      padding: var(--spacing-ver) var(--spacing-hor)
  &-Content
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    align-items: flex-start
    flex: 1
    @media screen and ( max-width: $breakpoint-tablet)
      flex-direction: column
  &-Column
    position: relative
    width: 100%
    height: 100%
    -ms-overflow-style: none // Prevents scrollbar
    scrollbar-width: none
    &_One
      display: flex
      flex-direction: column
      justify-content: flex-start
      padding: var(--spacing-ver) var(--spacing-hor)
      padding-bottom: 0
      gap: 1rem
      @media screen and (max-width: $breakpoint-mobile)
        padding-top: 4.5rem
      &_Content
        flex-direction: column
        justify-content: flex-start
        gap: 1rem
        & > div
          margin-bottom: 1rem
          &:last-child
            margin-bottom: 0
            @media screen and (min-width: $breakpoint-mobile)
              margin-bottom: 1rem
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


  &.isOneColumn
    .modal-Content
      overflow-y: auto
      & > div:last-child
        & > div:last-child
          padding-bottom: calc(3 * #{var(--spacing-ver)})

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
          overflow-y: none
          width: 50%
          &_Content
            overflow-y: auto
        .modal-Column_Two
          width: 50%
          .blokSlider
            height: 100%
            &-Image
              height: 100%

  &.active
    .modal-Background
      opacity: 1
      transition: opacity $transition-bg 1s
</style>
