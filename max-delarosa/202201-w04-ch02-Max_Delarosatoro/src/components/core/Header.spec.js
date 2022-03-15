import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given the Header component', () => {
    describe('When given a title', () => {
        test('Renders itself and the title', () => {
            render(<Header />);
            expect(screen.findByRole('title')).toBeDefined();
        });
    });
});
