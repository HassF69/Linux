<template>
  <div class="products-page">
    <div class="navigation">
      <NuxtLink to="/" class="back-button">
        <span class="back-icon">←</span> Back to Home
      </NuxtLink>
    </div>

    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <ProductCard :product="product" />
      </div>
    </div>

    <div v-if="!products.length" class="loading-state">
      Loading products...
    </div>
  </div>
</template>

<script setup>
const products = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    products.value = await response.json()
  } catch (error) {
    console.error('Error loading products:', error)
  }
})
</script>

<style>
.products-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navigation {
  margin-bottom: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.back-button:hover {
  background-color: #e5e7eb;
  transform: translateX(-2px);
}

.back-icon {
  font-size: 1.2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.loading-state {
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.1rem;
}

</style> 