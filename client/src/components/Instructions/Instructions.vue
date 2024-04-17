<template>
  <div
    class="font-mono grid grid-cols-2 gap-4 desktop:w-2/3 console:w-1/2 mx-auto"
  >
    <a
      class="btn btn-lg btn-primary"
      v-for="component in components"
      v-bind:href="component.address"
      :key="component.address"
    >
      {{ component.component }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import {} from "vue";

const components = [
  {
    component: "VueJS3",
    address: "https://v3.vuejs.org/",
  },
  {
    component: "Typescript",
    address: "https://www.typescriptlang.org/",
  },
  {
    component: "Vite",
    address: "https://vitejs.dev/",
  },
  {
    component: "TailwindCSS",
    address: "https://tailwindcss.com/",
  },
  {
    component: "Pinia",
    address: "https://pinia.esm.dev/",
  },
  {
    component: "Vue Router",
    address: "https://router.vuejs.org/",
  },
  {
    component: "Google Fonts",
    address: "https://fonts.google.com/",
  },
  {
    component: "Express JS",
    address: "https://expressjs.com/",
  },
  {
    component: "Prisma",
    address: "https://www.prisma.io/",
  },
  {
    component: "Axios",
    address: "https://axios-http.com/",
  },
  {
    component: "CORS",
    address: "https://expressjs.com/en/resources/middleware/cors.html",
  },
  {
    component: "Daisy UI",
    address: "https://daisyui.com/",
  },
];
</script>
