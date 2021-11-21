import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { PaginationButtons } from './PaginationButtons';

describe('PaginationButtons', () => {
  test('It should be render component and show numbers of pages', () => {
    const total = 20;
    const page = 1;
    const component = render(
      <PaginationButtons handlePageChange={jest.fn()} total={total} page={page} />
    );
    component.getByText('1');
    component.getByText('2');
    component.getByText('20');
  });
});
