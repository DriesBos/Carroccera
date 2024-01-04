<template>
  <div
    v-editable="blok"
    class="blokBuilding mouseInteract"
    :class="[blok.position, blok.positionvertical]"
  >
    <!-- <div class="blokBuilding-Indicator">
      hor:{{ blok.position }} ver:{{ blok.positionvertical }}
    </div> -->
    <img
      v-if="blok.image.filename"
      @click.native="openModal"
      :src="blok.image.filename"
      alt=""
    />
    <Teleport to="body">
      <Transition name="slideUp">
        <Modal
          v-show="isModalActive"
          @close="closeModal"
          :class="{ active: isModalActive, isTwoColumn: isTwoColumn }"
          :blok="blok.body"
        >
          <div v-if="blok.body" class="modal-Column modal-Column_One">
            <div v-if="blok.title" class="modal-Column_Title">
              <h1>{{ blok.title }}</h1>
            </div>
            <StoryblokComponent
              v-for="blok in blok.body"
              :key="blok._uid"
              :blok="blok"
            />
          </div>
          <div v-if="isTwoColumn" class="modal-Column modal-Column_Two">
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

const data = defineProps({ blok: Object });

const isModalActive = ref(false);

const isTwoColumn = ref(false);

function openModal() {
  isModalActive.value = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isModalActive.value = false;
  document.body.style.overflow = 'auto';
}

const init = async () => {
  // I want use props in this
  // const { data } = await getRoomByNo(props.no)
  if (data.blok.layouthor && data.blok.layouthor.length > 0) {
    isTwoColumn.value = true;
  }
};
init();

onMounted(() => {
  // if (blok.value.layouthor) {
  //   ifHorizontal.value = true;
  // }
});
</script>

<style lang="sass" scoped>
.blokBuilding
  position: absolute
  left: 0
  top: 0
  width: 33vw
  height: 33vw
  z-index: $z-buildings
  pointer-events: all
  &-Indicator
    position: absolute
    top: 0
    left: 0
    font-size: .8rem
    text-transform: uppercase
    font-family: $sans-serif
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
</style>
```
