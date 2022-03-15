import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { List } from './list';

describe('Given the compoent List', () => {
  describe('When rendering it with an initial state', () => {
    test('It should be displayed with two tasks', () => {
      const preloadedState = [
        { id: 123, title: 'create to-do list', isComplete: false },
        { id: 456, title: 'test to-do list', isComplete: false },
      ];
      render(<List />, { preloadedState });
      expect(screen.getByText(/create to-do/i)).toBeTruthy();
      expect(screen.getByText(/test to-do/i)).toBeTruthy();
    });
  });
});
