import { mount } from '@vue/test-utils';
import GameStatus from '@/assets/js/components/GameStatus.vue';

describe('GameStatus.vue', () => {
  
  it('renders nothing when no winner or draw', () => {
    const wrapper = mount(GameStatus, {
      props: {
        winner: null,
        isDraw: false
      }
    });

    // The status div should not be rendered when there's no winner or draw
    expect(wrapper.find('.status').exists()).toBe(false);
  });

  it('renders winner message when winner is provided', () => {
    const wrapper = mount(GameStatus, {
      props: {
        winner: 'X',
        isDraw: false
      }
    });

    // The status div should display the winner message
    const status = wrapper.find('.status');
    expect(status.exists()).toBe(true);
    expect(status.text()).toBe('X Wins!');
  });

  it("renders draw message when it's a draw", () => {
    const wrapper = mount(GameStatus, {
      props: {
        winner: null,
        isDraw: true
      }
    });

    // The status div should display the draw message
    const status = wrapper.find('.status');
    expect(status.exists()).toBe(true);
    expect(status.text()).toBe("It's a Draw!");
  });
});
