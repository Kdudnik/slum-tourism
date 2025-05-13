<script setup></script>

<template>
  <section class="pt-20 overflow-hidden" id="hero">
    <container>
      <h1 class="font-bold text-7xl">{{ $t("hero.title") }}</h1>
      <h2 class="font-bold italic text-2xl mt-2">Begegnung statt Beobachtung</h2>
      <button type="button" class="btn mt-20">Slumtour buchen</button>
      <div class="mt-20 flex flex-col gap-5">
        <div class="text-3xl">{{ $t("hero.text") }}</div>
        <div class="relative">
          <img src="/hero/hero.png" alt="" />
          <div
            class="bg-brand-green w-1/3 h-[57%] rounded-4xl absolute -bottom-12 -left-12 -z-10"
          ></div>
          <div
            class="bg-brand-green w-[77%] h-[97%] rounded-4xl absolute -top-16 -right-18 -z-10"
          ></div>
        </div>
        <div class="flex justify-end font-medium text-2xl">
          <div class="flex flex-col">
            <span>{{ $t("hero.photo") }} Osman Mohamed Osman/</span>
            <span>Al Jazeera</span>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>
