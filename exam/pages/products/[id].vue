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

    <div v-else class="error-state">
      <p>Product not found</p>
    </div>
  </div>
</template>

<script setup>
import { getProductById } from '~/data/products'

const route = useRoute()
const product = getProductById(Number(route.params.id))
</script>

<!--
<script setup>
const product = ref(null)
const route = useRoute()

onMounted(async () => {

  const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
  product.value = await response.json()

})
</script>
-->
<style scoped>
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

.error-state {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .product-detail-page {
    padding: 1rem;
  }
}
</style> 