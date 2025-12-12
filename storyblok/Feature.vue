<template>
  <div v-editable="blok">
    <h3>
      {{ blok.name }}
    </h3>
    <NuxtImg
      :src="blok.image.filename"
      :alt="blok.image.alt"
      provider="storyblok"
      quality="60"
      format="webp"
      loading="lazy"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
