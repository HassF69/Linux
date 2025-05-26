<template>
  <div class="product-details">
    <div class="product-grid">
      <div class="product-image-container">
        <img 
          :src="product.image" 
          :alt="`Big picture of ${product.title}`" 
          class="product-image"
        />
      </div>
      <div class="product-info">
        <h2 class="product-title">{{ product.title }}</h2>
        <div class="product-meta">
          <p class="product-price">
            Price: <span class="price-value">${{ product.price.toFixed(2) }}</span>
          </p>
          <p class="product-category">
            Category: <span class="category-value">{{ product.category }}</span>
          </p>
        </div>
        <div class="product-description-container">
          <h3 class="description-title">Description</h3>
          <p class="product-description">
            {{ product.description }}
            <span v-if="product.price > 100" class="price-note">(Wow, that's expensive!)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.product-details {
  padding: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.product-image-container {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
  margin: 0;
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.product-price, .product-category {
  font-size: 1.1rem;
  color: #555;
  margin: 0;
}

.price-value {
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: #4a90e2;
  font-size: 1.2rem;
}

.category-value {
  font-style: italic;
  color: #666;
  text-transform: capitalize;
}

.product-description-container {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
}

.description-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e2e2;
}

.product-description {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.price-note {
  display: block;
  margin-top: 0.5rem;
  color: #dc3545;
  font-weight: 500;
}


</style> 