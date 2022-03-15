import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { gentlemen } from '../models/gentleman.mock';
import Controls from './Controls';

describe('Given the Controls component', () => {
    describe('When called to render', () => {
        test('It should render', () => {
            render(<Controls gentlemen={gentlemen} />);
            expect(screen.findAllByText(/pointing at you/)).toBeDefined();
        });
    });
    describe('When clicking the select all button', () => {
        test('It should call the selectAll function', () => {
            const selectAllMock = jest.fn();
            const { container } = render(
                <Controls gentlemen={gentlemen} selectAll={selectAllMock} />
            );
            const buttonElement = container.querySelector('.button');
            userEvent.click(buttonElement);
            expect(selectAllMock).toBeCalled();
        });
    });
    describe('Given an array of gentlemen where 1 is selected', () => {
        test('It should render 1 selected', () => {
            render(<Controls gentlemen={gentlemen} />);
            expect(screen.findAllByText(/1 gentlemen/)).toBeTruthy();
        });
    });
});
