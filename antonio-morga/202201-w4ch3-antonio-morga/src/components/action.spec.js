import { render, screen } from '@testing-library/react';
import { Action } from './action';

describe('Given the component Action', () => {
  describe('When callign it with the following props', () => {
    test('Then it should render the the two buttons', () => {
      render(<Action actionClass="call">Call</Action>);
      render(<Action actionClass="hang active">Hang</Action>);

      expect(screen.getByText(/call/i)).toBeTruthy();
      expect(screen.getByText(/hang/i)).toBeTruthy();
    });
  });
});
