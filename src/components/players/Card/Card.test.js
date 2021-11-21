import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('It should be render card with player data', () => {
    const playerFake = {
      id: 1,
      nickname: 'ooy eqrceli',
      status: 'rlñlw brhrka',
      balance: 498724,
      avatar: 'drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b'
    };
    const component = render(<Card player={playerFake} />);
    component.getByText(playerFake.id);
    component.getByText(playerFake.nickname);
    component.getByText(playerFake.status);
    component.getByText(playerFake.balance);
    const image = component.getByAltText(playerFake.nickname);
    expect(image).toHaveAttribute('src', `https://${playerFake.avatar}`);
  });
});
