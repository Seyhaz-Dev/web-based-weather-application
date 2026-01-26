<template>
  <link rel="stylesheet" href="src/style.css">
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex h-16 items-center justify-between">

        <!-- Logo -->
        <h1 class="text-xl font-bold text-blue-600">
          WeatherApp
        </h1>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          <a class="text-gray-600 hover:text-blue-600" href="/">Home</a>
          <a class="text-gray-600 hover:text-blue-600" href="/contact">Contact</a>
        </nav>

        <!-- Button -->
        <button class="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>

      </div>
    </div>
  </header>
</template>
