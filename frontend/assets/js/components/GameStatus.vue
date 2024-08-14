<template>
  <transition name="bounce">
    <div v-if="status" class="status">{{ status }}</div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  winner: String,
  isDraw: Boolean
});

const status = computed(() => {
  if (props.winner) return `${props.winner} Wins!`;
  if (props.isDraw) return "It's a Draw!";
  return null;
});
</script>

<style scoped>
.status {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3F51B5;
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
