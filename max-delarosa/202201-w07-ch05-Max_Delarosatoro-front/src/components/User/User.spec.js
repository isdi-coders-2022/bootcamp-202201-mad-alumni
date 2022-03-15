import { prettyDOM, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../../utils/test-utils';
import { User } from './User';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
const dispatch = jest.fn();

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
};

const friends = [
    {
        _id: '62236b7b44ca6dd6eddb703e',
        name: 'testName2',
        lastName: 'testLastName2',
        profilePicUrl: 'testUrl2',
    },
];

const enemies = [
    {
        _id: '62236b7b44ca6dd6eddb703a',
        name: 'testName3',
        lastName: 'testLastName3',
        profilePicUrl: 'testUrl3',
    },
];

describe('Given the UserDetail component', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
    });
    describe('When called', () => {
        test('It renders', async () => {
            const { container } = await render(
                <BrowserRouter>
                    <User user={mockUser} friends={friends} enemies={enemies} />
                </BrowserRouter>,
                {
                    preloadedState: {
                        auth: mockAuth,
                        users: [],
                    },
                }
            );
            expect(screen.getByText(/testName1/)).toBeInTheDocument();
            expect(screen.getByText(/testLastName1/)).toBeInTheDocument();

            const addFriendBtn = screen.getByText(/Add Friend/);
            await userEvent.click(addFriendBtn);
            expect(dispatch).toHaveBeenCalledTimes(1);

            const addEnemyBtn = screen.getByText(/Add Enemy/);
            await userEvent.click(addEnemyBtn);
            expect(dispatch).toHaveBeenCalledTimes(2);
        });
    });
    describe('When the user Id is inside the friends array', () => {
        const friendsRender = [
            {
                _id: '62236b7b44ca6dd6eddb703f',
                name: 'testName2',
                lastName: 'testLastName2',
                profilePicUrl: 'testUrl2',
            },
        ];
        const enemiesRender = [
            {
                _id: '62236b7b44ca6dd6eddb703f',
                name: 'testName2',
                lastName: 'testLastName2',
                profilePicUrl: 'testUrl2',
            },
        ];
        test('The button should say remove friend', async () => {
            const { container } = await render(
                <BrowserRouter>
                    <User
                        user={mockUser}
                        friends={friendsRender}
                        enemies={enemiesRender}
                    />
                </BrowserRouter>,
                {
                    preloadedState: {
                        auth: mockAuth,
                        users: [],
                    },
                }
            );
            expect(screen.getByText(/Remove Friend/)).toBeInTheDocument();
            expect(screen.getByText(/Remove Enemy/)).toBeInTheDocument();
        });
    });
});
