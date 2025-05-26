<template>
  <div class="layout">
    <header class="header">
      <nav class="nav-container">
        <NuxtLink to="/" class="logo">Home</NuxtLink>

        <ul class="nav-links">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="nav-link">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.25rem;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.logo:hover {
  color: #4a90e2;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4a90e2;
}

.router-link-exact-active {
  color: #12b488;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  flex: 1;
}

</style> 