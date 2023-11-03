<template>
  <div>
    <ul class="landscape">
      <li><img src="~assets/img/layer1.png" alt="" /></li>
      <li class="panel movingpanel">
        <img src="~assets/img/layer2.png" alt="" />
        <div class="building" @click="openModal">
          <img src="~assets/img/sketch2.png" alt="" />
        </div>
      </li>
      <li class="panel"><img src="~assets/img/layer3.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer4.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer5.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer6.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer7.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer8.png" alt="" /></li>
    </ul>
  </div>
  <Transition>
    <div
      v-if="isModalVisible"
      class="modal"
      :class="{ active: isModalVisible }"
    >
      <div class="button cursorInteract" @click="closeModal">
        <img src="~assets/icons/close.svg" alt="" />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="sass">
.modalbutton
  background: white
  position: fixed
  left: 0
  top: 0
  z-index: 100
.landscape
  position: relative
  width:100vw
  display: flex
  flex-direction: column
  justify-content: flex-start
  li
    width: 100vw
    img
      width: 100%
      max-width: 100%
      height: auto
    .building
      position: absolute
      top: 0
      left: 10vw
      cursor: pointer
      img
        width: 300px
        height: auto

.panel
  position: fixed
  bottom: 0
  left: 0
  right: 0
  pointer-events: none

.movingpanel
  transform: translateY(-10%)
  pointer-events: all
  transition: 0.25s ease-in-out
  &:hover
    transform: translateY(-80%)
    border: 1px solid red

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
