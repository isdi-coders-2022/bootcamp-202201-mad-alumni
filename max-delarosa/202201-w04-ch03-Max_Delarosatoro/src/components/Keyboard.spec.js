import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';
import { keys } from '../models/keys';

describe('Given the Keyboard component', () => {
    describe('When given an array of numbers', () => {
        test('It should render all the components', () => {
            render(<Keyboard keys={keys} />);
            expect(screen.getAllByRole('button')).toHaveLength(11);
        });
    });
});
