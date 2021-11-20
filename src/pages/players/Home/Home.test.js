import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {Home} from './Home';

test('renders content', () => {
    const component = render(<Home />);
    component.getByText('List of Players');
});
