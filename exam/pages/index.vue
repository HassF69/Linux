<template>
  <div class="home-container">
    <h1 class="home-title">
      Home
    </h1>

    <p class="home-subtitle">
    Nuxt 
    </p>

    <p class="home-description">
      web dev
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.home-container {
  text-align: center;
  padding: 2rem;
}

.home-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.home-subtitle {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: #444;
}

.home-description {
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
}
</style> 


