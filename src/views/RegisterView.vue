<template>
  <!-- PUSH CONTENT BELOW HEADER -->
  <div class="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100">

    <!-- AUTH CARD -->
    <div class="relative z-10 w-[850px] h-[520px] bg-white rounded-3xl shadow-xl overflow-hidden flex">

      <!-- LEFT FORM -->
      <div class="w-1/2 flex items-center justify-center p-10 overflow-hidden">

        <Transition name="slide-fade" mode="out-in">

          <!-- LOGIN FORM -->
          <form
            v-if="!isRegister"
            key="login"
            class="w-full"
            @submit.prevent="submitLogin"
          >
            <h2 class="text-3xl font-bold text-center mb-6">Login</h2>

            <input
              v-model="login.username"
              type="text"
              placeholder="Username"
              class="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
            />

            <input
              v-model="login.password"
              type="password"
              placeholder="Password"
              class="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 outline-none"
            />

            <button
              type="submit"
              class="w-full bg-indigo-600 text-white py-3 rounded-lg"
            >
              Login
            </button>
          </form>

          <!-- REGISTER FORM -->
          <form
            v-else
            key="register"
            class="w-full"
            @submit.prevent="submitRegister"
          >
            <h2 class="text-3xl font-bold text-center mb-6">Register</h2>

            <input
              v-model="register.username"
              type="text"
              placeholder="Username"
              class="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
            />

            <input
              v-model="register.email"
              type="email"
              placeholder="Email"
              class="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
            />

            <input
              v-model="register.password"
              type="password"
              placeholder="Password"
              class="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 outline-none"
            />

            <button
              type="submit"
              class="w-full bg-indigo-600 text-white py-3 rounded-lg"
            >
              Register
            </button>
          </form>

        </Transition>
      </div>

      <!-- RIGHT PANEL -->
      <div class="w-1/2 bg-indigo-600 text-white flex flex-col items-center justify-center text-center p-10">
        <h2 class="text-3xl font-bold mb-4">
          {{ isRegister ? 'Welcome Back!' : 'Hello, Friend!' }}
        </h2>

        <p class="mb-6">
          {{ isRegister ? 'Already have an account?' : 'Don’t have an account?' }}
        </p>

        <button
          @click="toggleForm"
          class="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
        >
          {{ isRegister ? 'Login' : 'Register' }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isRegister = ref(false)

const login = ref({
  username: '',
  password: ''
})

const register = ref({
  username: '',
  email: '',
  password: ''
})

const toggleForm = () => {
  isRegister.value = !isRegister.value
}

const submitLogin = () => {
  console.log('LOGIN DATA:', login.value)
  alert('Login submitted ✅')
}

const submitRegister = () => {
  console.log('REGISTER DATA:', register.value)
  alert('Register submitted ✅')
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
