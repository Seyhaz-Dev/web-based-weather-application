<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <div :class="['min-h-screen transition-colors duration-1000 text-white pb-20', bgClass]">

    

    <main class="max-w-7xl mx-auto p-4 md:p-8 space-y-8 md:space-y-12">
      
      <div class="flex flex-col md:items-end text-center md:text-right space-y-1">
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/60">{{ today }}</p>
        <p v-if="localTime" class="text-base md:text-lg font-mono font-bold">
          <i class="fa-regular fa-clock mr-2"></i>{{ localTime }}
        </p>
      </div>

      <section class="relative max-w-3xl mx-auto text-center">
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-2 shadow-2xl focus-within:ring-2 ring-cyan-500/50 transition-all gap-2">
          <input
            v-model="searchText"
            @input="getSuggestions"
            @focus="showList = true"
            placeholder="City or airport..."
            class="w-full px-4 md:px-6 py-3 md:py-4 bg-transparent border-none focus:outline-none placeholder:text-slate-500 text-base md:text-lg"
          />
          <button @click="getWeather" class="bg-cyan-500 hover:bg-cyan-400 text-blue-950 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl sm:rounded-2xl transition-all whitespace-nowrap">
            <i class="fa-solid fa-magnifying-glass sm:hidden mr-2"></i>Search
          </button>
        </div>

        <div class="flex gap-2 mt-4 justify-start sm:justify-center overflow-x-auto no-scrollbar pb-2">
          <button 
            v-for="c in ['Phnom Penh', 'Siem Reap', 'Sihanoukville', 'Battambang']" 
            :key="c"
            @click="city = c; getWeather()"
            class="text-[9px] md:text-[10px] whitespace-nowrap font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500 hover:text-black transition"
          >
            {{ c }}
          </button>
        </div>

        <Transition name="slide-down">
          <div v-if="showList && suggestions.length" class="absolute left-0 right-0 mt-3 bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden z-50 shadow-3xl text-left">
            <div v-for="place in suggestions" :key="place.lat + place.lon" @click="selectPlace(place)" class="px-6 md:px-8 py-4 md:py-5 cursor-pointer hover:bg-cyan-500/20 border-b border-white/5 last:border-0 flex items-center justify-between">
              <span class="font-medium text-base md:text-lg">{{ place.name }}, <span class="text-slate-400 text-xs md:text-sm">{{ place.country }}</span></span>
              <span class="text-[10px] opacity-40">GEO: {{ place.lat.toFixed(2) }}</span>
            </div>
          </div>
        </Transition>
      </section>

      <div v-if="error" class="bg-red-500/20 border border-red-500/50 text-red-200 p-6 rounded-3xl text-center">⚠️ {{ error }}</div>
      <div v-if="loading" class="text-center py-20 animate-pulse text-cyan-400 font-bold tracking-widest">LOADING DATA...</div>

      <div v-else-if="weather" class="space-y-8 md:space-y-12 animate-in">
        
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
            <div>
              <span class="px-3 md:px-4 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-tighter">Live Weather</span>
              <h2 class="text-4xl md:text-6xl font-black mt-4 uppercase tracking-tighter">{{ weather.name }}</h2>
              <p class="text-xl md:text-2xl text-blue-200/60 font-light">{{ weather.weather[0].description }}</p>
            </div>
            <div class="flex flex-row items-end justify-between mt-8">
              <div class="flex items-center gap-2 md:gap-4">
                <span class="text-7xl md:text-[10rem] font-black leading-none tracking-tighter">{{ Math.round(weather.main.temp) }}°</span>
                <div class="text-5xl md:text-8xl">{{ getIcon(weather.weather[0].main) }}</div>
              </div>
              <div class="text-right pb-2 md:pb-4">
                <p class="text-slate-400 uppercase text-[10px] font-bold">High / Low</p>
                <p class="text-lg md:text-2xl font-bold">{{ Math.round(weather.main.temp_max) }}° / {{ Math.round(weather.main.temp_min) }}°</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2rem] p-6 md:p-8 text-blue-950 shadow-xl">
              <h4 class="font-black text-xs uppercase mb-4 opacity-70">Air Quality</h4>
              <div class="flex justify-between items-center">
                <span class="text-3xl md:text-4xl font-black">Healthy</span>
                <span class="text-[10px] bg-white/30 px-3 py-1 rounded-full font-bold">AQI 1</span>
              </div>
              <p class="mt-4 text-xs md:text-sm font-medium opacity-80">Air quality is satisfactory, poses little risk.</p>
            </div>
            
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-8">
              <h4 class="font-black text-[10px] uppercase mb-4 text-slate-500 tracking-widest">Travel Verdict</h4>
              <div class="flex items-center gap-3">
                <div :class="['w-3 h-3 rounded-full animate-pulse', travelVerdict.color.replace('text-', 'bg-')]"></div>
                <span :class="['text-xl font-black uppercase tracking-tighter', travelVerdict.color]">{{ travelVerdict.status }}</span>
              </div>
              <p class="mt-3 text-[11px] md:text-xs font-medium text-slate-400 leading-relaxed">{{ travelVerdict.msg }}</p>
            </div>
          </div>
        </section>

        <section class="bg-slate-900/50 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          <div class="px-6 md:px-8 py-4 md:py-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h3 class="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-cyan-400">Climate Matrix</h3>
            <span class="hidden sm:inline text-[9px] md:text-[10px] bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase">STATION_V3</span>
          </div>
          <div class="overflow-x-auto no-scrollbar">
            <table class="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr class="text-[10px] uppercase tracking-widest text-slate-500 border-b border-white/5">
                  <th class="px-8 py-5 font-black">Date</th>
                  <th class="px-4 py-5 font-black text-center">Status</th>
                  <th class="px-4 py-5 font-black text-center">Temp Matrix</th>
                  <th class="px-4 py-5 font-black text-center">Saturation</th>
                  <th class="px-8 py-5 font-black text-right">Wind Flow</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                <tr v-for="day in forecast" :key="day.dt" class="hover:bg-white/5 transition-colors">
                  <td class="px-8 py-5 font-bold text-slate-300">{{ formatDate(day.dt) }}</td>
                  <td class="px-4 py-5 text-center text-2xl">{{ getIcon(day.weather[0].main) }}</td>
                  <td class="px-4 py-5 text-center font-mono text-sm">
                    <span class="text-white">{{ Math.round(day.main.temp_max) }}°</span>
                    <span class="text-slate-600 mx-1">/</span>
                    <span class="text-slate-500">{{ Math.round(day.main.temp_min) }}°</span>
                  </td>
                  <td class="px-4 py-5">
                    <div class="flex items-center justify-center gap-3">
                      <div class="w-12 md:w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div class="h-full bg-cyan-500" :style="{ width: day.main.humidity + '%' }"></div>
                      </div>
                      <span class="text-[10px] font-mono text-slate-400">{{ day.main.humidity }}%</span>
                    </div>
                  </td>
                  <td class="px-8 py-5 text-right font-mono text-cyan-400 text-sm">{{ day.wind.speed }} <small class="text-[9px] text-slate-500 uppercase">KM/H</small></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8">
          <h3 class="text-lg md:text-xl font-black mb-6 uppercase tracking-widest">Analysis & Lifestyle</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div class="bg-black/20 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5">
              <p class="text-[10px] text-cyan-400 font-bold mb-2 uppercase tracking-tighter">Outdoor Activities</p>
              <p class="text-sm md:text-base font-medium text-slate-200">{{ lifestyleAdvise.activity }}</p>
            </div>
            <div class="bg-black/20 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5">
              <p class="text-[10px] text-orange-400 font-bold mb-2 uppercase tracking-tighter">Health & UV</p>
              <p class="text-sm md:text-base font-medium text-slate-200">{{ lifestyleAdvise.health }}</p>
            </div>
            <div class="bg-black/20 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 sm:col-span-2 md:col-span-1">
              <p class="text-[10px] text-blue-400 font-bold mb-2 uppercase tracking-tighter">Clothing</p>
              <p class="text-sm md:text-base font-medium text-slate-200">{{ lifestyleAdvise.clothing }}</p>
            </div>
          </div>
        </section>

        <section>
          <div class="flex justify-between items-end mb-6 px-4">
            <h3 class="text-lg md:text-xl font-black uppercase tracking-widest">Chronological</h3>
            <span class="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest">24H Window</span>
          </div>
          <div class="flex gap-4 overflow-x-auto pb-6 px-4 no-scrollbar">
            <div v-for="item in hourlyForecast" :key="item.dt" class="min-w-[120px] md:min-w-[140px] bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-center flex flex-col items-center hover:bg-white/10 transition group">
              <p class="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-tighter">{{ formatHour(item.dt) }}</p>
              <div class="text-3xl md:text-4xl mb-4 transition-transform group-hover:scale-110">{{ getIcon(item.weather[0].main) }}</div>
              <p class="text-xl md:text-2xl font-black tracking-tighter">{{ Math.round(item.main.temp) }}°</p>
            </div>
          </div>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="lg:col-span-2 bg-slate-900 rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden relative min-h-[300px] md:min-h-[400px] group shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              frameborder="0" 
              scrolling="no" 
              :src="`https://www.openstreetmap.org/export/embed.html?bbox=${weather.coord.lon-0.5},${weather.coord.lat-0.5},${weather.coord.lon+0.5},${weather.coord.lat+0.5}&layer=mapnik&marker=${weather.coord.lat},${weather.coord.lon}`"
              class="absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 md:bottom-10 left-6 md:left-10 pointer-events-none">
              <h4 class="text-2xl md:text-3xl font-black text-white drop-shadow-2xl">Regional Node</h4>
              <p class="text-[10px] md:text-sm text-cyan-400 font-bold uppercase tracking-[0.2em]">Visual Reference System</p>
            </div>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            <div v-for="stat in extraStats.slice(0, 3)" :key="stat.label" class="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col justify-center">
              <p class="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{{ stat.label }}</p>
              <p class="text-2xl md:text-4xl font-black tracking-tighter">{{ stat.value }}<small class="text-[10px] text-slate-400 font-normal ml-1 md:ml-2 uppercase">{{ stat.unit }}</small></p>
            </div>
          </div>
        </section>

        <section class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           <div v-for="stat in extraStats.slice(3)" :key="stat.label" class="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] hover:border-cyan-500/50 transition">
            <p class="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{{ stat.label }}</p>
            <p class="text-2xl md:text-3xl font-black tracking-tighter">{{ stat.value }}<small class="text-[10px] text-slate-400 font-normal ml-1 md:ml-2 uppercase">{{ stat.unit }}</small></p>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
