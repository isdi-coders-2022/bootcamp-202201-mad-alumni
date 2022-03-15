import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { render } from './utils/test-utils';
import App from './App';

test('renders learn react link', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText(/Add Robot/)).toBeInTheDocument();
    expect(screen.getByText(/Robots site/)).toBeInTheDocument();
    expect(screen.getByText(/ISDI/)).toBeInTheDocument();
});
