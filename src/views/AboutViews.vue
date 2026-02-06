<template>

  <div class="about-page font-sans text-gray-800">

    <!-- HERO SECTION: Modern Two-Column Look -->
<section class="relative bg-gradient-to-br from-green-500 to-green-400 text-white py-32 px-6">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    <!-- Left: Text -->
    <div class="text-center md:text-left">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Trusted Weather & Climate Insights
      </h1>
      <p class="text-lg md:text-xl text-green-100 leading-relaxed max-w-xl">
        Empowering communities to make confident decisions with accurate forecasts, climate research, and scientific expertise.

      </p>
    </div>

    <!-- Right: Decorative Graphic / Shapes -->
    <div class="relative w-full h-64 md:h-80">
      <!-- Example: abstract green circles -->
      <div class="absolute top-0 left-1/4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
      <div class="absolute top-20 right-0 w-32 h-32 bg-green-300 rounded-full opacity-50 animate-pulse"></div>
      <div class="absolute bottom-0 left-1/3 w-40 h-40 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
    </div>

  </div>
</section>

    <!-- MAIN TITLE -->
<section class="py-16 px-6 text-center">
  <h2 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
    Trusted Weather Insights, Globally
  </h2>
  <p class="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
    Every day, across the world, millions of people rely on weather information to plan their lives. From daily routines to critical safety decisions, accurate forecasts matter.
  </p>
</section>

<!-- FEATURES GRID: Stacked Overlapping Cards -->
<section class="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
  <!-- Card 1 -->
  <div class="bg-white rounded-3xl shadow-lg p-10 relative md:-translate-y-6 hover:scale-105 transition flex-1 text-center">
    <!-- Floating icon circle -->
    <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
      <!-- Globe Icon -->
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 010 20"/>
      </svg>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-3 text-green-800">Global Impact</h3>
    <p class="text-gray-600 leading-relaxed">
      We transform complex weather and climate data into clear insights, helping communities stay safe, prepared, and resilient.
    </p>
  </div>

  <!-- Card 2 -->
  <div class="bg-white rounded-3xl shadow-lg p-10 relative md:translate-y-6 hover:scale-105 transition flex-1 text-center">
    <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
      <!-- Satellite Icon -->
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2l9 5-9 5-9-5 9-5zm0 10v10m0 0l-4-4m4 4l4-4"/>
      </svg>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-3 text-green-800">Advanced Technology</h3>
    <p class="text-gray-600 leading-relaxed">
      Using high-performance computing, data science, and AI, we process massive amounts of weather data every second.
    </p>
  </div>

  <!-- Card 3 -->
  <div class="bg-white rounded-3xl shadow-lg p-10 relative md:-translate-y-6 hover:scale-105 transition flex-1 text-center">
    <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
      <!-- Brain Icon -->
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 2.5 1 5 3 6.8v.2h14v-.2c2-1.8 3-4.3 3-6.8 0-5.52-4.48-10-10-10z"/>
      </svg>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-3 text-green-800">Scientific Expertise</h3>
    <p class="text-gray-600 leading-relaxed">
      Our meteorologists and climate experts interpret data to deliver forecasts you can trust, even in extreme conditions.
    </p>
  </div>
</section>



<!-- OUR WORK SECTION: Floating Cards with Modern Icons -->
<section class="py-20 px-6 bg-green-50 relative">
  <div class="max-w-6xl mx-auto text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
      Our Work — Nationally & Globally
    </h2>
    <p class="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
      We provide weather services that support governments, businesses, emergency responders, and the public. Our forecasts power websites, mobile apps, alerts, and early-warning systems.
    </p>
  </div>

  <div class="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-12">

    <!-- Card 1: Weather Warnings -->
    <div class="bg-white rounded-2xl p-10 shadow-lg transform -translate-y-6 md:-translate-y-12 hover:scale-105 transition text-center w-64 relative">
      <!-- Abstract background shape -->
      <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-200 rounded-full -z-10"></div>
      <!-- Icon -->
      <div class="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
        <!-- Cloud icon -->
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.5 13a4.5 4.5 0 00-.5-9 4.48 4.48 0 00-4.22 3H9.5a3.5 3.5 0 100 7h7z"/>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-green-800 mb-2">Weather Warnings</h3>
      <p class="text-gray-700 leading-relaxed">
        Timely alerts help reduce risks and protect lives during severe weather events.
      </p>
    </div>

    <!-- Card 2: Climate Research -->
    <div class="bg-white rounded-2xl p-10 shadow-lg transform translate-y-6 md:translate-y-0 hover:scale-105 transition text-center w-64 relative">
      <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-200 rounded-full -z-10"></div>
      <div class="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
        <!-- Sun icon -->
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zm6.364 2.636a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L16.364 7.05a1 1 0 010-1.414zM17 10a1 1 0 110 2h-2a1 1 0 110-2h2zM4.636 5.636a1 1 0 010 1.414L3.222 8.464a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM3 10a1 1 0 110 2H1a1 1 0 110-2h2z"/>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-green-800 mb-2">Climate Research</h3>
      <p class="text-gray-700 leading-relaxed">
        Ground-breaking research improves understanding of climate change and future risks.
      </p>
    </div>

    <!-- Card 3: Partnerships -->
    <div class="bg-white rounded-2xl p-10 shadow-lg transform -translate-y-6 md:-translate-y-12 hover:scale-105 transition text-center w-64 relative">
      <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-200 rounded-full -z-10"></div>
      <div class="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
        <!-- Radar icon -->
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12a1 1 0 11-2 0V8h2v6zm0-8H9V4a1 1 0 012 0v2z"/>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-green-800 mb-2">Partnerships</h3>
      <p class="text-gray-700 leading-relaxed">
        We collaborate globally to strengthen climate resilience and preparedness.
      </p>
    </div>

  </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      <!-- Image -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
          alt="Weather Technology"
          class="rounded-2xl shadow-xl w-full h-[420px] object-cover"
        />

        <!-- Floating card -->
        <div class="absolute -bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-3">
          <Globe class="w-8 h-8 text-blue-600" />
          <div>
            <p class="text-sm font-semibold text-blue-600">Global Coverage</p>
            <p class="text-xs text-gray-600">Accurate data from around the world</p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div>
        <span class="inline-block mb-3 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
          Our Mission
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Making Weather Simple, Accurate, and Useful
        </h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Our mission is to provide accurate, reliable, and easy-to-understand weather information for everyone.
          We believe weather data should help people plan their day, stay safe during extreme conditions, and make
          better decisions in daily life.
        </p>
        <p class="text-gray-600 mb-6 leading-relaxed">
          Using modern technology and trusted data sources, we deliver real-time forecasts, climate insights,
          and severe weather alerts — all in a clean and user-friendly experience.
        </p>

        <!-- Feature points -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
            <Cloud class="w-10 h-10 text-sky-500" />
            <div>
              <p class="font-semibold">Accurate Forecasts</p>
              <p class="text-sm text-gray-500">Trusted and up-to-date data</p>
            </div>
          </div>

          <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
            <AlertTriangle class="w-10 h-10 text-yellow-500" />
            <div>
              <p class="font-semibold">Weather Alerts</p>
              <p class="text-sm text-gray-500">Stay safe in extreme conditions</p>
            </div>
          </div>

          <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
            <Globe class="w-10 h-10 text-blue-600" />
            <div>
              <p class="font-semibold">Global Coverage</p>
              <p class="text-sm text-gray-500">Weather anywhere</p>
            </div>
          </div>

          <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
            <Sparkles class="w-10 h-10 text-purple-500" />
            <div>
              <p class="font-semibold">Easy to Use</p>
              <p class="text-sm text-gray-500">Simple and clean UI</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>


