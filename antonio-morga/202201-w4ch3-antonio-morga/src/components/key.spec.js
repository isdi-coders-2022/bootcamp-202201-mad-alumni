import { render, screen } from '@testing-library/react';
import { Key } from './key';

const testKeys = [1, 2, 'delete'];

describe('Given the component Key', () => {
  describe('When calling it for the array testKeys', () => {
    test('Then it should render the Keyboard', () => {
      render(
        testKeys.map((key) => (
          <Key
            keyClass={typeof key === 'number' ? 'key' : 'key big'}
            value={key}
          />
        ))
      );

      expect(screen.getByText('1')).toBeTruthy();
      expect(screen.getByText('2')).toBeTruthy();
      expect(screen.getByText('delete')).toBeTruthy();
    });
  });
});
