import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders header', () => {
    render(<App />);
    const linkElement = screen.getByText(/The pointing gentlemen/i);
    expect(linkElement).toBeInTheDocument();
});
