<template>
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
            { path: '/', label: 'Weather' },
            { path: '/travel', label: 'Travel' },
            { path: '/services', label: 'Services' },
            { path: '/contact', label: 'Contact' },
            { path: '/about', label: 'About' },
            
          ]"
          :key="link.path"
          :to="link.path"
          class="px-5 h-full flex items-center text-[11px] font-black uppercase tracking-[0.15em] text-white/60 hover:text-white transition-all relative group"
        >
          {{ link.label }}
          <span class="absolute bottom-0 left-0 w-full h-[3px] bg-[#C6E207] scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </router-link>
      </nav>

      <div class="hidden lg:flex items-center ml-4">
        
        <router-link
          v-if="!user"
          to="/login"
          class="px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-full bg-[#C6E207] text-black hover:bg-[#d4f008] transition-all active:scale-95"
        >
          Login
        </router-link>

        <div v-else class="flex items-center gap-4">
          <router-link to="/dashboard" class="flex items-center gap-3 group">
            <div class="text-right hidden xl:block">
              <p class="text-[10px] font-black text-white uppercase tracking-tighter leading-none">{{ userName }}</p>
              <p class="text-[9px] text-[#C6E207] uppercase font-bold tracking-widest">Active Node</p>
            </div>
            
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-[#C6E207] group-hover:bg-[#C6E207]/10">
              <span v-if="!userInitials"><i class="fa-solid fa-user text-white/40"></i></span>
              <span v-else class="text-[#C6E207] font-black text-sm uppercase">{{ userInitials }}</span>
            </div>
          </router-link>

          <button @click="handleLogout" class="w-8 h-8 rounded-lg flex items-center justify-center text-white/20 hover:text-red-500 hover:bg-red-500/10 transition-all">
            <i class="fa-solid fa-power-off text-xs"></i>
          </button>
        </div>

      </div>
    </div>
  </header>
  <div class="h-[70px]"></div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'


const router = useRouter()
const user = ref(null)

// 1. Get Initials for the icon (e.g., "Dara Som" -> "DS")
const userInitials = computed(() => {
  const name = user.value?.user_metadata?.full_name || user.value?.user_metadata?.display_name
  if (!name) return ''
  return name.split(' ').map(n => n[0]).join('').substring(0, 2)
})

const userName = computed(() => {
  return user.value?.user_metadata?.full_name || 'Explorer'
})

async function handleLogout() {
  await supabase.auth.signOut()
  router.push('/login')
}

onMounted(async () => {
  // Check if user is already logged in
  const { data } = await supabase.auth.getUser()
  user.value = data.user

  // Listen for changes (Login/Logout) so the icon updates instantly
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null
  })
})
</script>