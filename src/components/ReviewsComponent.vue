<script setup>
import { ref } from "vue";

const reviews = ref([
  '"Die Tour war ein absolutes Highlight. Wir hatten viele Wünsche, das echte Mumbai kennenzulernen - und genau das haben wir bekommen. Es gab unglaublich viel zu sehen und zu erleben. Ohne zu viel zu verraten: Wer einen authentischen Einblick in das wahre Indien sucht, sollte diese Tour unbedingt buchen"',
  '"Fantastisch! Die Tour war hervorragend und bot einen authentischen Einblick in das echte Mumbai. Sehr empfehlenswert - informativ, engagiert und unvergesslich!"',
  '"Tolle zweitägige Tour durch Mumbai - informativ, flexibel und authentisch. Besonders der Besuch in Dharavi war beeindruckend. Sehr empfehlenswert für alle, die das echte Mumbai erleben möchten."',
  '"Ich habe bereits mehrere Touren gemacht: alle waren sehr eindrucksvoll. Es wurden besondere, nicht-touristische Orte gezeigt, die man alleine kaum entdecken würde. Die Stadt wurde auf eine ganz besondere, authentische Weise vermittelt. Ich freue mich schon auf weitere Erlebnisse und empfehle solche Touren jedem, der Mumbai wirklich erleben möchte."',
  '"Eine eindrucksvolle und bereichernde Tour. Besonders schön war der respektvolle Austausch mit den Einheimischen – ein authentischer Einblick, der lange in Erinnerung bleibt."',
  '"Ein unglaublich aufschlussreicher Tour, der mir einen echten Einblick in das Leben der Slums gegeben hat. Besonders wertvoll war die Möglichkeit, mit den Einheimischen in Kontakt zu treten und ihre Geschichten zu hören. Es war eine authentische Erfahrung, die ich jedem empfehlen würde, der mehr über die wahre Seite der Stadt erfahren möchte."',
]);
</script>

<template>
  <section class="mt-25">
    <container>
      <div class="flex flex-wrap justify-center gap-8">
        <h2 class="text-5xl font-bold basis-full text-center">
          Was unsere Kunden sagen
        </h2>
        <div
          class="bg-white flex items-center shadow-brand basis-1/2 rounded-2xl h-100 p-6"
        >
          <div class="flex flex-col gap-6">
            <div class="splide">
              <div class="splide__track">
                <ul class="splide__list">
                  <li v-for="item in reviews" class="splide__slide text-lg">
                        {{ item }}
                  </li>
                </ul>
                <div
                  class="splide__arrows splide__arrows--ltr flex justify-center gap-6 pt-6"
                >
                  <button
                    class="splide__arrow splide__arrow--prev hover:bg-brand-brown-light bg-brand-brown flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="splide__arrow splide__arrow--next hover:bg-brand-brown-light bg-brand-brown flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>
