<template>

  <!-- Hero Section -->
  <section class="relative mt-22 ">
    <div class="h-[300px] bg-cover bg-center flex items-center justify-center"
         style="background-image: url('https://images.unsplash.com/photo-1521791136064-7986c2920216');">
      <div class="bg-black bg-opacity-50 absolute inset-0"></div>
      <div class="relative text-center">
        <h1 class="text-4xl font-bold text-yellow-400">Contact Us</h1>
        <!-- <p class="text-white mt-2">Home / Contact Us</p> -->
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10">

    <!-- Form -->
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
          class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg">
          SEND MESSAGE
        </button>
      </div>
    </div>

    <!-- Info -->
    <div>
      <p class="text-yellow-500 italic">Contact Us</p>
      <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
      <p class="text-gray-600 mb-6">
        We would love to hear from you. Reach out using any of the methods below
        and our team will respond as soon as possible.
      </p>

      <div class="grid sm:grid-cols-2 gap-4">
        <div class="flex items-center gap-3">
          <div class="bg-yellow-100 p-3 rounded-full">📞</div>
          <div>
            <p class="font-semibold">Call Us</p>
            <p class="text-sm">+123-234-1234</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-yellow-100 p-3 rounded-full">✉️</div>
          <div>
            <p class="font-semibold">Email Us</p>
            <p class="text-sm">hello@awesome.com</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-yellow-100 p-3 rounded-full">🌐</div>
          <div>
            <p class="font-semibold">Website</p>
            <p class="text-sm">www.awesome.com</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-yellow-100 p-3 rounded-full">📍</div>
          <div>
            <p class="font-semibold">Address</p>
            <p class="text-sm">99 Rising St, Big City</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <p class="font-semibold mb-2">Follow Us On</p>
        <div class="flex gap-3">
          <span class="bg-yellow-400 p-2 rounded-full">F</span>
          <span class="bg-yellow-400 p-2 rounded-full">T</span>
          <span class="bg-yellow-400 p-2 rounded-full">I</span>
          <span class="bg-yellow-400 p-2 rounded-full">Y</span>
        </div>
      </div>
    </div>

  </section>

   
</template>