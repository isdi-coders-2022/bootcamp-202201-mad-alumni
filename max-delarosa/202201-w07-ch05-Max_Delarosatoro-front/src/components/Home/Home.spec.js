import { prettyDOM, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '../../utils/test-utils';
import { Home } from './Home';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
const dispatch = jest.fn();

const mockAuth = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM2YjdiNDRjYTZkZDZlZGRiNzAzZiIsInVzZXJuYW1lIjoiY2FjYSIsIm5hbWUiOiIyY2FjYTIiLCJsYXN0TmFtZSI6ImNhY2EiLCJwcm9maWxlUGljVXJsIjoiQzpcXGZha2VwYXRoXFxUeXBlU2NyaXB0IENoZWF0IFNoZWV0IChEQVJLKSAoMSkucG5nIiwiZnJpZW5kcyI6W10sImVuZW1pZXMiOlsiNjIyMjM0MzY2ZmMyZjEzYjA2NjhkMTY4Il0sImlhdCI6MTY0NjU2ODM5NH0.Nb8679S4cDLPe-2-vx6Gq0CfYZfOrcGKaaGBV0KZf2c',
    id: '62236b7b44ca6dd6eddb703f',
    username: 'test',
    name: 'testName',
    lastName: 'test',
    profilePicUrl: 'C:\\fakepath\\TypeScript Cheat Sheet (DARK) (1).png',
    friends: [],
    enemies: [],
};

const mockUsers = [
    {
        _id: '62236b7b44ca6dd6eddb703f',
        name: 'testName',
        lastName: 'testLastName',
        profilePicUrl: 'testUrl',
    },
];

describe('Given the Home component', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
    });
    describe('When called', () => {
        test('It renders', async () => {
            const { container } = await render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>,
                {
                    preloadedState: {
                        auth: mockAuth,
                        users: mockUsers,
                    },
                }
            );
            expect(screen.getByText(/Show All Users/)).toBeInTheDocument();

            const showAllBtn = screen.getByText(/Show All Users/);
            await userEvent.click(showAllBtn);
            expect(screen.getByText(/Showing 1 users/)).toBeInTheDocument();

            const showFriendsBtn = screen.getByText(/Show Friends/);
            await userEvent.click(showFriendsBtn);
            expect(screen.getByText(/Showing 0 users/)).toBeInTheDocument();

            const showEnemiesBtn = screen.getByText(/Show Enemies/);
            await userEvent.click(showEnemiesBtn);
            expect(screen.getByText(/Showing 0 users/)).toBeInTheDocument();
        });
    });
});
