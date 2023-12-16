<template>
  <div class="btn">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.btn
  position: relative
  backdrop-filter: blur(4px)
  background: rgba(255, 255, 255, 0.2)
  padding: .5rem 2rem
</style>
