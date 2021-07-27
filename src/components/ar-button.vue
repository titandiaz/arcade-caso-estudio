<template>
  <button
    class="px-14 py-[19px] border-4 font-bold cursor-pointer relative z-30"
    :class="buttonColor"
    type="text"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({
  label: {
    default: "See Project",
    type: String,
  },
  color: {
    default: "white",
    validation: (value) => ["white", "dark", "green"].includes(value),
  },
});

const colors = {
  "text-almost-black": false,
  "text-pear": false,
  "text-white": false,
  "border-almost-black": false,
  "border-pear": false,
  "border-white": false,
};

const buttonColor = computed(() => {
  switch (props.color) {
    case "white":
      return {
        ...colors,
        "text-white": true,
        "border-white": true,
        white: true,
      };
    case "dark":
      return {
        ...colors,
        "text-almost-black": true,
        "border-almost-black": true,
        dark: true,
      };
    case "green":
      return {
        ...colors,
        "text-pear": true,
        "border-pear": true,
        green: true,
      };
    default:
      return {
        ...colors,
        "text-white": true,
        "border-white": true,
        white: true,
      };
  }
});
</script>

<style scoped>
button::after,
button::before {
  content: "";
  @apply absolute w-[26px] h-1  right-[-13px];
}

button::before {
  content: "";
  @apply bottom-2;
}

button::after {
  content: "";
  @apply bottom-4;
}

button.white::after,
button.white::before {
  content: "";
  @apply bg-white;
}

button.dark::after,
button.dark::before {
  content: "";
  @apply bg-almost-black;
}

button.green::after,
button.green::before {
  content: "";
  @apply bg-pear;
}
</style>
