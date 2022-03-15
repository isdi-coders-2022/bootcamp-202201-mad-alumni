import { screen } from '@testing-library/react';
import { render } from '../../utils/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { List } from './list';

describe('Given the compoent List', () => {
  describe('When rendering it with an initial state', () => {
    test('It should be displayed with two tasks', () => {
      const preloadedState = [
        {
          _id: '621a888a9aa010cd18c8',
          robotName: 'Jhonny Slow',
          speed: 3,
          strength: 6,
          creationDate: '2022-02-27',
          img: 'http://2.bp.blogspot.com/-ZSLoGzsbc1w/VTk4ekj2JYI/AAAAAAAAAYQ/kq9NHWaF8-Y/s1600/rrobot%2Bc.gif',
          __v: 0,
        },
        {
          _id: '621a888a9aa010cd18c81660',
          robotName: 'Jhonny Fast',
          speed: 8,
          strength: 6,
          creationDate: '2022-02-18',
          img: 'https://assets.website-files.com/5c69241780da2a1dfc6caa4e/5c6ea6221c5eeec997e86f04_armfark.gif',
          __v: 0,
        },
      ];
      render(
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<List />} />
          </Routes>
        </MemoryRouter>,

        { preloadedState }
      );
      expect(screen.getByText(/Jhonny Slow/i)).toBeTruthy();
      expect(screen.getByText(/Jhonny Fast/i)).toBeTruthy();
    });
  });
});
