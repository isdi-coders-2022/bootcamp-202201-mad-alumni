import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { ListItem } from './listItem';

describe('Given the compoent ListItem', () => {
  describe('When rendering it with an initial state', () => {
    test('It should be displayed', () => {
      const preloadedState = [];
      render(
        <ListItem
          item={{ id: 456, title: 'test to-do list', isComplete: false }}
        />,
        { preloadedState }
      );
      expect(screen.getByText(/test to-do/i)).toBeTruthy();
    });
  });
});
