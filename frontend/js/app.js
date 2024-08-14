import { createApp } from 'vue';
import TicTacToe from './components/TicTacToe.vue';

// Create Vue app instance
const app = createApp({});

// Register the component globally if you want to use it anywhere
app.component('TicTacToe', TicTacToe);

// Mount the Vue app
app.mount('#app');