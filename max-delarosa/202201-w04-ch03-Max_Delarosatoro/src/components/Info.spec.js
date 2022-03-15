import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('Given the Info component', () => {
    describe('When the state activeCall is true', () => {
        test('It should render the message', () => {
            const activeCall = true;
            render(<Info activeCall={activeCall} />);
            expect(screen.getByText(/Calling.../)).toBeInTheDocument();
        });
    });
    describe('When the state activeCall is false', () => {
        test('It should not render the message', () => {
            const activeCall = false;
            render(<Info activeCall={activeCall} />);
            expect(screen.queryByText(/Calling.../)).toHaveClass('off');
        });
    });
});
