<template>
  <div>
    <h2>Mes réservations</h2>
    <input v-model="user" placeholder="Votre nom" @input="fetchBookings" />
    <div v-for="booking in bookings" :key="booking.id">
      <BookingCard :booking="booking" :canCancel="isFuture(booking.date, booking.time)" @cancel="cancelBooking" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BookingCard from '~/components/BookingCard.vue'
const user = ref('')
const bookings = ref([])
function isFuture(date, time) {
  const dt = new Date(date + 'T' + time)
  return dt > new Date()
}
async function fetchBookings() {
  if (!user.value) { bookings.value = []; return }
  const res = await fetch(`http://localhost:3001/bookings?user=${user.value}`)
  const data = await res.json()
  const roomsRes = await fetch('http://localhost:3001/rooms')
  const rooms = await roomsRes.json()
  bookings.value = data.map(b => ({ ...b, roomName: (rooms.find(r => r.id == b.roomId) || {}).name || '' }))
}
async function cancelBooking(id) {
  await fetch(`http://localhost:3001/bookings/${id}`, { method: 'DELETE' })
  fetchBookings()
}
</script>
<style scoped>
div { padding: 20px; }
</style> 