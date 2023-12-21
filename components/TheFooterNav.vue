<template>
  <div class="footerBar mouseInvert">
    <div class="footerBar-Block">
      <div class="footerBar-Column">
        <div class="footerBar-Column-Title">Contact</div>
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="callto:0044848670933" target="_blank"
            >+44 8 4867 0933</a
          >
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="mailto:info@carrocerracollective.com">
            info@carrocerra.com
          </a>
        </div>
      </div>

      <div class="footerBar-Column">
        <div class="footerBar-Column-Title">Location</div>
        <div class="footerBar-Column-Link mouseInteract">
          <p>Via Verde 1<br />28003 Cera, Italy</p>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <a class="underline" href="https://maps.google.com" target="_blank"
            >View on map</a
          >
        </div>
      </div>
    </div>

    <div class="footerBar-Block">
      <div class="footerBar-Column">
        <div class="footerBar-Column-Title">Sitemap</div>
        <div class="footerBar-Column-Link mouseInteract">
          <NuxtLink class="underline" to="#layer">Building One</NuxtLink>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <NuxtLink class="underline" to="#layer">Building Two</NuxtLink>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <NuxtLink class="underline" to="#layer">Building Three</NuxtLink>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <NuxtLink class="underline" to="#layer">Building Four</NuxtLink>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <NuxtLink class="underline" to="#layer">Landscape One</NuxtLink>
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <NuxtLink class="underline" to="/terms">Terms</NuxtLink>
        </div>
      </div>

      <div class="footerBar-Column">
        <div class="footerBar-Column-Title">Follow</div>
        <div class="footerBar-Column-Link mouseInteract">
          <div class="icon icon-Instagram">
            <img src="~assets/icons/insta.png" alt="" />
          </div>
          <a class="underline" href="https://instagram.com" target="_blank"
            >instagram</a
          >
        </div>
        <div class="footerBar-Column-Link mouseInteract">
          <div class="icon icon-Twitter">
            <img src="~assets/icons/x.png" alt="" />
          </div>
          <a class="underline" href="https://twitter.com" target="_blank"
            >twitter</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.footerBar
  position: relative
  display: flex
  flex-direction: row
  width: 100%
  padding: var(--spacing-ver) 0
  font-size: $type-size-p
  font-weight: normal
  line-height: $lineheight-p
  @media screen and ( max-width: $breakpoint-tablet)
    flex-direction: column
  &-Block
    width: 100%
    display: flex
    @media screen and ( max-width: $breakpoint-tablet)
      padding: var(--spacing-ver) 0
    & > div
      flex: 1
  &-Column
    display: flex
    flex-direction: column
    padding: var(--spacing-hor) var(--spacing-ver)
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
      .underline
        text-decoration: underline
        text-decoration-color: $color-secondary
        a
          text-decoration: underline
          text-decoration-color: $color-secondary
</style>
