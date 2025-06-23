<template>
  <form @submit.prevent="submitBooking">
    <label>Nom
      <input v-model="user" required />
    </label>
    <label>Salle
      <select v-model="roomId" required>
        <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
      </select>
    </label>
    <label>Date
      <input type="date" v-model="date" required />
    </label>
    <label>Heure
      <input type="time" v-model="time" required />
    </label>
    <label>But
      <input v-model="purpose" required />
    </label>
    <button type="submit">Réserver</button>
    <div v-if="message">{{ message }}</div>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({ rooms: Array, defaultRoomId: String })
const emit = defineEmits(['booked'])
const user = ref('')
const roomId = ref(props.defaultRoomId || '')
const date = ref('')
const time = ref('')
const purpose = ref('')
const message = ref('')
const router = useRouter()
async function submitBooking() {
  if (!user.value || !roomId.value || !date.value || !time.value || !purpose.value) return
  const res = await fetch('http://localhost:3001/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomId: roomId.value, date: date.value, time: time.value, user: user.value, purpose: purpose.value })
  })
  if (res.ok) {
    message.value = 'Réservation réussie!'
    setTimeout(() => { router.push('/'); }, 1000)
    emit('booked')
  } else {
    message.value = 'Erreur lors de la réservation.'
  }
}
</script>
<style scoped>
form { display: flex; flex-direction: column; gap: 8px; }
</style> 