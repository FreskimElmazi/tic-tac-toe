import { mount } from '@vue/test-utils';
import Cell from '@/assets/js/components/Cell.vue';

describe('Cell.vue', () => {
  it('renders correctly with no value', () => {
    const wrapper = mount(Cell, {
      props: {
        value: null,
        index: 0
      }
    });
    expect(wrapper.find('img').exists()).toBe(false);
  });

  it('renders correctly with "X" value', () => {
    const wrapper = mount(Cell, {
      props: {
        value: 'X',
        index: 0
      }
    });
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('emits move event when clicked and empty', async () => {
    const wrapper = mount(Cell, {
      props: {
        value: null,
        index: 0
      }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().move).toBeTruthy();
    expect(wrapper.emitted().move[0]).toEqual([0]);
  });

  it('does not emit move event when clicked and filled', async () => {
    const wrapper = mount(Cell, {
      props: {
        value: 'X',
        index: 0
      }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().move).toBeFalsy();
  });
});
