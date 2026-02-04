<template>

  <!-- Contact Section -->
  <section class="py-20 mt-25 bg-gray-50">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-4xl font-bold text-center mb-6">Contact Us</h2>
      <p class="text-center mb-12 text-gray-600">Have questions or want to work together? Fill out the form below and we’ll get back to you soon!</p>

      <!-- Contact Form -->
      <form class="bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label class="block mb-2 font-semibold" for="name">Name</label>
          <input class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" type="text" id="name" placeholder="Your Name">
        </div>
        <div>
          <label class="block mb-2 font-semibold" for="email">Email</label>
          <input class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" type="email" id="email" placeholder="Your Email">
        </div>
        <div>
          <label class="block mb-2 font-semibold" for="message">Message</label>
          <textarea class="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" id="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>

      <!-- Contact Info -->
      <!-- <div class="mt-12 text-center text-gray-700 space-y-2">
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div> -->
    </div>
  </section>
   
</template>