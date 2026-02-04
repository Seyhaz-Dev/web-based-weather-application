<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template> -->

<template>
  <div class="about-page">

    <!-- Hero -->
    <section class="hero mt-10">
      <h1>About Us</h1>
      <p>
        Helping people make confident decisions through trusted weather
        and climate intelligence.
        </p>
      </section>

    <!-- Intro -->
    <section class="intro">
      <p>
        Every day, across the world, millions of people rely on weather
        information to plan their lives. From daily routines to critical
        safety decisions, accurate forecasts matter.
      </p>
    </section>

    <!-- Feature Grid -->
    <section class="features">
      <div class="feature-card">
        <h3>🌍 Global Impact</h3>
        <p>
          We transform complex weather and climate data into clear insights,
          helping communities stay safe, prepared, and resilient.
        </p>
      </div>

      <div class="feature-card">
        <h3>📡 Advanced Technology</h3>
        <p>
          Using high-performance computing, data science, and AI, we process
          massive amounts of weather data every second.
        </p>
      </div>

      <div class="feature-card">
        <h3>🧠 Scientific Expertise</h3>
        <p>
          Our meteorologists and climate experts interpret data to deliver
          forecasts you can trust, even in extreme conditions.
        </p>
      </div>
    </section>

    <!-- Work Section -->
    <section class="work">
      <h2>Our Work — Nationally & Globally</h2>
      <p>
        We provide weather services that support governments, businesses,
        emergency responders, and the public. Our forecasts power websites,
        mobile apps, alerts, and early-warning systems.
      </p>

      <div class="work-cards">
        <div class="work-card">
          <h4>⚠️ Weather Warnings</h4>
          <p>
            Timely alerts help reduce risks and protect lives during severe
            weather events.
          </p>
        </div>

        <div class="work-card">
          <h4>📊 Climate Research</h4>
          <p>
            Ground-breaking research improves understanding of climate change
            and future risks.
          </p>
        </div>

        <div class="work-card">
          <h4>🤝 Partnerships</h4>
          <p>
            We collaborate globally to strengthen climate resilience and
            preparedness.
          </p>
        </div>
      </div>
    </section>

    <!-- Expertise -->
    <section class="expertise">
      <h2>Our Expertise</h2>
      <p>
        Behind every forecast is a dedicated team combining science,
        technology, and operational excellence to deliver reliable insights
        when they matter most.
      </p>
    </section>

  </div>


  <section class="explore-weather">
    <!-- Section Header -->
    <div class="section-header">
      <h2>Explore Our Weather World</h2>
      <p>
        Discover how science, technology, and expertise power accurate
        weather and climate insights.
      </p>
    </div>

    <!-- Card Grid -->
    <div class="card-grid">
      <!-- Card 1: Who We Are -->
      <div class="weather-card">
        <div class="card-image-wrapper">
          <img :src="aboutImg" alt="About Us" class="card-image" />
          <GlobeAltIcon class="icon" />
        </div>
        <h3>Who We Are</h3>
        <p>
          Innovating world-leading weather and climate science to support
          people and communities globally.
        </p>
        <router-link to="/about" class="link">Explore →</router-link>
      </div>

      <!-- Card 2: Our Impact -->
      <div class="weather-card">
        <div class="card-image-wrapper">
          <img :src="impactImg" alt="Our Impact" class="card-image" />
          <BoltIcon class="icon" />
        </div>
        <h3>Our Impact</h3>
        <p>
          From extreme weather warnings to long-term climate resilience,
          our work helps protect lives.
        </p>
        <router-link to="/impact" class="link">Explore →</router-link>
      </div>

      <!-- Card 3: Contact Us -->
      <div class="weather-card">
        <div class="card-image-wrapper">
          
          <PhoneIcon class="icon" />
        </div>
        <h3>Contact Us</h3>
        <p>
          Reach out for support, partnerships, or weather-related enquiries.
        </p>
        <router-link to="/contact" class="link">Explore →</router-link>
      </div>

      <!-- Card 4: Governance -->
      <div class="weather-card">
        <div class="card-image-wrapper">
          <img :src="governanceImg" alt="Governance" class="card-image" />
          <BuildingLibraryIcon class="icon" />
        </div>
        <h3>Governance</h3>
        <p>
          Learn how our organisation is managed to ensure trust,
          transparency, and reliability.
        </p>
        <router-link to="/governance" class="link">Explore →</router-link>
      </div>

      <!-- Card 5: News & Media -->
      <div class="weather-card">
        <div class="card-image-wrapper">
          <img :src="newsImg" alt="News & Media" class="card-image" />
          <FilmIcon class="icon" />
        </div>
        <h3>News & Media</h3>
        <p>
          Sharing weather stories, forecasts, and climate research with the world.
        </p>
        <router-link to="/news" class="link">Explore →</router-link>
      </div>

      <!-- Card 6: Forecast Accuracy -->
      <div class="weather-card">
        <div class="card-image-wrapper">
          <img :src="accuracyImg" alt="Forecast Accuracy" class="card-image" />
          <ChartBarIcon class="icon" />
        </div>
        <h3>Forecast Accuracy</h3>
        <p>
          Understand how we measure and improve the accuracy of public forecasts.
        </p>
        <router-link to="/accuracy" class="link">Explore →</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1f2937;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 12px;
}

.hero p {
  font-size: 1.15rem;
  max-width: 700px;
  margin: auto;
}

/* Intro */
.intro {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  font-size: 1.05rem;
  line-height: 1.8;
  text-align: center;
}

/* Features */
.features {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.feature-card {
  background: white;
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

/* Work */
.work {
  background: #f8fafc;
  padding: 80px 20px;
}

.work h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.work p {
  max-width: 850px;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 1.8;
}

.work-cards {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.work-card {
  background: white;
  border-radius: 16px;
  padding: 26px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Expertise */
.expertise {
  padding: 80px 20px;
  text-align: center;
}

.expertise h2 {
  font-size: 2.2rem;
  margin-bottom: 16px;
}

.expertise p {
  max-width: 800px;
  margin: auto;
  line-height: 1.8;
  color: #374151;
}

/* Header */
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-header p {
  color: #4b5563;
  line-height: 1.7;
}

/* Grid */
.card-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

/* Card */
.weather-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.weather-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
}

/* Card Image Wrapper */
.card-image-wrapper {
  position: relative;
}

.card-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

/* Icon on top of image */
.icon {
  position: absolute;
  bottom: -20px;
  left: 20px;
  width: 48px;
  height: 48px;
  color: #0ea5e9;
  background: white;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

/* Card content */
.weather-card h3 {
  font-size: 1.4rem;
  margin: 32px 20px 12px;
}

.weather-card p {
  color: #4b5563;
  line-height: 1.6;
  margin: 0 20px 20px;
}

/* Link */
.link {
  color: #0ea5e9;
  font-weight: 600;
  text-decoration: none;
  margin: 0 20px 20px;
}

.link:hover {
  text-decoration: underline;
}
</style>


