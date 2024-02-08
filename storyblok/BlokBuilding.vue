<template>
  <div
    v-editable="blok"
    :id="blok.title.replace(/\s/g, '')"
    class="blokBuilding mouseInteract"
    :class="[blok.position, blok.positionvertical]"
  >
    <!-- Visible -->
    <NuxtImg
      provider="storyblok"
      format="webp"
      quality="80"
      v-if="blok.imagelandscape.filename"
      class="landscape"
      @click.native="openModal"
      :src="blok.imagelandscape.filename"
      alt=""
      loading="lazy"
    />
    <NuxtImg
      provider="storyblok"
      format="webp"
      quality="80"
      v-if="blok.image.filename"
      class="portrait"
      @click.native="openModal"
      :src="blok.image.filename"
      alt=""
      loading="lazy"
    />
    <div class="blokBuilding-Dot dot" />
    <!-- Invisible -->
    <Teleport to="body">
      <Transition name="fade">
        <lazyModal
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
            <div v-if="blok.title" class="modal-Column_One_Header">
              <h1>{{ blok.title }}</h1>
              <p v-if="blok.date">{{ blok.date }}</p>
            </div>
            <div class="modal-Column_One_Content">
              <StoryblokComponent
                v-for="blok in blok.body"
                :key="blok._uid"
                :blok="blok"
              />
            </div>
          </div>
          <!-- Col Two -->
          <div v-if="isTwoColumn" class="modal-Column modal-Column_Two">
            <StoryblokComponent
              v-for="blok in blok.layouthor"
              :key="blok._uid"
              :blok="blok"
            />
          </div>
        </lazyModal>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineAsyncComponent } from 'vue';

const data = defineProps({ blok: Object });

const lazyModal = defineAsyncComponent(() => import('@/components/Modal.vue'));

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
  z-index: +1
  &-Icon
    position: absolute
    top: 25%
    left: 25%
    transform: translate(-50%, -50%)
  &-Dot
    position: absolute
    top: 25%
    left: 25%
    transform: translate(-50%, -50%)
  &.left
    left: 0
  &.middle
    left: 33.3333vw
  &.right
    left: 66.6666vw
  &.top
    top: 0%
  &.center
    @media (orientation: landscape)
      top: 25vmin
    @media (orientation: portrait)
      top: 38vw
  &.bottom
    @media (orientation: landscape)
      top: 50vmin
    @media (orientation: portrait)
      top: 76vw
  img
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
</style>
```
