<template>
  <div
    v-editable="blok"
    @click.native="openModal"
    class="menuItem mouseInteract"
  >
    <!-- Visible -->
    <div class="dot" />
    <p>{{ blok.title }}</p>
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

const { setLock } = useGlobalScrollLock();

const data = defineProps({ blok: Object });

const isModalActive = ref(false);
const isOneColumn = ref(true);
const isTwoColumn = ref(false);

// Generate unique key for this modal instance
const modalKey = `modal-menu-${Math.random().toString(36).slice(2, 9)}`;

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

// Lock scroll when modal is active
watch(isModalActive, (newVal) => {
  setLock(modalKey, newVal);
});

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isModalActive.value = false;
    }
  });
});
</script>
