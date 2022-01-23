/* eslint-disable */
import {render, screen, fireEvent} from '@testing-library/react';
import SearchTable from './SearchTable';

test('renders the search box', () => {
render (<SearchTable/>);
screen.debug();
});

const setup = () => {
    const utils = render(<SearchTable />)
    const input = utils.getByLabelText('country-search')
    return {
      input,
      ...utils,
    }
  }


  test('It should get exact values typed into the text box', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: 'France'}})
    expect(input.value).toBe('France')
  });



