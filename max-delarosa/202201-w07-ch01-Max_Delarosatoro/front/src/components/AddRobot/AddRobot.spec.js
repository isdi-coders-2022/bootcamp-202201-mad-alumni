import { prettyDOM, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useDispatch, useNavigate } from 'react-redux';
import { render } from '../../utils/test-utils';
import AddRobot from './AddRobot';
import * as services from '../../services/apiRequest';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
const dispatch = jest.fn();

describe('Given the AddRobot component', () => {
    describe('When called', () => {
        beforeEach(() => {
            useDispatch.mockReturnValue(dispatch);
        });
        test('It renders', async () => {
            const { container } = render(
                <BrowserRouter>
                    <AddRobot />
                </BrowserRouter>
            );

            const nameInput = screen.getByPlaceholderText(/name/);
            userEvent.click(nameInput);
            await userEvent.keyboard('testName');
            expect(screen.getByDisplayValue(/testName/)).toBeInTheDocument();

            const imageInput = screen.getByPlaceholderText(/image/);
            userEvent.click(imageInput);
            await userEvent.keyboard('testImage');
            expect(screen.getByDisplayValue(/testImage/)).toBeInTheDocument();

            const submitBtn = screen.getAllByText(/Create/)[1];
            userEvent.click(submitBtn);
            expect(dispatch).toHaveBeenCalled();
        });
    });
});
