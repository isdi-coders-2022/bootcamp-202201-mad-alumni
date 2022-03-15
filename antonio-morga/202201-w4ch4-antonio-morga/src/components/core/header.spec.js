import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('When calling it within app.js it', () => {
    test('Then it should render', () => {
      render(<Header />);

      expect(screen.getByText(/isdi/i)).toBeTruthy();
    });
  });
});
