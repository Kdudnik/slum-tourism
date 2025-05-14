<script setup>
const { data } = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    v-for="(item, index) in data"
    :key="index"
    class="flex flex-col gap-6 text-xl font-medium"
  >
    <a :href="item.link" target="_blank" class="flex flex-col gap-8 group">
      <div class="overflow-hidden rounded-4xl relative">
        <img :src="item.img" alt="" class="group-hover:scale-110 duration-300" />
      </div>
      <div class="group-hover:text-brand-brown-light transition">
        {{ $t("gallery.photo") }} {{ item.text }}
      </div>
    </a>
  </div>
</template>
