import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import { Header } from './Header';

describe('Given the Header component', () => {
    describe('When rendered', () => {
        test('It should render', () => {
            render(<Header />);
            expect(screen.getByText(/Robots/)).toBeInTheDocument();
        });
    });
});
