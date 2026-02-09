<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans selection:bg-lime-400/30">
    
    <nav class="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <router-link to="/" class="flex items-center gap-2 group">
        <div class="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center transition-transform group-hover:scale-110">
           <i class="fa-solid fa-plane-departure text-black"></i>
        </div>
        <span class="text-xl font-black tracking-tighter uppercase">Nimbus <span class="text-lime-400">Travel</span></span>
      </router-link>
      <div class="flex gap-8 items-center">
        <router-link to="/profile" class="text-[10px] font-black uppercase tracking-widest hover:text-lime-400 transition-colors">Node Profile</router-link>
        <button class="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-lime-400 transition-all">Book Expedition</button>
      </div>
    </nav>

    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
        class="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        alt="Mountain Range"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60"></div>
      
      <div class="relative z-10 text-center space-y-6 px-4">
        <span class="text-lime-400 text-[10px] font-black uppercase tracking-[0.5em] block animate-fade-in">Global Telemetry Active</span>
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Explore the <br/> <span class="text-transparent border-t-2 border-b-2 border-white py-2 px-4">Uncharted</span>
        </h1>
        <p class="max-w-xl mx-auto text-gray-400 font-medium text-lg italic">
          "The weather doesn't just happen; it invites you to witness its power."
        </p>
      </div>
      
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span class="text-[8px] font-black uppercase tracking-widest text-gray-500">Scroll to Explore</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-lime-400 to-transparent"></div>
      </div>
    </header>

    <section class="max-w-7xl mx-auto px-8 py-32 space-y-32">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8 order-2 lg:order-1">
          <div class="flex items-center gap-4">
            <span class="text-6xl font-black text-white/10 italic">01</span>
            <div class="h-[2px] w-20 bg-lime-400"></div>
          </div>
          <h2 class="text-5xl font-black uppercase tracking-tighter">The Swiss Alps <br/> <span class="text-lime-400">Ice Protocol</span></h2>
          <p class="text-gray-400 leading-relaxed text-lg">
            High-altitude exploration in the heart of Europe. Experience the raw power of winter storms and pristine glacial landscapes with real-time atmospheric tracking.
          </p>
          <div class="flex gap-10 border-y border-white/10 py-6">
            <div>
              <p class="text-[10px] font-black uppercase text-gray-500 mb-1">Avg Temp</p>
              <p class="text-xl font-bold">-12°C</p>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase text-gray-500 mb-1">Risk Level</p>
              <p class="text-xl font-bold text-orange-400">Moderate</p>
            </div>
          </div>
          <button class="flex items-center gap-3 text-sm font-black uppercase tracking-widest group">
            View Expedition Details 
            <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2 text-lime-400"></i>
          </button>
        </div>
        <div class="relative group order-1 lg:order-2">
          <div class="absolute -inset-4 bg-lime-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-duration-500"></div>
          <img src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=1000" class="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Alps"/>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative group">
          <img src="https://images.unsplash.com/photo-1544918877-460635b6d13e?auto=format&fit=crop&q=80&w=1000" class="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Tropical"/>
        </div>
        <div class="space-y-8">
          <div class="flex items-center gap-4">
            <span class="text-6xl font-black text-white/10 italic">02</span>
            <div class="h-[2px] w-20 bg-lime-400"></div>
          </div>
          <h2 class="text-5xl font-black uppercase tracking-tighter">Bali <br/> <span class="text-lime-400">Storm Chasing</span></h2>
          <p class="text-gray-400 leading-relaxed text-lg">
            Witness the majesty of tropical monsoon season. From electrical storms over the Indian Ocean to the lush green humidity of the jungle.
          </p>
          <div class="flex gap-10 border-y border-white/10 py-6">
            <div>
              <p class="text-[10px] font-black uppercase text-gray-500 mb-1">Humidity</p>
              <p class="text-xl font-bold">92%</p>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase text-gray-500 mb-1">Status</p>
              <p class="text-xl font-bold text-lime-400">Optimal</p>
            </div>
          </div>
          <button class="flex items-center gap-3 text-sm font-black uppercase tracking-widest group">
            Analyze Monsoon Patterns 
            <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2 text-lime-400"></i>
          </button>
        </div>
      </div>

    </section>

    <section class="bg-lime-400 py-20 overflow-hidden relative">
      <div class="whitespace-nowrap flex animate-marquee">
        <span class="text-black text-8xl font-black uppercase tracking-tighter mx-4">Nimbus Travel Protocol — Global Telemetry — Real Time Exploration —</span>
        <span class="text-black text-8xl font-black uppercase tracking-tighter mx-4">Nimbus Travel Protocol — Global Telemetry — Real Time Exploration —</span>
      </div>
    </section>

    <footer class="p-16 border-t border-white/5 text-center">
      <div class="mb-8">
        <i class="fa-solid fa-cloud-sun-rain text-4xl text-white/20"></i>
      </div>
      <p class="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">© 2026 Nimbus Environmental Expeditions. All Rights Reserved.</p>
    </footer>

  </div>
</template>

<style scoped>
@keyframes slow-zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
.animate-slow-zoom {
  animation: slow-zoom 20s infinite alternate ease-in-out;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
  display: flex;
}

/* Scannable smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>