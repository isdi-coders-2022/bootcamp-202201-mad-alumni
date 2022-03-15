import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { Form } from './form';

describe('Given the compoent Form', () => {
  describe('When rendering it with an initial state', () => {
    test('It should be displayed with two tasks', () => {
      const preloadedState = [
        { id: 123, title: 'create to-do list', isComplete: false },
        { id: 456, title: 'test to-do list', isComplete: false },
      ];
      render(<Form />, { preloadedState });
      expect(screen.getByPlaceholderText(/new task/i)).toBeTruthy();
    });
  });
});
