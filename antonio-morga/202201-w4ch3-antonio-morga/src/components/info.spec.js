import { render, screen } from '@testing-library/react';
import { Info } from './info';

const phoneNumber = { isCallActive: false };

describe('Given the component Info', () => {
  describe('When callign it without props', () => {
    test('Then it should render the status of the call', () => {
      render(<Info active={phoneNumber.isCallActive} />);

      expect(screen.queryByText(/calling.../i).classList).toHaveLength(2);
    });
  });
});
