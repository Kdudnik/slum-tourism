import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

import en from "./locales/en.json";
import de from "./locales/de.json";

const locales = createI18n({
  messages: {
    en: en,
    de: de,
  },
  locale: "de",
  fallbackLocale: "en",
  legacy: false,
});

createApp(App).use(locales).mount('#app')
