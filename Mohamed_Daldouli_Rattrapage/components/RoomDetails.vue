<template>
  <div>
    <h2>{{ room.name }}</h2>
    <p>Type: {{ room.type }}</p>
    <p>Capacité: {{ room.capacity }}</p>
    <p>Équipements: {{ room.equipments.join(', ') }}</p>
    <p>Localisation: {{ room.location }}</p>
    <p>Description: {{ room.description }}</p>
    <div>
      <h4>Réservations à venir</h4>
      <ul>
        <li v-for="b in bookings" :key="b.id">{{ b.date }} {{ b.time }} - {{ b.user }} ({{ b.purpose }})</li>
      </ul>
    </div>
    <NuxtLink :to="`/book-room?roomId=${room.id}`">Réserver cette salle</NuxtLink>
  </div>
</template>
<script setup>
defineProps({ room: Object, bookings: Array })
</script>
<style scoped>
div { border: 1px solid #ccc; padding: 10px; }
</style> 