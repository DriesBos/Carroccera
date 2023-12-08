<template>
  <div
    v-editable="blok"
    class="blokBuilding mouseInteract"
    :class="[blok.position, blok.positionvertical]"
  >
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
  bottom: 0
  &.one
    left: random(14) + vw
  &.two
    left: random(14) + 29vw
  &.three
    left: random(14) + 43vw
  &.four
    left: random(14) + 57vw
  &.five
    left: random(14) + 71vw
  &.top
    top: 0
  &.center
    top: 25%
    translform: translateY(-50%)
  &.bottom
    top: 50%
    translform: translateY(-50%)
  img
    width: 30vw
    height: auto
    object-fit: contain
    object-position: center center
</style>
```
