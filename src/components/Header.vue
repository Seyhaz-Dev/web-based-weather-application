<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />



  

  <header class="bg-[#222222] text-white font-sans fixed top-0 right-0 left-0 z-9999 ">

 

    <!-- TOP BAR -->
    <div class="max-w-[1200px] mx-auto flex items-stretch h-[60px]">

      <!-- LOGO -->
      <div class="flex items-center pr-13">
        <router-link to="/" class="flex items-center gap-2">
          <img src="/public/image.png" class="h-10 w-auto" />
          <span class="text-2xl font-bold tracking-tight">Sky solution</span>
        </router-link>
      </div>

      <!-- TOP NAV -->
      <nav class="hidden lg:flex flex-1">
        <router-link
          to="/"
          exact-active-class="bg-[#333333] text-[#C6E207] border-b-4 border-[#C6E207]"
          class="px-5 flex items-center text-sm font-semibold text-gray-300 hover:bg-[#333333]"
        >
          Weather & climate
        </router-link>

        <router-link
          to="/contact"
          exact-active-class="bg-[#333333] text-[#C6E207] border-b-4 border-[#C6E207]"
          class="px-5 flex items-center text-sm text-gray-300 hover:bg-[#333333]"
        >
          Contact Us
        </router-link>

        <router-link
          to="/services"
          exact-active-class="bg-[#333333] text-[#C6E207] border-b-4 border-[#C6E207]"
          class="px-5 flex items-center text-sm text-gray-300 hover:bg-[#333333]"
        >
          Services
        </router-link>

        <router-link
          to="/about"
          exact-active-class="bg-[#333333] text-[#C6E207] border-b-4 border-[#C6E207]"
          class="px-5 flex items-center text-sm text-gray-300 hover:bg-[#333333]"
        >
          About us
        </router-link>

        <router-link
          to="/travel"
          exact-active-class="bg-[#333333] text-[#C6E207] border-b-4 border-[#C6E207]"
          class="px-5 flex items-center text-sm text-gray-300 hover:bg-[#333333]"
        >
          Travel
        </router-link>
      </nav>

      <!-- LOGIN / LOGOUT -->
      <div class="hidden lg:flex items-center ml-4">
        <button
          v-if="!store.state.isLoggedIn"
          @click="store.commit('loggedIn')"
          class="px-4 py-2 text-sm font-semibold rounded-md bg-[#C6E207] text-black hover:bg-[#b3cf05] transition"
        >
          Login
        </button>

        <button
          v-else
          @click="store.commit('loggedOut')"
          class="px-4 py-2 text-sm font-semibold rounded-md bg-red-500 text-white hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- SUB NAV -->
    <div class="bg-[#333333] border-t border-gray-700">
      <div class="max-w-[1200px] mx-auto flex items-center justify-between h-[50px] px-4">

        <!-- SEARCH + SETTINGS -->
        <div class="flex items-center m-auto justify-center gap-3">
          <!-- SEARCH -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search location..."
              class="h-9 w-160 pl-9 pr-3 text-sm bg-[#222222] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#C6E207] rounded-full"
            />
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>

          <!-- SETTINGS -->
          <button class="h-9 px-3 rounded-md border border-gray-600 hover:bg-[#444444]">
            <i class="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