// ... Your existing script setup remains 100% the same ...
import { ref, computed, onMounted } from 'vue'

const API_KEY = 'cddc388b1e89aedbf0e6e1dba630e668'

// STATE
const city = ref('Phnom Penh')
const weather = ref(null)
const forecast = ref([])
const fullForecastList = ref([])
const loading = ref(false)
const error = ref(null)
const localTime = ref('')
const searchText = ref('')
const suggestions = ref([])
const showList = ref(false)

// DYNAMIC BACKGROUNDS
const bgClass = computed(() => {
  if (!weather.value) return 'bg-[#020617]'
  const main = weather.value.weather[0].main
  const map = {
    Clear: 'bg-[#0f172a]',
    Clouds: 'bg-[#1e293b]',
    Rain: 'bg-[#020617]',
    Thunderstorm: 'bg-[#020617]',
    Snow: 'bg-slate-800',
  }
  return map[main] || 'bg-[#020617]'
})

// TRAVEL VERDICT LOGIC
const travelVerdict = computed(() => {
  if (!weather.value) return { status: 'Awaiting', msg: 'No data', color: 'text-slate-500' }
  const temp = weather.value.main.temp
  const cond = weather.value.weather[0].main
  
  if (cond === 'Rain' || cond === 'Thunderstorm') 
    return { status: 'Caution', msg: 'Heavy precipitation detected. Better for indoor museums.', color: 'text-orange-400' }
  if (temp > 33) 
    return { status: 'Heat Alert', msg: 'Extreme temperatures. Avoid midday sun.', color: 'text-red-500' }
  return { status: 'Optimal', msg: 'Stable conditions. Excellent for outdoor travel.', color: 'text-emerald-400' }
})

