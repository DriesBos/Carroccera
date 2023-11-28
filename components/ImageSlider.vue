<template>
  <div class="slider">
    <div class="slider-Image">
      <img :src="images[currentImage].image" alt="" />
    </div>
    <div class="slider-Nav slider-Nav_Next mouseInteract">next</div>
    <div class="slider-Nav slider-Nav_Prev mouseInteract">prev</div>
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
    };
  },
  mounted() {
    document
      .querySelector('.slider-Nav_Next')
      .addEventListener('click', this.nextImage);
    document
      .querySelector('.slider-Nav_Prev')
      .addEventListener('click', this.prevImage);
  },
  methods: {
    nextImage() {
      this.currentImage++;
      if (this.currentImage >= this.images.length) {
        this.currentImage = 0;
      }
      console.log(this.currentImage);
    },
    prevImage() {
      this.currentImage--;
      if (this.currentImage < 0) {
        this.currentImage = this.images.length - 1;
      }
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
    cursor: pointer
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
