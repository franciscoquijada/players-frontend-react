import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import {SearchInput} from './SearchInput';

describe('SearchInput', () => {
    let component = null;
    let input = null;

    beforeEach(() => {
        const mockHandler = jest.fn();
        const labelText = 'Search player';
        component = render(<SearchInput setSearchPlayers={mockHandler} labelText={labelText} />);
        input = component.getByTestId('search');
    });

    test('It should be able to click in the input', () => {
        fireEvent.click(input);
    });

    test('It should write letters in the input', () => {
        const inputValue = 'abc';
        fireEvent.change(input, {
            target: { value: inputValue }
        });
        expect(input.value).toBe(inputValue);
    });

    test('It should write numbers in the input', () => {
        const inputValue = '12';
        fireEvent.change(input, {
            target: { value: inputValue }
        });
        expect(input.value).toBe(inputValue);
    });
});

