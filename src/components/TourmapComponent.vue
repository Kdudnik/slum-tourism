<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <section class="js-intersect pt-25">
    <container>
      <div
        class="title-bg-green"
      >
        Tourkarte
      </div>
      <div class="flex mt-8">
        <iframe
          :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.375531167022!2d77.14742438983104!3d28.65409604049028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a77d14a199%3A0x41aefa31e1b48f7a!2sDelhi%20Mall!5e0!3m2!1suk!2sde!4v1745598274277!5m2!1s${locale}!2s${locale}`"
          width="100%"
          height="535"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </container>
  </section>
</template>
