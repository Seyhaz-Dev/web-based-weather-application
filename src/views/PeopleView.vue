<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">

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
             People are at the heart of what we do 
        </h1>
        <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Excellent people and culture are behind the exceptional, science, technology and operations at the Met Office.
        </p>
      </div>
    </section>

    <!-- ================= SECTION 1 ================= -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-emerald-600">
            Experts by Nature & Our Responsibility
          </h2>
          <p class="text-slate-600 leading-relaxed mb-6">
            Inspired by nature and guided by science, our people observe, analyze, and predict the weather every day.
            We take responsibility not only for accurate forecasts, but also for creating a fair, safe, and supportive
            workplace for everyone.
          </p>

          <div class="space-y-4">
            <div class="flex gap-3 items-start">
              <!-- Cloud -->
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 014-4h1a5 5 0 019.5 1.5A4 4 0 1118 19H7a4 4 0 01-4-4z" />
              </svg>
              <span>Experts in forecasting, climate, and observation</span>
            </div>

            <div class="flex gap-3 items-start">
              <!-- Shield -->
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
              </svg>
              <span>A responsible and trusted employer</span>
            </div>

            <div class="flex gap-3 items-start">
              <!-- Radar -->
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 12l6-6" />
              </svg>
              <span>Driven by science, data, and modern technology</span>
            </div>
          </div>
        </div>

        <!-- Nature Image (small height) -->
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
            alt="Mountains and sky"
            class="w-full h-48 md:h-56 object-cover"
          />
        </div>
      </div>
    </section>

    <!-- ================= SECTION 2 ================= -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-2 gap-10 items-center">

          <!-- Nature Image -->
          <div class="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
              alt="Forest and sunlight"
              class="w-full h-48 md:h-56 object-cover"
            />
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-4 text-emerald-600">
              Well-being, Healthy Living & Welfare
            </h2>
            <p class="text-slate-600 leading-relaxed mb-6">
              Just like nature needs balance, our people need care and support. We focus on well-being, healthy living,
              and strong welfare systems so everyone can work with energy, confidence, and peace of mind.
            </p>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-slate-50 rounded-xl p-4 flex gap-3">
                <!-- Sun -->
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span>Physical and mental health support</span>
              </div>

              <div class="bg-slate-50 rounded-xl p-4 flex gap-3">
                <!-- Heart -->
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M12 21s-7-4.35-7-10a4 4 0 017-2 4 4 0 017 2c0 5.65-7 10-7 10z" />
                </svg>
                <span>Strong welfare and care programs</span>
              </div>

              <div class="bg-slate-50 rounded-xl p-4 flex gap-3">
                <!-- Wind -->
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 8h10a3 3 0 100-6" />
                </svg>
                <span>Balanced work-life atmosphere</span>
              </div>

              <div class="bg-slate-50 rounded-xl p-4 flex gap-3">
                <!-- Cloud -->
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 15a4 4 0 014-4h1a5 5 0 019.5 1.5A4 4 0 1118 19H7a4 4 0 01-4-4z" />
                </svg>
                <span>Supportive and caring environment</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ================= SECTION 3 ================= -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-emerald-600">
            Flexibility & Health and Safety
          </h2>
          <p class="text-slate-600 leading-relaxed mb-6">
            Weather changes, and so does life. We support flexible ways of working while keeping health and safety
            as our constant priority for every team member.
          </p>

          <ul class="space-y-3 text-slate-700">
            <li>• Flexible and hybrid working options</li>
            <li>• Safe and secure working environments</li>
            <li>• Clear health and safety standards</li>
            <li>• Strong risk awareness culture</li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow">
          <h3 class="text-xl font-semibold mb-4">Our Focus</h3>
          <div class="space-y-4">
            <div class="flex gap-3">
              <!-- Wind -->
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 8h10a3 3 0 100-6" />
              </svg>
              <span>Flexible working models</span>
            </div>
            <div class="flex gap-3">
              <!-- Shield -->
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
              </svg>
              <span>Health and safety first</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= SECTION 4 ================= -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
          Diversity, Equality & Employee Feedback
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto mb-10">
          Like nature itself, our strength comes from diversity. We believe in equality and open communication,
          and we listen carefully to our people to keep improving together.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-slate-50 rounded-2xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-emerald-500">Diversity & Inclusion</h3>
            <p class="text-slate-700">
              Different backgrounds, skills, and perspectives make our teams stronger.
            </p>
          </div>
          <div class="bg-slate-50 rounded-2xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-emerald-500">Equality</h3>
            <p class="text-slate-700">
              Fair treatment, equal opportunities, and transparent development for everyone.
            </p>
          </div>
          <div class="bg-slate-50 rounded-2xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-emerald-500">Employee Feedback</h3>
            <p class="text-slate-700">
              We listen, learn, and turn feedback into real improvements.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <section class="py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
        Our Services
      </span>
      <h2 class="text-3xl md:text-4xl font-bold mt-3 mb-4 text-emerald-700">
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
            class="text-emerald-600 font-medium underline text-sm hover:text-emerald-700"
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
            class="text-emerald-600 font-medium underline text-sm hover:text-emerald-700"
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
            <h3 class="text-xl font-semibold mb-2">Our history</h3>
            <p class="text-gray-600 text-sm mb-4">
              Receive instant alerts for storms, floods, heat waves, and more.
            </p>
          </div>
          <router-link
            to="/explore"
            class="text-emerald-600 font-medium underline text-sm hover:text-emerald-700"
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
            <h3 class="text-xl font-semibold mb-2">Values at the heart of what we do</h3>
            <p class="text-gray-600 text-sm mb-4">
              Explore historical weather data and long-term climate trends.
            </p>
          </div>
          <router-link
            to="/explore"
            class="text-emerald-600 font-medium underline text-sm hover:text-emerald-700"
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
            <h3 class="text-xl font-semibold mb-2">People are at the heart of what we do</h3>
            <p class="text-gray-600 text-sm mb-4">
              Monitor wind speed, direction, and air quality levels.
            </p>
          </div>
          <router-link
            to="/explore"
            class="text-emerald-600 font-medium underline text-sm hover:text-emerald-700"
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
            <h3 class="text-xl font-semibold mb-2">Our impact</h3>
            <p class="text-gray-600 text-sm mb-4">
              Track rainfall and humidity forecasts in real-time.
            </p>
          </div>
          <router-link
            to="/explore"
            class="text-emerald-600 font-medium underline text-sm hover:text-emerald-700"
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
