import { mount } from '@vue/test-utils';
import TicTacToe from '@/assets/js/components/TicTacToe.vue';

describe('TicTacToe.vue', () => {
  it('renders all child components correctly', () => {
    const wrapper = mount(TicTacToe);
    
    // Check that all child components are rendered
    expect(wrapper.findComponent({ name: 'GameTitle' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Board' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'ResetButton' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'GameStatus' }).exists()).toBe(true);
  });

  it('makes a move and toggles between players', async () => {
    const wrapper = mount(TicTacToe);
    
    const board = wrapper.findComponent({ name: 'Board' });

    // Simulate player X clicking on the first cell
    await board.vm.$emit('move', 0);
    expect(wrapper.vm.cells[0]).toBe('X');
    expect(wrapper.vm.xIsNext).toBe(false);

    // Simulate player O clicking on the second cell
    await board.vm.$emit('move', 1);
    expect(wrapper.vm.cells[1]).toBe('O');
    expect(wrapper.vm.xIsNext).toBe(true);
  });

  it('detects a winner', async () => {
    const wrapper = mount(TicTacToe);
    
    const board = wrapper.findComponent({ name: 'Board' });

    // Simulate player X winning by filling the top row
    await board.vm.$emit('move', 0);
    await board.vm.$emit('move', 3);
    await board.vm.$emit('move', 1);
    await board.vm.$emit('move', 4);
    await board.vm.$emit('move', 2);

    expect(wrapper.vm.winner).toBe('X');

    // Verify that GameStatus component displays the winner
    const gameStatus = wrapper.findComponent({ name: 'GameStatus' });
    expect(gameStatus.text()).toContain('X Wins!');
  });

  it('detects a draw', async () => {
    const wrapper = mount(TicTacToe);

    const board = wrapper.findComponent({ name: 'Board' });

    // Simulate a draw situation
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    for (let i = 0; i < moves.length; i++) {
      await board.vm.$emit('move', moves[i]);
    }

    expect(wrapper.vm.winner).toBe(null);
    expect(wrapper.vm.isDraw).toBe(true);

    // Verify that GameStatus component displays the draw message
    const gameStatus = wrapper.findComponent({ name: 'GameStatus' });
    expect(gameStatus.text()).toContain("It's a Draw!");
  });

  it('resets the game when reset button is clicked', async () => {
    const wrapper = mount(TicTacToe);

    const board = wrapper.findComponent({ name: 'Board' });
    const resetButton = wrapper.findComponent({ name: 'ResetButton' });

    // Simulate a move
    await board.vm.$emit('move', 0);
    expect(wrapper.vm.cells[0]).toBe('X');

    // Simulate clicking the reset button
    await resetButton.vm.$emit('reset');
    
    // Ensure the game has been reset
    expect(wrapper.vm.cells).toEqual(Array(9).fill(null));
    expect(wrapper.vm.winner).toBe(null);
    expect(wrapper.vm.xIsNext).toBe(true);
  });
});
