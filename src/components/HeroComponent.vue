<script setup></script>

<template>
  <section class="mt-20 overflow-hidden">
    <container>
      <h1>Slum Tourismus</h1>
      <button type="button" class="btn w-36 mt-20">Button</button>
      <div class="mt-20 flex flex-col gap-5">
        <div class="text-3xl">Wie sieht es aus?</div>
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
            <span>Photo: Osman Mohamed Osman/</span>
            <span>Al Jazeera</span>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>
