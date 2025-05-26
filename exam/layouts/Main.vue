<template>
  <div>
    <div class="header">
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
      </div>
    </div>

    <div class="content">
      <slot />
    </div>

    <div class="footer">
      <p>My first Nuxt project</p>
    </div>
  </div>
</template>

<style>
.header {
  background: #f0f0f0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1.25rem;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #4a90e2;
}

.content {
  padding: 2rem;
  min-height: calc(100vh - 140px);
}

.footer {
  background: #f0f0f0;
  padding: 1rem;
  text-align: center;
  color: #666;
}
</style> 