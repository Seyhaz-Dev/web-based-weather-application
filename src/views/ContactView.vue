<template>

  
  <section class="relative mt-22 ">
    <div class="h-[300px] bg-cover bg-center flex items-center justify-center"
         style="background-image: url('https://images.unsplash.com/photo-1521791136064-7986c2920216');">
      <div class="bg-black bg-opacity-50 absolute inset-0"></div>
      <div class="relative text-center">
        <h1 class="text-4xl font-bold text-yellow-400">Contact Us</h1>
        
      </div>
    </div>
  </section>


  <section class="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10">

  
    <div class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-4">Your Information</h2>

      <div class="space-y-4">
        <div>
          <label class="block text-sm mb-1">Your Name</label>
          <input type="text" placeholder="Full Name"
            class="w-full border rounded-lg p-2 focus:outline-yellow-400" />
        </div>

        <div>
          <label class="block text-sm mb-1">Your Email</label>
          <input type="email" placeholder="Email Address"
            class="w-full border rounded-lg p-2 focus:outline-yellow-400" />
        </div>

        <div>
          <label class="block text-sm mb-1">Subject</label>
          <input type="text" placeholder="Subject"
            class="w-full border rounded-lg p-2 focus:outline-yellow-400" />
        </div>

        <div>
          <label class="block text-sm mb-1">Your Message</label>
          <textarea rows="5" placeholder="Message"
            class="w-full border rounded-lg p-2 focus:outline-yellow-400"></textarea>
        </div>

        <button
          class="bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg">
          SEND MESSAGE
        </button>
      </div>
    </div>

    
    <div>
      <p class=" italic">Contact Us</p>
      <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
      <p class="text-gray-600 mb-6">
        We would love to hear from you. Reach out using any of the methods below
        and our team will respond as soon as possible.
      </p>

      <div class="grid sm:grid-cols-2 gap-4">
        <div class="flex items-center gap-3">
          <div class="bg-gradient-to-br from-cyan-400 to-blue-300 p-3 rounded-full"><i class="fas fa-phone"></i></div>
          <div>
            <p class="font-semibold">Call Us</p>
            <p class="text-sm">+123-234-1234</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-gradient-to-br from-cyan-400 to-blue-300 p-3 rounded-full"><i class="far fa-envelope"></i></div>
          <div>
            <p class="font-semibold">Email Us</p>
            <p class="text-sm">hello@awesome.com</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-gradient-to-br from-cyan-400 to-blue-300 p-3 rounded-full"><i class="fas fa-globe"></i></div>
          <div>
            <p class="font-semibold">Website</p>
            <p class="text-sm">www.awesome.com</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-gradient-to-br from-cyan-400 to-blue-300 p-3 rounded-full"><i class="fas fa-map-pin"></i></div>
          <div>
            <p class="font-semibold">Address</p>
            <p class="text-sm">99 Rising St, Big City</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <p class="font-semibold mb-2">Follow Us On</p>
        <div class="flex gap-3">
          <span class="bg-gradient-to-br from-cyan-400 to-blue-300 p-2 rounded-full"><i class="fab fa-facebook"></i></span>
          <span class="bg-gradient-to-br from-cyan-400 to-blue-300 p-2 rounded-full"><i class="fab fa-instagram"></i></span>
          <span class="bg-gradient-to-br from-cyan-400 to-blue-300 p-2 rounded-full"><i class="fab fa-telegram"></i></span>
          <span class="bg-gradient-to-br from-cyan-400 to-blue-300 p-2 rounded-full"><i class="fab fa-whatsapp"></i></span>
        </div>
      </div>
    </div>

  </section>

   
</template>