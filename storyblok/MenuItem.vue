<template>
  <div class="menuItem">
    <div class="mouseInteract" @click.native="openModal">
      <p>{{ blok.title }}</p>
    </div>
    <Teleport to="body">
      <Transition name="slideUp">
        <Modal
          v-show="isModalActive"
          @close="closeModal"
          class="mouseInvert"
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
.menuItem
  width: 100%
  border-bottom: 1px solid currentColor
</style>
