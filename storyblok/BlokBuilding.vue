<template>
  <div
    v-editable="blok"
    :id="blok.title.replace(/\s/g, '')"
    class="blokBuilding mouseInteract"
    :class="[blok.position, blok.positionvertical]"
  >
    <!-- Visible -->
    <div class="blokBuilding-Arrow">
      <NuxtImg
        src="/f/264497/128x230/f3a37fbdbe/short-arrow.png"
        alt=""
        provider="storyblok"
        quality="60"
        format="webp"
        loading="lazy"
      />
    </div>
    <NuxtImg
      v-if="blok.imagelandscape.filename"
      class="landscape"
      @click.native="openModal"
      :src="blok.imagelandscape.filename"
      alt=""
      provider="storyblok"
      quality="60"
      format="webp"
      sizes="xsm:427px sm:456px md:480px lg:512px xl:640px"
      loading="lazy"
    />
    <NuxtImg
      v-if="blok.image.filename"
      class="portrait"
      @click.native="openModal"
      :src="blok.image.filename"
      alt=""
      provider="storyblok"
      quality="60"
      format="webp"
      sizes="xsm:120px sm:130px md:256px lg:341px xl:427px"
      loading="lazy"
    />
    <!-- Invisible -->
    <Teleport to="body">
      <Transition name="fade">
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
          <div v-if="blok.title" class="modal-Header mobile">
            <h1>{{ blok.title }}</h1>
            <p v-if="blok.date">{{ blok.date }}</p>
          </div>
          <!-- Col One -->
          <div v-if="blok.body" class="modal-Column modal-Column_One">
            <div v-if="blok.title" class="modal-Header desktop">
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

watch(isModalActive, (newVal) => {
  init();
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
  width: 33.3333vh
  height: 33.3333vh
  pointer-events: auto
  z-index: +1
  @media (orientation: portrait)
    width: 33.3333vw
    height: 33.3333vw
  &.left
    left: 0
  &.middle
    @media (orientation: portrait)
      left: calc(50% - (33.3333vw / 2))
    @media (orientation: landscape)
      left: calc(50% - (33.3333vh / 2))
  &.right
    left: auto
    right: 0
  &.top
    top: 0
  &.center
    @media (orientation: portrait)
      top: calc(50% - (33.3333vw / 2))
    @media (orientation: landscape)
      top: calc(50% - (33.3333vh / 2))
  &.bottom
    top: auto
    bottom: 0
  img
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center center
  &-Arrow
    position: absolute
    top: 0
    left: 50%
    transform: translate(-50%, -33%)
    width: 7vh
    @media (orientation: portrait)
      width: 7vw
    height: auto !important
    transition: all 0.165s ease
    animation: fadeInOut 2000ms ease-in-out infinite
  &:hover
    @media (hover: hover)
    .blokBuilding-Arrow
      transform: translate(-50%, -50%)
      animation: none

@keyframes fadeInOut
  0%
    opacity: 1
  75%
    opacity: 1
  85%
    opacity: 0
  100%
    opacity: 1
</style>
```
