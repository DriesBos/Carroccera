<template>
  <div>
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
</template>

<style scoped lang="sass">
.landscape
  border:1px solid red
  ul
    width:100vw
    display: flex
    flex-direction: column
    justify-content: flex-start
    border: 1px solid green
    li
      border: 1px solid blue
      width: 100vw
      height: 50vh
      img
        width: 100vw
</style>
