<script setup></script>

<template>
  <section class="mt-25">
    <container>
      <div class="flex flex-wrap justify-center gap-8">
        <h2 class="text-5xl font-bold basis-full text-center">What Our Customers Say</h2>
        <div class="bg-white flex items-center shadow-brand basis-1/2 rounded-2xl h-100 p-6">
          <div class="flex flex-col justify-center gap-6">
            <div class="splide">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="flex flex-col items-center gap-6">
                      <p class="italic">
                        "I’m beyond impressed with the level of care and
                        precision! My nails have never looked this perfect, and
                        the whole experience was so relaxing. From the moment I
                        walked in, I felt welcomed and pampered. The attention
                        to detail is outstanding, and I can’t wait for my next
                        appointment!"
                      </p>
                      <div class="font-medium">Hanna May</div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="flex flex-col items-center gap-6">
                      <p class="italic">
                        "This is hands down the best nail salon I’ve ever been
                        to! The staff is incredibly talented, and they truly
                        listen to what you want. My manicure lasted weeks
                        without chipping, and the nail art was absolutely
                        flawless. I’m so happy I found this place and will
                        definitely be coming back!"
                      </p>
                      <div class="font-medium">Jenna Black</div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="flex flex-col items-center gap-6">
                      <p class="italic">
                        "Such an amazing experience! The salon has a beautiful,
                        calming atmosphere, and the nail technicians are
                        artists. Every design is done with such precision, and
                        the quality of products they use makes a huge
                        difference. My nails have never been healthier or looked
                        better!"
                      </p>
                      <div class="font-medium">Jamie Lau</div>
                    </div>
                  </li>
                </ul>
                <div class="splide__arrows splide__arrows--ltr flex justify-center gap-6 pt-6">
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
