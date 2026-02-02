<template>
    <link rel="stylesheet" href="src/style.css">
  <footer class="bg-black text-gray-400">
    <div class="max-w-7xl mx-auto px-6 py-16">

      <!-- Header Row -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-800 pb-10">
        <div class="flex items-center gap-3">
          <span class="text-2xl"><img class="h-30 w-auto" src="/public/logo-weather-rm-bg.png" alt="Rain Viewer Logo"></span>
          <span class="text-xl font-semibold text-white hover:text-yellow-300">Sky Solution</span>
        </div>

          <div class="flex justify-center items-center gap-4">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" class="h-11" />
          <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" class="h-35" />
        </div>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-10 py-14">

        <div>
          <h4 class="text-white mb-4">Rain Viewer</h4>
          <ul class="space-y-3">
            <li><a class="hover:text-white underline" href="#">For Your Car</a></li>
            <li><a class="hover:text-white underline" href="#">Blog</a></li>
            <li><a class="hover:text-white underline" href="#">FAQ</a></li>
            <li><a class="hover:text-white underline" href="#">About</a></li>
            <li><a class="hover:text-white underline" href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white mb-4">Maps</h4>
          <ul class="space-y-3">
            <li><a class="hover:text-white underline" href="#">Live Radar</a></li>
            <li><a class="hover:text-white underline" href="#">Hurricane Tracking</a></li>
            <li><a class="hover:text-white underline" href="#">Severe Alerts</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white mb-4">API</h4>
          <ul class="space-y-3">
            <li><a class="hover:text-white underline" href="#">API Documentation</a></li>
            <li><a class="hover:text-white underline" href="#">API Transition FAQ</a></li>
            <li><a class="hover:text-white underline" href="#">Data Sources</a></li>
          </ul>
        </div>

        <!-- Appearance (JS) -->
        <div>
          <h4 class="text-white mb-4">Appearance</h4>
          <button
            class="flex items-center gap-2 text-white underline"
            @click="toggleThemeMenu"
          >
            {{ theme }}
            <span>▼</span>
          </button>

          <div v-if="showTheme" class="mt-2 space-y-1 text-sm">
            <button @click="setTheme('Auto')" class="block hover:text-white">Auto</button>
            <button @click="setTheme('Dark')" class="block hover:text-white">Dark</button>
            <button @click="setTheme('Light')" class="block hover:text-white">Light</button>
          </div>
        </div>
        


        <!-- Language (JS) -->
        <div>
          <h4 class="text-white mb-4">Language</h4>
          <button class="underline text-white" @click="toggleLang">
            {{ language }}
          </button>
        </div>

      </div>
<!-- Social Icons -->
<div class="flex justify-center gap-8 py-8">
  <!-- Facebook -->
  <a href="#" class="hover:text-white transition">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9v-2.9h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
    </svg>
  </a>

  <!-- Instagram -->
  <a href="#" class="hover:text-white transition">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9ZM17.5 6.2a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z"/>
    </svg>
  </a>

  <!-- X (Twitter) -->
  <a href="#" class="hover:text-white transition">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.9 2H22l-6.9 7.9L22 22h-6.2l-4.8-6.3L5.6 22H2l7.4-8.5L2 2h6.3l4.4 5.8L18.9 2Z"/>
    </svg>
  </a>

  <!-- YouTube -->
  <a href="#" class="hover:text-white transition">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h-.1s-4.7 0-8.2.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S0 8.2 0 10.2v1.9c0 2 .4 4 .4 4s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 8.1.3 8.1.3s4.7 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.4-2 .4-4v-1.9c0-2-.4-4-.4-4ZM9.5 14.8V8.9l6.2 3-6.2 2.9Z"/>
    </svg>
  </a>

  <!-- GitHub -->
  <a href="#" class="hover:text-white transition">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 2 1.1.3-.8.7-1.3 1.1-1.6-2.2-.2-4.6-1.1-4.6-5a4 4 0 0 1 1-2.8 3.7 3.7 0 0 1 .1-2.7s.9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.7 3.7 0 0 1 .1 2.7 4 4 0 0 1 1 2.8c0 3.9-2.4 4.8-4.6 5 .7.6 1.2 1.5 1.2 3v2.2c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>
    </svg>
  </a>
</div>

      <!-- Bottom -->
      <div class="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {{ year }} Rain Viewer, <span class="underline">MeteoLab Inc.</span></p>

        <div class="flex gap-6">
          <a href="#" class="underline text-white">Privacy Notice</a>
          <a href="#" class="underline text-white">Terms and Conditions</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue"

const year = new Date().getFullYear()

const theme = ref("Auto")
const showTheme = ref(false)

const toggleThemeMenu = () => {
  showTheme.value = !showTheme.value
}

const setTheme = (value) => {
  theme.value = value
  showTheme.value = false
}

const language = ref("English (US)")
const toggleLang = () => {
  language.value =
    language.value === "English (US)" ? "Khmer (KM)" : "English (US)"
}
</script>
