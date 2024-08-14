<template>
  <div class="cell" :class="{ 'X': value === 'X', 'O': value === 'O' }" @click="handleClick">
    <img v-if="value === 'X'" src="./../../images/cartoonx.png" class="symbol" />
    <img v-if="value === 'O'" src="./../../images/cartoono.png" class="symbol" />
  </div>
</template>

<script setup>
const props = defineProps({
  value: String,
  index: Number
});

const emit = defineEmits(['move']);

function handleClick() {
  if (!props.value) {
    emit('move', props.index);
  }
}
</script>

<style scoped>
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFCC00;
  border-radius: 15px;
  font-size: 5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.cell:hover {
  background: #FFC107;
}
.symbol {
  width: 80%;
  height: auto;
}
</style>
