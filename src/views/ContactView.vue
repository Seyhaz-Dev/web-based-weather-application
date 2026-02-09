<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans selection:bg-lime-400/30">
    
    <header class="relative h-[40vh] flex items-center justify-center overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-30 grayscale"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
      
      <div class="relative z-10 text-center">
        <span class="text-lime-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Communication Protocol</span>
        <h1 class="text-6xl font-black tracking-tighter uppercase italic">Contact <span class="text-lime-400">Node</span></h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-24 px-8 grid lg:grid-cols-2 gap-20">
      
      <div class="space-y-12">
        <div>
          <h2 class="text-4xl font-black uppercase tracking-tight mb-6">Get in <span class="text-lime-400">Touch</span></h2>
          <p class="text-gray-400 text-lg leading-relaxed max-w-md">
            Have questions about atmospheric data or expedition logistics? Reach out to our central command.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-lime-400/50 transition-colors group">
            <i class="fa-solid fa-ghost text-lime-400 mb-4 text-xl"></i>
            <p class="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Signal Us</p>
            <p class="font-bold text-white">+123-234-1234</p>
          </div>

          <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-lime-400/50 transition-colors group">
            <i class="fa-solid fa-satellite text-lime-400 mb-4 text-xl"></i>
            <p class="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Data Stream</p>
            <p class="font-bold text-white">hello@nimbus.com</p>
          </div>
        </div>

        <div class="pt-8 border-t border-white/5">
          <p class="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-6">Network Nodes</p>
          <div class="flex gap-4">
            <a v-for="icon in ['facebook', 'instagram', 'telegram', 'whatsapp']" :key="icon" href="#" 
               class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
              <i :class="['fab', 'fa-' + icon]"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-1 bg-gradient-to-br from-lime-400/20 to-cyan-500/20 blur-2xl opacity-50"></div>
        <div class="relative bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl shadow-2xl">
          <form @submit.prevent="sendMessage" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Identity</label>
                <input v-model="form.name" type="text" placeholder="Full Name" required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors placeholder:text-gray-700" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Return Path</label>
                <input v-model="form.email" type="email" placeholder="Email Address" required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors placeholder:text-gray-700" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Subject</label>
              <input v-model="form.subject" type="text" placeholder="Subject" required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors placeholder:text-gray-700" />
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Message Body</label>
              <textarea v-model="form.message" rows="5" placeholder="Transmission..." required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors placeholder:text-gray-700"></textarea>
            </div>

            <button :disabled="isSending" type="submit"
              class="w-full bg-white text-black font-black uppercase text-[11px] tracking-[0.2em] py-5 rounded-xl hover:bg-lime-400 transition-all active:scale-95 disabled:opacity-50">
              <span v-if="!isSending">Transmit Message</span>
              <span v-else>Transmitting...</span>
            </button>
          </form>
          
          <p v-if="status" class="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-lime-400">
            {{ status }}
          </p>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { supabase } from '../supabase' //

const isSending = ref(false)
const status = ref("")

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

async function sendMessage() {
  isSending.value = true
  status.value = ""


  const { error } = await supabase
    .from('contact_messages')
    .insert([
      { 
        name: form.name, 
        email: form.email, 
        subject: form.subject, 
        message: form.message 
      }
    ])

  if (error) {
    status.value = "Transmission Failed: " + error.message
  } else {
    status.value = "Signal Received Successfully."
    form.name = ''; form.email = ''; form.subject = ''; form.message = '';
  }
  
  isSending.value = false
}
</script>