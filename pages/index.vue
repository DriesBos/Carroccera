<template>
  <div>
    <div class="mouse" ref="mouse"></div>
    <div>
      <Celestials />
      <ul class="landscape">
        <li class="panel"><img src="~assets/img/layer1.png" alt="" /></li>
        <li class="panel landscapePanel landpanel">
          <img src="~assets/img/layer2.png" alt="" />
          <div class="building building-One" @click="openModal">
            <img class="mouseInteract" src="~assets/img/sketch1.png" alt="" />
          </div>
        </li>
        <li class="panel landscapePanel landpanel">
          <img src="~assets/img/layer3.png" alt="" />
        </li>
        <li class="panel landscapePanel landpanel">
          <img src="~assets/img/layer4.png" alt="" />
          <div class="building building-Two" @click="openModal">
            <img class="mouseInteract" src="~assets/img/sketch2.png" alt="" />
          </div>
        </li>
        <li class="panel landscapePanel landpanel">
          <img src="~assets/img/layer5.png" alt="" />
          <div class="building building-Three" @click="openModal">
            <img class="mouseInteract" src="~assets/img/sketch4.png" alt="" />
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

    <Transition name="fade">
      <div
        v-if="isModalVisible"
        class="modal modalCenter mouseInvert"
        :class="{ active: isModalVisible }"
      >
        <div class="modalClose icon mouseInteract" @click="closeModal">
          <img src="~assets/icons/close.png" alt="" />
        </div>
        <div class="twoColumn">
          <div class="twoColumn_Left">
            <div class="block_Text">
              <p>
                Together with a team of ecologists the Collective is developing
                a proposal for the Carroccera property and the Stanavasso valley
                at large, in order to preserve and encourage the already present
                rewilding processes.
              </p>
              <p>
                The 5 hectares site is partially covered by 30 years old
                spontaneous vegetation and partially by young grassland. Around
                the site it is possible to spot the signs of a past wineyard and
                several wells used for agriculture. This abandonment is not
                necessarily bad but it can be beneficial if treated in a
                particular way. Additionally there is potential to involve the
                neighbours and their fallow plots in the scheme of regeneration,
                achieving a mosaic of natural and agricultural land coexisting
                in symbiosis.
              </p>
              <p>
                A few active and passive actions which focus on restoring and
                reinstating a range of natural processes, habitats and missing
                species, which would strengthen the ecosystem and bring several
                benefits to the area.
              </p>
              <p>
                The proposal involves site clearance from man made debris and
                invasive species. Followed by the introduction of
                self-supporting cattle as grazers to naturally diversify and
                strengthen the local ecosystem, implemented through the
                installation of livestock water facility, cattle grids and
                non-invasive fences. Data is collected, analysed and publicly
                shared through a network of sensors strategically positioned on
                the site with the aim of monitoring the biodiversity and
                inspiring other parties to join us at this endeavour.
              </p>
            </div>
          </div>
          <div class="twoColumn_Right">
            <div class="block_Image">
              <img src="~assets/img/content1.jpg" alt="" />
            </div>

            <div class="block_Image">
              <img src="~assets/img/content2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="sass">

// Cursor Composable
.mouse
  position: fixed
  opacity: 0
  width: 1.5rem
  height: 1.5rem
  background: lightgrey
  border-radius: 50%
  z-index: 999
  transform: translate(-50%, -50%)
  pointer-events: none
  transition: width .2s ease, height .2s ease
  &.active
    width: 3rem
    height: 3rem
  &.invert
    background: black

.mouseInteract
  pointer-events: auto

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
      &-One
        left: random(90) + vw
      &-Two
        left: random(90) + vw
      &-Three
        left: random(90) + vw
      img
        width: 33vmin
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
  padding: 3vmax 3vmin
  position: fixed
  background: white
  z-index: +2

.modalClose
  position: absolute
  top: 1rem
  left: 1rem
  z-index: 999

.modalSide
  top: 0
  right: 0
  width: 66vw
  height: 100vh

.modalCenter
  display: flex
  flex-direction: column
  align-items: center
  top: 3vmax
  right: 3vmin
  bottom: 3vmax
  left: 3vmin
  border-radius: .5rem

.modalContent
  max-width: 50vw
  padding-bottom: 3rem

.twoColumn
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 100%
  height: 100%
  &_Left
    flex: 1
    padding-right: 1rem
    position: sticky
  &_Right
    flex: 1
    padding-left: 1rem

.block_Image
  width: 100%
  height: auto
  margin-bottom: 3rem
  img
    width: 100%
    height: auto

.block_Text
  width: 100%
  height: auto
  margin-bottom: 3rem
  p
    font-size: 1rem
    margin-bottom: 1rem
    color: black
    &:last-child
      margin-bottom: 0
</style>

<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import gsap from 'gsap';

definePageMeta({
  title: 'Carroccera',
});

onMounted(() => {
  document.addEventListener('mousemove', customCursor);
  document
    .querySelectorAll('.mouseInteract')
    .forEach((item) => item.addEventListener('mouseover', changeCursor));
  document
    .querySelectorAll('.mouseInteract')
    .forEach((item) => item.addEventListener('mouseleave', removeChangeCursor));
  document
    .querySelectorAll('.mouseInvert')
    .forEach((item) => item.addEventListener('mouseover', changeCursorModal));
  document
    .querySelectorAll('.mouseInvert')
    .forEach((item) =>
      item.addEventListener('mouseleave', removeChangeCursorModal)
    );
  const boxes = document.querySelectorAll('.landpanel');
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

onUpdated(() => {
  document
    .querySelectorAll('.mouseInteract')
    .forEach((item) => item.addEventListener('mouseover', changeCursor));
  document
    .querySelectorAll('.mouseInteract')
    .forEach((item) => item.addEventListener('mouseleave', removeChangeCursor));
  document
    .querySelectorAll('.mouseInvert')
    .forEach((item) => item.addEventListener('mouseover', changeCursorModal));
  document
    .querySelectorAll('.mouseInvert')
    .forEach((item) =>
      item.addEventListener('mouseleave', removeChangeCursorModal)
    );
});

let mouse = ref(null);

function customCursor(e) {
  gsap.to(mouse.value, 0, {
    opacity: 1,
    left: e.clientX,
    top: e.clientY,
  });
}

function changeCursor() {
  mouse.value.classList.add('active');
  console.log('active on');
}
function removeChangeCursor() {
  mouse.value.classList.remove('active');
  console.log('active off');
}

function changeCursorModal() {
  mouse.value.classList.remove('invert');
  console.log('invert on');
}
function removeChangeCursorModal() {
  mouse.value.classList.remove('invert');
  console.log('invert off');
}

const isModalVisible = ref(false);

function openModal() {
  isModalVisible.value = true;
  console.log('open');
}

function closeModal() {
  isModalVisible.value = false;
  console.log('close');
}
</script>
