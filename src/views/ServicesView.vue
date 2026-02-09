<template>
  <section class="w-full bg-white">

    <!-- Top Images -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-64 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        class="w-full h-full object-cover"
        alt="Scenic view 1"
      />
      <img
        src="https://images.unsplash.com/photo-1603398938378-e54d8f7ed04f"
        class="w-full h-full object-cover"
        alt="Scenic view 2"
      />
      <img
        src="https://images.unsplash.com/photo-1608889175173-8a0d59d65c57"
        class="w-full h-full object-cover"
        alt="Scenic view 3"
      />
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        class="w-full h-full object-cover"
        alt="Scenic view 4"
      />
    </div>

    <!-- Content Section -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Services</h1>
      <hr class="border-gray-300 mb-10" />
      <div class="max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>The Met Office provides operational forecasts, data, research and consultancy services.</p>
        <p>Our services are critical to protecting lives, infrastructure and the natural world.</p>
        <p>Find out how we can help you manage weather and climate risks, and identify opportunities for your industry.</p>
      </div>
    </div>

  </section>

  <!-- Cards Section -->
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

      <!-- Card -->
      <div class="bg-white shadow rounded overflow-hidden">
        <!-- <img src="government.jpg" alt="Government" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <p class="text-xs text-gray-500 uppercase mb-2">Government</p>
          <h3 class="text-lg font-bold mb-2">Our work with government</h3>
          <button class="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20 pd-10px">
              <path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/>
            </svg>
            Explore
          </button>
        </div>
      </div>

      <!-- Card -->
      <div class="bg-white shadow rounded overflow-hidden">
        <!-- <img src="transport.jpg" alt="Transport" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <p class="text-xs text-gray-500 uppercase mb-2">Transport</p>
          <h3 class="text-lg font-bold mb-2">Transport</h3>
          <button class="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/>
            </svg>
            Explore
          </button>
        </div>
      </div>

      <!-- Card -->
      <div class="bg-white shadow rounded overflow-hidden">
        <!-- <img src="business.jpg" alt="Business and Industry" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <p class="text-xs text-gray-500 uppercase mb-2">Business Industry</p>
          <h3 class="text-lg font-bold mb-2">Business and industry</h3>
          <button class="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/>
            </svg>
            Explore
          </button>
        </div>
      </div>

      <!-- Card -->
      <div class="bg-white shadow rounded overflow-hidden">
        <!-- <img src="data.jpg" alt="Data" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <p class="text-xs text-gray-500 uppercase mb-2">Data</p>
          <h3 class="text-lg font-bold mb-2">Met Office weather and climate data and services</h3>
          <button class="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/>
            </svg>
            Explore
          </button>
        </div>
      </div>

      <!-- Card -->
      <div class="bg-white shadow rounded overflow-hidden">
        <!-- <img src="research.jpg" alt="Research Consulting" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <p class="text-xs text-gray-500 uppercase mb-2">Research Consulting</p>
          <h3 class="text-lg font-bold mb-2">Research and consulting</h3>
          <button class="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/>
            </svg>
            Explore
          </button>
        </div>
      </div>

      <!-- Card -->
      <div class="bg-white shadow rounded overflow-hidden">
        <!-- <img src="insights.jpg" alt="Insights" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <p class="text-xs text-gray-500 uppercase mb-2">Insights</p>
          <h3 class="text-lg font-bold mb-2">Insights</h3>
          <button class="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/>
            </svg>
            Explore
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
>>>>>>> Stashed changes
