import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import {SearchInput} from './SearchInput';

test('render component and show text set by parameter', () => {
    const mockHandler = jest.fn();
    const labelText = 'Search player';
    const component = render(<SearchInput setSearchPlayers={mockHandler} labelText={labelText} />);
    const input = component.getByTestId('search');
    fireEvent.click(input);
});
