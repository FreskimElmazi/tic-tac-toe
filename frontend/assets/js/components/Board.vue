<template>
  <div class="board">
    <Cell
      v-for="(cell, index) in cells"
      :key="index"
      :value="cell"
      :index="index"
      @move="makeMove"
    />
  </div>
</template>

<script setup>
import Cell from './Cell.vue';

const props = defineProps({
  cells: Array  // This prop receives the cells array from the parent component
});

const emit = defineEmits(['move']);

function makeMove(index) {
  emit('move', index);  // Emit the move event with the index of the clicked cell
}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  margin-bottom: 20px;
  width: 90vw;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  background: #FFEB3B;
}
</style>
