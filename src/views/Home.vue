<template>
  <ar-hero />
  <ar-architecture-studio />
  <ar-services />
</template>

<script>
import ArArchitectureStudio from "../components/ar-architecture-studio.vue";
import ArHero from "../components/ar-hero.vue";
import ArServices from "../components/ar-services.vue";

export default {
  name: "Home",
  components: {
    ArHero,
    ArArchitectureStudio,
    ArServices,
  },
};
</script>
