import { render, screen } from '@testing-library/react';
import { Keyboard } from './keyboard';

describe('Given the component Keyboard', () => {
  describe('When callign it without props', () => {
    test('Then it should render the Keyboard', () => {
      render(<Keyboard />);

      expect(screen.getAllByRole('button')).toHaveLength(11);
    });
  });
});
