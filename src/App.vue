<script setup>
import { RouterView } from "vue-router"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Child from "./components/Child.vue"

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    
    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
