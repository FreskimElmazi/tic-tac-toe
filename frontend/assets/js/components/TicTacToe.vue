<template>
  <div class="tic-tac-toe">
    <GameTitle />
    <Board :cells="cells" @move="makeMove" />
    <ResetButton @reset="resetGame" />
    <GameStatus :winner="winner" :isDraw="isDraw" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import GameTitle from './GameTitle.vue';
import Board from './Board.vue';
import ResetButton from './ResetButton.vue';
import GameStatus from './GameStatus.vue';

const cells = ref(Array(9).fill(null));
const xIsNext = ref(true);
const winner = ref(null);

const isDraw = computed(() => {
  return cells.value.every(cell => cell) && winner.value === null;
});

function makeMove(index) {
  if (cells.value[index] || winner.value) return;
  cells.value[index] = xIsNext.value ? 'X' : 'O';
  xIsNext.value = !xIsNext.value;
  checkWinner();
}

function checkWinner() {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (cells.value[a] && cells.value[a] === cells.value[b] && cells.value[a] === cells.value[c]) {
      winner.value = cells.value[a];
      return;
    }
  }
}

function resetGame() {
  cells.value = Array(9).fill(null);
  xIsNext.value = true;
  winner.value = null;
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.tic-tac-toe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Comic Sans MS', sans-serif;
  background: #FFEB3B;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100%;
}
</style>
