import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { render } from './utils/test-utils';

describe('Given the component App', () => {
  describe('When rendering it', () => {
    test('Then it should be displayed', () => {
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
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        { preloadedState }
      );
      expect(screen.getByText(/Awesome Robots!/i)).toBeTruthy();
    });
  });
});
