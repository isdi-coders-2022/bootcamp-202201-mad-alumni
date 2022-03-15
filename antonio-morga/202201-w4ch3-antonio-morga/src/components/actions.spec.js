import { render, screen } from '@testing-library/react';
import { Actions } from './actions';

const phoneNumber = { number: 123 };

describe('Given the component Actions', () => {
  describe('When callign it without props', () => {
    test('Then it should render the display and two buttons', () => {
      render(<Actions phoneNumber={phoneNumber} />);

      expect(screen.getByText(/123/)).toBeTruthy();
      expect(screen.getByText(/call/i)).toBeTruthy();
      expect(screen.getByText(/hang/i)).toBeTruthy();
    });
  });
});
