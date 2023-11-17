<template>
  <div>
    <Celestials />
    <ul class="landscape">
      <li class="panel"><img src="~assets/img/layer1.png" alt="" /></li>
      <li class="panel landscapePanel landpanel">
        <img src="~assets/img/layer2.png" alt="" />
        <div class="building" @click="openModalSide">
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
        <div class="building" @click="openModalCenter">
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
  <Transition name="slideFromRight">
    <div
      v-if="isModalSideVisible"
      class="modal modalSide"
      :class="{ active: isModalSideVisible }"
    >
      <div class="modalClose cursorInteract icon" @click="closeModalSide">
        <img src="~assets/icons/close.png" alt="" />
      </div>
      <div class="modalContent">
        <div class="blockImage">
          <img src="~assets/img/content1.jpg" alt="" />
        </div>
        <div class="blockImage">
          <img src="~assets/img/content2.jpg" alt="" />
        </div>
      </div>
    </div>
  </Transition>
  <Transition name="fade">
    <div
      v-if="isModalCenterVisible"
      class="modal modalCenter"
      :class="{ active: isModalCenterVisible }"
    >
      <div class="modalClose cursorInteract icon" @click="closeModalCenter">
        <img src="~assets/icons/close.png" alt="" />
      </div>
      <div class="modalContent">
        <div class="blockImage">
          <img src="~assets/img/content1.jpg" alt="" />
        </div>
        <div class="blockImage">
          <img src="~assets/img/content2.jpg" alt="" />
        </div>
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
  overflow: auto
  padding: 5rem
  position: fixed
  background: white
  z-index: +2

.modalClose
  position: absolute
  top: 1rem
  left: 1rem

.modalSide
  top: 0
  right: 0
  width: 50vw
  height: 100vh

.modalCenter
  display: flex
  flex-direction: column
  align-items: center
  top: 3rem
  right: 3rem
  bottom: 3rem
  left: 3rem

.modalContent
  max-width: 50vw

.blockImage
  width: 100%
  height: auto
  margin-bottom: 3rem
  img
    width: 100%
    height: auto
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

const isModalCenterVisible = ref(false);

function openModalCenter() {
  isModalCenterVisible.value = true;
  console.log(isModalCenterVisible.value);
}

function closeModalCenter() {
  isModalCenterVisible.value = false;
  console.log(isModalCenterVisible.value);
}

const isModalSideVisible = ref(false);

function openModalSide() {
  isModalSideVisible.value = true;
  console.log(isModalSideVisible.value);
}

function closeModalSide() {
  isModalSideVisible.value = false;
  console.log(isModalSideVisible.value);
}
</script>
