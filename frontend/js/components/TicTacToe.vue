<template>
  <div class="tic-tac-toe">
    <h1 class="game-title">Tic-Tac-Toe</h1>
    <div class="board">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="cell"
        :class="{ 'X': cell === 'X', 'O': cell === 'O' }"
        @click="makeMove(index)"
      >
        <img v-if="cell === 'X'" src="./../../images/cartoonx.png" class="symbol" />
        <img v-if="cell === 'O'" src="./../../images/cartoono.png" class="symbol" />
      </div>
    </div>
    <button @click="resetGame" class="reset-button">Reset Game</button>
    <transition name="bounce">
      <div v-if="winner !== null" class="status">{{ winner }} Wins!</div>
    </transition>
    <transition name="bounce">
      <div v-if="isDraw && winner === null" class="status">It's a Draw!</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

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
  background: #FFEB3B; /* Bright yellow background */
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100%;
}

.game-title {
  font-size: 3rem; /* Large, playful font size */
  font-weight: bold;
  color: #3F51B5; /* Bright blue color */
  margin-bottom: 20px; /* Space below the title */
  text-shadow: 2px 2px #FF9800; /* Add a shadow to the title */
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px; /* Add gap between cells */
  margin-bottom: 20px;
  width: 90vw;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  background: #FFEB3B;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFCC00; /* Bright yellow for cells */
  border-radius: 15px; /* Rounded corners */
  font-size: 5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.cell:hover {
  background: #FFC107; /* Slightly darker yellow */
}

.symbol {
  width: 80%; /* Adjust size of symbols */
  height: auto;
}

.reset-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #FFEB3B;
  background-color: #FF9800; /* Bright orange */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reset-button:hover {
  background-color: #F57C00; /* Darker orange */
}

.status {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3F51B5; /* Bright blue text */
  position: fixed;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
