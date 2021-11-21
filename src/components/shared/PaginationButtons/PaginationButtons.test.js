import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {PaginationButtons} from './PaginationButtons';

test('render component and show text set by parameter', () => {
    const total = 20;
    const component = render(<PaginationButtons handlePageChange={jest.fn()} total={total} />);
    component.getByText('1');
    component.getByText('2');
    component.getByText('20');
});
