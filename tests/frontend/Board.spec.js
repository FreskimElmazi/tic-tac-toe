import { mount } from '@vue/test-utils';
import Board from '@/assets/js/components/Board.vue';
import Cell from '@/assets/js/components/Cell.vue';

describe('Board.vue', () => {
  const cells = ['X', 'O', null, 'X', 'O', null, null, null, null];

  it('renders the correct number of Cell components', () => {
    const wrapper = mount(Board, {
      props: {
        cells
      }
    });

    // Check if exactly 9 Cell components are rendered
    const cellComponents = wrapper.findAllComponents(Cell);
    expect(cellComponents.length).toBe(9);
  });

  it('passes correct props to Cell components', () => {
    const wrapper = mount(Board, {
      props: {
        cells
      }
    });

    // Verify that each Cell component receives the correct value and index
    const cellComponents = wrapper.findAllComponents(Cell);
    cellComponents.forEach((cellWrapper, index) => {
      expect(cellWrapper.props().value).toBe(cells[index]);
      expect(cellWrapper.props().index).toBe(index);
    });
  });
});
