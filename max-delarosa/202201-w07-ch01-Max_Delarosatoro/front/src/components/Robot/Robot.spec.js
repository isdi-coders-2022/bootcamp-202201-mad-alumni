import { prettyDOM, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/robots/action-creators';
import { render } from '../../utils/test-utils';
import Robot from './Robot';

jest.mock('../../redux/robots/action-creators');
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
const dispatch = jest.fn();

describe('Given the Robot component', () => {
    describe('When rendered', () => {
        beforeEach(() => {
            useDispatch.mockReturnValue(dispatch);
        });
        test('It should render', async () => {
            const mockRobot = {
                name: 'test',
                image: 'testimage',
                characteristics: {
                    speed: 10,
                    resistance: 9,
                    created_at: 41324132,
                },
            };

            render(<Robot robot={mockRobot} />);
            expect(screen.getByText(/test/)).toBeInTheDocument();
            expect(screen.getByText(/10/)).toBeInTheDocument();
            expect(screen.getByText(/9/)).toBeInTheDocument();
            expect(screen.getByText(/41324132/)).toBeInTheDocument();

            // testing handle Delete click
            const deleteBtn = screen.getByTestId(/delete-btn/);
            userEvent.click(deleteBtn);
            expect(dispatch).toHaveBeenCalledTimes(1);

            // testing handle Save click

            const editBtn = screen.getByTestId(/edit-btn/);
            await userEvent.click(editBtn);

            const nameInput = screen.getByDisplayValue(/test/);
            userEvent.click(nameInput);
            await userEvent.keyboard(' test-edit');

            expect(
                screen.getByDisplayValue(/test test-edit/)
            ).toBeInTheDocument();

            const saveBtn = screen.getByTestId(/save-btn/);
            userEvent.click(saveBtn);
            expect(dispatch).toHaveBeenCalledTimes(2);
        });
    });
});
