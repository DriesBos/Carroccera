<template>
  <div v-editable="blok" class="view-Page view-Article">
    <div>
      <NuxtImg
        :src="blok.image.filename"
        :alt="blok.image.alt"
        provider="storyblok"
        quality="60"
        format="webp"
        sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1600px"
        loading="lazy"
      />
    </div>
    <div>
      <h1>{{ blok.title }}</h1>
      <Markdown :content="blok.content" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>
