<template>
  <div class="footerBar">
    <div class="footerBar-Block">
      <div class="footerBar-Column">
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="callto:0044848670933" target="_blank"
            >+39 3456867324</a
          >
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="mailto:info@carrocerracollective.com">
            info@carrocerra.com
          </a>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="https://instagram.com" target="_blank">
            instagram
          </a>
          <div class="icon icon-Instagram">
            <img src="~assets/icons/insta.png" alt="" />
          </div>
        </div>
      </div>

      <div class="footerBar-Column">
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="https://maps.google.com" target="_blank"
            >Via Verd1 1<br />20344 Milano, Italy</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.footerBar
  position: absolute
  left: 0
  bottom: 0
  display: flex
  flex-direction: row
  width: 100%
  font-size: $type-size-p
  font-weight: normal
  line-height: $lineheight-p
  color: white
  mix-blend-mode: difference
  @media screen and ( max-width: $breakpoint-tablet)
    flex-direction: column
  &-Block
    width: 100%
    display: flex
    @media screen and ( max-width: $breakpoint-tablet)
      padding: var(--spacing-ver) 0
    & > div
      flex: 1
      &:last-child
        align-items: flex-end
        a
          text-align: right
  &-Column
    display: flex
    flex-direction: column
    padding: var(--spacing-hor) var(--spacing-ver)
    padding-bottom: 16%
    &-Title
      margin-bottom: 2rem
    &-Link
      display: flex
      flex-wrap: wrap
      align-items: center
      gap: 1rem
      flex-shrink: 0
      margin-bottom: .5rem
      a
        text-decoration: none
      @media (max-width: 768px)
        gap: .5rem
      // .underline
      //   text-decoration: underline
      //   text-decoration-color: $color-secondary
      //   a
      //     text-decoration: underline
      //     text-decoration-color: $color-secondary
</style>
