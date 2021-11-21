import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Message } from './Message';

describe('Message', () => {
  test('render component and show text set by parameter', () => {
    const textMessage = 'No players were found';
    const component = render(<Message message={textMessage} />);
    component.getByText(textMessage);
  });
});
