<template>
  <div
    v-editable="blok"
    class="blokBuilding mouseInteract"
    :class="blok.position"
  >
    <img @click.native="openModal" :src="blok.image.filename" alt="" />
    <Teleport to="body">
      <Modal
        v-show="isModalActive"
        @close="closeModal"
        :class="{ active: isModalActive }"
        :blok="blok.body"
      >
        <StoryblokComponent
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        />
      </Modal>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({ blok: Object });

const isModalActive = ref(false);

function openModal() {
  isModalActive.value = true;
}

function closeModal() {
  isModalActive.value = false;
}
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
  img
    width: 30vw
    height: 100%
    object-fit: contain
    object-position: center center
</style>
```
