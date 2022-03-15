import { render, screen } from '@testing-library/react';
import Key from './Key';

describe('Given the Key component', () => {
    describe('When passed a text prop', () => {
        test('It should render', () => {
            render(<Key text={1} />);
            expect(screen.getByText(/1/)).toBeInTheDocument();
        });
    });
    describe('When passed a text prop and modifier', () => {
        test('It should render the text and have the modifier class', () => {
            render(<Key text={1} modifier="big" />);
            expect(screen.getByText(/1/)).toHaveClass('big');
        });
    });
});
