<template>
  <div class="booking-card">
    <p>Salle: {{ booking.roomName }}</p>
    <p>Date: {{ booking.date }} {{ booking.time }}</p>
    <p>But: {{ booking.purpose }}</p>
    <button v-if="canCancel" @click="$emit('cancel', booking.id)">Annuler</button>
  </div>
</template>
<script setup>
defineProps({ booking: Object, canCancel: Boolean })
</script>
<style scoped>
.booking-card { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
</style> 