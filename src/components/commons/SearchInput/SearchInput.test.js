import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  let component = null;
  let input = null;

  beforeEach(() => {
    const mockHandler = jest.fn();
    const labelText = 'Search player';
    const searchPlayers = '';
    component = render(
      <SearchInput
        setSearchPlayers={mockHandler}
        labelText={labelText}
        searchPlayers={searchPlayers}
      />
    );
    input = component.getByTestId('search');
  });

  test('It should be able to click in the input', () => {
    fireEvent.click(input);
  });
});
