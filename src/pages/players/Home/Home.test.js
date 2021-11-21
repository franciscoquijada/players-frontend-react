import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { HomeView } from './HomeView';

describe('Home page', () => {
  test('It should be render', () => {
    const titleText = 'List of Players';
    const totalPages = 300;
    const currentPage = 2;
    const component = render(
      <HomeView
        setSearchPlayers={jest.fn()}
        loading={false}
        handlePageChange={jest.fn()}
        totalPages={totalPages}
        currentPage={currentPage}
        players={[]}
        searchPlayers={''}
        showError={false}
      />
    );
    component.getByText(titleText);
    const input = component.getByTestId('search');
    fireEvent.click(input);
  });
});
