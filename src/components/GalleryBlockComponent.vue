<script setup>
const { data } = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

console.log(data);
</script>

<template>
  <div
    v-for="(item, index) in data"
    :key="index"
    class="flex flex-col gap-6 text-xl font-medium"
  >
    <div class="overflow-hidden rounded-4xl relative">
      <img :src="item.img" alt="" class="hover:scale-110 duration-300" />
    </div>
    <div class="flex gap-1">
      <a
        :href="item.link"
        target="_blank"
        class="hover:text-brand-brown-light transition"
        >{{ item.text }}</a
      >
    </div>
  </div>
</template>
