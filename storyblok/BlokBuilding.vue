<template>
  <div
    v-editable="blok"
    class="blokBuilding mouseInteract"
    :class="[blok.position, blok.positionvertical]"
  >
    <div class="blokBuilding-Indicator">
      hor:{{ blok.position }} ver:{{ blok.positionvertical }}
    </div>
    <img @click.native="openModal" :src="blok.image.filename" alt="" />
    <Teleport to="body">
      <Transition name="fade">
        <Modal
          v-show="isModalActive"
          @close="closeModal"
          :class="{ active: isModalActive }"
          :blok="blok.body"
        >
          <div v-if="blok.alignment === 'ver'" class="modal-Content_Vertical">
            <StoryblokComponent
              v-for="blok in blok.body"
              :key="blok._uid"
              :blok="blok"
            />
          </div>
          <div v-if="blok.alignment === 'hor'" class="modal-Content_Horizontal">
            <StoryblokComponent
              v-for="blok in blok.layouthor"
              :key="blok._uid"
              :blok="blok"
            />
          </div>
        </Modal>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({ blok: Object });

const isModalActive = ref(false);

const ifHorizontal = false;

function openModal() {
  isModalActive.value = true;
}

function closeModal() {
  isModalActive.value = false;
}

onMounted(() => {
  // if (blok.value.layouthor) {
  //   ifHorizontal.value = true;
  // }
  // console.log('ifHorizontal', ifHorizontal, blok.value);
});
</script>

<style lang="sass" scoped>
.test
  z-index: 999
.blokBuilding
  position: absolute
  left: 0
  top: 0
  width: 33vw
  height: 33vw
  &-Indicator
    position: absolute
    top: 0
    left: 0
    font-size: .8rem
    text-transform: uppercase
    font-family: Arial, Helvetica, sans-serif
  &.left
    left: 0
  &.middle
    left: 33vw
  &.right
    left: 66vw
  &.top
    top: 0
  &.center
    top: 42%
    transform: translateY(-50%)
  &.bottom
    top: auto
    bottom: 16%
    // transform: translateY(-50%)
  img
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
    border: 1px solid green
</style>
```
