<template>
  <div class="room-card">
    <h3>{{ room.name }}</h3>
    <p>Type: {{ room.type }}</p>
    <p>Capacité: {{ room.capacity }}</p>
    <NuxtLink :to="`/rooms/${room.id}`">Voir détails</NuxtLink>
  </div>
</template>
<script setup>
defineProps({ room: Object })
</script>
<style scoped>
.room-card { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
</style> 