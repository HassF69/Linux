<template>
  <div class="card">
    <NuxtLink :to="`/products/${product.id}`" class="card-link">
      <div class="image-container">
        <img 
          :src="product.image" 
          :alt="`Picture of ${product.title}`" 
          class="product-image" 
        />
      </div>
      <div class="card-content">
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <span class="view-details">View Details</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.card {
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.image-container {
  padding: 1rem;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.product-image {
  max-height: 150px;
  max-width: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.card:hover .product-image {
  transform: scale(1.05);
}

.card-content {
  padding: 1rem;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.8em;
}

.product-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4a90e2;
  margin: 0.5rem 0;
}

.view-details {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.view-details:hover {
  background-color: #357abd;
}


</style> 