import { render } from 'react-dom/cjs/react-dom.development';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('In the main component,', () => {
  render(<App />);
  describe('When the user presses a number key,', () => {
    userEvent();
  });
});
