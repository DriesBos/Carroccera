<template>
  <div>
    <Celestials />
    <ul class="landscape">
      <li class="panel"><img src="~assets/img/layer1.png" alt="" /></li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer2.png" alt="" />
        <div class="building" @click="openModal">
          <img src="~assets/img/sketch1.png" alt="" />
        </div>
      </li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer3.png" alt="" />
      </li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer4.png" alt="" />
      </li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer5.png" alt="" />
        <div class="building" @click="openModal">
          <img src="~assets/img/sketch2.png" alt="" />
        </div>
      </li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer6.png" alt="" />
      </li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer7.png" alt="" />
      </li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer8.png" alt="" />
      </li>
      <TheFooter class="landpanel" />
    </ul>
  </div>
  <Transition>
    <div
      v-if="isModalVisible"
      class="modal"
      :class="{ active: isModalVisible }"
    >
      <div class="button cursorInteract icon" @click="closeModal">
        <img src="~assets/icons/close.png" alt="" />
      </div>
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
    .building
      position: absolute
      top: 0
      left: 10vw
      cursor: pointer
      img
        width: 300px
        height: auto
    &:nth-child(2)
      margin-top: -10%
    &:nth-child(3)
      margin-top: -12%
    &:nth-child(4)
      margin-top: -15%
    &:nth-child(5)
      margin-top: -14%
    &:nth-child(6)
      margin-top: -16%
    &:nth-child(7)
      margin-top: -29%
    &:nth-child(8)
      margin-top: -30%
    &.landpanel
      z-index: +1

.modal
  position: fixed
  top: 0
  right: 0
  width: 50vw
  height: 100vh
  background: white
  z-index: +2

.v-enter-active,
.v-leave-active
  transition: 0.25s ease-in-out
  transform: translateX(0)

.v-enter-from,
.v-leave-to
  transform: translateX(100%)
</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

definePageMeta({
  title: 'Carroccera',
});

onMounted(() => {
  const boxes = document.querySelectorAll('.landpanel');
  console.log(boxes);
  boxes.forEach((box) => {
    gsap.to(box, {
      y: '-6%',
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });
});

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
