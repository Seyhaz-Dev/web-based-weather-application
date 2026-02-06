<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <!-- ================= HERO ================= -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-300/20 to-transparent"></div>

      <div class="relative max-w-7xl mx-auto px-6 py-28 text-center mt-20">
        <div class="flex justify-center mb-6 text-emerald-600">
          <!-- Cloud Icon -->
          <svg class="w-14 h-14" xmlns="http://www.w3.org2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M3 15a4 4 0 004 4h11a4 4 0 000-8h-.26A8 8 0 104 15" />
          </svg>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          nnovating our world-leading science
        </h1>
        <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Advancing forecasting through science, technology, and innovation
          to support lives, infrastructure, and our planet.
        </p>
      </div>
    </section>
    
    <main class="container mx-auto px-6 -mt-12 relative z-20 pb-20">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-50">
        
        <div class="md:col-span-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mt-30">
          <div class="w-12 h-12 bg-lime-100 rounded-2xl flex items-center justify-center text-lime-600 mb-6">
            <SearchIcon :size="24" />
          </div>
          <h3 class="text-xl font-bold mb-3">Innovation Strategy</h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            Pioneering research to extend the frontiers of weather knowledge and help risk-based decision-making.
          </p>
          <button class="text-sm font-bold flex items-center gap-2 text-slate-900 hover:gap-4 transition-all">
            Explore Strategy <ArrowRightIcon :size="16" />
          </button>
        </div>

        <div class="md:col-span-2 bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row gap-8 items-center overflow-hidden relative mt-30">
          <div class="relative z-10 md:w-1/2">
            <div class="flex gap-2 mb-4">
              <span class="px-2 py-1 rounded bg-lime-500 text-[10px] font-black text-slate-900 uppercase">AI Partnership</span>
            </div>
            <h3 class="text-2xl font-bold mb-4">AI for Numerical Weather Prediction</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Partnering with the <strong>Alan Turing Institute</strong> to build models that predict extreme weather with higher precision than ever before.
            </p>
          </div>
          <div class="md:w-1/2 flex justify-center relative">
            <CpuIcon :size="120" class="text-lime-500/20 absolute animate-pulse" />
            <BrainCircuitIcon :size="80" class="text-lime-400 relative z-10" />
          </div>
        </div>
      </div>
      </main>

      <!-- ================= EVOLVING FORECASTING ================= -->
<section class="w-full  via-emerald-100 to-emerald-200 py-24 -mt-60">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold mb-4 text-emerald-800">Evolving Our Forecasting</h2>
      <p class="text-slate-700">Next-generation services for a resilient future.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="group p-8 bg-white rounded-3xl border border-emerald-300 hover:border-emerald-600 transition-all cursor-pointer">
        <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
          <LayersIcon :size="24" />
        </div>
        <h4 class="text-xl font-bold mb-3 text-slate-900">Digital Twinning</h4>
        <p class="text-slate-600 text-sm leading-relaxed">
          Creating virtual replicas of the environment to test "What If" climate scenarios safely.
        </p>
      </div>

      <div class="group p-8 bg-white rounded-3xl border border-emerald-300 hover:border-emerald-600 transition-all cursor-pointer">
        <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
          <ServerIcon :size="24" />
        </div>
        <h4 class="text-xl font-bold mb-3 text-slate-900">Cloud Supercomputing</h4>
        <p class="text-slate-600 text-sm leading-relaxed">
          Processing complex equations at lightning speeds via our new cloud-native infrastructure.
        </p>
      </div>

      <div class="group p-8 bg-white rounded-3xl border border-emerald-300 hover:border-emerald-600 transition-all cursor-pointer">
        <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
          <ZapIcon :size="24" />
        </div>
        <h4 class="text-xl font-bold mb-3 text-slate-900">Innovative Services</h4>
        <p class="text-slate-600 text-sm leading-relaxed">
          Direct-to-industry alerts for aviation, shipping, and emergency responders.
        </p>
      </div>
    </div>
  </div>
</section>

    <!-- ================= OBSERVATION ================= -->
