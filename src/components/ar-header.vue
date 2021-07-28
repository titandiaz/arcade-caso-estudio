<template>
  <header class="w-full absolute top-0 left-0 z-30">
    <nav class="flex w-full">
      <router-link
        class="inline-block px-[60px] pt-5 pb-[30px] bg-almost-black"
        to="/"
      >
        <img src="../assets/images/logo.png" alt="logo" class="max-w-max" />
      </router-link>
      <div class="flex justify-end items-center w-full pr-2 md:pr-4 lg:pr-10">
        <router-link
          class="
            nav-menu-link
            px-8
            uppercase
            font-medium
            text-sm
            h-full
            flex
            items-center
            relative
            text-white
            pt-3
          "
          v-for="route in routes"
          :to="route.path"
          :key="route.name"
        >
          {{ route.name }}
        </router-link>
        <a
          href="tel:+34000000000"
          class="inline-block bg-pear px-4 py-2 font-medium"
          >+675 334 567 223</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();
const { routes } = router.options;
</script>

<style scoped>
.nav-menu-link:before {
  content: "";
  @apply absolute top-0 bg-pear left-1/2 w-[2px] h-0 ml-[1px];
  transition: all 0.4s;
}

.router-link-active.nav-menu-link::before,
.nav-menu-link:hover::before {
  content: "";
  @apply absolute top-0 bg-pear left-1/2 w-[2px] h-[25px] ml-[1px];
  transition: all 0.4s;
}
</style>
