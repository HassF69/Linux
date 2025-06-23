<template>
  <div>
    <h2>Réserver une salle</h2>
    <BookingForm :rooms="rooms" :defaultRoomId="defaultRoomId" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BookingForm from '~/components/BookingForm.vue'
const rooms = ref([])
const route = useRoute()
const defaultRoomId = route.query.roomId || ''
onMounted(async () => {
  const res = await fetch('http://localhost:3001/rooms')
  rooms.value = await res.json()
})
</script>
<style scoped>
div { padding: 20px; }
</style> 