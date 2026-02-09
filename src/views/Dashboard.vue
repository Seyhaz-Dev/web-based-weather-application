<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-lime-400/30">
    
    <nav class="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <router-link to="/" class="flex items-center gap-2 group">
        <div class="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center transition-transform group-hover:rotate-12">
           <i class="fa-solid fa-bolt text-black"></i>
        </div>
        <span class="text-xl font-black tracking-tighter uppercase">Nimbus</span>
      </router-link>
      
      <button @click="handleLogout" class="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:border-red-500 transition-all">
        Exit Node
      </button>
    </nav>

    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
      
      <aside class="lg:col-span-4 space-y-6">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
          <div class="relative inline-block mb-6">
            <div class="w-32 h-32 rounded-3xl bg-gradient-to-br from-lime-400 to-emerald-500 p-1">
              <div class="w-full h-full rounded-[20px] bg-[#0a0a0a] flex items-center justify-center">
                <span class="text-5xl font-black text-lime-400">{{ userInitials }}</span>
              </div>
            </div>
            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center border-4 border-[#0a0a0a]">
              <i class="fa-solid fa-check text-[10px] text-black"></i>
            </div>
          </div>
          
          <h2 class="text-2xl font-black tracking-tight">{{ fullName || 'Unknown Node' }}</h2>
          <p class="text-gray-500 text-sm mb-6">{{ userEmail }}</p>
          
          <div class="flex justify-center gap-2">
            <span class="px-3 py-1 bg-lime-400/10 text-lime-400 text-[9px] font-black uppercase rounded-full border border-lime-400/20">Explorer Level 1</span>
            <span class="px-3 py-1 bg-white/5 text-gray-400 text-[9px] font-black uppercase rounded-full border border-white/10">Verified</span>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Node Stats</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">Sync Status</span>
              <span class="text-xs font-bold text-lime-400">Optimal</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">Registration</span>
              <span class="text-xs font-bold">{{ joinDate }}</span>
            </div>
          </div>
        </div>
      </aside>

      <main class="lg:col-span-8 space-y-6">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 class="text-xl font-black mb-6 flex items-center gap-3">
            <i class="fa-solid fa-gears text-lime-400"></i>
            Identity Configuration
          </h3>
          
          <form @submit.prevent="updateProfile" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Display Name</label>
              <input v-model="fullName" type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors" />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Node</label>
              <input v-model="userEmail" type="email" disabled class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 opacity-50 cursor-not-allowed" />
            </div>
            
            <div class="md:col-span-2 pt-4">
              <button type="submit" class="bg-white text-black font-black uppercase text-[11px] tracking-widest px-8 py-4 rounded-xl hover:bg-lime-400 transition-all active:scale-95">
                Update Identity
              </button>
            </div>
          </form>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 class="text-xl font-black mb-6">Recent Expeditions</h3>
          <div class="text-center py-12 border-2 border-dashed border-white/5 rounded-2xl">
            <i class="fa-solid fa-map-location-dot text-4xl text-white/10 mb-4"></i>
            <p class="text-gray-500 text-sm">No telemetry data found for this node yet.</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase' //

const router = useRouter()
const fullName = ref("")
const userEmail = ref("")
const joinDate = ref("")

const userInitials = computed(() => {
  return fullName.value ? fullName.value.substring(0, 2).toUpperCase() : '??'
})

async function getProfile() {
  const { data: { user }, error } = await supabase.auth.getUser() //

  if (user) {
    userEmail.value = user.email
    fullName.value = user.user_metadata.full_name || user.user_metadata.display_name
    joinDate.value = new Date(user.created_at).toLocaleDateString()
  } else {
    router.push('/login')
  }
}

async function updateProfile() {
  const { error } = await supabase.auth.updateUser({
    data: { full_name: fullName.value } //
  })
  
  if (!error) alert("Identity Updated!")
}

async function handleLogout() {
  await supabase.auth.signOut() //
  router.push('/login')
}

onMounted(getProfile)
</script>