<template>
  <div class="slider">
    <div class="slider-Image">
      <Transition name="fade">
        <img :key="currentImage" :src="images[currentImage].image" alt="" />
      </Transition>
    </div>
    <Transition name="fade">
      <div
        v-if="isNextVisible"
        @click="nextImage"
        class="slider-Nav slider-Nav_Next mouseInteract"
      >
        next
      </div>
    </Transition>
    <Transition name="fade">
      <div
        v-if="isPrevVisible"
        @click="prevImage"
        class="slider-Nav slider-Nav_Prev mouseInteract"
      >
        prev
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImage: 0,
      isNextVisible: true,
      isPrevVisible: true,
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

<style lang="sass" scoped>
.slider
  position: relative
  width: 100%
  height: 100%
  &-Nav
    position: absolute
    top: 50%
    transform: translateY(-50%)
    width: 33.3333%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    &.slider-Nav_Next
      right: 0
    &.slider-Nav_Prev
      left: 0
  &-Image
    position: relative
    width: 100%
    height: 100%
    img
      width: 100%
      height: 100%
      object-fit: contain
      object-position: center center
</style>
