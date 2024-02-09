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
    transition: opacity $transition-bg 1s
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
    z-index: +1
  &-Content
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    align-items: safe center
    flex: 1
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
      justify-content: safe center
      padding: var(--spacing-ver) var(--spacing-hor)
      gap: 1rem
      &_Header
        p
          margin-top: .5rem
          line-height: 1
          font-size: $font-small
      &_Content
        flex-direction: column
        justify-content: safe center
        gap: 1rem
        & > div
          margin-bottom: 1rem
          &:last-child
            margin-bottom: 0
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
      @media screen and (min-width: $breakpoint-tablet)
        .modal-Column_One
          padding-right: calc(2 * #{var(--spacing-hor)})
        .modal-Column_Two
          padding-left: 0
    .modal-Header
      &_Title
        background: white
        h1
          font-weight: 500

  &.active
    .modal-Background
      opacity: 1
      transition: opacity $transition-bg 1s
</style>
