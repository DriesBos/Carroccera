<template>
  <div
    v-editable="blok"
    class="blokBuilding mouseInteract"
    :class="[blok.position, blok.positionvertical]"
  >
    <!-- Visible -->
    <img
      v-if="blok.imagelandscape.filename"
      class="landscape"
      @click.native="openModal"
      :src="blok.imagelandscape.filename"
      alt=""
    />
    <img
      v-if="blok.image.filename"
      class="portrait"
      @click.native="openModal"
      :src="blok.image.filename"
      alt=""
    />
    <!-- Invisible -->
    <Teleport to="body">
      <Transition name="slideUp">
        <Modal
          v-if="isModalActive"
          @close="closeModal"
          :class="{
            active: isModalActive,
            isTwoColumn: isTwoColumn,
            isOneColumn: isOneColumn,
          }"
          :blok="blok.body"
          :title="blok.title"
          :subtitle="blok.date"
        >
          <!-- Col One -->
          <div v-if="blok.body" class="modal-Column modal-Column_One">
            <StoryblokComponent
              v-for="blok in blok.body"
              :key="blok._uid"
              :blok="blok"
            />
          </div>
          <!-- Col Two -->
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
import { ref, onMounted, watch } from 'vue';

const data = defineProps({ blok: Object });

const isModalActive = ref(false);
const isOneColumn = ref(true);
const isTwoColumn = ref(false);

function openModal() {
  isModalActive.value = true;
}

function closeModal() {
  isModalActive.value = false;
}

const init = async () => {
  if (data.blok.layouthor && data.blok.layouthor.length > 0) {
    isTwoColumn.value = true;
    isOneColumn.value = false;
  } else {
    isOneColumn.value = true;
    isTwoColumn.value = false;
  }
};
init();

watch(isModalActive, (newVal) => {
  if (newVal) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
});

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isModalActive.value = false;
    }
  });
});
</script>

<style lang="sass" scoped>
.blokBuilding
  position: absolute
  left: 0
  top: 0
  width: 33.3333vw
  height: 33.3333vw
  pointer-events: all
  @media (orientation: portrait)
    width: 33.3333vw
    height: 33.3333vw
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
    left: 33.3333vw
  &.right
    left: 66.6666vw
  &.top
    top: -12%
    @media (orientation: landscape)
      top: -50%
    @media (orientation: portrait)
      top: -12%
  &.center
    top: 30%
    transform: translateY(-50%)
    @media (orientation: landscape)
      top: 25%
    @media (orientation: portrait)
      top: 30%
      transform: translateY(-50%)
  &.bottom
    top: auto
    bottom: 30%
    @media (orientation: landscape)
      top: auto
      bottom: 30%
    @media (orientation: portrait)
      top: auto
      bottom: 30%
  img
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
</style>
```