// HOURLY FILTER
const hourlyForecast = computed(() => {
  return fullForecastList.value.slice(0, 8)
})

// EXTRA STATS GRID
const extraStats = computed(() => {
  if (!weather.value) return []
  return [
    { label: 'Wind Gust', value: weather.value.wind.gust || '0', unit: 'km/h' },
    { label: 'Pressure', value: weather.value.main.pressure, unit: 'hPa' },
    { label: 'Cloud Cover', value: weather.value.clouds.all, unit: '%' },
    { label: 'Visibility', value: weather.value.visibility / 1000, unit: 'km' },
    { label: 'Humidity', value: weather.value.main.humidity, unit: '%' },
    { label: 'Dew Point', value: Math.round(weather.value.main.temp - 2), unit: '°' },
  ]
})

// LIFE & STYLE ADVISOR
const lifestyleAdvise = computed(() => {
  if (!weather.value) return {}
  const temp = weather.value.main.temp
  const main = weather.value.weather[0].main

  let advise = { activity: 'Perfect for a walk', health: 'No warnings', clothing: 'Casual wear' }

  if (temp > 30) {
    advise.activity = 'Better to stay indoors or swim'
    advise.health = 'High heat, stay hydrated'
    advise.clothing = 'Light cotton clothing'
  } else if (main === 'Rain') {
    advise.activity = 'Outdoor sports cancelled'
    advise.health = 'High humidity levels'
    advise.clothing = 'Raincoat & waterproof shoes'
  }
  return advise
})

