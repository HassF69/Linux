<template>
  <div class="product-detail-page">
    <div class="navigation">
      <NuxtLink to="/products" class="back-button">
        <span class="back-icon">←</span> Back to Products
      </NuxtLink>
    </div>

    <div v-if="product" class="product-container">
      <ProductDetails :product="product" />
    </div>

    <div v-else class="loading-state">
      <div class="loading-spinner"></div>
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
const product = ref(null)
const route = useRoute()

onMounted(async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
    product.value = await response.json()
  } catch (error) {
    console.error('Error loading product:', error)
  }
})
</script>

<style>
.product-detail-page {
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

.product-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f4f6;
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  margin-bottom: 1rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style> 