<template>
  <div>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="!room">Salle non trouvée.</div>
    <div v-else>
      <RoomDetails :room="room" :bookings="bookings" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import RoomDetails from '~/components/RoomDetails.vue'
const route = useRoute()
const room = ref(null)
const bookings = ref([])
const loading = ref(true)
onMounted(async () => {
  loading.value = true
  // Use query to support string IDs
  const res = await fetch(`http://localhost:3001/rooms?id=${route.params.id}`)
  const data = await res.json()
  room.value = data[0] || null
  if (room.value) {
    const bRes = await fetch(`http://localhost:3001/bookings?roomId=${room.value.id}`)
    bookings.value = await bRes.json()
  }
  loading.value = false
})
</script>
<style scoped>
div { padding: 20px; }
</style> 