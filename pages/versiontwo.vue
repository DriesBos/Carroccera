<template>
  <div>
    <Celestials />
    <ul class="landscape">
      <li class="panel"><img src="~assets/img/layer1.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer2.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer3.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer4.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer5.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer6.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer7.png" alt="" /></li>
      <li class="panel"><img src="~assets/img/layer8.png" alt="" /></li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'On Scroll',
});
</script>

<style scoped lang="sass">
.landscape
  position: relative
  width: 100vw
  display: flex
  flex-direction: column
  justify-content: flex-start
  li
    width: 100vw
    img
      width: 100%
      max-width: 100%
      height: auto

.panel
  width: 100vw
  img
    width: 100%
    max-width: 100%
    height: auto
</style>
