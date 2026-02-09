<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <header class="fixed top-0 left-0 right-0 z-[9999] bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5 font-sans">
    
    <div class="max-w-[1200px] mx-auto flex items-center h-[70px] px-4 md:px-6">

      <div class="flex items-center mr-10">
        <router-link to="/" class="flex items-center gap-3 group">
          <img src="/public/image.png" class="h-9 w-auto transition-transform group-hover:scale-105" />
          <span class="text-xl font-black tracking-tighter text-white uppercase">Nimbus</span>
        </router-link>
      </div>

      <nav class="hidden lg:flex flex-1 h-full items-center">
        <router-link
          v-for="link in [
            { path: '/', label: 'Weather & Climate' },
            { path: '/travel', label: 'Travel' },
            { path: '/services', label: 'Services' },
            { path: '/about', label: 'About Us' },
            { path: '/contact', label: 'Contact' }
          ]"
          :key="link.path"
          :to="link.path"
          exact-active-class="text-[#C6E207] !opacity-100"
          class="px-5 h-full flex items-center text-[11px] font-black uppercase tracking-[0.15em] text-white/60 hover:text-white transition-all relative group"
        >
          {{ link.label }}
          <span class="absolute bottom-0 left-0 w-full h-[3px] bg-[#C6E207] scale-x-0 transition-transform duration-300 group-hover:scale-x-50 active-link-line"></span>
        </router-link>
      </nav>

      <div class="hidden lg:flex items-center ml-4">
  <router-link
    v-if="!store.state.isLoggedIn"
    to="/login"
    class="px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-full bg-[#C6E207] text-black hover:bg-[#d4f008] hover:shadow-[0_0_15px_rgba(198,226,7,0.3)] transition-all active:scale-95 inline-block text-center"
  >
    Login
  </router-link>

  <button
    v-else
    @click="store.commit('loggedOut')"
    class="px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-full border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-all active:scale-95"
  >
    Logout
  </button>
</div>
    </div>
  </header>

  <div class="h-[70px]"></div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<style scoped>
/* Shows the lime line for the exact active route */
.router-link-exact-active .active-link-line {
  transform: scaleX(1);
}

/* Smooth transition for the blur effect */
header {
  transition: background-color 0.3s ease;
}
</style>