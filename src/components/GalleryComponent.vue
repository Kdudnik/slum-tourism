<script setup>
import GalleryBlockComponent from './GalleryBlockComponent.vue';

const items = ref([
  {
    text: "Photo: Reality Tours and Travel",
    img: "/gallery/gallery-1.png"
  },
  {
    text: "Photo: Tripadvisor",
    img: "/gallery/gallery-2.png"
  },
  {
    text: "Photo: www.shutterstock.com",
    img: "/gallery/gallery-3.png"
  },
])
</script>

<template>
  <section class="mt-25">
    <container>
      <div>
        <GalleryBlockComponent v-for="item in items" />
      </div>
    </container>
  </section>
</template>