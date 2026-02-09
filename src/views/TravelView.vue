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
<TravelSection
  v-for="(item, i) in travels"
  :key="i"
  v-bind="item"
  :reverse="i % 2 === 1"
/>




</section>


  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import TravelSection from "@/components/TravelSection.vue"

const store = useStore()

// Get travels from store
const travels = computed(() => store.state.travels)
</script>
