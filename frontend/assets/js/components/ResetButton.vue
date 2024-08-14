<template>
  <button @click="resetGame" class="reset-button">Reset Game</button>
</template>

<script setup>
const emit = defineEmits(['reset']);

function resetGame() {
  emit('reset');
}
</script>

<style scoped>
.reset-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #FFEB3B;
  background-color: #FF9800;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.reset-button:hover {
  background-color: #F57C00;
}
</style>
