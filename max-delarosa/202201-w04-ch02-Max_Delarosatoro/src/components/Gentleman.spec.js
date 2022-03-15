import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { gentlemen } from '../models/gentleman.mock';
import Gentleman from './Gentleman';

describe('Given the Gentleman component', () => {
    describe('When given a gentleman object', () => {
        const mockHandleDelete = jest.fn();
        const mockHandleSelect = jest.fn();
        test('Renders its data', () => {
            render(
                <Gentleman
                    handleDelete={mockHandleDelete}
                    handleSelect={mockHandleSelect}
                    gentleman={gentlemen[0]}
                />
            );
            expect(
                screen.findByAltText('Osbourne pointing at you')
            ).toBeDefined();
        });
        test('It calls the handleClick function when buttons are clicked', () => {
            const { container } = render(
                <Gentleman
                    handleDelete={mockHandleDelete}
                    handleSelect={mockHandleSelect}
                    gentleman={gentlemen[0]}
                />
            );
            const checkButton = container.querySelector('.fa-check');
            userEvent.click(checkButton);
            expect(mockHandleSelect).toBeCalled();

            const deleteButton = container.querySelector('.fa-times');
            userEvent.click(deleteButton);
            expect(mockHandleDelete).toBeCalled();
        });
    });
});
