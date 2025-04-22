<script setup>
import { useI18n } from "vue-i18n";

const { locale, availableLocales } = useI18n();

function switchLanguage() {
  const localeIndex = availableLocales.findIndex((el) => el === locale.value);
  if (localeIndex + 1 >= availableLocales.length)
    locale.value = availableLocales[0];
  else locale.value = availableLocales[localeIndex + 1];
}
</script>

<template>
  <h1>{{ $t("test") }}</h1>
  <button
  class="border border-black cursor-pointer rounded-sm"
  @click="switchLanguage">Change lang</button>
</template>

<style scoped></style>
