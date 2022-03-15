import { screen } from '@testing-library/react';
import App from './App';
import { render } from './utils/test-utils';

describe('Given the component App', () => {
  describe('When rendering it', () => {
    test('Then it should be displayed', () => {
      const preloadedState = [
        { id: 123, title: 'create to-do list', isComplete: false },
        { id: 456, title: 'test to-do list', isComplete: false },
      ];
      render(<App />, { preloadedState });
      expect(screen.getByText(/todo list/i)).toBeTruthy();
    });
  });
});
