<template>
  <div class="min-h-screen bg-white font-sans text-gray-900">
    
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070" 
        class="absolute inset-0 w-full h-full object-cover"
        alt="Travel Hero"
      />
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Adventure Awaits.
        </h1>
        <p class="text-white/90 text-xl max-w-2xl mx-auto mb-8">
          Explore the world's most beautiful destinations with Nimbus.
        </p>
        <button class="bg-[#C6E207] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Start Your Journey
        </button>
      </div>
    </section>

    <section class="max-w-6xl mx-auto py-16 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <p class="text-3xl font-black text-black">{{ stat.value }}</p>
        <p class="text-xs uppercase tracking-widest text-gray-400 font-bold">{{ stat.label }}</p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 space-y-24 py-20">
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000" alt="Mountain" class="w-full h-[500px] object-cover" />
        </div>
        <div class="space-y-6">
          <span class="text-[#C6E207] bg-black px-4 py-1 rounded-full text-[10px] font-black uppercase">Mountain Node</span>
          <h2 class="text-4xl font-black text-black">Swiss Alpine Expedition</h2>
          <p class="text-gray-600 leading-relaxed">
            Experience the grandeur of the Alps. From snow-capped peaks to crystal clear lakes, this journey is designed for those who love the cold beauty of high altitudes.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-sm text-gray-500"><i class="fa-solid fa-check text-green-500"></i> Professional Guides</li>
            <li class="flex items-center gap-2 text-sm text-gray-500"><i class="fa-solid fa-check text-green-500"></i> Luxury Basecamps</li>
          </ul>
          <button class="text-black font-bold border-b-2 border-black pb-1 hover:text-[#C6E207] hover:border-[#C6E207] transition-all">Learn More</button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1 space-y-6">
          <span class="text-[#C6E207] bg-black px-4 py-1 rounded-full text-[10px] font-black uppercase">Tropical Node</span>
          <h2 class="text-4xl font-black text-black">Bali Spiritual Retreat</h2>
          <p class="text-gray-600 leading-relaxed">
            Reconnect with nature in the heart of Indonesia. Explore lush jungles, ancient temples, and the serene beauty of the Pacific coast.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-sm text-gray-500"><i class="fa-solid fa-check text-green-500"></i> Yoga Sessions</li>
            <li class="flex items-center gap-2 text-sm text-gray-500"><i class="fa-solid fa-check text-green-500"></i> Cultural Tours</li>
          </ul>
          <button class="text-black font-bold border-b-2 border-black pb-1 hover:text-[#C6E207] hover:border-[#C6E207] transition-all">Learn More</button>
        </div>
        <div class="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000" alt="Bali" class="w-full h-[500px] object-cover" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://blog.gohub.com/wp-content/uploads/2025/03/how-to-chase-northern-light-in-iceland-scaled.jpg" alt="Iceland" class="w-full h-[500px] object-cover" />
        </div>
        <div class="space-y-6">
          <span class="text-[#C6E207] bg-black px-4 py-1 rounded-full text-[10px] font-black uppercase">Arctic Node</span>
          <h2 class="text-4xl font-black text-black">Iceland Aurora Chase</h2>
          <p class="text-gray-600 leading-relaxed">
            Witness the Northern Lights in their full glory. A rugged adventure through volcanic landscapes and frozen waterfalls.
          </p>
          <button class="text-black font-bold border-b-2 border-black pb-1 hover:text-[#C6E207] hover:border-[#C6E207] transition-all">Learn More</button>
        </div>
      </div>

    </section>

    <section class="bg-gray-50 py-20 px-6 text-center">
      <h2 class="text-3xl font-black mb-4">Ready for your next expedition?</h2>
      <p class="text-gray-500 mb-8">Join 5,000+ travelers worldwide.</p>
      <div class="flex justify-center gap-4">
        <input type="email" placeholder="Your email" class="px-6 py-3 border border-gray-200 rounded-full w-64 focus:outline-none focus:border-black" />
        <button class="bg-black text-white px-8 py-3 rounded-full font-bold">Join Now</button>
      </div>
    </section>

    <footer class="py-12 border-t border-gray-100 text-center">
      <p class="text-gray-400 text-sm">© 2026 Nimbus Travel Group. Explore Responsibly.</p>
    </footer>

  </div>
</template>

<script setup>
const stats = [
  { label: 'Destinations', value: '450+' },
  { label: 'Expeditions', value: '12k' },
  { label: 'Guides', value: '80' },
  { label: 'Rating', value: '4.9/5' }
]
</script>