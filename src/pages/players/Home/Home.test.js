import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {HomeView} from './HomeView';

test('renders content', () => {
    const component = render(<HomeView />);
    component.getByText('List of Players');
});
