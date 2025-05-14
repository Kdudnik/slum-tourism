<script setup>
import { ref } from 'vue';
import GalleryBlockComponent from './GalleryBlockComponent.vue';

const galleryItems = ref([
  {
    text: "iStock",
    link: "https://www.istockphoto.com/",
    img: "/gallery/gallery-1.png"
  },
  {
    text: "Tripadvisor",
    link: "https://www.tripadvisor.de/",
    img: "/gallery/gallery-2.png"
  },
  {
    text: "www.shutterstock.com",
    link: "https://www.shutterstock.com/",
    img: "/gallery/gallery-3.png"
  }
])
</script>

<template>
  <section class="js-intersect pt-25">
    <container>
      <div class="flex gap-7">
        <GalleryBlockComponent :data="galleryItems" />
      </div>
    </container>
  </section>
</template>
