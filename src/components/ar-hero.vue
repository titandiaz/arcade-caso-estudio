<template>
  <div class="relative w-full">
    <ar-sidebar class="absolute top-0 left-0" />
    <swiper
      :slidesPerView="1"
      :navigation="navigationOptions"
      class="mySwiper"
      loop
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="slide in numberOfSliders" :key="slide">
        <div class="w-full">
          <img
            class="object-cover h-screen w-full"
            src="../assets/images/bg-hero.jpeg"
          />
          <div class="swiper-content absolute top-1/3 left-1/3">
            <h1 class="text-[80px] text-white font-bold leading-none mb-4">
              Minimalistic <br />
              Architecture <br />
              and more
            </h1>
            <ar-button :color="'white'" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div
      class="
        flex
        justify-start
        items-start
        absolute
        bottom-10
        left-[21%]
        text-sm
      "
    >
      <div class="swiper-button-prev mr-8 hover:text-pear">
        <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
        <span class="pl-2">Prev</span>
      </div>
      <div class="swiper-button-next hover:text-pear">
        <span class="pr-2">Next</span>
        <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
      </div>
    </div>
    <div
      class="
        w-[153px]
        h-[250px]
        bg-almost-black bg-opacity-95
        absolute
        right-4
        -bottom-12
        z-30
        flex
        justify-center
      "
    >
      <div
        class="
          absolute
          uppercase
          tracking-[20px]
          text-white
          transform
          -rotate-90
          top-[-90%]
        "
      >
        Architecture
      </div>
      <div class="mt-14">
        <span class="text-pear text-5xl font-bold"
          >{{ `${currentPosition}`.padStart(2, "0") }} /</span
        >
        <span class="text-white font-bold relative -bottom-2">
          {{ `${numberOfSliders}`.padStart(2, "0") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ArSidebar from "./ar-sidebar.vue";
import ArButton from "./ar-button.vue";

const navigationOptions = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};

const currentPosition = ref(1);
const numberOfSliders = 2;

const onSlideChange = (swiper) => {
  if (swiper.activeIndex === numberOfSliders + 1) {
    currentPosition.value = 1;
  } else if (swiper.activeIndex === 0) {
    currentPosition.value = numberOfSliders;
  } else {
    currentPosition.value = swiper.activeIndex;
  }
};
</script>

<style scoped>
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
.swiper-button-prev,
.swiper-button-next {
  @apply text-white uppercase font-bold w-auto static;
}

.swiper-content::after {
  content: "";
  @apply absolute w-[330px] h-[610px] border-t-[150px] border-b-[90px] border-l-[150px] border-pear opacity-70 left-[-40%] top-[-50%];
}
</style>
