<template>
  <h2 class="inline-block px-3 bg-pear text-6xl font-bold py-1">{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>
