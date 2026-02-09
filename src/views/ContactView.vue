<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    
    <header class="py-20 px-6 text-center">
      <h1 class="text-4xl font-light tracking-tight text-black mb-4">Contact us.</h1>
      <p class="text-gray-500 max-w-md mx-auto">We typically respond within 24 hours.</p>
    </header>

    <main class="max-w-2xl mx-auto px-6 pb-24">
      
      <form @submit.prevent="handleSubmit" class="space-y-8">
        <div>
          <label class="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Name</label>
          <input v-model="form.name" type="text" placeholder="John Doe" 
            class="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors" />
        </div>

        <div>
          <label class="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Address</label>
          <input v-model="form.email" type="email" placeholder="john@example.com" 
            class="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors" />
        </div>

        <div>
          <label class="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Message</label>
          <textarea v-model="form.message" rows="4" placeholder="How can we help?" 
            class="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
        </div>

        <button type="submit" 
          class="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-all active:scale-95">
          Send Message
        </button>
      </form>

      <div class="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8 text-sm">
        <div>
          <p class="font-bold mb-1">Office</p>
          <p class="text-gray-500 leading-relaxed">99 Rising St, Big City<br>New York, NY 10001</p>
        </div>
        <div>
          <p class="font-bold mb-1">Connect</p>
          <p class="text-gray-500">hello@nimbus.com<br>+1 234 567 890</p>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  alert('Message sent! Keep it simple.')
}
</script>