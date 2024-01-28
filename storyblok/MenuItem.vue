<template>
  <div v-editable="blok" class="menuItem">
    <!-- Visible -->
    <div class="mouseInteract" @click.native="openModal">
      <p>{{ blok.title }}</p>
    </div>
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
import { ref, onMounted } from 'vue';

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

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isModalActive.value = false;
    }
  });
});
</script>
