<template>
  <div class="footer">
    <ul>
      <li class="button cursorInteract">
        <NuxtLink to="/">Version One</NuxtLink>
      </li>
      <li class="button cursorInteract">
        <NuxtLink to="/versiontwo">Version Two</NuxtLink>
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
  ul
    display: flex
    li
      margin: 0 1rem
</style>
