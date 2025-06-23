<template>
  <div>
    <h2>Liste des salles</h2>
    <RoomFilter :types="types" @filter="applyFilters" />
    <div v-for="room in filteredRooms" :key="room.id">
      <RoomCard :room="room" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import RoomCard from '~/components/RoomCard.vue'
import RoomFilter from '~/components/RoomFilter.vue'
const rooms = ref([])
const filteredRooms = ref([])
const types = ref([])
async function fetchRooms() {
  const res = await fetch('http://localhost:3001/rooms')
  rooms.value = await res.json()
  filteredRooms.value = rooms.value
  types.value = [...new Set(rooms.value.map(r => r.type))]
}
function applyFilters(filters) {
  filteredRooms.value = rooms.value.filter(r => {
    if (filters.type && r.type !== filters.type) return false
    if (filters.capacity && r.capacity < filters.capacity) return false
    if (filters.equipment && !r.equipments.some(e => e.toLowerCase().includes(filters.equipment.toLowerCase()))) return false
    return true
  })
}
onMounted(fetchRooms)
</script>
<style scoped>
div { padding: 20px; }
</style> 