<section class="w-full py-24 bg-gradient-to-r from-emerald-50 via-white to-emerald-100">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <div class="flex items-center gap-3 mb-4 text-emerald-600">
        <!-- Radar -->
        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36l-2.12 2.12M8.76 15.24l-2.12 2.12m0-11.48l2.12 2.12m8.48 8.48l2.12 2.12" />
        </svg>
        <h2 class="text-3xl font-semibold text-slate-900">Observation</h2>
      </div>
      <p class="text-slate-600">
        We collect real-time data from satellites, radars, weather stations, oceans, and the atmosphere.
      </p>
    </div>

    <div class="bg-white/90 backdrop-blur rounded-2xl p-10 border border-emerald-200 shadow-md">
      <ul class="space-y-5">
        <li class="flex items-center gap-3">
          <span class="text-emerald-600">
            <!-- Check -->
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Global monitoring networks
        </li>
        <li class="flex items-center gap-3">
          <span class="text-emerald-600">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Satellite & radar systems
        </li>
        <li class="flex items-center gap-3">
          <span class="text-emerald-600">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Ocean & climate observations
        </li>
      </ul>
    </div>
  </div>
</section>

    <!-- ================= NWP ================= -->
    <section class="py-24 bg-gradient-to-r from-emerald-50 to-teal-50 -mt-5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-center gap-3 mb-12 text-emerald-600">
          <!-- Chip -->
          <svg class="w-8 h-8" xmlns="http://www.w3.org2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z" />
          </svg>
          <h2 class="text-3xl font-semibold">Numerical Weather Prediction</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm">
            <div class="text-emerald-600 mb-3">
              <!-- Layers -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M12 3l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5z" />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">High-Resolution Models</h3>
            <p class="text-slate-600">Simulate the atmosphere with incredible detail.</p>
          </div>

          <div class="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm">
            <div class="text-emerald-600 mb-3">
              <!-- Spark -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M5 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm10 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">Artificial Intelligence</h3>
            <p class="text-slate-600">Enhances accuracy and speeds up predictions.</p>
          </div>

          <div class="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm">
            <div class="text-emerald-600 mb-3">
              <!-- Server -->
              <svg class="w-8 h-8" xmlns="http://www.w3.org2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">Supercomputing</h3>
            <p class="text-slate-600">Processes massive climate and weather data.</p>
          </div>
        </div>
      </div>
    </section>

   <!-- ================= SERVICES ================= -->
<section class="py-24 bg-gradient-to-r from-emerald-100 via-white to-teal-50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center justify-center gap-3 mb-12 text-emerald-600">
      <!-- Sparkles -->
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
          d="M5 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm10 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
      </svg>
      <h2 class="text-3xl font-semibold">Our Innovative Services</h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Repeatable Card -->
      <div class="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition">
        <div class="text-emerald-600 mb-3">
          <!-- Alert -->
          <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 9v4m0 4h.01M5.07 19h13.86L12 5 5.07 19z" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Extreme Weather Alerts</h4>
        <p class="text-slate-600 text-sm">Early warnings to protect lives and infrastructure.</p>
      </div>

      <div class="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition">
        <div class="text-emerald-600 mb-3">
          <!-- Plane -->
          <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M10.5 21l-1.5-6-6-1.5L21 3l-9 18z" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Aviation Forecasting</h4>
        <p class="text-slate-600 text-sm">Accurate weather insights for safe flight operations.</p>
      </div>

      <div class="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition">
        <div class="text-emerald-600 mb-3">
          <!-- Leaf -->
          <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 3C7 3 4 7 4 11c0 5 4 8 8 10 4-2 8-5 8-10 0-4-3-8-8-8z" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Climate Services</h4>
        <p class="text-slate-600 text-sm">Long-term climate data for planning and policy.</p>
      </div>

      <div class="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition">
        <div class="text-emerald-600 mb-3">
          <!-- Briefcase -->
          <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M9 6V5a3 3 0 016 0v1m-9 0h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
        </div>
        <h4 class="font-semibold mb-2">Industry Solutions</h4>
        <p class="text-slate-600 text-sm">Weather intelligence tailored for business needs.</p>
      </div>
    </div>
  </div>
</section>


    <!-- ================= IMPACT / WEATHER FOCUS ================= -->
