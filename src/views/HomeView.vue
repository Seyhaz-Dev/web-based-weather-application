<template>
  <div class="min-h-screen bg-gradient-to-b from-[#0f0e1a] to-[#1a1733] text-white">

    <!-- Header -->
    <header
      class="p-5 bg-black/40 backdrop-blur border-b border-white/10 flex justify-between items-center"
    >
      <h1 class="text-2xl font-bold text-cyan-400">
        ☁️ Nimbus Weather Pro
      </h1>

      <div class="text-right text-sm text-slate-400">
        <p>{{ today }}</p>
        <p v-if="localTime">🕒 {{ localTime }}</p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto p-6 space-y-10">

      <!-- Search -->
      <div class="flex flex-wrap gap-3 justify-center mt-10">

        <input
          v-model="city"
          @keyup.enter="getWeather"
          placeholder="Search city..."
          class="w-full max-w-md px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
        />

        <button
          @click="getWeather"
          class="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 transition"
        >
          🔍 Search
        </button>

        <button
          @click="getLocationWeather"
          class="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition"
        >
          📍 My Location
        </button>

      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center text-xl text-cyan-400 animate-pulse">
        Loading weather...
      </div>

      <!-- Error -->
      <div v-if="error" class="text-center text-red-400 bg-red-500/10 p-3 rounded-xl">
        {{ error }}
      </div>

      <!-- Weather Card -->
      <div
        v-if="weather"
        class="bg-gradient-to-br from-slate-900/50 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
      >

        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-8"
        >

          <!-- Left -->
          <div>

            <h2 class="text-4xl font-bold">
              {{ weather.name }},
              {{ weather.sys.country }}
            </h2>

            <p class="text-slate-400 mt-1 capitalize">
              {{ weather.weather[0].description }}
            </p>

            <h1 class="text-8xl font-extrabold mt-5">
              {{ Math.round(weather.main.temp) }}°
            </h1>

            <p class="text-cyan-400 mt-3 text-xl">
              Feels like {{ Math.round(weather.main.feels_like) }}°
            </p>

          </div>

          <!-- Right -->
          <div class="text-[9rem] animate-bounce-slow">
            {{ getIcon(weather.weather[0].main) }}
          </div>

        </div>

        <!-- Stats -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center"
        >

          <div class="card">
            <p>Humidity</p>
            <h3>{{ weather.main.humidity }}%</h3>
          </div>

          <div class="card">
            <p>Wind</p>
            <h3>{{ weather.wind.speed }} km/h</h3>
          </div>

          <div class="card">
            <p>Pressure</p>
            <h3>{{ weather.main.pressure }} hPa</h3>
          </div>

          <div class="card">
            <p>Visibility</p>
            <h3>{{ weather.visibility / 1000 }} km</h3>
          </div>

        </div>

        <!-- Sun Info -->
        <div
          class="grid grid-cols-2 gap-6 mt-8 text-center"
        >

          <div class="card">
            <p>🌅 Sunrise</p>
            <h3>{{ sunrise }}</h3>
          </div>

          <div class="card">
            <p>🌇 Sunset</p>
            <h3>{{ sunset }}</h3>
          </div>

        </div>

      </div>

      <!-- Travel Tip -->
      <div
        v-if="weather"
        class="bg-white/5 rounded-2xl p-6 text-center"
      >

        <h3 class="text-xl mb-2 font-semibold">
          ✈️ Smart Travel Tip
        </h3>

        <p class="text-slate-300">
          {{ tip }}
        </p>

      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'


// ⚠️ YOUR API KEY (NOT REMOVED)
const API_KEY = 'cddc388b1e89aedbf0e6e1dba630e668'


// State
const city = ref(localStorage.getItem('lastCity') || 'Cambodia')
const weather = ref(null)

const loading = ref(false)
const error = ref(null)

const localTime = ref('')


// Date
const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})


// Save last city
watch(city, (val) => {
  localStorage.setItem('lastCity', val)
})


// Icons
function getIcon(type) {

  const map = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Haze: '🌫️'
  }

  return map[type] || '🌤️'
}


// Convert time
function formatTime(unix, timezone) {

  return new Date((unix + timezone) * 1000)
    .toUTCString()
    .slice(17, 22)
}



// Fetch weather
async function getWeather() {

  if (!city.value) return

  loading.value = true
  error.value = null

  try {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`

    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('City not found ❌')
    }

    const data = await res.json()

    weather.value = data

    updateLocalTime()

  }
  catch (err) {

    error.value = err.message
    weather.value = null

  }
  finally {

    loading.value = false

  }
}



// Get weather by GPS
function getLocationWeather() {

  if (!navigator.geolocation) {
    error.value = 'Geolocation not supported'
    return
  }

  navigator.geolocation.getCurrentPosition(async pos => {

    const { latitude, longitude } = pos.coords

    loading.value = true

    try {

      const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

      const res = await fetch(url)
      const data = await res.json()

      weather.value = data
      city.value = data.name

      updateLocalTime()

    }
    catch {
      error.value = 'Location weather failed'
    }
    finally {
      loading.value = false
    }

  })
}



// Update city time
function updateLocalTime() {

  if (!weather.value) return

  const now =
    new Date(Date.now() + weather.value.timezone * 1000)

  localTime.value = now.toUTCString().slice(17, 25)
}



// Travel Tip
const tip = computed(() => {

  if (!weather.value) return ''

  const temp = weather.value.main.temp

  if (temp > 35) {
    return '🔥 Very hot! Stay hydrated and use sunscreen.'
  }

  if (temp > 30) {
    return '☀️ Hot day! Wear light clothes.'
  }

  if (temp < 15) {
    return '🧥 Cold weather! Bring a jacket.'
  }

  if (weather.value.weather[0].main === 'Rain') {
    return '☔ Bring an umbrella today.'
  }

  return '🌤️ Perfect day for traveling!'
})



// Sunrise / Sunset
const sunrise = computed(() => {

  if (!weather.value) return ''

  return formatTime(
    weather.value.sys.sunrise,
    weather.value.timezone
  )
})


const sunset = computed(() => {

  if (!weather.value) return ''

  return formatTime(
    weather.value.sys.sunset,
    weather.value.timezone
  )
})



// Load
onMounted(() => {
  getWeather()
})
</script>


<style scoped>

.card {
  background: rgba(255,255,255,0.06);
  padding: 20px;
  border-radius: 18px;
  backdrop-filter: blur(12px);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.1);
}

.card p {
  color: #94a3b8;
  font-size: 14px;
}

.card h3 {
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
}


/* Smooth bounce */
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {

  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }

}

</style>