<!-- OUR EXPERTISE SECTION: Simple Layout -->
<section class="py-20 px-6 bg-green-50">
  <div class="max-w-6xl mx-auto text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
      Our Expertise
    </h2>
    <p class="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
      Our team combines science, technology, and operational excellence to deliver reliable weather and climate insights.
    </p>
  </div>

  <!-- Expertise Grid -->
  <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

    <!-- Expertise Item 1 -->
    <div class="bg-white p-8 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition">
      <h3 class="text-xl font-semibold text-green-800 mb-2">Meteorology</h3>
      <p class="text-gray-700 leading-relaxed">
        Advanced weather analysis and forecasting using the latest meteorological science.
      </p>
    </div>

    <!-- Expertise Item 2 -->
    <div class="bg-white p-8 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition">
      <h3 class="text-xl font-semibold text-green-800 mb-2">Data Science & AI</h3>
      <p class="text-gray-700 leading-relaxed">
        Leveraging AI and high-performance computing to process massive weather datasets.
      </p>
    </div>

    <!-- Expertise Item 3 -->
    <div class="bg-white p-8 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition">
      <h3 class="text-xl font-semibold text-green-800 mb-2">Climate Science</h3>
      <p class="text-gray-700 leading-relaxed">
        Researching climate patterns and long-term trends to support sustainable planning.
      </p>
    </div>

  </div>
</section>

<!-- WHAT WE DO SECTION (Green Modern Layout) -->
<section class="py-20 px-6 bg-green-10">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-green-700">What We Do</h2>
      <p class="text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Our services are designed to keep communities safe, informed, and prepared using innovative weather and climate solutions.
      </p>
    </div>

    <!-- Services Grid: Staggered layout -->
    <div class="grid md:grid-cols-3 gap-10">
      
      <!-- Service 1 -->
      <div class="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-green-500 shadow-lg hover:bg-gradient-to-br hover:from-green-100 hover:to-green-200 transition transform hover:scale-105 bg-white">
        <div class="mb-4 p-4 rounded-full bg-green-100">
          <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M3 6h18M3 18h18"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-green-800">Weather Forecasts</h3>
        <p class="text-gray-700 leading-relaxed">
          Provide accurate daily and weekly weather forecasts so everyone can plan with confidence.
        </p>
      </div>

      <!-- Service 2 -->
      <div class="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-green-500 shadow-lg hover:bg-gradient-to-br hover:from-green-100 hover:to-green-200 transition transform hover:scale-105 bg-white mt-10 md:mt-0">
        <div class="mb-4 p-4 rounded-full bg-green-100">
          <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-green-800">Climate Research</h3>
        <p class="text-gray-700 leading-relaxed">
          Conduct studies to improve understanding of climate patterns and long-term forecasts.
        </p>
      </div>

      <!-- Service 3 -->
      <div class="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-green-500 shadow-lg hover:bg-gradient-to-br hover:from-green-100 hover:to-green-200 transition transform hover:scale-105 bg-white mt-20 md:mt-0">
        <div class="mb-4 p-4 rounded-full bg-green-100">
          <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h18M3 19h18"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-green-800">Public Safety</h3>
        <p class="text-gray-700 leading-relaxed">
          Issue timely alerts and guidance to protect communities during extreme weather events.
        </p>
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

<script setup>
import { Cloud, AlertTriangle, Globe, Sparkles } from 'lucide-vue-next'
const aboutImg = "/images/about.jpg";
const impactImg = "/images/impact.jpg";
</script>
