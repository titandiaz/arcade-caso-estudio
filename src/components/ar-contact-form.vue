<template>
  <ar-highlighted-text class="mt-12" :text="'Get in touch'" />
  <form @submit="sendInfo" class="pt-12 grid grid-cols-12 mb-16">
    <div class="col-span-3 hidden lg:block text-purplish-grey">
      <label for="asunto" class="mb-6 inline-block mt-4 py-1"
        >Address: Lorem ipsum dolor</label
      >
      <label for="email" class="mb-8 inline-block py-1"
        >Correo: yourmail@gmail.com</label
      >
      <label for="phone" class="mb-10 inline-block py-1"
        >Phone: +57 345 7953 32453</label
      >
      <label for="message" class="mb-4 inline-block py-1"
        >Message: Lorem ipsum dolor, voluptatem tempora.</label
      >
    </div>
    <div class="col-span-12 lg:col-span-9">
      <input
        class="w-full bg-gray-100 py-3 px-4 mb-4 border border-transparent"
        :class="v$.asunto.$error ? '!border-red-500 border' : null"
        type="text"
        v-model="state.asunto"
        name="asunto"
        placeholder="Asunto"
        id="asunto"
      />
      <div class="error" v-if="v$.asunto.$error">
        {{ v$.asunto.$errors[0].$message }}
      </div>
      <input
        class="w-full bg-gray-100 py-3 px-4 mb-4 border border-transparent"
        :class="v$.email.$error ? '!border-red-500 border' : null"
        type="text"
        v-model="state.email"
        name="email"
        placeholder="Correo"
        id="email"
      />
      <div class="error" v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}
      </div>
      <input
        class="w-full bg-gray-100 py-3 px-4 mb-4 border border-transparent"
        type="text"
        v-model="state.phone"
        name="phone"
        placeholder="Teléfono"
        id="phone"
      />
      <textarea
        class="h-52 bg-gray-100 p-4 w-full border border-transparent"
        :class="v$.message.$error ? '!border-red-500 border' : null"
        placeholder="Mensaje"
        v-model="state.message"
        id="message"
      />
      <div class="error pt-2" v-if="v$.message.$error">
        {{ v$.message.$errors[0].$message }}
      </div>
      <div class="mt-8">
        <input type="checkbox" v-model="v$.termsAccepted.$model" /><span
          class="ml-4"
          >Términos y condiciones</span
        >
      </div>
      <div class="error pt-2" v-if="v$.termsAccepted.$error">
        This field is required
      </div>
      <ar-button class="mt-10" type="submit" :label="'Send'" :color="'dark'" />
    </div>
  </form>
</template>

<script setup>
import { computed, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import ArButton from "./ar-button.vue";
import arHighlightedText from "./ar-highlighted-text.vue";

const state = reactive({
  asunto: "",
  email: "",
  phone: "",
  message: "",
  termsAccepted: false,
});
const rules = computed(() => {
  return {
    asunto: { required },
    email: { required, email },
    message: { required },
    termsAccepted: { accepted: (val) => val === true },
  };
});

const v$ = useVuelidate(rules, state);

const sendInfo = (e) => {
  e.preventDefault();
  v$.value.$validate().then((resp) => {
    if (resp) {
      alert(JSON.stringify(state, null, 3));
    }
  });
};
</script>

<style scoped>
.error {
  @apply text-xs text-red-700 relative -top-3;
}
</style>
