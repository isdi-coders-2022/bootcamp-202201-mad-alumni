import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import { Footer } from './Footer';

describe('Given the Footer component', () => {
    describe('When rendered', () => {
        test('It should render', () => {
            render(<Footer />);
            expect(screen.getByText(/Robots site/)).toBeInTheDocument();
            expect(screen.getByText(/ISDI/)).toBeInTheDocument();
        });
    });
});
