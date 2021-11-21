import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import {HomeView} from './HomeView';

describe('Home page', () => {
    test('It should be render', () => {
        const titleText = 'List of Players';
        const component = render(<HomeView
            setSearchPlayers={jest.fn()}
            loading={jest.fn()}
            handlePageChange={jest.fn()}
            totalPages={jest.fn()}
            currentPage={jest.fn()}
            players={jest.fn()}
            searchPlayers={''}
        />);
        component.getByText(titleText);
        const input = component.getByTestId('search');
        fireEvent.click(input);

    });
});