<section class="w-full py-24 bg-gradient-to-r from-emerald-100 via-white to-emerald-50">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Section Title -->
    <div class="text-center mb-14">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
        Forecasts That Matter
      </h2>
      <p class="mt-3 text-slate-600 max-w-2xl mx-auto">
        Our weather science protects lives, guides industries, and supports a sustainable planet.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-8 bg-white/90 backdrop-blur rounded-2xl border border-emerald-200 shadow-md hover:shadow-lg transition">
        <div class="text-emerald-600 mb-4">
          <!-- Shield / Safety -->
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 3l7.5 4.5v6c0 4.5-3 7.5-7.5 9-4.5-1.5-7.5-4.5-7.5-9v-6L12 3z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Protect Communities</h3>
        <p class="text-slate-600">Early warnings and accurate forecasts help keep people safe.</p>
      </div>

      <div class="p-8 bg-white/90 backdrop-blur rounded-2xl border border-emerald-200 shadow-md hover:shadow-lg transition">
        <div class="text-emerald-600 mb-4">
          <!-- Globe / Planet -->
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c2.5 2.5 2.5 13.5 0 18m0-18C9.5 5.5 9.5 16.5 12 21m-8-9h16" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Protect the Planet</h3>
        <p class="text-slate-600">Climate and weather data guide sustainable decisions worldwide.</p>
      </div>

      <div class="p-8 bg-white/90 backdrop-blur rounded-2xl border border-emerald-200 shadow-md hover:shadow-lg transition">
        <div class="text-emerald-600 mb-4">
          <!-- Building / Industry -->
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Guide Decisions</h3>
        <p class="text-slate-600">Industries and governments rely on precise forecasts to reduce risk.</p>
      </div>
    </div>
  </div>
</section>

<section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-sm font-semibold text-sky-600 uppercase tracking-wider">
          Our Services
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mt-3 mb-4">
          Explore Our Weather Services
        </h2>
        <p class="text-gray-600">
          Discover our weather tools and services designed to keep you informed and prepared.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <!-- Card 1 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=800&q=80"
            alt="Live Forecast"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2">Innovating our world-leading science</h3>
              <p class="text-gray-600 text-sm mb-4">
                Get real-time weather updates for any location worldwide.
              </p>
            </div>
            <router-link
              to="/explore"
              class="text-sky-600 font-medium underline text-sm"
            >
              Explore
            </router-link>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            alt="Interactive Maps"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2">How accurate are our public forecasts?</h3>
              <p class="text-gray-600 text-sm mb-4">
                Explore radar, satellite, temperature, and wind layers visually.
              </p>
            </div>
            <router-link
              to="/accurate"
              class="text-sky-600 font-medium underline text-sm"
            >
              Explore
            </router-link>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
            alt="Weather Alerts"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2"> Our history </h3>
              <p class="text-gray-600 text-sm mb-4">
                Receive instant alerts for storms, floods, heat waves, and more.
              </p>
            </div>
            <router-link
              to="/explore"
              class="text-sky-600 font-medium underline text-sm"
            >
              Explore
            </router-link>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
            alt="Climate Insights"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2"> Values at the heart of what we do </h3>
              <p class="text-gray-600 text-sm mb-4">
                Explore historical weather data and long-term climate trends.
              </p>
            </div>
            <router-link
              to="/explore"
              class="text-sky-600 font-medium underline text-sm"
            >
              Explore
            </router-link>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
            alt="Wind & Air Data"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2"> People are at the heart of what we do </h3>
              <p class="text-gray-600 text-sm mb-4">
                Monitor wind speed, direction, and air quality levels.
              </p>
            </div>
            <router-link
              to="/explore"
              class="text-sky-600 font-medium underline text-sm"
            >
              Explore
            </router-link>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=800&q=80"
            alt="Rain & Humidity"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2"> Our impact </h3>
              <p class="text-gray-600 text-sm mb-4">
                Track rainfall and humidity forecasts in real-time.
              </p>
            </div>
            <router-link
              to="/explore"
              class="text-sky-600 font-medium underline text-sm"
            >
              Explore
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>


  </div>


  

</template>


