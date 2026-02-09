<template>
  <div class="grid md:grid-cols-2 gap-12 items-center">

    <!-- Image -->
    <div
      class="rounded-3xl overflow-hidden shadow-2xl"
      :class="reverse ? 'md:order-2' : ''"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-[500px] object-cover"
      />
    </div>

    <!-- Content -->
    <div
      class="space-y-6"
      :class="reverse ? 'md:order-1' : ''"
    >
      <span
        class="text-[#C6E207] bg-black px-4 py-1 rounded-full text-[10px] font-black uppercase"
      >
        {{ tag }}
      </span>

      <h2 class="text-4xl font-black text-black">
        {{ title }}
      </h2>

      <p class="text-gray-600 leading-relaxed">
        {{ description }}
      </p>

      <!-- Features -->
      <ul v-if="features && features.length" class="space-y-3">
        <li
          v-for="(item, i) in features"
          :key="i"
          class="flex items-center gap-2 text-sm text-gray-500"
        >
           {{ item }}
        </li>
      </ul>

      <button
        class="text-black font-bold border-b-2 border-black pb-1 hover:text-[#C6E207] hover:border-[#C6E207] transition-all"
      >
        Learn More
      </button>
    </div>

  </div>
</template>

<script setup>
defineProps({
  image: String,
  tag: String,
  title: String,
  description: String,
  features: Array,
  reverse: Boolean,
})
</script>
