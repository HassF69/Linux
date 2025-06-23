<template>
  <form @submit.prevent="applyFilters">
    <label>Type
      <select v-model="filters.type">
        <option value="">Tous</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </label>
    <label>Capacité minimale
      <input type="number" v-model.number="filters.capacity" min="0" />
    </label>
    <label>Équipement
      <input type="text" v-model="filters.equipment" placeholder="ex: Vidéoprojecteur" />
    </label>
    <label>Date
      <input type="date" v-model="filters.date" />
    </label>
    <label>Heure
      <input type="time" v-model="filters.time" />
    </label>
    <button type="submit">Filtrer</button>
    <button type="button" @click="resetFilters" :disabled="!isActive">Reset</button>
  </form>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue'
const props = defineProps({ types: Array })
const emit = defineEmits(['filter'])
const filters = ref({ type: '', capacity: '', equipment: '', date: '', time: '' })
const isActive = computed(() => Object.values(filters.value).some(v => v))
function applyFilters() { emit('filter', { ...filters.value }) }
function resetFilters() { filters.value = { type: '', capacity: '', equipment: '', date: '', time: '' }; emit('filter', { ...filters.value }) }
watch(filters, applyFilters, { deep: true })
onMounted(() => { emit('filter', { ...filters.value }) })
</script>
<style scoped>
form { display: flex; flex-direction: column; gap: 8px; }
</style> 