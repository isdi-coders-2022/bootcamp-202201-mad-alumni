import { render, screen } from '@testing-library/react';
import { gentlemen } from '../models/gentleman.mock';
import { Gentlemen } from './Gentlemen';

describe('Given the Gentlemen component', () => {
    describe('When given an array of gentlemen', () => {
        test('Renders each gentleman', () => {
            const mockHandleDelete = jest.fn();
            const mockHandleSelect = jest.fn();
            render(
                <Gentlemen
                    handleDelete={mockHandleDelete}
                    handleSelect={mockHandleSelect}
                    gentlemen={gentlemen}
                />
            );
            expect(
                screen.findByAltText('Osbourne pointing at you')
            ).toBeDefined();
            expect(
                screen.findByAltText('The Fary pointing at you')
            ).toBeDefined();
        });
    });
});
