import { prettyDOM, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../../utils/test-utils';
import * as authApi from '../../services/auth';

import { Register } from './Register';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
const dispatch = jest.fn();
jest.mock('../../services/auth');

const mockAuth = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM2YjdiNDRjYTZkZDZlZGRiNzAzZiIsInVzZXJuYW1lIjoiY2FjYSIsIm5hbWUiOiIyY2FjYTIiLCJsYXN0TmFtZSI6ImNhY2EiLCJwcm9maWxlUGljVXJsIjoiQzpcXGZha2VwYXRoXFxUeXBlU2NyaXB0IENoZWF0IFNoZWV0IChEQVJLKSAoMSkucG5nIiwiZnJpZW5kcyI6W10sImVuZW1pZXMiOlsiNjIyMjM0MzY2ZmMyZjEzYjA2NjhkMTY4Il0sImlhdCI6MTY0NjU2ODM5NH0.Nb8679S4cDLPe-2-vx6Gq0CfYZfOrcGKaaGBV0KZf2c',
    id: '62236b7b44ca6dd6eddb703f',
    username: 'test',
    name: 'test',
    lastName: 'test',
    profilePicUrl: 'C:\\fakepath\\TypeScript Cheat Sheet (DARK) (1).png',
    friends: [],
    enemies: [],
};

const mockUser = {
    _id: '62236b7b44ca6dd6eddb703f',
    name: 'testName1',
    lastName: 'testLastName1',
    profilePicUrl: 'testUrl1',
    friends: [],
    enemies: [],
};

describe('Given the UserDetail component', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
        authApi.register.mockResolvedValue({ data: mockUser });
    });
    describe('When called', () => {
        test('It renders', async () => {
            const { container } = await render(
                <BrowserRouter>
                    <Register />
                </BrowserRouter>,
                {
                    preloadedState: {
                        auth: mockAuth,
                        users: [],
                    },
                }
            );
            expect(screen.getByText(/Username/)).toBeInTheDocument();
            expect(screen.getByText(/Password/)).toBeInTheDocument();
            expect(screen.getByText(/Last Name/)).toBeInTheDocument();

            const usernameInput = screen.getByText(/Username/);
            userEvent.click(usernameInput);
            await userEvent.keyboard('Test');

            expect(screen.getByDisplayValue(/Test/)).toBeInTheDocument();

            // const fileInput = screen.getByTestId(/file/);
            // fileInput.files[0] = 'test.jpg';
            const submitBtn = screen.getByRole(/button/);
            await userEvent.click(submitBtn);
            expect(authApi.register).toHaveBeenCalled();
        });
    });
});
