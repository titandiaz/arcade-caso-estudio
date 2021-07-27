<template>
  <ar-page-header />
  <div class="container pt-[100px]">
    <ar-contact-form />
  </div>
</template>

<script>
import ArContactForm from "../components/ar-contact-form.vue";
import arPageHeader from "../components/ar-page-header.vue";
export default {
  components: { arPageHeader, ArContactForm },
};
</script>

<style scoped></style>
