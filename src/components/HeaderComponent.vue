<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale, availableLocales } = useI18n();
const listItems = ref([
  { message: "Home" },
  { message: "Background Info" },
  { message: "Our Tour" },
  { message: "Reviews" },
]);

function switchLanguage() {
  const localeIndex = availableLocales.findIndex((el) => el === locale.value);
  if (localeIndex + 1 >= availableLocales.length)
    locale.value = availableLocales[0];
  else locale.value = availableLocales[localeIndex + 1];
}
</script>

<template>
  <header>
    <container class="my-10">
      <nav class="flex justify-between items-center">
        <div>
          <a href="#">Site Name</a>
        </div>

        <div class="flex gap-12">
          <ul class="flex gap-12 items-center">
            <li v-for="item in listItems">
              <a href="#" class="transition hover:text-brand-brown-light">{{ item.message }}</a>
            </li>
          </ul>
          <button type="button" class="btn w-20" @click="switchLanguage">
            {{ $i18n.locale.toUpperCase() }}
          </button>
        </div>
      </nav>
    </container>
  </header>
</template>
