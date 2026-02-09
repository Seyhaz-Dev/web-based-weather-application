<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#C6E207]/30">
    
    <nav class="flex justify-between items-center px-8 py-4 bg-black/50 border-b border-white/5 sticky top-0 z-50 backdrop-blur-xl">
      <router-link to="/" class="flex items-center gap-2 group">
        <img src="/public/image.png" class="h-7 w-auto transition-transform group-hover:scale-105" />
        <span class="text-sm font-black uppercase tracking-tighter">Nimbus</span>
      </router-link>
      
      <div class="flex items-center gap-6">
        <router-link to="/travel" class="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-[#C6E207] transition-colors">Travel</router-link>
        <button @click="handleLogout" class="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors">
          Sign Out
        </button>
      </div>
    </nav>

    <div v-if="loading" class="flex flex-col items-center justify-center h-[80vh]">
      <div class="w-10 h-10 border-4 border-white/10 border-t-[#C6E207] rounded-full animate-spin"></div>
      <p class="mt-4 text-[10px] font-black uppercase tracking-widest text-white/30 italic">Syncing Node...</p>
    </div>

    <main v-else class="max-w-5xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
      
      <aside class="space-y-6">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
          <div class="relative inline-block mb-6">
            <div class="absolute inset-0 bg-[#C6E207]/20 blur-2xl rounded-full"></div>
            <div class="relative w-24 h-24 rounded-2xl bg-[#C6E207] flex items-center justify-center text-black text-3xl font-black">
              {{ userInitials }}
            </div>
            <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-black rounded-full border-2 border-white/10 flex items-center justify-center">
              <i class="fa-solid fa-circle-check text-[10px] text-[#C6E207]"></i>
            </div>
          </div>
          
          <h2 class="text-xl font-black tracking-tight mb-1 uppercase">{{ fullName || 'Explorer' }}</h2>
          <p class="text-white/40 text-xs mb-6 font-mono tracking-tight">{{ userEmail }}</p>
          
          <div class="inline-flex items-center px-4 py-1.5 bg-[#C6E207]/10 rounded-full border border-[#C6E207]/20">
            <span class="w-1.5 h-1.5 bg-[#C6E207] rounded-full mr-2 animate-pulse"></span>
            <span class="text-[9px] font-black uppercase tracking-widest text-[#C6E207]">Verified Node</span>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p class="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Node Telemetry</p>
          <div class="space-y-4">
            <div class="flex justify-between text-xs">
              <span class="text-white/40">Registered</span>
              <span class="font-bold text-white/80 uppercase">{{ joinDate }}</span>
            </div>
            <div class="flex justify-between text-xs">
              <span class="text-white/40">Trips Logged</span>
              <span class="font-bold text-[#C6E207]">0</span>
            </div>
          </div>
        </div>
      </aside>

      <section class="lg:col-span-2 space-y-8">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h3 class="text-lg font-black mb-8 uppercase tracking-tight flex items-center gap-3">
            <i class="fa-solid fa-sliders text-[#C6E207]"></i>
            Identity Config
          </h3>
          
          <form @submit.prevent="updateProfile" class="space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Full Name</label>
                <input v-model="fullName" type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C6E207] transition-all text-sm" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Email Node</label>
                <input v-model="userEmail" type="email" disabled class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 opacity-30 cursor-not-allowed text-sm" />
              </div>
            </div>
            
            <button type="submit" :disabled="updating"
              class="bg-[#C6E207] text-black font-black uppercase text-[11px] tracking-widest px-10 py-4 rounded-xl hover:bg-[#d4f008] hover:shadow-[0_0_20px_rgba(198,226,7,0.3)] transition-all active:scale-95 disabled:opacity-50">
              <span v-if="!updating">Update Identity</span>
              <span v-else class="flex items-center gap-2">
                <i class="fa-solid fa-circle-notch animate-spin"></i> Syncing...
              </span>
            </button>
          </form>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h3 class="text-lg font-black mb-6 uppercase tracking-tight">Recent Expeditions</h3>
          <div class="py-12 flex flex-col items-center text-center border-2 border-dashed border-white/5 rounded-2xl">
            <i class="fa-solid fa-map-location-dot text-2xl text-white/10 mb-3"></i>
            <p class="text-white/30 text-xs italic">No telemetry data found for this node.</p>
            <router-link to="/travel" class="mt-6 text-[10px] font-black uppercase tracking-widest bg-white text-black px-6 py-2.5 rounded-full hover:bg-[#C6E207] transition-colors">Begin Expedition</router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const fullName = ref("")
const userEmail = ref("")
const joinDate = ref("")
const loading = ref(true)
const updating = ref(false)

const userInitials = computed(() => {
  if (!fullName.value) return '??'
  // Takes the first letter of first and last name
  const names = fullName.value.split(' ')
  if (names.length > 1) {
    return (names[0][0] + names[names.length - 1][0]).toUpperCase()
  }
  return fullName.value.substring(0, 2).toUpperCase()
})

async function getProfile() {
  loading.value = true
  const { data: { user }, error } = await supabase.auth.getUser()

  if (user) {
    userEmail.value = user.email
    fullName.value = user.user_metadata.full_name || user.user_metadata.display_name || ""
    joinDate.value = new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  } else {
    router.push('/login')
  }
  loading.value = false
}

async function updateProfile() {
  updating.value = true
  const { error } = await supabase.auth.updateUser({
    data: { full_name: fullName.value }
  })
  
  if (!error) {
    alert("Node Identity Updated.")
  } else {
    alert(error.message)
  }
  updating.value = false
}

async function handleLogout() {
  if (confirm("Deactivate current session?")) {
    await supabase.auth.signOut()
    router.push('/login')
  }
}

onMounted(getProfile)
</script>