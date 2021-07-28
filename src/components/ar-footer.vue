<template>
  <footer class="w-full py-[110px] border-t-2 border-gray-100">
    <div class="container grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-[15px]">
      <div class="text-purplish-grey pt-8 hidden invisible lg:block lg:visible">
        Copyright © 2021 All rights reserved. This template is made with by
        Colorlib
      </div>
      <div class="flex flex-col items-center lg:items-start">
        <a
          href="#"
          v-for="item in links[0]"
          class="px-2 font-medium hover:bg-pear inline mb-2"
          :key="item"
          >{{ item }}</a
        >
      </div>
      <div class="flex flex-col items-center lg:items-start">
        <a
          href="#"
          v-for="item in links[1]"
          class="px-2 font-medium hover:bg-pear inline mb-2"
          :key="item"
          >{{ item }}</a
        >
      </div>
      <div class="flex flex-col items-center lg:items-start">
        <a
          href="#"
          v-for="item in links[2]"
          class="px-2 font-medium hover:bg-pear inline mb-2"
          :key="item"
          >{{ item }}</a
        >
      </div>
    </div>
    <div
      class="
        container
        text-purplish-grey
        pt-4
        text-center
        lg:hidden lg:invisible
        block
        visible
      "
    >
      Copyright © 2021 All rights reserved. This template is made with by
      Colorlib
    </div>
  </footer>
</template>

<script setup>
const links = [
  ["Home", "About us", "Services", "Portfolio", "Blog"],
  ["Terms & Conditions", "FAQ", "Help Desk", "Job Aplications", "Site Map"],
  ["Privacy", "Contact us", "Newsletter", "Clients Testimonials", "FAQ"],
];
</script>

<style scoped></style>
