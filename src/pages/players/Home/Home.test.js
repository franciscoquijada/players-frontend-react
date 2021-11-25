import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { HomeView } from './HomeView';

describe('Home page', () => {
  const titleText = 'List of Players';
  const totalPages = 150;
  const currentPage = 1;
  const playerFake = {
    id: 4,
    nickname: 'ooy eqrceli',
    status: 'rlñlw brhrka',
    balance: 498724,
    avatar: 'drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b'
  };

  let component;

  describe('Home page render', () => {
    beforeEach(() => {
      component = render(
        <HomeView
          setSearchPlayers={jest.fn()}
          loading={false}
          handlePageChange={jest.fn()}
          totalPages={totalPages}
          currentPage={currentPage}
          players={[playerFake]}
          searchPlayers={''}
          showError={false}
        />
      );
    });

    test('It should be render title', () => {
      component.getByText(titleText);
    });

    test('It should be render pagination', () => {
      component.getByText('1');
      component.getByText('2');
      component.getByText('3');
      component.getByText('150');
    });

    test('It should be render card player', () => {
      component.getByText(playerFake.nickname);
      component.getByText(playerFake.status);
      component.getByText(playerFake.balance);
      const image = component.getByAltText(playerFake.nickname);
      expect(image).toHaveAttribute('src', `https://${playerFake.avatar}`);
    });

    test('It should be render input search', () => {
      component.getByTestId('search');
    });
  });

  describe('Home page without players', () => {
    beforeEach(() => {
      component = render(
        <HomeView
          setSearchPlayers={jest.fn()}
          loading={false}
          handlePageChange={jest.fn()}
          totalPages={totalPages}
          currentPage={currentPage}
          players={[]}
          searchPlayers={''}
          showError={false}
        />
      );
    });

    test('It should be render title', () => {
      component.getByText(titleText);
    });

    test('It should be render input search', () => {
      component.getByTestId('search');
    });

    test('It should be render text no players', () => {
      component.getByText('No players were found');
    });
  });

  describe('Home page render with loading', () => {
    beforeEach(() => {
      component = render(
        <HomeView
          setSearchPlayers={jest.fn()}
          loading={true}
          handlePageChange={jest.fn()}
          totalPages={totalPages}
          currentPage={currentPage}
          players={[playerFake]}
          searchPlayers={''}
          showError={false}
        />
      );
    });

    test('It should be render title', () => {
      component.getByText(titleText);
    });

    test('It should be render input search', () => {
      component.getByTestId('search');
    });

    test('It should be render text loading', () => {
      component.getByText('Searching Players');
    });
  });

  describe('Home page error', () => {
    beforeEach(() => {
      component = render(
        <HomeView
          setSearchPlayers={jest.fn()}
          loading={false}
          handlePageChange={jest.fn()}
          totalPages={totalPages}
          currentPage={currentPage}
          players={[]}
          searchPlayers={''}
          showError={true}
        />
      );
    });

    test('It should be render title', () => {
      component.getByText(titleText);
    });

    test('It should be render input search', () => {
      component.getByTestId('search');
    });

    test('It should be render text error', () => {
      component.getByText('A system error has occurred');
    });
  });
});
