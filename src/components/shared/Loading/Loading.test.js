import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {Loading} from './Loading';

describe('Loading', () => {
    test('It should be render component and show text set by parameter', () => {
        const textLoading = 'Searching Players';
        const component = render(<Loading message={textLoading}/>);
        component.getByText(textLoading);
    });
});
