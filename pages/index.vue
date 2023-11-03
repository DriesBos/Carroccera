<template>
  <div>
    <p @click="openModal">OPEN</p>
    <ul class="landscape">
      <li><img src="~assets/img/layer1.png" alt="" /></li>
      <li><img src="~assets/img/layer2.png" alt="" /></li>
      <li><img src="~assets/img/layer3.png" alt="" /></li>
      <li><img src="~assets/img/layer4.png" alt="" /></li>
      <li><img src="~assets/img/layer5.png" alt="" /></li>
      <li><img src="~assets/img/layer6.png" alt="" /></li>
      <li><img src="~assets/img/layer7.png" alt="" /></li>
      <li><img src="~assets/img/layer8.png" alt="" /></li>
    </ul>
  </div>
  <Transition>
    <div
      v-if="isModalVisible"
      class="modal"
      :class="{ active: isModalVisible }"
    >
      <p @click="closeModal">CLOSE</p>
    </div>
  </Transition>
</template>

<style scoped lang="sass">
.landscape
  width:100vw
  display: flex
  flex-direction: column
  justify-content: flex-start
  li
    position: relative
    width: 100vw
    img
      width: 100%
      max-width: 100%
      height: auto
  li:nth-child(n+2)
    margin-top: -10%
    transition: margin-top 0.25s ease-in-out
    &:hover
      margin-top: -20%

.modal
  position: fixed
  top: 0
  right: 0
  width: 50vw
  height: 100vh
  background: white

.v-enter-active,
.v-leave-active
  transition: 0.25s ease-in-out
  transform: translateX(0)

.v-enter-from,
.v-leave-to
  transform: translateX(100%)
</style>

<script setup>
import { ref } from 'vue';
const isModalVisible = ref(false);

function openModal() {
  isModalVisible.value = true;
  console.log(isModalVisible.value);
}

function closeModal() {
  isModalVisible.value = false;
  console.log(isModalVisible.value);
}
</script>
