<template>
  <div class="footer">
    <ul>
      <li class="button mouseInteract">
        <NuxtLink to="/">On Hover</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="sass">
.footer
  position: fixed
  left: 0
  right: 0
  bottom: 0
  background: white
  z-index: 999
  ul
    display: flex
    li
      margin: 0 1rem
</style>
