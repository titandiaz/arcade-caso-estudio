<template>
  <div class="w-[100px] h-full bg-almost-black flex z-20 items-end">
    <div class="flex flex-col w-full">
      <a
        v-for="icon in iconList"
        class="
          mb-5
          cursor-pointer
          flex
          items-center
          justify-center
          w-full
          py-1
          text-white text-opacity-50
          hover:text-pear
          text-xl
        "
        :href="icon.link"
        :key="icon.name"
      >
        <font-awesome-icon :icon="[icon.style, icon.name]" />
      </a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const iconList = [
      {
        name: "pinterest",
        style: "fab",
        link: "https://co.pinterest.com/",
      },
      {
        name: "linkedin-in",
        style: "fab",
        link: "https://www.linkedin.com/",
      },
      {
        name: "instagram",
        style: "fab",
        link: "https://www.instagram.com/",
      },
      {
        name: "facebook-f",
        style: "fab",
        link: "https://www.facebook.com/",
      },
      {
        name: "twitter",
        style: "fab",
        link: "https://www.twitter.com/",
      },
    ];
    return { iconList };
  },
};
</script>

<style></style>
