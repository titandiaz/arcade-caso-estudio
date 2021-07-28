<template>
  <section
    class="container grid grid-cols-1 lg:grid-cols-12 gap-20 pt-24 pb-12"
  >
    <div class="col-span-1 lg:col-span-7">
      <h2 class="text-6xl font-bold mb-10">
        We are a creative Architecture<span
          class="inline-block px-3 py-1 bg-pear"
          >Studio</span
        >
      </h2>
      <p class="leading-loose text-[15px] text-purplish-grey mb-12">
        Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia
        lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem
        risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc
        dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula.
        Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi
        rhoncus feugiat imperdiet. Curabitur non maximus leo. Nulla in ipsum sed
        magna egestas bibendum. Integer in sem sagittis, commodo mi sit amet,
        commodo nibh. Suspendisse potenti. Aliquam erat volutpat.
      </p>
      <ar-button :color="'dark'" />
    </div>
    <img
      class="col-span-1 lg:col-span-5"
      src="../assets/images/intro.png"
      alt="intro"
    />
  </section>
</template>

<script setup>
import arButton from "./ar-button.vue";
</script>

<style scoped></style>
