<template>
  <div
    class="min-h-screen flex items-center justify-center
    bg-gradient-to-br from-[#0a1120] via-[#0f1b36] to-[#000000] relative overflow-hidden"
  >
    <!-- Background glows -->
    <div class="absolute w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-3xl top-[-250px] left-[-250px] animate-pulse-slow"></div>
    <div class="absolute w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse-slow delay-1000"></div>

    <!-- Main Card -->
    <div
      class="relative w-full max-w-md  sm:mt-30
      bg-[#0f172a]/85 backdrop-blur-2xl
      border border-lime-400/15
      rounded-3xl p-10 shadow-2xl shadow-lime-500/10
      transition-all duration-500"
    >

      <!-- Logo / Header -->
      <div class="text-center mb-10">
        <div
          class="w-16 h-16 mx-auto mb-4
          flex items-center justify-center
          rounded-2xl bg-lime-400/15 text-lime-400 text-3xl
          shadow-lg shadow-lime-500/20 ring-1 ring-lime-400/30"
        >
          <i class="fa-solid fa-cloud-sun-rain"></i>
        </div>

        <h1 class="text-4xl font-extrabold text-lime-300 tracking-tight">
          Nimbus Travel
        </h1>
        <p class="text-gray-400 text-base mt-2 font-light">
          Explore the skies — sign in to continue
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="login" class="space-y-7">

        <!-- Email -->
        <div class="relative">
          <input
            v-model="email"
            id="email"
            type="email"
            required
            placeholder=" "
            class="peer w-full px-5 py-4 rounded-xl
            bg-[#0a0f1c]/80 text-white text-base
            border border-gray-700/70
            focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30
            outline-none transition-all duration-300
            placeholder-transparent"
          />
          <label
            for="email"
            class="absolute left-5 -top-2.5 px-2 bg-[#0f172a] text-gray-400 text-sm
            transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-lime-400
            pointer-events-none"
          >
            Email address
          </label>
        </div>

        <!-- Password -->
        <div class="relative">
          <input
            v-model="password"
            id="password"
            type="password"
            required
            placeholder=" "
            class="peer w-full px-5 py-4 rounded-xl
            bg-[#0a0f1c]/80 text-white text-base
            border border-gray-700/70
            focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30
            outline-none transition-all duration-300
            placeholder-transparent"
          />
          <label
            for="password"
            class="absolute left-5 -top-2.5 px-2 bg-[#0f172a] text-gray-400 text-sm
            transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-lime-400
            pointer-events-none"
          >
            Password
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full py-4 rounded-xl
          bg-lime-400 text-black font-bold text-lg
          hover:bg-lime-300 active:scale-[0.98]
          transition-all duration-300 transform
          disabled:opacity-60 disabled:cursor-not-allowed
          shadow-lg shadow-lime-500/30 flex items-center justify-center gap-3"
        >
          <span v-if="isLoading">Please wait...</span>
          <span v-else>Sign In</span>
          <svg v-if="isLoading" class="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"/>
          </svg>
        </button>

      </form>

      <!-- Message -->
      <p
        v-if="message"
        :class="[
          'text-center mt-6 text-sm font-medium animate-fade-in',
          success ? 'text-lime-400' : 'text-red-400'
        ]"
      >
        {{ message }}
      </p>

      <!-- Links -->
      <div class="flex justify-between mt-8 text-sm text-gray-400">
        <a href="#" class="hover:text-lime-400 transition-colors duration-200">
          Forgot password?
        </a>
        <router-link
          to="/signup"
          class="hover:text-lime-400 transition-colors duration-200"
        >
          Create new account
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")
const message = ref("")
const success = ref(false)
const isLoading = ref(false)

// Demo credentials
const demoUser = {
  email: "admin@gmail.com",
  password: "123456"
}

async function login() {
  isLoading.value = true
  message.value = ""
  success.value = false

  // Small artificial delay to simulate network
  await new Promise(r => setTimeout(r, 800))

  if (email.value === demoUser.email && password.value === demoUser.password) {
    localStorage.setItem("user", "logged")
    success.value = true
    message.value = "Welcome back! Redirecting..."

    setTimeout(() => {
      router.push("/")
    }, 1200)
  } else {
    success.value = false
    message.value = "Invalid email or password"
  }

  isLoading.value = false
}
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
.animate-pulse-slow {
  animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%      { opacity: 0.7; transform: scale(1.05); }
}
.delay-1000 {
  animation-delay: 1s;
}
</style>