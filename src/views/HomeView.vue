<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex h-16 items-center justify-between">

        <h1 class="text-xl font-bold text-blue-600">
          WeatherApp
        </h1>

        <nav class="hidden md:flex space-x-6">
          <router-link to="/" class="text-gray-600 hover:text-blue-600">Home</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-blue-600">Contact</router-link>
          <router-link to="/about" class="text-gray-600 hover:text-blue-600">About</router-link>
        </nav>

        <button
  v-if="!store.state.isLoggedIn"
  @click="store.commit('LOGIN')"
  class="bg-blue-600 text-white px-4 py-2 rounded-lg"
>
  Login
</button>

<button
  v-else
  @click="store.commit('LOGOUT')"
  class="bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Logout
</button>


        <p>Login state: {{ store.state.isLoggedIn }}</p>
      </div>
    </div>
  </header>
</template>
