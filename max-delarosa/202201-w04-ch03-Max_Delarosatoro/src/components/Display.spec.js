import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Given the Display component', () => {
    describe('When given an array of strings', () => {
        test('It should render the string joined', () => {
            const test = ['a', 'b', 'c'];
            render(<Display numberDisplay={test} />);
            expect(screen.getByText(/abc/)).toBeInTheDocument();
        });
    });
});
