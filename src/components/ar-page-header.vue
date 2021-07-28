<template>
  <div class="w-full relative">
    <img
      class="object-cover h-[445px] w-full object-left"
      src="../assets/images/header-bg-2.jpg"
      alt="header"
    />
    <h1 class="absolute bottom-1/4 left-40 text-[82px] font-bold text-white">
      {{ currentRoute.name }} <span class="text-pear">.</span>
    </h1>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const { currentRoute } = router;
</script>

<style></style>
