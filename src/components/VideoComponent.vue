<script setup></script>

<template>
  <section class="pt-25 overflow-hidden">
    <container>
      <div class="flex flex-col gap-32">
        <div class="js-intersect flex items-center gap-4">
          <h3 class="font-bold text-5xl grow shrink-0">
            {{ $t("video.vision.title") }}
          </h3>
          <p class="text-2xl basis-3/5">
            {{ $t("video.vision.text") }}
          </p>
        </div>
        <div class="js-intersect flex gap-36 justify-between">
          <div class="relative group">
            <a href="https://www.youtube.com/watch?v=4oPOc2e4ffU&pp=ygUMc2x1bSB0b3VyaXNt" target="_blank">
              <img
                src="/video/video-1.png"
                alt=""
                class="duration-300 rounded-4xl shadow-brand"
              />
            </a>
            <div
              class="duration-300 group-hover:left-0 group-hover:bottom-0 bg-brand-green w-[57%] h-[86%] rounded-4xl absolute -bottom-12 -left-12 -z-10"
            ></div>
            <div
              class="duration-300 group-hover:right-0 group-hover:top-0 bg-brand-green w-[90%] h-full rounded-4xl absolute -top-16 -right-18 -z-10"
            ></div>
          </div>
          <div class="relative group">
            <a href="https://www.youtube.com/watch?v=b5w3e3uYd5c&ab_channel=VICENews" target="_blank">
              <img
                src="/video/video-2.png"
                alt=""
                class="duration-300 group-hover:scale-105 rounded-4xl shadow-brand"
              />
            </a>
            <div
              class="duration-300 group-hover:left-0 group-hover:bottom-0 bg-brand-green w-[57%] h-[86%] rounded-4xl absolute -bottom-12 -left-12 -z-10"
            ></div>
            <div
              class="duration-300 group-hover:right-0 group-hover:top-0 bg-brand-green w-[90%] h-full rounded-4xl absolute -top-16 -right-18 -z-10"
            ></div>
          </div>
        </div>
        <div class="js-intersect flex items-center gap-4">
          <h3 class="font-bold text-5xl grow shrink-0">
            {{ $t("video.mission.title") }}
          </h3>
          <p class="text-2xl basis-3/5">
            {{ $t("video.mission.text") }}
          </p>
        </div>
      </div>
    </container>
  </section>
</template>
