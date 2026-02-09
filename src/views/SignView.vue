<template>
  <div
    class="min-h-screen flex items-center justify-center
    bg-gradient-to-br from-[#0a1120] via-[#0f1b36] to-[#000000] relative overflow-hidden"
  >
    <!-- Background glows -->
    <div class="absolute w-[700px] h-[700px] bg-lime-500/8 rounded-full blur-3xl top-[-300px] left-[-300px] animate-pulse-slow"></div>
    <div class="absolute w-[600px] h-[600px] bg-cyan-500/6 rounded-full blur-3xl bottom-[-250px] right-[-250px] animate-pulse-slow delay-1000"></div>

    <!-- Main Card -->
    <div
      class="relative w-full max-w-md mx-6 mt-16 sm:mt-35 mb-12
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
          <!-- Alternative: <i class="fa-solid fa-cloud-sun-rain"></i> -->
        </div>

        <h1 class="text-4xl font-extrabold text-lime-300 tracking-tight">
          Nimbus Travel
        </h1>
        <p class="text-gray-400 text-base mt-2 font-light">
          Join the journey — create your account
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="signup" class="space-y-7">

        <!-- Full Name -->
        <div class="relative">
          <input
            v-model="name"
            id="name"
            type="text"
            required
            placeholder=" "
            class="peer w-full px-5 py-4 rounded-xl
            text-white text-base
            border border-gray-700/70
            focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30
            outline-none transition-all duration-300
            placeholder-transparent"
          />
          <label
            for="name"
            class="absolute left-5 -top-2.5 px-2 bg-[#0f172a] text-gray-400 text-sm
            transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-lime-400
            pointer-events-none"
          >
            Full name
          </label>
        </div>

        <!-- Email -->
        <div class="relative">
          <input
            v-model="email"
            id="email"
            type="email"
            required
            placeholder=" "
            class="peer w-full px-5 py-4 rounded-xl
             text-white text-base
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
            minlength="6"
            placeholder=" "
            class="peer w-full px-5 py-4 rounded-xl
            text-white text-base
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

        <!-- Confirm Password -->
        <div class="relative">
          <input
            v-model="confirm"
            id="confirm"
            type="password"
            required
            placeholder=" "
            :class="{
              'border-red-500/50 focus:border-red-400 focus:ring-red-400/30': confirm && password !== confirm
            }"
            class="peer w-full px-5 py-4 rounded-xl
             text-white text-base
            border border-gray-700/70
            focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30
            outline-none transition-all duration-300
            placeholder-transparent"
          />
          <label
            for="confirm"
            class="absolute left-5 -top-2.5 px-2 bg-[#0f172a] text-gray-400 text-sm
            transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-lime-400
            pointer-events-none"
          >
            Confirm password
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading || (confirm && password !== confirm)"
          class="w-full py-4 rounded-xl
          bg-lime-400 text-black font-bold text-lg
          hover:bg-lime-300 active:scale-[0.98]
          transition-all duration-300 transform
          disabled:opacity-60 disabled:cursor-not-allowed
          shadow-lg shadow-lime-500/30 flex items-center justify-center gap-3"
        >
          <span v-if="isLoading">Creating account...</span>
          <span v-else>Create Account</span>
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

      <!-- Link to login -->
      <div class="text-center mt-8 text-sm text-gray-400">
        Already have an account?
        <router-link
          to="/login"
          class="text-lime-400 hover:text-lime-300 transition-colors duration-200 ml-1 font-medium"
        >
          Sign in
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")
const confirm = ref("")

const message = ref("")
const success = ref(false)
const isLoading = ref(false)

// Optional: live mismatch feedback (red border already added in template)
const passwordsMatch = computed(() => !confirm.value || password.value === confirm.value)

watch([password, confirm], () => {
  if (confirm.value && !passwordsMatch.value) {
    message.value = ""
  }
})

async function signup() {
  if (!passwordsMatch.value) {
    message.value = "Passwords do not match"
    success.value = false
    return
  }

  if (password.value.length < 6) {
    message.value = "Password must be at least 6 characters"
    success.value = false
    return
  }

  isLoading.value = true
  message.value = ""
  success.value = false

  // Fake delay (simulate API call)
  await new Promise(r => setTimeout(r, 900))

  // Demo storage
  const user = {
    name: name.value.trim(),
    email: email.value.trim(),
    password: password.value // In real app → NEVER store plain password!
  }

  localStorage.setItem("demoUser", JSON.stringify(user))

  success.value = true
  message.value = "Account created! Redirecting to login..."

  setTimeout(() => {
    router.push("/login")
  }, 1400)

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
  animation: pulse 14s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50%      { opacity: 0.65; transform: scale(1.04); }
}
.delay-1000 {
  animation-delay: 1.2s;
}
</style>