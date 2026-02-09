<template>
  <div class="min-h-screen flex font-sans selection:bg-lime-400/30">
    
    <main class="w-full lg:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-20 bg-white relative z-10">
      
      <div class="max-w-[380px] w-full mx-auto">
        <router-link to="/" class="inline-flex items-center gap-2 mb-12 group">
          <div class="w-10 h-10 rounded-xl bg-black flex items-center justify-center transition-transform group-hover:scale-110">
             <i class="fa-solid fa-cloud-sun-rain text-lime-400"></i>
          </div>
          <span class="text-xl font-black tracking-tighter text-black uppercase">Nimbus</span>
        </router-link>

        <div class="mb-10">
          <h1 class="text-3xl font-bold text-black tracking-tight">Sign in</h1>
          <p class="text-gray-500 mt-2 text-sm">Welcome back. Enter your node credentials.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Email Node</label>
            <input
              v-model="email"
              type="email"
              placeholder="name@example.com"
              class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black transition-all focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-gray-300"
              required
            />
          </div>

          <div>
            <div class="flex justify-between items-center mb-2 ml-1">
               <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Security Key</label>
               <a href="#" class="text-[10px] font-black uppercase text-gray-400 hover:text-black transition-colors">Forgot?</a>
            </div>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black transition-all focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-4 bg-black text-white font-black uppercase text-[11px] tracking-[0.2em] py-4 rounded-xl hover:bg-lime-400 hover:text-black transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl shadow-black/10"
          >
            <span v-if="!isLoading">Authenticate</span>
            <span v-else>Verifying Access...</span>
            <i v-if="isLoading" class="fa-solid fa-circle-notch animate-spin"></i>
          </button>
        </form>

        <Transition name="slide-up">
          <div v-if="message" :class="['mt-6 p-4 rounded-xl text-center text-xs font-bold border', success ? 'bg-lime-100 border-lime-200 text-lime-700' : 'bg-red-50 border-red-100 text-red-600']">
            {{ message }}
          </div>
        </Transition>

        <div class="mt-12 pt-8 border-t border-gray-100 text-center">
          <p class="text-gray-400 text-xs font-medium">
            New to the network? 
            <router-link to="/sign" class="text-black hover:text-lime-500 font-black transition-colors">Create account</router-link>
          </p>
        </div>
      </div>
    </main>

    <aside class="hidden lg:block lg:flex-1 relative overflow-hidden bg-[#050505]">
      <img 
        src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&q=80&w=1974" 
        alt="Travel Poster"
        class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      <div class="absolute inset-0 flex flex-col justify-end p-16">
        <h2 class="text-5xl font-black text-white leading-tight mb-6 uppercase">Reconnect <br/> to the <span class="text-lime-400">Stream</span></h2>
      </div>
    </aside>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { supabase } from "../supabase" // Import your connection file

const router = useRouter()
const store = useStore()

const email = ref("")
const password = ref("")
const message = ref("")
const success = ref(false)
const isLoading = ref(false)

async function handleLogin() {
  isLoading.value = true
  message.value = ""
  success.value = false

  try {
    // REAL SUPABASE LOGIN
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    // Update Vuex Store
    store.commit('loggedIn') 
    
    success.value = true
    message.value = "Access Granted. Syncing Dashboard..."

    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)

  } catch (error) {
    message.value = error.message || "Invalid email or security key."
    success.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translateY(20px); }
</style>