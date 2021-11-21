import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {HomeView} from './HomeView';

test('renders content', () => {
     const titleText = 'List of Players';
     const component = render(<HomeView
         setSearchPlayers={jest.fn()}
         loading={jest.fn()}
         handlePageChange={jest.fn()}
         totalPages={jest.fn()}
         currentPage={jest.fn()}
         players={jest.fn()}
     />);
     component.getByText(titleText);
});