// HELPERS
const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
})

function getIcon(type) {
  const map = { Clear: '☀️', Clouds: '☁️', Rain: '🌧️', Drizzle: '🌦️', Thunderstorm: '⛈️', Snow: '❄️', Mist: '🌫️', Haze: '🌫️' }
  return map[type] || '🌤️'
}

function formatDate(unix) {
  return new Date(unix * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

function formatHour(unix) {
  return new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}

function formatTime(unix, timezone) {
  const date = new Date((unix + timezone) * 1000)
  return date.toUTCString().slice(17, 22)
}

// LOGIC
async function getSuggestions() {
  if (searchText.value.length < 2) { suggestions.value = []; return }
  try {
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchText.value}&limit=5&appid=${API_KEY}`)
    suggestions.value = await res.json()
  } catch { suggestions.value = [] }
}

function selectPlace(place) {
  city.value = place.name
  searchText.value = `${place.name}, ${place.country}`
  suggestions.value = []; showList.value = false; getWeather()
}

async function getWeather() {
  if (!city.value) return
  loading.value = true; error.value = null; showList.value = false

  try {
    const [res1, res2] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${API_KEY}&units=metric`)
    ])
    
    if (!res1.ok) throw new Error('City not found')
    const data1 = await res1.json()
    const data2 = await res2.json()

    weather.value = data1
    fullForecastList.value = data2.list
    forecast.value = data2.list.filter(i => i.dt_txt.includes('12:00:00')).slice(0, 5)

    updateLocalTime()
  } catch (e) {
    error.value = e.message; weather.value = null
  } finally { loading.value = false }
}

function updateLocalTime() {
  if (!weather.value) return
  const now = new Date()
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
  const cityTime = new Date(utc + (1000 * weather.value.timezone))
  localTime.value = cityTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const sunrise = computed(() => weather.value ? formatTime(weather.value.sys.sunrise, weather.value.timezone) : '')
const sunset = computed(() => weather.value ? formatTime(weather.value.sys.sunset, weather.value.timezone) : '')

onMounted(() => getWeather())
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.animate-in {
  animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s ease-out; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-10px); }
</style>