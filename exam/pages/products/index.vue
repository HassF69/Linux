<template>
  <div class="products-page">
    <h1 class="page-title">Our Products</h1>
    <div class="products-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script setup>
import { getAllProducts } from '~/data/products'

const products = getAllProducts()
</script>

<!--
<script setup>
const products = ref([])

onMounted(async () => {

  const response = await fetch('https://fakestoreapi.com/products')
  products.value = await response.json()

})
</script>
-->

<style scoped>
.products-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

</style> 