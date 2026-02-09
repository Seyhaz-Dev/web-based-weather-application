<template>
  <div class="min-h-screen flex font-sans selection:bg-lime-400/30">
    
    <main class="w-full lg:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-20 bg-white relative z-10 overflow-y-auto">
      
      <div class="max-w-[400px] w-full mx-auto py-12">
        <router-link to="/" class="inline-flex items-center gap-2 mb-10 group">
          <div class="w-10 h-10 rounded-xl bg-black flex items-center justify-center transition-transform group-hover:scale-110">
             <i class="fa-solid fa-cloud-sun-rain text-lime-400"></i>
          </div>
          <span class="text-xl font-black tracking-tighter text-black uppercase">Nimbus</span>
        </router-link>

        <div class="mb-8">
          <h1 class="text-3xl font-bold text-black tracking-tight">Create Account</h1>
          <p class="text-gray-500 mt-2 text-sm">Join the global network of weather explorers.</p>
        </div>

        <form @submit.prevent="handleSignup" class="space-y-4">
          <div>
            <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Full Name</label>
            <input
              v-model="name"
              type="text"
              placeholder="John Doe"
              class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black transition-all focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-gray-300"
              required
            />
          </div>

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
            <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Create Security Key</label>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black transition-all focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-gray-300"
              required
            />
          </div>

          <div>
            <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Verify Key</label>
            <input
              v-model="confirm"
              type="password"
              placeholder="••••••••"
              :class="{ 'border-red-400 bg-red-50': confirm && password !== confirm }"
              class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black transition-all focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            :disabled="isLoading || (confirm && password !== confirm)"
            class="w-full mt-4 bg-black text-white font-black uppercase text-[11px] tracking-[0.2em] py-4 rounded-xl hover:bg-lime-400 hover:text-black transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl shadow-black/10"
          >
            <span v-if="!isLoading">Register Node</span>
            <span v-else>Syncing to Database...</span>
            <i v-if="isLoading" class="fa-solid fa-circle-notch animate-spin"></i>
          </button>
        </form>

        <Transition name="slide-up">
          <div v-if="message" :class="['mt-6 p-4 rounded-xl text-center text-xs font-bold border', success ? 'bg-lime-100 border-lime-200 text-lime-700' : 'bg-red-50 border-red-100 text-red-600']">
            {{ message }}
          </div>
        </Transition>

        <div class="mt-10 pt-8 border-t border-gray-100 text-center">
          <p class="text-gray-400 text-xs font-medium">
            Already registered? 
            <router-link to="/login" class="text-black hover:text-lime-500 font-black transition-colors">Sign in</router-link>
          </p>
        </div>
      </div>
    </main>

    <aside class="hidden lg:block lg:flex-1 relative overflow-hidden bg-[#050505]">
      <img 
        src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=2070" 
        alt="Mountain Peaks"
        class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      <div class="absolute inset-0 flex flex-col justify-between p-16">
        <div class="flex justify-between items-start">
           <div class="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <span class="text-[9px] font-black text-white uppercase tracking-[0.3em]">Status: Connected to Supabase</span>
           </div>
        </div>
        <div class="max-w-md">
           <h2 class="text-5xl font-black text-white leading-tight mb-6">START YOUR <span class="text-lime-400">EXPEDITION</span></h2>
        </div>
      </div>
    </aside>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { supabase } from "../supabase" // Make sure this path to your supabase.js file is correct!

const router = useRouter()
const name = ref("")
const email = ref("")
const password = ref("")
const confirm = ref("")
const message = ref("")
const success = ref(false)
const isLoading = ref(false)

async function handleSignup() {
  if (password.value !== confirm.value) {
    message.value = "Security Keys do not match."
    return
  }

  isLoading.value = true
  message.value = ""
  success.value = false

  try {
    // REAL SUPABASE SIGN UP
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: name.value, // Stores the name in the user metadata
        },
      },
    })

    if (error) throw error

    success.value = true
    message.value = "Account created! Redirecting to login..."
    
    // Redirect to login after success
    setTimeout(() => {
      router.push("/login")
    }, 2000)

  } catch (error) {
    message.value = error.message || "An error occurred during registration."
    success.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translateY(20px); }

main {
  scrollbar-width: none;
}
main::-webkit-scrollbar {
  display: none;
}
</style>