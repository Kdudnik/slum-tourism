import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './css/style.css'
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

// Sections animation

const targets = document.querySelectorAll(".js-intersect");

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-show-section");
    }
  });
};

const init = (callback) => {
  const observer = new IntersectionObserver(callback);
  targets.forEach((target) => {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
};

init(callback);

// Sections animation.