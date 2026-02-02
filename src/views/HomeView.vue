<script setup>
import { ref } from "vue"

          // main state
          const city = ref("Kompong Chhnang")
          const temperature = ref(28)
          const condition = ref("Sunny")
          const date = ref("Friday | 12 Jan 2026")


          const hourly = ref([
            { time: "1 AM", temp: 26, type: "thunder" },
            { time: "4 AM", temp: 24, type: "rain" },
            { time: "7 AM", temp: 22, type: "cloud" },
            { time: "10 AM", temp: 25, type: "cloud-sun" },
            { time: "1 PM", temp: 30, type: "sun" },
            { time: "4 PM", temp: 27, type: "rain-sun" },
          ])

          // change weather dynamically
          const changeWeather = () => {
            temperature.value = Math.floor(Math.random() * 35)
            const conditions = ["Sunny", "Rainy", "Cloudy", "Thunder"]
            condition.value = conditions[Math.floor(Math.random() * conditions.length)]
          }

          // icon helper
          const getIcon = (type) => {
            return type === "thunder" ? "⛈️"
              : type === "rain" ? "🌧️"
              : type === "cloud" ? "☁️"
              : type === "cloud-sun" ? "⛅"
              : type === "sun" ? "☀️"
              : type === "rain-sun" ? "🌦️"
              : ""
          }
          </script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-slate-700 to-slate-900 text-white">

    <!-- LEFT BAR -->
    <aside class="w-20 bg-black/40 flex flex-col items-center py-6">
      <span class="text-2xl mt-6"><i class="fa-solid fa-cloud-rain"></i></span>
    </aside>

    <!-- MAIN -->
    <main class="flex-1 p-8">

      <!-- INPUT -->
      <input
        v-model="city"
        placeholder="Enter city"
        class="bg-white/20 px-4 py-2 rounded-lg outline-none"
      />

      <!-- WEATHER INFO -->
      <div class="mt-6">
        <p class="opacity-80">{{ city }}</p>
        <h1 class="text-5xl font-semibold">{{ condition }}</h1>
        <div class="text-6xl font-bold">{{ temperature }}°C</div>
        <p class="opacity-70">{{ date }}</p>

        <button
          @click="changeWeather"
          class="mt-4 bg-blue-500 px-4 py-2 rounded-lg"
        >
          Change Weather
        </button>
      </div>

      <!-- FORECAST -->
      <div class="bg-white/15 rounded-2xl p-5 mt-10">
        <h3 class="mb-4 font-semibold">24-hour forecast</h3>
        <div class="flex justify-between text-center">
          <div v-for="(item, i) in hourly" :key="i">
            <p class="text-sm opacity-70">{{ item.time }}</p>
            <p class="text-2xl">{{ getIcon(item.type) }}</p>
            <p class="font-semibold">{{ item.temp }}°</p>
          </div>
        </div>
      </div>

    </main>

    <!-- RIGHT PANEL -->
    <aside class="w-64 bg-black/40 p-6">
      <h3 class="font-semibold mb-4">Air Conditions</h3>

            <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                  Real Feel: <b>{{ temperature + 2 }}°C</b>
                </li>
                    <li class="flex items-center gap-2">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 12h13m0 0a4 4 0 010 8H3m13-8a4 4 0 010-8H3"
                      />
                  </svg>

                  Wind: <b>0.8 km/h</b>
                </li>
                <li class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 13a4 4 0 00-8 0m4 0v6m-2-2l1 2m2-2l1 2M7 16h.01M17 16h.01"
                      />
                    </svg>

                  Rain: <b>20%</b>
                </li>
                <li class="flex items-center gap-2">  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>

                  UV Index: <b>4</b>
                </li>
              </ul>


    </aside>

  </div>
</template>
