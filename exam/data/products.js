export const products = [
  {
    id: 1,
    title: "Smartphone XYZ",
    price: 599.99,
    description: "Latest smartphone with amazing features and high-quality camera.",
    category: "electronics",
    image: "https://picsum.photos/200/300?random=1"
  },
  {
    id: 2,
    title: "Classic T-Shirt",
    price: 29.99,
    description: "Comfortable cotton t-shirt, perfect for everyday wear.",
    category: "clothing",
    image: "https://picsum.photos/200/300?random=2"
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 89.99,
    description: "Lightweight running shoes with excellent support and comfort.",
    category: "shoes",
    image: "https://picsum.photos/200/300?random=3"
  },
  {
    id: 4,
    title: "Laptop Pro",
    price: 1299.99,
    description: "Powerful laptop for professionals and gamers.",
    category: "electronics",
    image: "https://picsum.photos/200/300?random=4"
  },
  {
    id: 5,
    title: "Designer Watch",
    price: 199.99,
    description: "Elegant watch with premium materials and precise movement.",
    category: "accessories",
    image: "https://picsum.photos/200/300?random=5"
  }
]

export const getAllProducts = () => {
  return products
}

export const getProductById = (id) => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category)
} 