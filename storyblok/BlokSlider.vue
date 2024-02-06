<template>
  <div class="blok blokSlider">
    <div class="blokSlider-Image" :class="blok.ratio">
      <Transition name="sliderFade">
        <NuxtImg
          provider="storyblok"
          format="webp"
          quality="80"
          :src="images[currentImage].filename"
          :key="currentImage"
          alt=""
        />
      </Transition>
      <div
        v-show="isNextVisible"
        @click="nextImage"
        class="blokSlider-Nav blokSlider-Nav_Next mouseInteract"
      ></div>
      <div
        v-show="isPrevVisible"
        @click="prevImage"
        class="blokSlider-Nav blokSlider-Nav_Prev mouseInteract"
      ></div>
    </div>
    <div class="blokSlider-Counter" :class="{ active: isCounterVisible }">
      <div
        @click="prevImage"
        :class="{ active: isPrevVisible }"
        class="icon icon-Half blokSlider-Counter_Prev"
      >
        <img src="~assets/icons/iconblok-prev.png" alt="" />
      </div>
      <p>{{ currentImage + 1 }} of {{ images.length }}</p>
      <div
        @click="nextImage"
        :class="{ active: isNextVisible }"
        class="icon icon-Half blokSlider-Counter_Next"
      >
        <img src="~assets/icons/iconblok-next.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object,
  },
  data() {
    return {
      currentImage: 0,
      isNextVisible: true,
      isPrevVisible: true,
      isCounterVisible: false,
      images: this.blok.images,
    };
  },
  mounted() {
    this.navVisibility();
    this.counterVisibility();
    this.nextprevVisibility();
  },
  methods: {
    navVisibility() {
      if (this.images.length <= 1) {
        this.isNextVisible = false;
        this.isPrevVisible = false;
      } else {
        this.isNextVisible = true;
        this.isPrevVisible = true;
      }
    },
    counterVisibility() {
      if (this.images.length <= 1) {
        this.isCounterVisible = false;
      } else {
        this.isCounterVisible = true;
      }
    },
    nextprevVisibility() {
      if (this.currentImage == this.images.length - 1) {
        this.isNextVisible = false;
      } else {
        this.isNextVisible = true;
      }
      if (this.currentImage == 0) {
        this.isPrevVisible = false;
      } else {
        this.isPrevVisible = true;
      }
    },
    nextImage() {
      this.currentImage++;
      this.nextprevVisibility();
    },
    prevImage() {
      this.currentImage--;
      this.nextprevVisibility();
    },
  },
};
</script>

<style lang="sass">
.blokSlider
  position: relative
  width: 100%
  &-Nav
    position: absolute
    top: 0
    bottom: 0
    width: 50%
    color: black
    padding: 1rem
    mix-blend-mode: difference
    display: flex
    align-items: center
    .dot
      width: 1rem
      height: 1rem
      border-radius: 1000px
      pointer-events: all
      background: white
      transition: all .33s ease
    &_Next
      right: 0
      justify-content: flex-end
    &_Prev
      left: 0
      justify-content: flex-start
  &-Counter
    visibility: hidden
    display: flex
    align-items: center
    gap: .5rem
    &_Prev, &_Next
      cursor: pointer
      pointer-events: none
      opacity: .25
      &.active
        pointer-events: auto
        opacity: 1
    @media screen and ( min-width: $breakpoint-tablet)
      position: absolute
      right: 0
      bottom: 0
    @media screen and ( max-width: $breakpoint-tablet)
      position: relative
      width: 100%
      display: flex
      justify-content: center
    &.active
      padding-top: 1rem
      visibility: visible
      text-align: center
  &-Image
    position: relative
    width: 100%
    overflow: hidden
    img
      width: 100%
      height: 100%
      object-fit: contain
      object-position: center center

.modal-Column_One
  .square, .rectangular, .video, .wide
    width: 100%
  @media screen and ( min-width: $breakpoint-mobile)
    .square
      aspect-ratio: auto 1 / 1
    .rectangular
      aspect-ratio: auto 3 / 2
    .video
      aspect-ratio: auto 4 / 3
    .wide
      aspect-ratio: auto 16 / 9
    .full
      width: 100%
</style>
