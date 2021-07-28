<template>
  <section class="container pt-28 pb-[100px]">
    <ar-highlighted-text class="mb-[75px]" :text="'Services'" />
    <div class="grid gap-11 grid-cols-1 md:grid-cols-8 lg:grid-cols-12">
      <div
        v-for="item in 6"
        :key="item"
        class="group col-span-1 md:col-span-4 overflow-hidden"
      >
        <div
          class="
            icon-container
            w-[100px]
            h-[125px]
            bg-transparent
            group-hover:bg-pear
            flex
            items-end
            relative
            mb-7
            transition-all
            duration-500
            ease-in-out
          "
        >
          <img
            class="
              opacity-20
              group-hover:opacity-100 group-hover:pb-2 group-hover:pl-3
              transition-all
              duration-300
              ease-in-out
            "
            :src="require(`../assets/images/dark/${item}.png`)"
            alt="icon"
          />
        </div>
        <h3 class="font-bold text-2xl mb-6">Plans and Projects</h3>
        <p class="leading-loose text-[15px] text-purplish-grey mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          dui eget lorem tincidunt.
        </p>
        <router-link
          class="
            uppercase
            text-xs
            font-bold
            inline-block
            bg-white
            py-[2px]
            group-hover:bg-pear group-hover:px-[10px]
            transition-all
            duration-300
            ease-in-out
          "
          to="/"
          >Read More</router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import arHighlightedText from "./ar-highlighted-text.vue";
</script>

<style scoped>
.icon-container::after {
  content: "";
  @apply absolute w-full h-full bg-white left-6 -top-20 transform rotate-[-65deg];
}
</style>
