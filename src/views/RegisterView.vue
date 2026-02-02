





<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

      <!-- LEFT SIDE -->
      <div class="hidden md:flex flex-col justify-center px-12 text-white bg-teal-500 relative">
        <div class="absolute inset-0 bg-teal-600 opacity-90"></div>

        <div class=" z-10">
          <div class="flex items-center gap-2 mb-8">
            <div class="w-10 h-10 bg-white rounded-full"></div>
            <h2 class="text-xl font-bold">Your Logo</h2>
          </div>

          <h1 class="text-3xl font-bold mb-2">Hey! Welcome</h1>
          <p class="text-sm opacity-90">
            Join us and give information to people
          </p>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex flex-col justify-center px-8 md:px-12 py-10">
        <p class="text-sm text-gray-400 text-right mb-6 cursor-pointer">
          Create a new Account
        </p>

        <h2 class="text-2xl font-bold text-center mb-6">Log in</h2>

        <!-- Username -->
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="mb-4 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <!-- Password -->
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          class="mb-2 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <!-- Options -->
        <div class="flex justify-between items-center text-sm mb-6">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" v-model="showPassword" />
            Show my password
          </label>

          <a href="#" class="text-gray-400 hover:text-teal-500">
            Forgot Password?
          </a>
        </div>

        <!-- Button -->
        <button
          @click="login"
          class="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition"
        >
          Log in
        </button>

        <!-- Divider -->
        <div class="flex items-center my-6">
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="px-3 text-gray-400 text-sm">Or with</span>
          <div class="flex-1 h-px bg-gray-300"></div>
        </div>

        <!-- Social -->
        <div class="flex justify-center gap-4">
          <div class="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full cursor-pointer">G+</div>
          <div class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer">f</div>
          <div class="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-full cursor-pointer">🐦</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const username = ref("")
const password = ref("")
const showPassword = ref(false)

const login = () => {
  if (!username.value || !password.value) {
    alert("Please fill all fields")
    return
  }

  alert(`Welcome, ${username.value}`)
}
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
     integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" 
     crossorigin="anonymous" referrerpolicy="no-referrer" />