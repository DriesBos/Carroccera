import { onMounted, onUpdated, ref } from 'vue';
import gsap from 'gsap';

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

<div class="mouse" ref="mouse"></div>

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