<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale, availableLocales } = useI18n();
const listItems = ref([
  { message: "Home", anchor: "#hero" },
  { message: "Background Info", anchor: "#bgInfo" },
  { message: "Our Tour", anchor: "#tour" },
  { message: "Reviews", anchor: "#" },
]);

// Switch language

function switchLanguage() {
  const localeIndex = availableLocales.findIndex((el) => el === locale.value);
  if (localeIndex + 1 >= availableLocales.length)
    locale.value = availableLocales[0];
  else locale.value = availableLocales[localeIndex + 1];
}
// Switch language.

// Sticky header

let pageScroll = ref(false);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    pageScroll.value = true;
  } else {
    pageScroll.value = false;
  }
});

// Sticky header.
</script>

<template>
  <header
    class="sticky top-0 bg-brand-white z-30 transition-shadow"
    :class="{ 'shadow-lg': pageScroll }"
  >
    <container class="py-4">
      <nav class="flex justify-between items-center">
        <div>
          <a href="#" class="group flex gap-1 items-center">
            <img src="/logo.png" class="w-16 h-16 hover:scale-110 transition" alt="Logo" />
            <span class="font-bold text-2xl">BsB</span>
          </a>
        </div>

        <div class="flex gap-12">
          <ul class="flex gap-12 items-center">
            <li v-for="item in listItems">
              <a
                :href="item.anchor"
                class="transition hover:text-brand-brown-light"
                >{{ item.message }}</a
              >
            </li>
          </ul>
          <button
            type="button"
            class="btn w-20 text-base"
            @click="switchLanguage"
          >
            {{ $i18n.locale.toUpperCase() }}
          </button>
        </div>
      </nav>
    </container>
  </header>
</template>
