<template>
  <div class="blok blokSlider">
    <div class="blokSlider-Image" :class="blok.ratio">
      <Transition name="sliderFade">
        <img :key="currentImage" :src="images[currentImage].filename" alt="" />
      </Transition>
    </div>
    <Transition name="fade">
      <div
        v-show="isNextVisible"
        @click="nextImage"
        class="blokSlider-Nav blokSlider-Nav_Next mouseInteract"
      >
        <div class="icon icon-ArrowRight">
          <img src="~assets/icons/arrow.png" alt="" />
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div
        v-show="isPrevVisible"
        @click="prevImage"
        class="blokSlider-Nav blokSlider-Nav_Prev mouseInteract"
      >
        <div class="icon">
          <img src="~assets/icons/arrow.png" alt="" />
        </div>
      </div>
    </Transition>
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
      images: this.blok.images,
    };
  },
  mounted() {
    this.navVisibility();
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
    top: 50%
    transform: translateY(-50%)
    color: black
    // mix-blend-mode: difference
    padding: var(--spacing-one)
    .dot
      width: 1rem
      height: 1rem
      border-radius: 1000px
      pointer-events: all
      background: white
      transition: all .33s ease
    &_Next
      right: 0
    &_Prev
      left: 0
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
  .square, .landscape, .video, .wide
    width: 100%
  @media screen and ( min-width: $breakpoint-mobile)
    .square
      aspect-ratio: auto 1 / 1
    .landscape
      aspect-ratio: auto 3 / 2
    .video
      aspect-ratio: auto 4 / 3
    .wide
      aspect-ratio: auto 16 / 9
    .full
      width: 100%


.modal-Column_Two
  .blokSlider
    height: 100%
    &-Image
      height: 100%
</style>
